// app.js – React 18 – no JSX (React.createElement only)
// Global variables: React, ReactDOM are loaded via script tags.

// Utility: simple smooth scroll for internal links
function smoothScroll(e) {
  const href = e.currentTarget.getAttribute('href');
  if (href && href.startsWith('#')) {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      target.focus({ preventScroll: true });
    }
  }
}

// Header – contains logo, search bar, version switcher
function Header({ version, setVersion }) {
  const versions = ['v2.0', 'v1.5', 'v1.0'];
  return React.createElement(
    'header',
    { className: 'sticky top-0 bg-white bg-opacity-80 backdrop-filter backdrop-blur-md border-b border-gray-200 z-10' },
    React.createElement(
      'div',
      { className: 'max-w-5xl mx-auto flex items-center justify-between p-4' },
      // Logo / Title
      React.createElement(
        'h1',
        { className: 'text-2xl font-semibold text-indigo-600' },
        'QuantaJS'
      ),
      // Search bar (non‑functional)
      React.createElement(
        'div',
        { className: 'flex-1 mx-4' },
        React.createElement('input', {
          type: 'search',
          placeholder: 'Search docs…',
          className: 'w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500',
          'aria-label': 'Search documentation',
        })
      ),
      // Version switcher mock (dropdown)
      React.createElement(
        'div',
        { className: 'relative' },
        React.createElement(
          'button',
          {
            className: 'flex items-center space-x-1 py-2 px-3 border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500',
            onClick: () => setVersion((prev) => prev), // placeholder – no action needed
            'aria-haspopup': 'listbox',
            'aria-expanded': 'false',
          },
          React.createElement('span', null, version),
          React.createElement('svg', {
            className: 'w-4 h-4',
            fill: 'none',
            stroke: 'currentColor',
            viewBox: '0 0 24 24',
            xmlns: 'http://www.w3.org/2000/svg',
          }, React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M19 9l-7 7-7-7' }))
        ),
        // Mock dropdown list (visually hidden but present for screen readers)
        React.createElement(
          'ul',
          {
            role: 'listbox',
            className: 'absolute right-0 mt-2 w-24 bg-white border border-gray-200 rounded-md shadow-lg hidden',
          },
          versions.map((v) =>
            React.createElement(
              'li',
              { key: v, className: 'px-3 py-2 hover:bg-gray-100 cursor-pointer', role: 'option', onClick: () => setVersion(v) },
              v
            )
          )
        )
      )
    )
  );
}

// QuickStart – simple code snippet
function QuickStart() {
  const code = `// Install QuantaJS\nnpm i quantajs\n\n// Basic usage\nimport { createApp } from 'quantajs';\n\nconst app = createApp();\napp.mount('#root');`;
  return React.createElement(
    'section',
    { id: 'quickstart', tabIndex: '-1', className: 'pt-12 pb-8' },
    React.createElement(
      'div',
      { className: 'max-w-4xl mx-auto px-4' },
      React.createElement('h2', { className: 'text-3xl font-bold mb-4' }, 'Quick‑Start'),
      React.createElement(
        'pre',
        { className: 'bg-gray-100 rounded-md p-4 overflow-x-auto text-sm' },
        React.createElement('code', null, code)
      )
    )
  );
}

// GuideCard – reusable card for a guide
function GuideCard({ title, description, href }) {
  return React.createElement(
    'a',
    {
      href,
      className: 'block glass-card p-6 rounded-xl hover:shadow-xl focus-visible:ring-2 focus-visible:ring-indigo-500 transition',
      onClick: smoothScroll,
    },
    React.createElement('h3', { className: 'text-xl font-semibold mb-2' }, title),
    React.createElement('p', { className: 'text-gray-600' }, description)
  );
}

// Guides – three top guides
function Guides() {
  const guides = [
    {
      title: 'Getting Started',
      description: 'Step‑by‑step walkthrough to set up your first QuantaJS project.',
      href: '#quickstart',
    },
    {
      title: 'State Management',
      description: 'Learn the built‑in reactive store and how to share state across components.',
      href: '#',
    },
    {
      title: 'Routing & Navigation',
      description: 'Create SPA‑style routes with declarative navigation and lazy loading.',
      href: '#',
    },
  ];
  return React.createElement(
    'section',
    { id: 'guides', className: 'py-12 bg-gray-50' },
    React.createElement(
      'div',
      { className: 'max-w-5xl mx-auto px-4' },
      React.createElement('h2', { className: 'text-3xl font-bold text-center mb-8' }, 'Top Guides'),
      React.createElement(
        'div',
        { className: 'grid gap-6 md:grid-cols-3' },
        guides.map((g) =>
          React.createElement(GuideCard, {
            key: g.title,
            title: g.title,
            description: g.description,
            href: g.href,
          })
        )
      )
    )
  );
}

// Footer – minimal
function Footer() {
  return React.createElement(
    'footer',
    { className: 'bg-white border-t border-gray-200 py-6' },
    React.createElement(
      'div',
      { className: 'max-w-5xl mx-auto px-4 text-center text-sm text-gray-500' },
      '\u00A9 ',
      new Date().getFullYear(),
      ' QuantaJS • Documentation'
    )
  );
}

// Main App component
function App() {
  const [version, setVersion] = React.useState('v2.0');

  // Keyboard navigation – focus first heading on load for screen readers
  React.useEffect(() => {
    const firstHeading = document.querySelector('h1');
    if (firstHeading) firstHeading.setAttribute('tabindex', '-1');
  }, []);

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(Header, { version, setVersion }),
    React.createElement(
      'main',
      { className: 'pt-4' },
      React.createElement(QuickStart, null),
      React.createElement(Guides, null)
    ),
    React.createElement(Footer, null)
  );
}

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App, null));
