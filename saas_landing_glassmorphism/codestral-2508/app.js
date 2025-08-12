const { useState, useEffect } = React;

const GlassCard = ({ children, className = '' }) => {
    return React.createElement("div", {
        className: `glass-card ${className}`,
        "aria-hidden": "true"
    }, children);
};

const HeroSection = () => {
    return React.createElement("section", {
        className: "hero-section relative overflow-hidden"
    },
        React.createElement("div", {
            className: "absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-70"
        }),
        React.createElement("div", {
            className: "relative z-10 container mx-auto px-4 py-20 text-center"
        },
            React.createElement("h1", {
                className: "text-5xl md:text-6xl font-bold text-white mb-6"
            }, "NimbusBoard"),
            React.createElement("p", {
                className: "text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8"
            }, "The ultimate team collaboration dashboard for modern workplaces"),
            React.createElement("button", {
                className: "cta-button px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
            }, "Get Started Free")
        )
    );
};

const FeaturesSection = () => {
    const features = [
        {
            icon: "📊",
            title: "Real-time Analytics",
            description: "Track team performance with live data visualization"
        },
        {
            icon: "🔒",
            title: "Secure Collaboration",
            description: "End-to-end encryption for all your team communications"
        },
        {
            icon: "📱",
            title: "Mobile Friendly",
            description: "Access your dashboard from any device"
        },
        {
            icon: "🤖",
            title: "AI Insights",
            description: "Get automated recommendations for team improvement"
        }
    ];

    return React.createElement("section", {
        className: "features-section py-20"
    },
        React.createElement("div", {
            className: "container mx-auto px-4"
        },
            React.createElement("h2", {
                className: "text-3xl font-bold text-center mb-12"
            }, "Key Features"),
            React.createElement("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            }, features.map((feature, index) => {
                return React.createElement(GlassCard, {
                    key: index,
                    className: "p-6 text-center hover:shadow-lg transition-shadow duration-300"
                },
                    React.createElement("div", {
                        className: "text-4xl mb-4"
                    }, feature.icon),
                    React.createElement("h3", {
                        className: "text-xl font-semibold mb-2"
                    }, feature.title),
                    React.createElement("p", {
                        className: "text-gray-600"
                    }, feature.description)
                );
            }))
        )
    );
};

const PricingSection = () => {
    const plans = [
        {
            name: "Free",
            price: "$0",
            features: ["Basic dashboard", "Up to 5 team members", "Limited analytics"],
            cta: "Get Started"
        },
        {
            name: "Pro",
            price: "$19",
            features: ["Advanced analytics", "Up to 20 team members", "Priority support", "Custom branding"],
            cta: "Upgrade Now",
            popular: true
        },
        {
            name: "Team",
            price: "$49",
            features: ["Unlimited team members", "Advanced security", "Dedicated account manager", "API access"],
            cta: "Contact Sales"
        }
    ];

    return React.createElement("section", {
        className: "pricing-section py-20 bg-gray-50"
    },
        React.createElement("div", {
            className: "container mx-auto px-4"
        },
            React.createElement("h2", {
                className: "text-3xl font-bold text-center mb-12"
            }, "Simple Pricing"),
            React.createElement("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-8"
            }, plans.map((plan, index) => {
                return React.createElement(GlassCard, {
                    key: index,
                    className: `p-8 text-center ${plan.popular ? 'border-2 border-blue-500' : ''}`
                },
                    plan.popular && React.createElement("div", {
                        className: "bg-blue-500 text-white text-sm font-bold py-1 px-3 rounded-full inline-block mb-4"
                    }, "Most Popular"),
                    React.createElement("h3", {
                        className: "text-2xl font-bold mb-2"
                    }, plan.name),
                    React.createElement("div", {
                        className: "text-4xl font-bold mb-6"
                    }, plan.price),
                    React.createElement("ul", {
                        className: "text-left mb-8 space-y-2"
                    }, plan.features.map((feature, i) => {
                        return React.createElement("li", {
                            key: i,
                            className: "flex items-center"
                        },
                            React.createElement("span", {
                                className: "text-green-500 mr-2"
                            }, "✓"),
                            feature
                        );
                    })),
                    React.createElement("button", {
                        className: `px-6 py-2 rounded-full font-semibold transition-all duration-300 ${plan.popular ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`
                    }, plan.cta)
                );
            }))
        )
    );
};

const CustomersSection = () => {
    const logos = [
        "https://placehold.co/150x50/000000/FFFFFF?text=Logo+1",
        "https://placehold.co/150x50/000000/FFFFFF?text=Logo+2",
        "https://placehold.co/150x50/000000/FFFFFF?text=Logo+3",
        "https://placehold.co/150x50/000000/FFFFFF?text=Logo+4",
        "https://placehold.co/150x50/000000/FFFFFF?text=Logo+5",
        "https://placehold.co/150x50/000000/FFFFFF?text=Logo+6"
    ];

    return React.createElement("section", {
        className: "customers-section py-16 bg-white"
    },
        React.createElement("div", {
            className: "container mx-auto px-4"
        },
            React.createElement("h2", {
                className: "text-2xl font-bold text-center mb-8 text-gray-600"
            }, "Trusted by teams worldwide"),
            React.createElement("div", {
                className: "flex flex-wrap justify-center items-center gap-8"
            }, logos.map((logo, index) => {
                return React.createElement("div", {
                    key: index,
                    className: "h-12 flex items-center opacity-70 hover:opacity-100 transition-opacity duration-300"
                },
                    React.createElement("img", {
                        src: logo,
                        alt: `Customer logo ${index + 1}`,
                        className: "h-full object-contain"
                    })
                );
            }))
        )
    );
};

const Footer = () => {
    return React.createElement("footer", {
        className: "footer bg-gray-900 text-white py-12"
    },
        React.createElement("div", {
            className: "container mx-auto px-4"
        },
            React.createElement("div", {
                className: "grid grid-cols-1 md:grid-cols-4 gap-8"
            },
                React.createElement("div", null,
                    React.createElement("h3", {
                        className: "text-xl font-bold mb-4"
                    }, "NimbusBoard"),
                    React.createElement("p", {
                        className: "text-gray-400"
                    }, "The ultimate team collaboration dashboard for modern workplaces.")
                ),
                React.createElement("div", null,
                    React.createElement("h4", {
                        className: "font-semibold mb-4"
                    }, "Product"),
                    React.createElement("ul", {
                        className: "space-y-2"
                    },
                        React.createElement("li", null, React.createElement("a", {
                            href: "#",
                            className: "text-gray-400 hover:text-white transition-colors duration-200"
                        }, "Features")),
                        React.createElement("li", null, React.createElement("a", {
                            href: "#",
                            className: "text-gray-400 hover:text-white transition-colors duration-200"
                        }, "Pricing")),
                        React.createElement("li", null, React.createElement("a", {
                            href: "#",
                            className: "text-gray-400 hover:text-white transition-colors duration-200"
                        }, "Integrations"))
                    )
                ),
                React.createElement("div", null,
                    React.createElement("h4", {
                        className: "font-semibold mb-4"
                    }, "Company"),
                    React.createElement("ul", {
                        className: "space-y-2"
                    },
                        React.createElement("li", null, React.createElement("a", {
                            href: "#",
                            className: "text-gray-400 hover:text-white transition-colors duration-200"
                        }, "About Us")),
                        React.createElement("li", null, React.createElement("a", {
                            href: "#",
                            className: "text-gray-400 hover:text-white transition-colors duration-200"
                        }, "Careers")),
                        React.createElement("li", null, React.createElement("a", {
                            href: "#",
                            className: "text-gray-400 hover:text-white transition-colors duration-200"
                        }, "Contact"))
                    )
                ),
                React.createElement("div", null,
                    React.createElement("h4", {
                        className: "font-semibold mb-4"
                    }, "Legal"),
                    React.createElement("ul", {
                        className: "space-y-2"
                    },
                        React.createElement("li", null, React.createElement("a", {
                            href: "#",
                            className: "text-gray-400 hover:text-white transition-colors duration-200"
                        }, "Privacy Policy")),
                        React.createElement("li", null, React.createElement("a", {
                            href: "#",
                            className: "text-gray-400 hover:text-white transition-colors duration-200"
                        }, "Terms of Service")),
                        React.createElement("li", null, React.createElement("a", {
                            href: "#",
                            className: "text-gray-400 hover:text-white transition-colors duration-200"
                        }, "Cookie Policy"))
                    )
                )
            ),
            React.createElement("div", {
                className: "border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
            },
                React.createElement("p", null, "© 2023 NimbusBoard. All rights reserved.")
            )
        )
    );
};

const App = () => {
    return React.createElement("div", {
        className: "min-h-screen flex flex-col"
    },
        React.createElement(HeroSection, null),
        React.createElement(FeaturesSection, null),
        React.createElement(CustomersSection, null),
        React.createElement(PricingSection, null),
        React.createElement(Footer, null)
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));