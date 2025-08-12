"use strict";

const { createElement, useState, useEffect } = React;
const { createRoot } = ReactDOM;

function App() {
  return createElement(
    "div",
    { className: "min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800" },
    createElement(Header, null),
    createElement(SearchSection, null),
    createElement(QuickstartSection, null),
    createElement(TopGuidesSection, null),
    createElement(VersionSwitcher, null),
    createElement(Footer, null)
  );
}

function Header() {
  return createElement(
    "header",
    { className: "py-6 px-4 sm:px-8 border-b border-gray-200" },
    createElement(
      "div",
      { className: "max-w-6xl mx-auto flex justify-between items-center" },
      createElement(
        "h1",
        { className: "text-2xl font-bold text-indigo-700 tracking-tight" },
        "QuantaJS"
      ),
      createElement(
        "nav",
        null,
        createElement(
          "ul",
          { className: "flex space-x-6" },
          ["Docs", "API", "Examples", "Community"].map((item, index) =>
            createElement(
              "li",
              { key: index },
              createElement(
                "a",
                {
                  href: "#",
                  className: "text-gray-600 hover:text-indigo-700 transition-colors duration-200 font-medium"
                },
                item
              )
            )
          )
        )
      )
    )
  );
}

function SearchSection() {
  const [searchValue, setSearchValue] = useState("");

  return createElement(
    "section",
    { className: "py-12 px-4 sm:px-8" },
    createElement(
      "div",
      { className: "max-w-3xl mx-auto text-center" },
      createElement(
        "h2",
        { className: "text-3xl font-bold mb-6" },
        "Documentation"
      ),
      createElement(
        "div",
        { className: "relative max-w-xl mx-auto" },
        createElement("input", {
          type: "text",
          value: searchValue,
          onChange: (e) => setSearchValue(e.target.value),
          placeholder: "Search documentation...",
          className: "w-full py-4 px-6 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-sm transition-all duration-300",
          "aria-label": "Search documentation"
        }),
        createElement(
          "div",
          { className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" },
          "🔍"
        )
      )
    )
  );
}

function QuickstartSection() {
  return createElement(
    "section",
    { className: "py-10 px-4 sm:px-8" },
    createElement(
      "div",
      { className: "max-w-6xl mx-auto" },
      createElement(
        "h2",
        { className: "text-2xl font-bold mb-6 text-center" },
        "Quickstart"
      ),
      createElement(
        "div",
        { className: "bg-white rounded-xl shadow-md p-6 border border-gray-200 transition-transform duration-300 hover:shadow-lg" },
        createElement(
          "div",
          { className: "grid grid-cols-1 md:grid-cols-3 gap-6" },
          [
            {
              title: "Installation",
              description: "Get QuantaJS up and running in your project",
              code: "npm install quantajs"
            },
            {
              title: "Basic Usage",
              description: "Initialize and run your first computation",
              code: "const q = new Quanta(); q.run();"
            },
            {
              title: "Configuration",
              description: "Customize behavior with configuration options",
              code: "{ threads: 4, precision: 'high' }"
            }
          ].map((item, index) =>
            createElement(
              "div",
              {
                key: index,
                className: "border border-gray-200 rounded-lg p-5 transition-all duration-300 hover:border-indigo-300 hover:bg-indigo-50"
              },
              createElement("h3", { className: "font-bold text-lg mb-2 text-indigo-700" }, item.title),
              createElement("p", { className: "text-gray-600 mb-3" }, item.description),
              createElement(
                "pre",
                { className: "bg-gray-800 text-gray-100 p-3 rounded-md text-sm overflow-x-auto" },
                item.code
              )
            )
          )
        )
      )
    )
  );
}

function TopGuidesSection() {
  const guides = [
    {
      title: "Performance Optimization",
      description: "Learn how to maximize computational efficiency"
    },
    {
      title: "Integration Patterns",
      description: "Best practices for integrating with existing systems"
    },
    {
      title: "Error Handling",
      description: "Implementing robust error handling strategies"
    }
  ];

  return createElement(
    "section",
    { className: "py-10 px-4 sm:px-8" },
    createElement(
      "div",
      { className: "max-w-6xl mx-auto" },
      createElement(
        "h2",
        { className: "text-2xl font-bold mb-6 text-center" },
        "Top Guides"
      ),
      createElement(
        "div",
        { className: "grid grid-cols-1 md:grid-cols-3 gap-6" },
        guides.map((guide, index) =>
          createElement(
            "a",
            {
              key: index,
              href: "#",
              className: "block bg-white rounded-xl shadow-sm p-6 border border-gray-200 transition-all duration-300 hover:shadow-md hover:border-indigo-300 group"
            },
            createElement(
              "h3",
              { className: "font-bold text-lg mb-2 text-gray-800 group-hover:text-indigo-700 transition-colors duration-200" },
              guide.title
            ),
            createElement("p", { className: "text-gray-600" }, guide.description),
            createElement(
              "span",
              { className: "inline-block mt-3 text-indigo-600 font-medium group-hover:underline" },
              "Read Guide →"
            )
          )
        )
      )
    )
  );
}

function VersionSwitcher() {
  const [version, setVersion] = useState("v2.1.4");

  return createElement(
    "section",
    { className: "py-10 px-4 sm:px-8" },
    createElement(
      "div",
      { className: "max-w-6xl mx-auto text-center" },
      createElement(
        "div",
        { className: "inline-flex flex-col items-center" },
        createElement(
          "label",
          { className: "text-sm font-medium text-gray-600 mb-2" },
          "Documentation Version"
        ),
        createElement(
          "div",
          { className: "relative" },
          createElement(
            "select",
            {
              value: version,
              onChange: (e) => setVersion(e.target.value),
              className: "appearance-none bg-white border border-gray-300 rounded-lg py-3 px-4 pr-8 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-sm"
            },
            ["v2.1.4", "v2.0.1", "v1.5.3", "v1.2.0"].map((v) =>
              createElement("option", { key: v, value: v }, v)
            )
          ),
          createElement(
            "div",
            { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700" },
            "▼"
          )
        )
      )
    )
  );
}

function Footer() {
  return createElement(
    "footer",
    { className: "py-8 px-4 sm:px-8 border-t border-gray-200 mt-12" },
    createElement(
      "div",
      { className: "max-w-6xl mx-auto" },
      createElement(
        "div",
        { className: "flex flex-col md:flex-row justify-between items-center" },
        createElement(
          "p",
          { className: "text-gray-600 mb-4 md:mb-0" },
          "© 2023 QuantaJS. All rights reserved."
        ),
        createElement(
          "div",
          { className: "flex space-x-6" },
          ["Terms", "Privacy", "License"].map((item, index) =>
            createElement(
              "a",
              {
                key: index,
                href: "#",
                className: "text-gray-600 hover:text-indigo-700 transition-colors duration-200"
              },
              item
            )
          )
        )
      )
    )
  );
}

const root = createRoot(document.getElementById("root"));
root.render(createElement(App));