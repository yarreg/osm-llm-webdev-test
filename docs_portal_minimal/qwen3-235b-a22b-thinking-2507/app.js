const SkipLink = () => {
  return React.createElement('a', {
    href: '#main-content',
    className: 'sr-only focus:not-sr-only fixed top-4 left-4 bg-blue-600 text-white px-4 py-2 z-50 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
    children: 'Skip to main content'
  });
};

const Hero = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [version, setVersion] = React.useState('v1.0.0');

  return React.createElement('section', { className: 'bg-white py-16 sm:py-24' },
    React.createElement('div', { className: 'max-w-4xl mx-auto px-4 sm:px-6 lg:px-8' },
      React.createElement('div', { className: 'flex justify-end mb-8' },
        React.createElement('div', { className: 'glass px-2 py-1 inline-block rounded-md' },
          React.createElement('select', {
            value: version,
            onChange: (e) => setVersion(e.target.value),
            className: 'bg-transparent border-none text-sm focus:outline-none'
          },
            React.createElement('option', { value: 'v1.0.0' }, 'v1.0.0'),
            React.createElement('option', { value: 'v0.9.0' }, 'v0.9.0'),
            React.createElement('option', { value: 'v0.8.0' }, 'v0.8.0')
          )
        )
      ),
      React.createElement('div', { className: 'text-center' },
        React.createElement('h1', { className: 'text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl' },
          React.createElement('span', { className: 'block' }, 'QuantaJS')
        ),
        React.createElement('p', { className: 'mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl' },
          'Modern JavaScript framework for the quantum age.'
        )
      ),
      React.createElement('div', { className: 'mt-10 max-w-xl mx-auto' },
        React.createElement('div', { className: 'glass' },
          React.createElement('input', {
            type: 'text',
            value: searchQuery,
            onChange: (e) => setSearchQuery(e.target.value),
            placeholder: 'Search documentation... (press / to focus)',
            className: 'w-full px-4 py-3 rounded-md border border-transparent focus:outline-none bg-transparent placeholder-gray-500'
          })
        )
      )
    )
  );
};

const Quickstart = () => {
  return React.createElement('section', { id: 'main-content', className: 'py-16 bg-gray-50' },
    React.createElement('div', { className: 'max-w-4xl mx-auto px-4 sm:px-6 lg:px-8' },
      React.createElement('h2', { className: 'text-3xl font-bold text-gray-900' }, 'Quickstart'),
      React.createElement('div', { className: 'mt-8' },
        React.createElement('pre', { className: 'code-block' },
          React.createElement('code', null,
            'npm install quantajs\n' +
            'import { Quantum } from \'quantajs\';\n' +
            '\n' +
            'const q = new Quantum();\n' +
            'q.entangle();'
          )
        )
      )
    )
  );
};

const GuideCard = ({ title, description, link }) => {
  return React.createElement('div', { className: 'guide-card bg-white rounded-xl shadow-md overflow-hidden' },
    React.createElement('div', { className: 'p-6' },
      React.createElement('h3', { className: 'text-xl font-semibold text-gray-900' }, title),
      React.createElement('p', { className: 'mt-2 text-gray-600' }, description),
      React.createElement('a', {
        href: link,
        className: 'mt-4 inline-flex items-center text-blue-600 hover:text-blue-800 font-medium'
      },
        'Read more',
        React.createElement('svg', { className: 'ml-1 h-4 w-4', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
          React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M9 5l7 7-7 7' })
        )
      )
    )
  );
};

const Guides = () => {
  const guides = [
    { id: 1, title: 'Quantum State Management', description: 'Learn how to manage state in a quantum system with QuantaJS.', link: '#' },
    { id: 2, title: 'Entanglement API', description: 'Understand the entanglement API and how to use it in your apps.', link: '#' },
    { id: 3, title: 'Deployment Guide', description: 'Deploy your QuantaJS application to the quantum cloud.', link: '#' }
  ];

  return React.createElement('section', { className: 'py-16 bg-white' },
    React.createElement('div', { className: 'max-w-4xl mx-auto px-4 sm:px-6 lg:px-8' },
      React.createElement('h2', { className: 'text-3xl font-bold text-gray-900' }, 'Top Guides'),
      React.createElement('div', { className: 'mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3' },
        guides.map(guide => 
          React.createElement(GuideCard, { 
            key: guide.id, 
            title: guide.title, 
            description: guide.description, 
            link: guide.link 
          })
        )
      )
    )
  );
};

const Footer = () => {
  return React.createElement('footer', { className: 'bg-gray-50 border-t border-gray-200 py-8' },
    React.createElement('div', { className: 'max-w-4xl mx-auto px-4 sm:px-6 lg:px-8' },
      React.createElement('div', { className: 'text-center text-gray-500 text-sm' },
        '© 2023 QuantaJS. All rights reserved.'
      )
    )
  );
};

const App = () => {
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === '/' && document.activeElement.tagName !== 'INPUT') {
        e.preventDefault();
        document.querySelector('input[placeholder*="Search"]').focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return React.createElement('div', null,
    React.createElement(SkipLink, null),
    React.createElement(Hero, null),
    React.createElement(Quickstart, null),
    React.createElement(Guides, null),
    React.createElement(Footer, null)
  );
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App, null));