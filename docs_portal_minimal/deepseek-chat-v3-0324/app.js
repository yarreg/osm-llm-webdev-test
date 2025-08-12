const { createElement: e, useState } = React;

const SearchBar = () => e(
    'div', 
    { className: 'mb-12 w-full max-w-2xl mx-auto' },
    e('div', { className: 'relative' },
        e('input', {
            type: 'text',
            placeholder: 'Search documentation...',
            className: 'w-full px-6 py-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400',
            'aria-label': 'Search documentation'
        }),
        e('div', { className: 'absolute right-4 top-4 text-gray-400' },
            e('svg', { className: 'w-6 h-6', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' },
                e('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2', d: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' })
            )
        )
    )
);

const QuickStart = () => e(
    'section', 
    { className: 'mb-16' },
    e('h2', { className: 'text-2xl font-bold mb-6 text-gray-800' }, 'Quick Start'),
    e('div', { className: 'bg-white p-8 rounded-lg shadow-sm border border-gray-100' },
        e('p', { className: 'mb-4 text-gray-600' }, 'Get started with QuantaJS in just a few minutes.'),
        e('div', { className: 'mt-6' },
            e('button', { 
                className: 'px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
                'aria-label': 'Install QuantaJS'
            }, 'Installation Guide')
        )
    )
);

const GuideCard = ({ title, description }) => e(
    'div', 
    { className: 'bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow' },
    e('h3', { className: 'text-lg font-semibold mb-2 text-gray-800' }, title),
    e('p', { className: 'text-gray-600' }, description)
);

const TopGuides = () => e(
    'section', 
    { className: 'mb-16' },
    e('h2', { className: 'text-2xl font-bold mb-6 text-gray-800' }, 'Top Guides'),
    e('div', { className: 'grid grid-cols-1 md:grid-cols-3 gap-6' },
        e(GuideCard, { 
            title: 'Core Concepts', 
            description: 'Learn the fundamental principles behind QuantaJS architecture.' 
        }),
        e(GuideCard, { 
            title: 'API Reference', 
            description: 'Complete documentation of all available methods and properties.' 
        }),
        e(GuideCard, { 
            title: 'Performance Tips', 
            description: 'Optimize your QuantaJS applications for maximum efficiency.' 
        })
    )
);

const VersionSwitcher = () => {
    const [version, setVersion] = useState('v2.4.0');
    
    return e(
        'div', 
        { className: 'mb-16' },
        e('h2', { className: 'text-2xl font-bold mb-6 text-gray-800' }, 'Documentation Version'),
        e('div', { className: 'relative inline-block w-48' },
            e('select', {
                className: 'block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent',
                value: version,
                onChange: (e) => setVersion(e.target.value),
                'aria-label': 'Select documentation version'
            },
                e('option', { value: 'v2.4.0' }, 'v2.4.0 (Latest)'),
                e('option', { value: 'v2.3.2' }, 'v2.3.2'),
                e('option', { value: 'v2.2.1' }, 'v2.2.1')
            ),
            e('div', { className: 'pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700' },
                e('svg', { className: 'fill-current h-4 w-4', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 20 20' },
                    e('path', { d: 'M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' })
                )
            )
        )
    );
};

const Footer = () => e(
    'footer', 
    { className: 'mt-16 py-8 border-t border-gray-200' },
    e('div', { className: 'container mx-auto px-4' },
        e('div', { className: 'flex flex-col md:flex-row justify-between items-center' },
            e('p', { className: 'text-gray-500 mb-4 md:mb-0' }, '© 2023 QuantaJS. All rights reserved.'),
            e('div', { className: 'flex space-x-6' },
                e('a', { href: '#', className: 'text-gray-500 hover:text-blue-600', 'aria-label': 'GitHub' }, 'GitHub'),
                e('a', { href: '#', className: 'text-gray-500 hover:text-blue-600', 'aria-label': 'Twitter' }, 'Twitter'),
                e('a', { href: '#', className: 'text-gray-500 hover:text-blue-600', 'aria-label': 'Contact' }, 'Contact')
            )
        )
    )
);

const App = () => e(
    'div', 
    { className: 'min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8' },
    e('div', { className: 'max-w-6xl mx-auto' },
        e('header', { className: 'mb-16 text-center' },
            e('h1', { className: 'text-4xl font-bold text-gray-900 mb-4' }, 'QuantaJS Documentation'),
            e('p', { className: 'text-xl text-gray-600 max-w-3xl mx-auto' }, 'Everything you need to build powerful applications with QuantaJS')
        ),
        e(SearchBar, null),
        e(QuickStart, null),
        e(TopGuides, null),
        e(VersionSwitcher, null),
        e(Footer, null)
    )
);

ReactDOM.createRoot(document.getElementById('root')).render(e(App));