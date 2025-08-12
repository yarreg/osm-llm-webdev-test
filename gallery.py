#!/usr/bin/env python3


import argparse
import json
import sys
from pathlib import Path
from typing import Any, Dict, List, Optional

import yaml
from jinja2 import Environment, BaseLoader, select_autoescape


TEMPLATE_HTML = r"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>LLM Web Gallery</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">

  <style>
    :root {
      --gap: 1rem;
    }

    .gal-header {
      padding: 2rem 0 1rem;
    }

    .gal-brief {
      color: #4a4a4a;
    }

    .gal-card {
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    .gal-card .card-content {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      flex: 1;
    }

    .gal-status.success .tag { background: #48c774; color: #fff; }
    .gal-status.failed  .tag { background: #f14668; color: #fff; }

    .gal-error {
      border: 2px dashed #f14668;
      border-radius: 8px;
      padding: 1rem;
      color: #b71c2f;
      background: #fff5f7;
      display: flex;
      gap: 0.75rem;
      align-items: center;
      justify-content: center;
      min-height: 160px;
      text-align: center;
    }

    .gal-error svg { width: 24px; height: 24px; }

    .gal-screenshot-wrap {
      display: grid;
      place-items: center;
      background: #fafafa;
      border: 1px solid #eee;
      border-radius: 8px;
      padding: 0.75rem;
      min-height: 200px;
    }

    .gal-screenshot {
      max-width: 100%;
      height: auto;
      display: none;
      border-radius: 6px;
      border: 1px solid #eaeaea;
    }

    .gal-screenshot.show {
      display: block;
    }

    .gal-toggle .button.is-selected {
      box-shadow: inset 0 0 0 2px rgba(0,0,0,0.2);
    }

    .gal-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .gal-report {
      display: none;
      background: #f9f9f9;
      border: 1px solid #eee;
      border-radius: 8px;
      padding: 0.75rem;
      margin-top: 0.5rem;
      max-height: 320px;
      overflow: auto;
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
      font-size: 0.85rem;
      white-space: pre-wrap;
      word-break: break-word;
    }

    .gal-report.show {
      display: block;
    }

    .gal-vote-badge {
      margin-left: 0.5rem;
    }

    .gal-empty {
      border: 1px dashed #dbdbdb;
      padding: 1.5rem;
      text-align: center;
      color: #7a7a7a;
      border-radius: 8px;
    }

    .gal-summary th, .gal-summary td {
      vertical-align: middle !important;
    }

    @media (prefers-reduced-motion: reduce) {
      * { transition: none !important; }
    }
  </style>
</head>
<body>
  <section class="section">
    <div class="container">
      <header class="gal-header">
        <h1 class="title is-3">LLM Web Gallery</h1>
        <p class="subtitle is-6">View the results of generation on tasks and models. Vote and compare.</p>
      </header>

      <div id="app"></div>

      <hr />

      <section id="summary-section">
        <!-- replace the heading with a heading + reset button -->
        <div class="level is-mobile">
          <div class="level-left">
            <h2 class="title is-4">Vote result</h2>
          </div>
          <div class="level-right">
            <button id="reset-votes" class="button is-small is-danger is-light" type="button">Reset votes</button>
          </div>
        </div>
        <div class="table-container">
          <table class="table is-striped is-fullwidth gal-summary">
            <thead>
              <tr>
                <!-- changed: aggregate by model, no per-task rows -->
                <th>Model</th>
                <th class="has-text-right">Votes</th>
              </tr>
            </thead>
            <tbody id="summary-body">
              <!-- JS -->
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </section>

  <script type="application/json" id="embedded-data">{{ data_json | safe }}</script>

  <script>
  (function(){
    "use strict";

    function $(sel, root=document){ return root.querySelector(sel); }
    function $all(sel, root=document){ return Array.from(root.querySelectorAll(sel)); }
    function el(tag, cls, attrs) {
      const e = document.createElement(tag);
      if (cls) e.className = cls;
      if (attrs) for (const [k, v] of Object.entries(attrs)) {
        if (k === 'text') e.textContent = v;
        else if (k === 'html') e.innerHTML = v;
        else e.setAttribute(k, v);
      }
      return e;
    }

    function keyForVote(taskName, modelName) {
      return taskName + "::" + modelName;
    }

    function getVotes(taskName, modelName) {
      const k = keyForVote(taskName, modelName);
      const v = localStorage.getItem(k);
      return v ? parseInt(v, 10) : 0;
    }

    function addVote(taskName, modelName) {
      const k = keyForVote(taskName, modelName);
      const cur = getVotes(taskName, modelName);
      const next = cur + 1;
      localStorage.setItem(k, String(next));
      return next;
    }

    // NEW: remove a single vote entry and reset helpers
    function removeVote(taskName, modelName) {
      localStorage.removeItem(keyForVote(taskName, modelName));
    }

    function resetAllVotes(data) {
      (data.tasks || []).forEach(task => {
        (task.models || []).forEach(m => {
          removeVote(task.name, m.model_name);
        });
      });
    }

    function updateAllVoteBadges() {
      $all('.gal-vote-badge').forEach(badge => {
        const task = badge.getAttribute('data-task');
        const model = badge.getAttribute('data-model');
        if (task && model) {
          badge.textContent = String(getVotes(task, model));
        }
      });
    }

    function pretty(obj) {
      try { return JSON.stringify(obj, null, 2); }
      catch { return String(obj); }
    }

    function availableScreenshotKey(paths) {
      if (!paths) return null;
      if (paths.desktop) return 'desktop';
      if (paths.mobile)  return 'mobile';
      if (paths.laptop)  return 'laptop';
      return null;
    }

    function renderErrorBlock() {
      const wrap = el('div', 'gal-error');
      wrap.innerHTML = `
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path fill="currentColor" d="M11.001 10h2v5h-2zm0 7h2v2h-2z"/><path fill="currentColor" d="M1 21h22L12 2 1 21z"/>
        </svg>
        <span><strong>Generation failed</strong>. No screenshots or preview available.</span>
      `;
      return wrap;
    }

    function buildModelCard(task, model) {
      const card = el('div', 'card gal-card');

      const header = el('header', 'card-header');
      const title = el('p', 'card-header-title', { text: model.model_name });
      const statusTag = el('span', 'tag is-light');
      statusTag.textContent = model.status.toUpperCase();
      const statusWrap = el('div', 'card-header-icon gal-status ' + (model.status === 'success' ? 'success' : 'failed'));
      statusWrap.appendChild(statusTag);

      header.appendChild(title);
      header.appendChild(statusWrap);
      card.appendChild(header);

      const content = el('div', 'card-content');

      if (model.status === 'success') {
        const hasShots = model.paths && model.paths.screenshots && Object.keys(model.paths.screenshots).length > 0;

        if (hasShots) {
          const toggle = el('div', 'buttons has-addons is-centered gal-toggle');
          const btnMobile = el('button', 'button is-small', { type: 'button', text: 'Mobile' });
          const btnLaptop = el('button', 'button is-small', { type: 'button', text: 'Laptop' });
          const btnDesktop = el('button', 'button is-small', { type: 'button', text: 'Desktop' });

          const shotWrap = el('div', 'gal-screenshot-wrap');
          const img = el('img', 'gal-screenshot', { alt: `Screenshot for ${model.model_name}` });

          shotWrap.appendChild(img);
          content.appendChild(shotWrap);
          content.appendChild(toggle);

          const toggleMap = {
            mobile: { btn: btnMobile, path: model.paths.screenshots.mobile || null },
            laptop: { btn: btnLaptop, path: model.paths.screenshots.laptop || null },
            desktop:{ btn: btnDesktop, path: model.paths.screenshots.desktop || null }
          };

          for (const [k, o] of Object.entries(toggleMap)) {
            if (!o.path) {
              o.btn.disabled = true;
            }
            toggle.appendChild(o.btn);
          }

          function activate(which) {
            for (const [k, o] of Object.entries(toggleMap)) {
              if (k === which && o.path) {
                o.btn.classList.add('is-selected', 'is-info', 'is-light');
                o.btn.setAttribute('aria-pressed', 'true');
                img.src = o.path;
                img.classList.add('show');
                img.alt = `${k} screenshot for ${model.model_name}`;
              } else {
                o.btn.classList.remove('is-selected', 'is-info', 'is-light');
                o.btn.setAttribute('aria-pressed', 'false');
              }
            }
          }

          const firstKey = availableScreenshotKey(model.paths.screenshots) || 'desktop';
          activate(firstKey);

          btnMobile.addEventListener('click', () => { if (!btnMobile.disabled) activate('mobile'); });
          btnLaptop.addEventListener('click', () => { if (!btnLaptop.disabled) activate('laptop'); });
          btnDesktop.addEventListener('click', () => { if (!btnDesktop.disabled) activate('desktop'); });
        } else {
          const empty = el('div', 'gal-empty', { text: 'No screenshots available.' });
          content.appendChild(empty);
        }

        const actions = el('div', 'gal-actions');
        if (model.paths && model.paths.index_html) {
          const openBtn = el('a', 'button is-primary is-light', {
            href: model.paths.index_html, target: '_blank', rel: 'noopener',
            text: 'Open site'
          });
          actions.appendChild(openBtn);
        }

        const reportBtn = el('button', 'button is-info is-light', { type:'button', text:'Show report' });
        actions.appendChild(reportBtn);

        const voteBtn = el('button', 'button is-warning is-light', { type:'button', text:'Vote' });
        const voteBadge = el('span', 'tag is-warning is-light gal-vote-badge', {
          text: String(getVotes(task.name, model.model_name)),
          'data-task': task.name,
          'data-model': model.model_name
        });
        actions.appendChild(voteBtn);
        actions.appendChild(voteBadge);

        content.appendChild(actions);

        const reportPanel = el('pre', 'gal-report');
        if (model.report) {
          reportPanel.textContent = pretty(model.report);
        } else {
          reportPanel.textContent = 'Report not found.';
        }
        content.appendChild(reportPanel);

        reportBtn.addEventListener('click', () => {
          const isShown = reportPanel.classList.toggle('show');
          reportBtn.textContent = isShown ? 'Hide report' : 'Show report';
        });

        voteBtn.addEventListener('click', () => {
          const v = addVote(task.name, model.model_name);
          voteBadge.textContent = String(v);
          rebuildSummary(window.__DATA__);
        });

      } else {
        // FAILED
        content.appendChild(renderErrorBlock());
        const actions = el('div', 'gal-actions');
        const voteBtn = el('button', 'button is-warning is-light', { type:'button', text:'Vote' });
        const voteBadge = el('span', 'tag is-warning is-light gal-vote-badge', {
          text: String(getVotes(task.name, model.model_name)),
          'data-task': task.name,
          'data-model': model.model_name
        });
        actions.appendChild(voteBtn);
        actions.appendChild(voteBadge);
        content.appendChild(actions);

        voteBtn.addEventListener('click', () => {
          const v = addVote(task.name, model.model_name);
          voteBadge.textContent = String(v);
          rebuildSummary(window.__DATA__);
        });
      }

      card.appendChild(content);
      return card;
    }

    function buildTaskSection(task) {
      const section = el('section', 'section pt-4 pb-2');
      const h = el('h2', 'title is-4', { text: task.name });
      const brief = el('p', 'gal-brief', { text: task.brief || '' });
      section.appendChild(h);
      section.appendChild(brief);

      const grid = el('div', 'columns is-multiline');
      if (!task.models || task.models.length === 0) {
        const empty = el('div', 'gal-empty', { text: 'No models for this task.' });
        grid.appendChild(el('div', 'column is-12')).appendChild(empty);
      } else {
        task.models.forEach(model => {
          const col = el('div', 'column is-12-tablet is-6-desktop is-4-widescreen');
          col.appendChild(buildModelCard(task, model));
          grid.appendChild(col);
        });
      }
      section.appendChild(grid);
      return section;
    }

    function rebuildSummary(data) {
      const tbody = $('#summary-body');
      tbody.innerHTML = '';

      // Aggregate votes across all tasks per model
      const totals = new Map();
      (data.tasks || []).forEach(task => {
        (task.models || []).forEach(m => {
          const modelName = m.model_name;
          const votes = getVotes(task.name, modelName);
          totals.set(modelName, (totals.get(modelName) || 0) + votes);
        });
      });

      const rows = Array.from(totals.entries())
        .map(([model, votes]) => ({ model, votes }))
        .sort((a, b) => b.votes - a.votes);

      rows.forEach(r => {
        const tr = el('tr');
        tr.appendChild(el('td', null, { text: r.model }));
        tr.appendChild(el('td', 'has-text-right', { text: String(r.votes) }));
        tbody.appendChild(tr);
      });
    }

    function renderApp(data) {
      const app = $('#app');
      app.innerHTML = '';

      if (!data.tasks || data.tasks.length === 0) {
        const empty = el('div', 'gal-empty', { text: 'No data available.' });
        app.appendChild(empty);
        rebuildSummary(data);
        return;
      }

      data.tasks.forEach(task => {
        app.appendChild(buildTaskSection(task));
      });

      rebuildSummary(data);
    }

    try {
      const raw = $('#embedded-data').textContent || '{}';
      const DATA = JSON.parse(raw);
      window.__DATA__ = DATA;
      renderApp(DATA);

      // Wire up reset button
      const resetBtn = $('#reset-votes');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          if (!confirm('Reset all votes?')) return;
          resetAllVotes(window.__DATA__ || { tasks: [] });
          updateAllVoteBadges();
          rebuildSummary(window.__DATA__ || { tasks: [] });
        });
      }
    } catch (e) {
      console.error('Failed to parse embedded data:', e);
      $('#app').innerHTML = '<div class="gal-empty">Failed to load data.</div>';
    }
  })();
  </script>
</body>
</html>
"""


def build_data(config_path: Path, result_dir: Path) -> Dict[str, Any]:
    if not config_path.exists():
        raise FileNotFoundError(f"config.yaml not found at: {config_path}")

    with config_path.open("r", encoding="utf-8") as f:
        cfg = yaml.safe_load(f) or {}

    tasks = cfg.get("tasks", []) or []
    models = cfg.get("models", []) or []

    data_tasks: List[Dict[str, Any]] = []

    for task in tasks:
        tname = str(task.get("name", "")).strip();
        brief = task.get("brief", "") or "";
        if not tname:
            continue

        models_data: List[Dict[str, Any]] = []

        for model in models:
            model_name_path = model["name"].split("/")[-1]
            model_path = result_dir / tname / Path(model_name_path)
            index_path = model_path / "index.html"
            screenshots_dir = model_path / "screenshots"
            report_path = model_path / "report.json"

            status = "success" if index_path.exists() else "failed"

            # Screenshots
            screenshots_map: Dict[str, str] = {}
            shot_map = {
                "mobile": screenshots_dir / "390_844.png",
                "laptop": screenshots_dir / "1280_800.png",
                "desktop": screenshots_dir / "1440_900.png",
            }
            for key, p in shot_map.items():
                if p.exists():
                    screenshots_map[key] = str(p.as_posix())

            # Report
            report_obj: Optional[Dict[str, Any]] = None;
            if report_path.exists():
                try:
                    with report_path.open("r", encoding="utf-8") as rf:
                        report_obj = json.load(rf)
                except Exception as e:
                    report_obj = {"error": f"Failed to parse report.json: {e}"}

            model_entry: Dict[str, Any] = {
                "model_name": str(model["name"].split("/")[-1]),
                "status": status,
                "paths": {},
                "report": report_obj if status == "success" else None,
            }

            if status == "success":
                model_entry["paths"] = {
                    "index_html": str(index_path.as_posix()),
                    "screenshots": screenshots_map,
                }

            models_data.append(model_entry)

        data_tasks.append({
            "name": tname,
            "brief": brief,
            "models": models_data,
        })

    return {"tasks": data_tasks}



def render_html(data: Dict[str, Any], output_path: Path) -> None:
    env = Environment(
        loader=BaseLoader(),
        autoescape=select_autoescape(enabled_extensions=("html", "xml"))
    )
    tmpl = env.from_string(TEMPLATE_HTML)

    data_json = json.dumps(data, ensure_ascii=False)
    html = tmpl.render(data_json=data_json)

    output_path.write_text(html, encoding="utf-8")


# ----------------------------
# CLI
# ----------------------------
def parse_args(argv: List[str]) -> argparse.Namespace:
    p = argparse.ArgumentParser(description="Generate single-file LLM gallery (gallery.html).")
    p.add_argument("--config", type=Path, default=Path("config.yaml"), help="Path to config.yaml")
    p.add_argument("--results", type=Path, default=Path("result"), help="Path to results root directory")
    p.add_argument("--output", type=Path, default=Path("gallery.html"), help="Output HTML file")
    return p.parse_args(argv)


def main(argv: List[str]) -> int:
    args = parse_args(argv)
    try:
        data = build_data(args.config, args.results)
        render_html(data, args.output)
        print(f"Gallery generated: {args.output}")
        return 0
    except Exception as e:
        raise
        print(f"Error: {e}", file=sys.stderr)
        return 1


if __name__ == "__main__":
    raise SystemExit(main(sys.argv[1:]))
