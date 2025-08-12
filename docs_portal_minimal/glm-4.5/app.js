// Main App Component
const App = () => {
  return React.createElement('div', { className: 'min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800' },
    React.createElement(Header),
    React.createElement(Hero),
    React.createElement(Quickstart),
    React.createElement(TopGuides),
    React.createElement(Footer)
  );
};

// Header Component
const Header = () => {
  return React.createElement('header', { className: 'sticky top-0 z-10 backdrop-blur-lg bg-white/80 border-b border-gray-200' },
    React.createElement('div', { className: 'container mx-auto px-4 py-4 flex justify-between items-center' },
      React.createElement('div', { className: 'flex items-center space-x-2' },
        React.createElement('div', { className: 'w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center' },
          React.createElement('span', { className: 'text-white font-bold text-lg' }, 'Q')
        ),
        React.createElement('h1', { className: 'text-xl font-semibold' }, 'QuantaJS')
      ),
      React.createElement(VersionSwitcher)
    )
  );
};

// Version Switcher Component
const VersionSwitcher = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedVersion, setSelectedVersion] = React.useState('v2.4.0');
  
  const versions = ['v2.4.0', 'v2.3.5', 'v2.3.0', 'v2.2.0'];
  
  const toggleDropdown = () => setIsOpen(!isOpen);
  
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleDropdown();
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };
  
  const selectVersion = (version) => {
    setSelectedVersion(version);
    setIsOpen(false);
  };
  
  return React.createElement('div', { className: 'relative' },
    React.createElement('button', {
      onClick: toggleDropdown,
      onKeyDown: handleKeyDown,
      'aria-expanded': isOpen,
      'aria-haspopup': 'listbox',
      className: 'flex items-center space-x-1 px-3 py-1.5 text-sm rounded-lg bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors'
    },
      React.createElement('span', {}, selectedVersion),
      React.createElement('svg', {
        className: `w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`,
        fill: 'none',
        stroke: 'currentColor',
        viewBox: '0 0 24 24',
        xmlns: 'http://www.w3.org/2000/svg'
      },
        React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M19 9l-7 7-7-7' })
      )
    ),
    isOpen && React.createElement('div', {
      className: 'absolute right-0 mt-1 w-40 bg-white rounded-lg shadow-lg py-1 z-20 border border-gray-200',
      role: 'listbox'
    },
      versions.map(version => React.createElement('button', {
        key: version,
        onClick: () => selectVersion(version),
        className: `block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 focus:outline-none focus:bg-gray-100 ${selectedVersion === version ? 'text-indigo-600 font-medium' : 'text-gray-700'}`,
        role: 'option',
        'aria-selected': selectedVersion === version
      }, version))
    )
  );
};

// Hero Component with Search Bar
const Hero = () => {
  return React.createElement('section', { className: 'py-16 md:py-24' },
    React.createElement('div', { className: 'container mx-auto px-4 max-w-4xl text-center' },
      React.createElement('h1', { className: 'text-4xl md:text-5xl font-bold mb-4' }, 'QuantaJS Documentation'),
      React.createElement('p', { className: 'text-lg text-gray-600 mb-10 max-w-2xl mx-auto' }, 'Build fast, scalable applications with our quantum-inspired JavaScript framework'),
      React.createElement(SearchBar)
    )
  );
};

// Search Bar Component (non-functional)
const SearchBar = () => {
  return React.createElement('div', { className: 'relative max-w-2xl mx-auto' },
    React.createElement('div', { className: 'relative' },
      React.createElement('input', {
        type: 'text',
        placeholder: 'Search documentation...',
        className: 'w-full px-6 py-4 pr-12 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-sm transition-all',
        'aria-label': 'Search documentation'
      }),
      React.createElement('div', { className: 'absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400' },
        React.createElement('svg', {
          className: 'w-5 h-5',
          fill: 'none',
          stroke: 'currentColor',
          viewBox: '0 0 24 24',
          xmlns: 'http://www.w3.org/2000/svg'
        },
          React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' })
        )
      )
    ),
    React.createElement('p', { className: 'mt-2 text-sm text-gray-500' }, 'Press \/ to search, Esc to close')
  );
};

// Quickstart Component
const Quickstart = () => {
  return React.createElement('section', { className: 'py-12 bg-white' },
    React.createElement('div', { className: 'container mx-auto px-4 max-w-4xl' },
      React.createElement('h2', { className: 'text-2xl font-bold mb-6' }, 'Quickstart'),
      React.createElement('div', { className: 'bg-gray-50 rounded-xl p-6 border border-gray-200' },
        React.createElement('div', { className: 'mb-4' },
          React.createElement('h3', { className: 'text-lg font-semibold mb-2' }, 'Installation'),
          React.createElement('div', { className: 'bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto' },
            'npm install quantajs'
          )
        ),
        React.createElement('div', { className: 'mb-4' },
          React.createElement('h3', { className: 'text-lg font-semibold mb-2' }, 'Basic Usage'),
          React.createElement('div', { className: 'bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto' },
            'import { createQuantumApp } from \'quantajs\';\n\nconst app = createQuantumApp({\n  initialState: { count: 0 }\n});\n\napp.render(\'#app\');'
          )
        ),
        React.createElement('div', { className: 'flex justify-end' },
          React.createElement('button', {
            className: 'px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors'
          }, 'Get Started')
        )
      )
    )
  );
};

// Top Guides Component
const TopGuides = () => {
  const guides = [
    {
      title: 'Getting Started',
      description: 'Learn the basics of QuantaJS and set up your first project',
      link: '#getting-started'
    },
    {
      title: 'State Management',
      description: 'Understand how to manage application state with quantum principles',
      link: '#state-management'
    },
    {
      title: 'Performance Optimization',
      description: 'Techniques to make your QuantaJS applications lightning fast',
      link: '#performance'
    }
  ];
  
  return React.createElement('section', { className: 'py-12' },
    React.createElement('div', { className: 'container mx-auto px-4 max-w-4xl' },
      React.createElement('h2', { className: 'text-2xl font-bold mb-6' }, 'Top Guides'),
      React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-3 gap-6' },
        guides.map((guide, index) => React.createElement(GuideCard, { key: index, guide: guide }))
      )
    )
  );
};

// Guide Card Component
const GuideCard = ({ guide }) => {
  return React.createElement('a', {
    href: guide.link,
    className: 'block p-6 bg-white rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
    tabIndex: 0
  },
    React.createElement('h3', { className: 'text-lg font-semibold mb-2 text-indigo-600' }, guide.title),
    React.createElement('p', { className: 'text-gray-600' }, guide.description),
    React.createElement('div', { className: 'mt-4 flex items-center text-indigo-600 font-medium text-sm' },
      'Read guide',
      React.createElement('svg', {
        className: 'w-4 h-4 ml-1',
        fill: 'none',
        stroke: 'currentColor',
        viewBox: '0 0 24 24',
        xmlns: 'http://www.w3.org/2000/svg'
      },
        React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M9 5l7 7-7 7' })
      )
    )
  );
};

// Footer Component
const Footer = () => {
  return React.createElement('footer', { className: 'py-8 bg-gray-900 text-gray-400' },
    React.createElement('div', { className: 'container mx-auto px-4' },
      React.createElement('div', { className: 'flex flex-col md:flex-row justify-between items-center' },
        React.createElement('div', { className: 'mb-4 md:mb-0' },
          React.createElement('div', { className: 'flex items-center space-x-2' },
            React.createElement('div', { className: 'w-6 h-6 bg-indigo-600 rounded flex items-center justify-center' },
              React.createElement('span', { className: 'text-white font-bold text-sm' }, 'Q')
            ),
            React.createElement('span', { className: 'text-white font-medium' }, 'QuantaJS')
          )
        ),
        React.createElement('div', { className: 'flex space-x-6' },
          React.createElement('a', { href: '#', className: 'hover:text-white transition-colors' }, 'Docs'),
          React.createElement('a', { href: '#', className: 'hover:text-white transition-colors' }, 'API'),
          React.createElement('a', { href: '#', className: 'hover:text-white transition-colors' }, 'GitHub'),
          React.createElement('a', { href: '#', className: 'hover:text-white transition-colors' }, 'Community')
        )
      ),
      React.createElement('div', { className: 'mt-8 text-center text-sm' },
        '© ', new Date().getFullYear(), ' QuantaJS. All rights reserved.'
      )
    )
  );
};

// Render the App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));