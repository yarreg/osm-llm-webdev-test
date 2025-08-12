const { useState, useEffect } = React;

const SearchBar = () => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Searching for: ${query}`);
    };

    return React.createElement("form", {
        onSubmit: handleSubmit,
        className: "mb-8"
    },
        React.createElement("div", {
            className: "relative"
        },
            React.createElement("input", {
                type: "text",
                value: query,
                onChange: (e) => setQuery(e.target.value),
                placeholder: "Search documentation...",
                className: "w-full p-3 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            }),
            React.createElement("svg", {
                className: "absolute left-3 top-3 h-5 w-5 text-gray-400",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor"
            },
                React.createElement("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                })
            )
        )
    );
};

const QuickStart = () => {
    return React.createElement("section", {
        className: "mb-12"
    },
        React.createElement("h2", {
            className: "text-2xl font-bold mb-4"
        }, "Quick Start"),
        React.createElement("div", {
            className: "bg-gray-50 p-6 rounded-lg"
        },
            React.createElement("pre", {
                className: "text-sm overflow-x-auto"
            },
                "// Install QuantaJS\nnpm install quantajs\n\n// Basic usage\nimport { QuantumEngine } from 'quantajs';\n\nconst engine = new QuantumEngine();\nengine.simulate();"
            )
        )
    );
};

const TopGuides = () => {
    const guides = [
        {
            title: "Getting Started",
            description: "Learn the basics of QuantaJS",
            link: "#"
        },
        {
            title: "Core Concepts",
            description: "Understand quantum computing fundamentals",
            link: "#"
        },
        {
            title: "Advanced Techniques",
            description: "Explore complex quantum algorithms",
            link: "#"
        }
    ];

    return React.createElement("section", {
        className: "mb-12"
    },
        React.createElement("h2", {
            className: "text-2xl font-bold mb-4"
        }, "Top Guides"),
        React.createElement("div", {
            className: "grid grid-cols-1 md:grid-cols-3 gap-4"
        },
            guides.map((guide, index) =>
                React.createElement("div", {
                    key: index,
                    className: "p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                },
                    React.createElement("h3", {
                        className: "font-semibold mb-2"
                    }, guide.title),
                    React.createElement("p", {
                        className: "text-gray-600 mb-3"
                    }, guide.description),
                    React.createElement("a", {
                        href: guide.link,
                        className: "text-blue-600 hover:underline"
                    }, "Read more →")
                )
            )
        )
    );
};

const VersionSwitcher = () => {
    const [version, setVersion] = useState("v1.2.0");

    return React.createElement("div", {
        className: "mb-8"
    },
        React.createElement("label", {
            htmlFor: "version-select",
            className: "mr-2 text-gray-700"
        }, "Documentation version:"),
        React.createElement("select", {
            id: "version-select",
            value: version,
            onChange: (e) => setVersion(e.target.value),
            className: "p-2 border rounded-lg"
        },
            React.createElement("option", {
                value: "v1.2.0"
            }, "v1.2.0"),
            React.createElement("option", {
                value: "v1.1.0"
            }, "v1.1.0"),
            React.createElement("option", {
                value: "v1.0.0"
            }, "v1.0.0")
        )
    );
};

const Footer = () => {
    return React.createElement("footer", {
        className: "mt-12 pt-8 border-t"
    },
        React.createElement("div", {
            className: "flex flex-col md:flex-row justify-between items-center"
        },
            React.createElement("p", {
                className: "text-gray-600 mb-4 md:mb-0"
            }, "© 2023 QuantaJS. All rights reserved."),
            React.createElement("div", {
                className: "flex space-x-4"
            },
                React.createElement("a", {
                    href: "#",
                    className: "text-gray-600 hover:text-gray-900"
                }, "Privacy"),
                React.createElement("a", {
                    href: "#",
                    className: "text-gray-600 hover:text-gray-900"
                }, "Terms"),
                React.createElement("a", {
                    href: "#",
                    className: "text-gray-600 hover:text-gray-900"
                }, "Contact")
            )
        )
    );
};

const App = () => {
    return React.createElement("div", {
        className: "min-h-screen flex flex-col px-4 py-8 max-w-4xl mx-auto"
    },
        React.createElement("header", {
            className: "mb-8"
        },
            React.createElement("h1", {
                className: "text-3xl font-bold mb-2"
            }, "QuantaJS Documentation"),
            React.createElement("p", {
                className: "text-gray-600"
            }, "Comprehensive guide for quantum computing with JavaScript")
        ),
        React.createElement(SearchBar, null),
        React.createElement(VersionSwitcher, null),
        React.createElement(QuickStart, null),
        React.createElement(TopGuides, null),
        React.createElement(Footer, null)
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));