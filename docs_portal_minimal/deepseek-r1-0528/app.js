const { createElement: e, useState } = React;

// Header Component
const Header = () => {
  return e('header', {
    className: 'sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b border-gray-200 py-4 px-6 transition-all'
  },
    e('div', { className: 'max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4' },
      e('div', { className: 'flex items-center gap-6' },
        e('h1', { 
          className: 'text-2xl font-bold text-indigo-700 flex items-center gap-2',
          'aria-label': 'QuantaJS Documentation'
        },
          e('span', { className: 'bg-indigo-100 text-indigo-800 px-3 py-1 rounded-lg font-mono' }, 'QuantaJS')
        ),
        e('div', { className: 'relative' },
          e('select', {
            className: 'appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500',
            'aria-label': 'Select documentation version'
          },
            e('option', null, 'v2.4 (latest)'),
            e('option', null, 'v2.3'),
            e('option', null, 'v2.2')
          ),
          e('div', { className: 'pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500' },
            e('svg', { className: 'h-4 w-4', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' },
              e('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2', d: 'M19 9l-7 7-7-7' })
            )
          )
        )
      ),
      e('div', { className: 'relative w-full md:w-auto' },
        e('input', {
          type: 'search',
          placeholder: 'Search documentation...',
          className: 'w-full md:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm',
          'aria-label': 'Search documentation'
        }),
        e('div', { className: 'absolute right-3 top-2.5 text-gray-400' },
          e('svg', { className: 'h-4 w-4', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' },
            e('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2', d: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' })
          )
        )
      )
    )
  );
};

// Quickstart Component
const Quickstart = () => {
  return e('section', { 
    className: 'py-12 px-6',
    'aria-labelledby': 'quickstart-heading'
  },
    e('div', { className: 'max-w-4xl mx-auto' },
      e('div', { className: 'mb-10 text-center' },
        e('h2', { 
          id: 'quickstart-heading',
          className: 'text-3xl font-bold text-gray-900 mb-4'
        }, 'Get Started with QuantaJS'),
        e('p', { className: 'text-gray-600 max-w-2xl mx-auto' }, 'Start building quantum-inspired applications in minutes with our simple setup guide')
      ),
      e('div', { className: 'bg-white rounded-xl shadow-sm p-6 border border-gray-100' },
        e('ol', { className: 'space-y-6' },
          e('li', { className: 'flex gap-4' },
            e('div', { className: 'flex flex-col items-center' },
              e('div', { className: 'w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold' }, '1'),
              e('div', { className: 'w-0.5 h-full bg-gray-200 mt-2' })
            ),
            e('div', null,
              e('h3', { className: 'font-semibold text-lg text-gray-900 mb-2' }, 'Install via npm'),
              e('div', { className: 'bg-gray-800 text-gray-100 font-mono text-sm p-4 rounded-lg overflow-x-auto' },
                e('code', null, 'npm install quantajs')
              )
            )
          ),
          e('li', { className: 'flex gap-4' },
            e('div', { className: 'flex flex-col items-center' },
              e('div', { className: 'w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold' }, '2'),
              e('div', { className: 'w-0.5 h-full bg-gray-200 mt-2' })
            ),
            e('div', null,
              e('h3', { className: 'font-semibold text-lg text-gray-900 mb-2' }, 'Import in your project'),
              e('div', { className: 'bg-gray-800 text-gray-100 font-mono text-sm p-4 rounded-lg overflow-x-auto' },
                e('code', null, "import { QuantumRuntime } from 'quantajs';") 
              )
            )
          ),
          e('li', { className: 'flex gap-4' },
            e('div', { className: 'flex flex-col items-center' },
              e('div', { className: 'w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold' }, '3')
            ),
            e('div', null,
              e('h3', { className: 'font-semibold text-lg text-gray-900 mb-2' }, 'Create your first quantum circuit'),
              e('div', { className: 'bg-gray-800 text-gray-100 font-mono text-sm p-4 rounded-lg overflow-x-auto' },
                e('pre', null, 
                  "const runtime = new QuantumRuntime();\n" +
                  "runtime.createCircuit('hello-quantum', 2)\n" +
                  "  .h(0)\n" +
                  "  .cnot(0, 1)\n" +
                  "  .measureAll();"
                )
              )
            )
          )
        )
      )
    )
  );
};

// Guide Card Component
const GuideCard = ({ title, description }) => {
  return e('div', { 
    className: 'bg-white rounded-xl border border-gray-200 overflow-hidden transition-all hover:shadow-md hover:border-indigo-300',
    tabIndex: '0',
    'aria-label': `Guide: ${title}`
  },
    e('div', { className: 'p-6' },
      e('div', { className: 'flex items-center gap-3 mb-4' },
        e('div', { className: 'bg-indigo-100 p-2 rounded-lg' },
          e('svg', { className: 'h-6 w-6 text-indigo-600', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' },
            e('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2', d: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' })
          )
        ),
        e('h3', { className: 'font-semibold text-lg text-gray-900' }, title)
      ),
      e('p', { className: 'text-gray-600 text-sm' }, description),
      e('div', { className: 'mt-4' },
        e('button', {
          className: 'text-indigo-600 font-medium text-sm flex items-center gap-1 hover:text-indigo-800 transition-colors',
          'aria-label': `Read guide: ${title}`
        },
          'Read guide',
          e('svg', { className: 'h-4 w-4', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' },
            e('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2', d: 'M9 5l7 7-7 7' })
          )
        )
      )
    )
  );
};

// Guides Section
const Guides = () => {
  const topGuides = [
    {
      title: "Quantum State Management",
      description: "Learn how to manage complex application states using quantum-inspired algorithms"
    },
    {
      title: "Entanglement Patterns",
      description: "Implement entanglement between components for real-time synchronization"
    },
    {
      title: "Performance Optimization",
      description: "Maximize computational efficiency with quantum circuit optimization techniques"
    }
  ];

  return e('section', { 
    className: 'py-12 px-6 bg-gray-50',
    'aria-labelledby': 'guides-heading'
  },
    e('div', { className: 'max-w-6xl mx-auto' },
      e('div', { className: 'mb-10 text-center' },
        e('h2', { 
          id: 'guides-heading',
          className: 'text-3xl font-bold text-gray-900 mb-4'
        }, 'Top Guides'),
        e('p', { className: 'text-gray-600 max-w-2xl mx-auto' }, 'Explore our most popular tutorials and implementation guides')
      ),
      e('div', { className: 'grid grid-cols-1 md:grid-cols-3 gap-6' },
        ...topGuides.map((guide, index) => 
          e(GuideCard, { 
            key: index,
            title: guide.title,
            description: guide.description
          })
        )
      )
    )
  );
};

// Footer Component
const Footer = () => {
  return e('footer', {
    className: 'py-8 px-6 border-t border-gray-200 bg-white'
  },
    e('div', { className: 'max-w-6xl mx-auto' },
      e('div', { className: 'flex flex-col md:flex-row justify-between items-center gap-4' },
        e('div', { className: 'text-gray-600 text-sm' },
          '© 2023 QuantaJS. All rights reserved.'
        ),
        e('div', { className: 'flex gap-6' },
          e('a', { 
            href: '#', 
            className: 'text-gray-600 hover:text-indigo-700 text-sm transition-colors',
            'aria-label': 'GitHub repository'
          }, 'GitHub'),
          e('a', { 
            href: '#', 
            className: 'text-gray-600 hover:text-indigo-700 text-sm transition-colors',
            'aria-label': 'Documentation'
          }, 'Docs'),
          e('a', { 
            href: '#', 
            className: 'text-gray-600 hover:text-indigo-700 text-sm transition-colors',
            'aria-label': 'Community forum'
          }, 'Community'),
          e('a', { 
            href: '#', 
            className: 'text-gray-600 hover:text-indigo-700 text-sm transition-colors',
            'aria-label': 'Contact support'
          }, 'Support')
        )
      )
    )
  );
};

// Main App Component
const App = () => {
  return e('div', { className: 'min-h-screen flex flex-col font-sans' },
    e(Header, null),
    e('main', { className: 'flex-grow' },
      e(Quickstart, null),
      e(Guides, null)
    ),
    e(Footer, null)
  );
};

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(e(App));