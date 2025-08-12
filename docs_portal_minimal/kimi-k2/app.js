const { useState, useEffect, useRef } = React;

const App = () => {
  const [selectedVersion, setSelectedVersion] = useState('v2.1.0');
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef(null);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, []);

  const versions = ['v2.1.0', 'v2.0.0', 'v1.9.8', 'v1.8.2'];
  
  const topGuides = [
    {
      title: 'Getting Started',
      description: 'Learn the basics of QuantaJS and set up your first project',
      readTime: '5 min read',
      link: '#getting-started'
    },
    {
      title: 'API Reference',
      description: 'Complete reference for all QuantaJS methods and utilities',
      readTime: '12 min read',
      link: '#api-reference'
    },
    {
      title: 'Migration Guide',
      description: 'Upgrade from v1.x to v2.x with our step-by-step guide',
      readTime: '8 min read',
      link: '#migration'
    }
  ];

  return React.createElement('div', { className: 'min-h-screen bg-gray-50' }, [
    // Header
    React.createElement('header', { 
      key: 'header',
      className: 'bg-white border-b border-gray-200'
    }, [
      React.createElement('div', { 
        className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4',
        key: 'header-content'
      }, [
        React.createElement('div', { 
          className: 'flex items-center justify-between',
          key: 'header-inner'
        }, [
          React.createElement('div', { 
            className: 'flex items-center space-x-4',
            key: 'logo-section'
          }, [
            React.createElement('h1', { 
              className: 'text-2xl font-bold text-gray-900',
              key: 'logo'
            }, 'QuantaJS'),
            React.createElement('span', { 
              className: 'text-sm text-gray-500',
              key: 'tagline'
            }, 'Documentation')
          ]),
          React.createElement('div', { 
            className: 'flex items-center space-x-4',
            key: 'version-switcher'
          }, [
            React.createElement('select', {
              className: 'text-sm border border-gray-300 rounded-md px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500',
              value: selectedVersion,
              onChange: (e) => setSelectedVersion(e.target.value),
              key: 'version-select'
            }, versions.map(version => 
              React.createElement('option', { key: version, value: version }, version)
            ))
          ])
        ])
      ])
    ]),

    // Main Content
    React.createElement('main', { 
      key: 'main',
      className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'
    }, [
      // Hero Section
      React.createElement('div', { 
        key: 'hero',
        className: 'text-center mb-12'
      }, [
        React.createElement('h2', { 
          className: 'text-4xl font-bold text-gray-900 mb-4',
          key: 'hero-title'
        }, 'QuantaJS Documentation'),
        React.createElement('p', { 
          className: 'text-xl text-gray-600 max-w-2xl mx-auto',
          key: 'hero-subtitle'
        }, 'Everything you need to build fast, scalable applications with QuantaJS')
      ]),

      // Search Bar
      React.createElement('div', { 
        key: 'search',
        className: 'max-w-2xl mx-auto mb-12'
      }, [
        React.createElement('div', { 
          className: 'relative',
          key: 'search-container'
        }, [
          React.createElement('input', {
            ref: searchInputRef,
            type: 'text',
            placeholder: 'Search documentation... (⌘K)',
            value: searchQuery,
            onChange: (e) => setSearchQuery(e.target.value),
            className: 'w-full px-4 py-3 pl-12 pr-4 text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent',
            key: 'search-input'
          }),
          React.createElement('div', { 
            className: 'absolute inset-y-0 left-0 flex items-center pl-4',
            key: 'search-icon'
          }, [
            React.createElement('svg', {
              className: 'w-5 h-5 text-gray-400',
              fill: 'none',
              stroke: 'currentColor',
              viewBox: '0 0 24 24',
              key: 'search-svg'
            }, [
              React.createElement('path', {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 2,
                d: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              })
            ])
          ])
        ])
      ]),

      // Quickstart Section
      React.createElement('div', { 
        key: 'quickstart',
        className: 'mb-12'
      }, [
        React.createElement('h3', { 
          className: 'text-2xl font-bold text-gray-900 mb-6',
          key: 'quickstart-title'
        }, 'Quickstart'),
        React.createElement('div', { 
          className: 'bg-gray-900 rounded-lg p-6',
          key: 'quickstart-code'
        }, [
          React.createElement('pre', { 
            className: 'text-sm text-gray-100 font-mono',
            key: 'code-block'
          }, [
            React.createElement('code', { key: 'code' }, `npm install quantajs

import { Quantum } from 'quantajs';

const app = new Quantum();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000);`)
          ])
        ])
      ]),

      // Top Guides
      React.createElement('div', { 
        key: 'guides',
        className: 'mb-12'
      }, [
        React.createElement('h3', { 
          className: 'text-2xl font-bold text-gray-900 mb-6',
          key: 'guides-title'
        }, 'Top Guides'),
        React.createElement('div', { 
          className: 'grid gap-6 md:grid-cols-3',
          key: 'guides-grid'
        }, topGuides.map((guide, index) => 
          React.createElement('a', {
            href: guide.link,
            className: 'block p-6 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow focus:outline-none focus:ring-2 focus:ring-blue-500',
            key: `guide-${index}`
          }, [
            React.createElement('h4', { 
              className: 'text-lg font-semibold text-gray-900 mb-2',
              key: `guide-title-${index}`
            }, guide.title),
            React.createElement('p', { 
              className: 'text-gray-600 mb-3',
              key: `guide-desc-${index}`
            }, guide.description),
            React.createElement('span', { 
              className: 'text-sm text-gray-500',
              key: `guide-time-${index}`
            }, guide.readTime)
          ])
        ))
      ])
    ]),

    // Footer
    React.createElement('footer', { 
      key: 'footer',
      className: 'bg-gray-900 text-gray-300'
    }, [
      React.createElement('div', { 
        className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8',
        key: 'footer-content'
      }, [
        React.createElement('div', { 
          className: 'flex flex-col md:flex-row justify-between items-center',
          key: 'footer-inner'
        }, [
          React.createElement('div', { 
            className: 'text-sm',
            key: 'footer-text'
          }, [
            '© 2024 QuantaJS. Open source under MIT License.'
          ]),
          React.createElement('div', { 
            className: 'flex space-x-6 mt-4 md:mt-0',
            key: 'footer-links'
          }, [
            React.createElement('a', {
              href: '#github',
              className: 'text-sm hover:text-white transition-colors',
              key: 'github-link'
            }, 'GitHub'),
            React.createElement('a', {
              href: '#discord',
              className: 'text-sm hover:text-white transition-colors',
              key: 'discord-link'
            }, 'Discord'),
            React.createElement('a', {
              href: '#twitter',
              className: 'text-sm hover:text-white transition-colors',
              key: 'twitter-link'
            }, 'Twitter')
          ])
        ])
      ])
    ])
  ]);
};

ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));