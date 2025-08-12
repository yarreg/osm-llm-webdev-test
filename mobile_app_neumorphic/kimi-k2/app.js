const { useState, useEffect } = React;

// Neumorphic Button Component
const NeumorphicButton = ({ children, variant = 'primary', onClick, className = '' }) => {
  const baseClasses = "px-8 py-4 rounded-2xl font-semibold transition-all duration-300 cursor-pointer transform active:scale-95";
  const variantClasses = variant === 'primary' 
    ? "bg-gradient-to-br from-slate-50 to-slate-100 text-slate-700 shadow-[8px_8px_16px_#d1d5db,-8px_-8px_16px_#ffffff] hover:shadow-[12px_12px_24px_#d1d5db,-12px_-12px_24px_#ffffff]"
    : "bg-gradient-to-br from-slate-100 to-slate-200 text-slate-600 shadow-[inset_4px_4px_8px_#d1d5db,inset_-4px_-4px_8px_#ffffff]";
  
  return React.createElement('button', {
    className: `${baseClasses} ${variantClasses} ${className}`,
    onClick
  }, children);
};

// Neumorphic Card Component
const NeumorphicCard = ({ children, className = '', hover = false }) => {
  return React.createElement('div', {
    className: `bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-8 shadow-[12px_12px_24px_#d1d5db,-12px_-12px_24px_#ffffff] ${
      hover ? 'hover:shadow-[16px_16px_32px_#d1d5db,-16px_-16px_32px_#ffffff] transition-all duration-300' : ''
    } ${className}`
  }, children);
};

// Hero Section
const HeroSection = () => {
  return React.createElement('section', {
    className: "min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-slate-100 to-slate-200"
  }, [
    React.createElement('div', {
      key: "hero-content",
      className: "max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center"
    }, [
      React.createElement('div', {
        key: "hero-text",
        className: "text-center lg:text-left"
      }, [
        React.createElement('h1', {
          key: "title",
          className: "text-5xl md:text-7xl font-bold text-slate-800 mb-6 leading-tight"
        }, "FocusFlow"),
        React.createElement('p', {
          key: "subtitle",
          className: "text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed"
        }, "Transform your productivity with AI-powered focus sessions and smart task management"),
        React.createElement('div', {
          key: "cta-buttons",
          className: "flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
        }, [
          React.createElement(NeumorphicButton, {
            key: "primary-cta",
            variant: "primary",
            className: "text-lg"
          }, "Get Started Free"),
          React.createElement(NeumorphicButton, {
            key: "secondary-cta",
            variant: "secondary",
            className: "text-lg"
          }, "Watch Demo")
        ])
      ]),
      React.createElement('div', {
        key: "hero-image",
        className: "flex justify-center"
      }, [
        React.createElement('div', {
          className: "relative"
        }, [
          React.createElement('div', {
            className: "w-80 h-[600px] bg-gradient-to-br from-slate-50 to-slate-200 rounded-[3rem] shadow-[20px_20px_40px_#d1d5db,-20px_-20px_40px_#ffffff] flex items-center justify-center"
          }, [
            React.createElement('img', {
              src: "https://placehold.co/320x640/png?text=FocusFlow+App",
              alt: "FocusFlow App Mockup",
              className: "w-72 h-[560px] rounded-[2.5rem] object-cover"
            })
          ]),
          React.createElement('div', {
            className: "absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full shadow-lg animate-pulse"
          })
        ])
      ])
    ])
  ]);
};

// Features Section
const FeaturesSection = () => {
  const features = [
    {
      icon: "🎯",
      title: "Smart Focus Sessions",
      description: "AI-powered Pomodoro sessions that adapt to your work style"
    },
    {
      icon: "📊",
      title: "Progress Analytics",
      description: "Track your productivity trends with detailed insights"
    },
    {
      icon: "🌙",
      title: "Distraction Blocking",
      description: "Automatically silence notifications during focus time"
    },
    {
      icon: "🤝",
      title: "Team Collaboration",
      description: "Share progress and stay accountable with your team"
    }
  ];

  return React.createElement('section', {
    className: "py-20 px-4 bg-slate-100"
  }, [
    React.createElement('div', {
      key: "features-container",
      className: "max-w-6xl mx-auto"
    }, [
      React.createElement('h2', {
        key: "title",
        className: "text-4xl md:text-5xl font-bold text-center text-slate-800 mb-16"
      }, "Powerful Features"),
      React.createElement('div', {
        key: "features-grid",
        className: "grid md:grid-cols-2 gap-8"
      }, features.map((feature, index) => 
        React.createElement(NeumorphicCard, {
          key: index,
          hover: true,
          className: "text-center"
        }, [
          React.createElement('div', {
            key: "icon",
            className: "text-5xl mb-4"
          }, feature.icon),
          React.createElement('h3', {
            key: "title",
            className: "text-2xl font-bold text-slate-800 mb-3"
          }, feature.title),
          React.createElement('p', {
            key: "description",
            className: "text-slate-600 leading-relaxed"
          }, feature.description)
        ])
      ))
    ])
  ]);
};

// Testimonials Section
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Product Designer",
      content: "FocusFlow doubled my productivity in just one week. The AI sessions are incredibly smart!",
      rating: 5
    },
    {
      name: "Marcus Johnson",
      role: "Software Engineer",
      content: "Best focus app I've used. The analytics help me understand my work patterns better.",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      role: "Marketing Manager",
      content: "My team loves the collaboration features. We're all more focused and accountable.",
      rating: 5
    }
  ];

  return React.createElement('section', {
    className: "py-20 px-4 bg-gradient-to-br from-slate-100 to-slate-200"
  }, [
    React.createElement('div', {
      key: "testimonials-container",
      className: "max-w-6xl mx-auto"
    }, [
      React.createElement('h2', {
        key: "title",
        className: "text-4xl md:text-5xl font-bold text-center text-slate-800 mb-16"
      }, "What Users Say"),
      React.createElement('div', {
        key: "testimonials-grid",
        className: "grid md:grid-cols-3 gap-8"
      }, testimonials.map((testimonial, index) =>
        React.createElement(NeumorphicCard, {
          key: index,
          hover: true,
          className: "text-center"
        }, [
          React.createElement('div', {
            key: "stars",
            className: "flex justify-center mb-4"
          }, Array(testimonial.rating).fill().map((_, i) =>
            React.createElement('span', {
              key: i,
              className: "text-2xl text-yellow-400"
            }, "★")
          )),
          React.createElement('p', {
            key: "content",
            className: "text-slate-600 mb-4 italic leading-relaxed"
          }, `"${testimonial.content}"`),
          React.createElement('h4', {
            key: "name",
            className: "font-bold text-slate-800"
          }, testimonial.name),
          React.createElement('p', {
            key: "role",
            className: "text-sm text-slate-500"
          }, testimonial.role)
        ])
      ))
    ])
  ]);
};

// Download Section
const DownloadSection = () => {
  return React.createElement('section', {
    className: "py-20 px-4 bg-slate-100"
  }, [
    React.createElement('div', {
      key: "download-container",
      className: "max-w-4xl mx-auto text-center"
    }, [
      React.createElement('h2', {
        key: "title",
        className: "text-4xl md:text-5xl font-bold text-slate-800 mb-8"
      }, "Download FocusFlow Today"),
      React.createElement('p', {
        key: "subtitle",
        className: "text-xl text-slate-600 mb-12"
      }, "Available on iOS and Android. Start your productivity journey now."),
      React.createElement('div', {
        key: "download-buttons",
        className: "flex flex-col sm:flex-row gap-6 justify-center items-center"
      }, [
        React.createElement('img', {
          key: "app-store",
          src: "https://placehold.co/200x60/png?text=App+Store",
          alt: "Download on App Store",
          className: "h-16 rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
        }),
        React.createElement('img', {
          key: "google-play",
          src: "https://placehold.co/200x60/png?text=Google+Play",
          alt: "Download on Google Play",
          className: "h-16 rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
        })
      ])
    ])
  ]);
};

// FAQ Section
const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  
  const faqs = [
    {
      question: "How does FocusFlow work?",
      answer: "FocusFlow uses AI to analyze your work patterns and creates personalized focus sessions. It combines Pomodoro technique with smart notifications and progress tracking."
    },
    {
      question: "Is FocusFlow free to use?",
      answer: "Yes! FocusFlow offers a free tier with core features. Premium plans unlock advanced analytics, team collaboration, and unlimited sessions."
    },
    {
      question: "Can I use FocusFlow offline?",
      answer: "Absolutely! FocusFlow works offline for focus sessions. Your data syncs when you're back online."
    },
    {
      question: "How does team collaboration work?",
      answer: "Teams can share focus sessions, track collective progress, and maintain accountability through shared dashboards and challenges."
    }
  ];

  return React.createElement('section', {
    className: "py-20 px-4 bg-gradient-to-br from-slate-100 to-slate-200"
  }, [
    React.createElement('div', {
      key: "faq-container",
      className: "max-w-4xl mx-auto"
    }, [
      React.createElement('h2', {
        key: "title",
        className: "text-4xl md:text-5xl font-bold text-center text-slate-800 mb-16"
      }, "Frequently Asked Questions"),
      React.createElement('div', {
        key: "faq-list",
        className: "space-y-4"
      }, faqs.map((faq, index) =>
        React.createElement(NeumorphicCard, {
          key: index,
          className: "cursor-pointer",
          onClick: () => setActiveIndex(activeIndex === index ? null : index)
        }, [
          React.createElement('div', {
            key: "question",
            className: "flex justify-between items-center"
          }, [
            React.createElement('h3', {
              className: "text-xl font-bold text-slate-800"
            }, faq.question),
            React.createElement('span', {
              className: `text-2xl text-slate-500 transition-transform ${
                activeIndex === index ? 'rotate-180' : ''
              }`
            }, "▼")
          ]),
          activeIndex === index && React.createElement('p', {
            key: "answer",
            className: "mt-4 text-slate-600 leading-relaxed"
          }, faq.answer)
        ])
      ))
    ])
  ]);
};

// Footer
const Footer = () => {
  return React.createElement('footer', {
    className: "py-12 px-4 bg-slate-200"
  }, [
    React.createElement('div', {
      key: "footer-content",
      className: "max-w-6xl mx-auto text-center"
    }, [
      React.createElement('p', {
        key: "copyright",
        className: "text-slate-600"
      }, "© 2024 FocusFlow. All rights reserved."),
      React.createElement('div', {
        key: "links",
        className: "mt-4 space-x-6"
      }, [
        React.createElement('a', {
          key: "privacy",
          href: "#",
          className: "text-slate-500 hover:text-slate-700 transition-colors"
        }, "Privacy"),
        React.createElement('a', {
          key: "terms",
          href: "#",
          className: "text-slate-500 hover:text-slate-700 transition-colors"
        }, "Terms"),
        React.createElement('a', {
          key: "support",
          href: "#",
          className: "text-slate-500 hover:text-slate-700 transition-colors"
        }, "Support")
      ])
    ])
  ]);
};

// Main App Component
const App = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }, []);

  return React.createElement('div', {
    className: "min-h-screen bg-slate-100"
  }, [
    React.createElement(HeroSection, { key: "hero" }),
    React.createElement(FeaturesSection, { key: "features" }),
    React.createElement(TestimonialsSection, { key: "testimonials" }),
    React.createElement(DownloadSection, { key: "download" }),
    React.createElement(FAQSection, { key: "faq" }),
    React.createElement(Footer, { key: "footer" })
  ]);
};

// Mount the app
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));