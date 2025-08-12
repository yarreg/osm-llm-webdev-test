const { useState, useEffect } = React;

// Navigation Component
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return React.createElement('nav', {
    className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/10 backdrop-blur-md border-b border-white/10' : ''}`
  }, [
    React.createElement('div', { 
      className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
      key: 'nav-container'
    }, [
      React.createElement('div', {
        className: 'flex justify-between items-center h-16',
        key: 'nav-content'
      }, [
        React.createElement('div', {
          className: 'flex items-center space-x-2',
          key: 'logo'
        }, [
          React.createElement('div', {
            className: 'w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex items-center justify-center',
            key: 'logo-icon'
          }, [
            React.createElement('span', {
              className: 'text-white font-bold text-sm',
              key: 'logo-text'
            }, 'N')
          ]),
          React.createElement('span', {
            className: 'text-white font-bold text-xl',
            key: 'brand-name'
          }, 'NimbusBoard')
        ]),
        React.createElement('div', {
          className: 'hidden md:flex items-center space-x-8',
          key: 'nav-links'
        }, [
          React.createElement('a', {
            href: '#features',
            className: 'text-white/80 hover:text-white transition-colors',
            key: 'features-link'
          }, 'Features'),
          React.createElement('a', {
            href: '#pricing',
            className: 'text-white/80 hover:text-white transition-colors',
            key: 'pricing-link'
          }, 'Pricing'),
          React.createElement('a', {
            href: '#customers',
            className: 'text-white/80 hover:text-white transition-colors',
            key: 'customers-link'
          }, 'Customers'),
          React.createElement('button', {
            className: 'px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all',
            key: 'login-btn'
          }, 'Sign In')
        ])
      ])
    ])
  ]);
};

// Hero Section Component
const HeroSection = () => {
  return React.createElement('section', {
    className: 'relative min-h-screen flex items-center justify-center overflow-hidden',
    id: 'hero'
  }, [
    // Background Elements
    React.createElement('div', {
      className: 'absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900',
      key: 'bg-gradient'
    }),
    React.createElement('div', {
      className: 'absolute inset-0',
      key: 'bg-pattern'
    }, [
      React.createElement('div', {
        className: 'absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl',
        key: 'blur-1'
      }),
      React.createElement('div', {
        className: 'absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl',
        key: 'blur-2'
      })
    ]),
    
    // Hero Content
    React.createElement('div', {
      className: 'relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center',
      key: 'hero-content'
    }, [
      React.createElement('h1', {
        className: 'text-5xl md:text-7xl font-bold text-white mb-6 leading-tight',
        key: 'hero-title'
      }, [
        'Team Dashboards That ',
        React.createElement('span', {
          className: 'bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent',
          key: 'highlight'
        }, 'Actually Work')
      ]),
      React.createElement('p', {
        className: 'text-xl md:text-2xl text-white/70 mb-8 max-w-3xl mx-auto',
        key: 'hero-subtitle'
      }, 'Transform chaos into clarity with intelligent dashboards that give your team the insights they need, when they need them.'),
      
      // CTA Buttons
      React.createElement('div', {
        className: 'flex flex-col sm:flex-row gap-4 justify-center items-center',
        key: 'cta-buttons'
      }, [
        React.createElement('button', {
          className: 'px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-purple-500/25 transform hover:-translate-y-1 transition-all duration-300',
          key: 'primary-cta'
        }, 'Start Free Trial'),
        React.createElement('button', {
          className: 'px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transform hover:-translate-y-1 transition-all duration-300',
          key: 'secondary-cta'
        }, 'Watch Demo')
      ]),
      
      // Hero Image Placeholder
      React.createElement('div', {
        className: 'mt-16 relative',
        key: 'hero-image-container'
      }, [
        React.createElement('div', {
          className: 'glass-card rounded-2xl p-2 max-w-4xl mx-auto',
          key: 'hero-card'
        }, [
          React.createElement('img', {
            src: 'https://placehold.co/800x450/1e293b/ffffff?text=NimbusBoard+Dashboard',
            alt: 'NimbusBoard Dashboard Preview',
            className: 'rounded-xl w-full h-auto',
            key: 'hero-img'
          })
        ])
      ])
    ])
  ]);
};

// Features Section Component
const FeaturesSection = () => {
  const features = [
    {
      icon: '📊',
      title: 'Real-time Analytics',
      description: 'Get instant insights with live data streams and customizable metrics that matter to your team.'
    },
    {
      icon: '🎯',
      title: 'Smart Goals',
      description: 'AI-powered goal tracking that adapts to your team\'s pace and keeps everyone aligned.'
    },
    {
      icon: '🔗',
      title: 'Seamless Integrations',
      description: 'Connect with 100+ tools your team already uses. No more switching between apps.'
    },
    {
      icon: '🔒',
      title: 'Enterprise Security',
      description: 'Bank-level encryption and SOC 2 compliance keep your data safe and private.'
    }
  ];

  return React.createElement('section', {
    className: 'py-24 relative',
    id: 'features'
  }, [
    React.createElement('div', {
      className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
      key: 'features-container'
    }, [
      React.createElement('div', {
        className: 'text-center mb-16',
        key: 'features-header'
      }, [
        React.createElement('h2', {
          className: 'text-4xl md:text-5xl font-bold text-white mb-4'
        }, 'Everything You Need to Succeed'),
        React.createElement('p', {
          className: 'text-xl text-white/60 max-w-2xl mx-auto'
        }, 'Powerful features designed for modern teams who demand more from their tools.')
      ]),
      
      React.createElement('div', {
        className: 'grid grid-cols-1 md:grid-cols-2 gap-8',
        key: 'features-grid'
      }, features.map((feature, index) => 
        React.createElement('div', {
          className: 'glass-card rounded-2xl p-8 hover:transform hover:-translate-y-2 transition-all duration-300',
          key: `feature-${index}`
        }, [
          React.createElement('div', {
            className: 'text-4xl mb-4',
            key: `feature-icon-${index}`
          }, feature.icon),
          React.createElement('h3', {
            className: 'text-2xl font-semibold text-white mb-3',
            key: `feature-title-${index}`
          }, feature.title),
          React.createElement('p', {
            className: 'text-white/70',
            key: `feature-desc-${index}`
          }, feature.description)
        ])
      ))
    ])
  ]);
};

// Pricing Section Component
const PricingSection = () => {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: '/month',
      description: 'Perfect for small teams getting started',
      features: ['Up to 5 team members', 'Basic dashboards', '1 integration', 'Community support'],
      cta: 'Get Started Free',
      popular: false
    },
    {
      name: 'Pro',
      price: '$12',
      period: '/month',
      description: 'Best for growing teams',
      features: ['Up to 50 team members', 'Advanced analytics', 'Unlimited integrations', 'Priority support', 'Custom branding'],
      cta: 'Start Pro Trial',
      popular: true
    },
    {
      name: 'Team',
      price: '$29',
      period: '/month',
      description: 'For large organizations',
      features: ['Unlimited team members', 'Enterprise analytics', 'Advanced security', 'Dedicated support', 'Custom integrations', 'SLA guarantee'],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  return React.createElement('section', {
    className: 'py-24 relative',
    id: 'pricing'
  }, [
    React.createElement('div', {
      className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
      key: 'pricing-container'
    }, [
      React.createElement('div', {
        className: 'text-center mb-16',
        key: 'pricing-header'
      }, [
        React.createElement('h2', {
          className: 'text-4xl md:text-5xl font-bold text-white mb-4'
        }, 'Simple, Transparent Pricing'),
        React.createElement('p', {
          className: 'text-xl text-white/60 max-w-2xl mx-auto'
        }, 'Choose the plan that fits your team. Upgrade or downgrade anytime.')
      ]),
      
      React.createElement('div', {
        className: 'grid grid-cols-1 md:grid-cols-3 gap-8',
        key: 'pricing-grid'
      }, plans.map((plan, index) => 
        React.createElement('div', {
          className: `glass-card rounded-2xl p-8 relative ${plan.popular ? 'ring-2 ring-purple-500' : ''} hover:transform hover:-translate-y-2 transition-all duration-300`,
          key: `plan-${index}`
        }, [
          plan.popular && React.createElement('div', {
            className: 'absolute -top-4 left-1/2 transform -translate-x-1/2',
            key: 'popular-badge'
          }, [
            React.createElement('span', {
              className: 'bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold'
            }, 'Most Popular')
          ]),
          
          React.createElement('div', {
            key: 'plan-content'
          }, [
            React.createElement('h3', {
              className: 'text-2xl font-bold text-white mb-2'
            }, plan.name),
            React.createElement('div', {
              className: 'mb-4'
            }, [
              React.createElement('span', {
                className: 'text-4xl font-bold text-white'
              }, plan.price),
              React.createElement('span', {
                className: 'text-white/60'
              }, plan.period)
            ]),
            React.createElement('p', {
              className: 'text-white/70 mb-6'
            }, plan.description),
            
            React.createElement('ul', {
              className: 'space-y-3 mb-8',
              key: 'features-list'
            }, plan.features.map((feature, featureIndex) => 
              React.createElement('li', {
                className: 'flex items-center text-white/80',
                key: `feature-${index}-${featureIndex}`
              }, [
                React.createElement('svg', {
                  className: 'w-5 h-5 text-green-400 mr-3',
                  fill: 'none',
                  stroke: 'currentColor',
                  viewBox: '0 0 24 24',
                  key: 'check-icon'
                }, [
                  React.createElement('path', {
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: 2,
                    d: 'M5 13l4 4L19 7'
                  })
                ]),
                feature
              ])
            )),
            
            React.createElement('button', {
              className: `w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                plan.popular 
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:shadow-lg hover:shadow-purple-500/25' 
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`
            }, plan.cta)
          ])
        ])
      ))
    ])
  ]);
};

// Customer Logos Section
const CustomerLogos = () => {
  const logos = [
    { name: 'TechCorp', placeholder: 'TC' },
    { name: 'StartupXYZ', placeholder: 'SX' },
    { name: 'InnovateLabs', placeholder: 'IL' },
    { name: 'DataFlow', placeholder: 'DF' },
    { name: 'CloudSync', placeholder: 'CS' },
    { name: 'GrowthCo', placeholder: 'GC' }
  ];

  return React.createElement('section', {
    className: 'py-16 relative',
    id: 'customers'
  }, [
    React.createElement('div', {
      className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
      key: 'customers-container'
    }, [
      React.createElement('div', {
        className: 'text-center mb-12',
        key: 'customers-header'
      }, [
        React.createElement('h2', {
          className: 'text-3xl font-bold text-white mb-4'
        }, 'Trusted by Teams Like Yours'),
        React.createElement('p', {
          className: 'text-white/60'
        }, 'Join thousands of teams who\'ve transformed their workflow')
      ]),
      
      React.createElement('div', {
        className: 'flex flex-wrap justify-center items-center gap-8',
        key: 'logos-container'
      }, logos.map((logo, index) => 
        React.createElement('div', {
          className: 'glass-card rounded-xl px-8 py-4 text-white/60 font-semibold',
          key: `logo-${index}`
        }, logo.placeholder)
      ))
    ])
  ]);
};

// Footer Component
const Footer = () => {
  return React.createElement('footer', {
    className: 'py-12 border-t border-white/10'
  }, [
    React.createElement('div', {
      className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
      key: 'footer-container'
    }, [
      React.createElement('div', {
        className: 'grid grid-cols-1 md:grid-cols-4 gap-8',
        key: 'footer-grid'
      }, [
        React.createElement('div', {
          key: 'footer-brand'
        }, [
          React.createElement('div', {
            className: 'flex items-center space-x-2 mb-4'
          }, [
            React.createElement('div', {
              className: 'w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex items-center justify-center'
            }, [
              React.createElement('span', {
                className: 'text-white font-bold text-sm'
              }, 'N')
            ]),
            React.createElement('span', {
              className: 'text-white font-bold text-xl'
            }, 'NimbusBoard')
          ]),
          React.createElement('p', {
            className: 'text-white/60 text-sm'
          }, 'Transforming team productivity, one dashboard at a time.')
        ]),
        
        React.createElement('div', {
          key: 'footer-product'
        }, [
          React.createElement('h4', {
            className: 'text-white font-semibold mb-4'
          }, 'Product'),
          React.createElement('ul', {
            className: 'space-y-2'
          }, [
            React.createElement('li', {
              key: 'features-link'
            }, React.createElement('a', {
              href: '#features',
              className: 'text-white/60 hover:text-white text-sm transition-colors'
            }, 'Features')),
            React.createElement('li', {
              key: 'pricing-link'
            }, React.createElement('a', {
              href: '#pricing',
              className: 'text-white/60 hover:text-white text-sm transition-colors'
            }, 'Pricing')),
            React.createElement('li', {
              key: 'integrations-link'
            }, React.createElement('a', {
              href: '#',
              className: 'text-white/60 hover:text-white text-sm transition-colors'
            }, 'Integrations'))
          ])
        ]),
        
        React.createElement('div', {
          key: 'footer-company'
        }, [
          React.createElement('h4', {
            className: 'text-white font-semibold mb-4'
          }, 'Company'),
          React.createElement('ul', {
            className: 'space-y-2'
          }, [
            React.createElement('li', {
              key: 'about-link'
            }, React.createElement('a', {
              href: '#',
              className: 'text-white/60 hover:text-white text-sm transition-colors'
            }, 'About')),
            React.createElement('li', {
              key: 'blog-link'
            }, React.createElement('a', {
              href: '#',
              className: 'text-white/60 hover:text-white text-sm transition-colors'
            }, 'Blog')),
            React.createElement('li', {
              key: 'careers-link'
            }, React.createElement('a', {
              href: '#',
              className: 'text-white/60 hover:text-white text-sm transition-colors'
            }, 'Careers'))
          ])
        ]),
        
        React.createElement('div', {
          key: 'footer-support'
        }, [
          React.createElement('h4', {
            className: 'text-white font-semibold mb-4'
          }, 'Support'),
          React.createElement('ul', {
            className: 'space-y-2'
          }, [
            React.createElement('li', {
              key: 'help-link'
            }, React.createElement('a', {
              href: '#',
              className: 'text-white/60 hover:text-white text-sm transition-colors'
            }, 'Help Center')),
            React.createElement('li', {
              key: 'contact-link'
            }, React.createElement('a', {
              href: '#',
              className: 'text-white/60 hover:text-white text-sm transition-colors'
            }, 'Contact')),
            React.createElement('li', {
              key: 'status-link'
            }, React.createElement('a', {
              href: '#',
              className: 'text-white/60 hover:text-white text-sm transition-colors'
            }, 'Status'))
          ])
        ])
      ]),
      
      React.createElement('div', {
        className: 'border-t border-white/10 mt-8 pt-8 text-center',
        key: 'footer-bottom'
      }, [
        React.createElement('p', {
          className: 'text-white/60 text-sm'
        }, '© 2024 NimbusBoard. All rights reserved.')
      ])
    ])
  ]);
};

// Main App Component
const App = () => {
  return React.createElement('div', {
    className: 'min-h-screen bg-slate-900'
  }, [
    React.createElement(Navigation, { key: 'navigation' }),
    React.createElement(HeroSection, { key: 'hero' }),
    React.createElement(FeaturesSection, { key: 'features' }),
    React.createElement(PricingSection, { key: 'pricing' }),
    React.createElement(CustomerLogos, { key: 'customers' }),
    React.createElement(Footer, { key: 'footer' })
  ]);
};

// Mount the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));