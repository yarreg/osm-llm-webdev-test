const { useState, useEffect } = React;

const App = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const skills = [
    'Python', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes',
    'AWS', 'GraphQL', 'REST APIs', 'Microservices', 'CI/CD', 'MongoDB'
  ];

  const projects = [
    {
      title: 'DISTRIBUTED CACHE SYSTEM',
      description: 'High-performance caching layer handling 1M+ requests/min with sub-millisecond latency',
      tech: ['Redis', 'Go', 'Kubernetes'],
      link: '#'
    },
    {
      title: 'REAL-TIME ANALYTICS PIPELINE',
      description: 'Processing 10TB+ daily data streams with Apache Kafka and custom aggregators',
      tech: ['Kafka', 'Python', 'PostgreSQL'],
      link: '#'
    },
    {
      title: 'MICROSERVICE MESH',
      description: 'Service orchestration platform managing 50+ microservices with auto-scaling',
      tech: ['Docker', 'Kubernetes', 'Go'],
      link: '#'
    }
  ];

  return React.createElement('div', { className: 'min-h-screen bg-black text-white' }, [
    React.createElement('nav', {
      key: 'nav',
      className: 'fixed top-0 w-full bg-black border-b border-white z-50'
    }, [
      React.createElement('div', {
        key: 'nav-container',
        className: 'max-w-7xl mx-auto px-8 py-4'
      }, [
        React.createElement('div', {
          key: 'nav-content',
          className: 'flex justify-between items-center'
        }, [
          React.createElement('h1', {
            key: 'logo',
            className: 'text-2xl font-bold tracking-wider'
          }, 'ALEX CHEN'),
          React.createElement('div', {
            key: 'nav-links',
            className: 'hidden md:flex space-x-8'
          }, [
            ['hero', 'HOME'],
            ['skills', 'SKILLS'],
            ['projects', 'PROJECTS'],
            ['contact', 'CONTACT']
          ].map(([id, label]) => 
            React.createElement('a', {
              key: id,
              href: `#${id}`,
              className: `text-sm tracking-widest hover:text-gray-400 transition-colors ${
                activeSection === id ? 'text-white' : 'text-gray-500'
              }`
            }, label)
          ))
        ])
      ])
    ]),

    React.createElement('section', {
      key: 'hero',
      id: 'hero',
      className: 'min-h-screen flex items-center justify-center px-8 pt-20'
    }, [
      React.createElement('div', {
        key: 'hero-content',
        className: 'max-w-4xl mx-auto text-center'
      }, [
        React.createElement('h1', {
          key: 'hero-title',
          className: 'text-6xl md:text-8xl font-bold tracking-tighter mb-4'
        }, 'ALEX CHEN'),
        React.createElement('h2', {
          key: 'hero-subtitle',
          className: 'text-2xl md:text-3xl text-gray-400 tracking-wide'
        }, 'BACKEND DEVELOPER'),
        React.createElement('p', {
          key: 'hero-description',
          className: 'text-lg md:text-xl text-gray-500 mt-8 max-w-2xl mx-auto leading-relaxed'
        }, 'BUILDING SCALABLE SYSTEMS AND ROBUST INFRASTRUCTURE FOR HIGH-TRAFFIC APPLICATIONS'),
        React.createElement('div', {
          key: 'hero-cta',
          className: 'mt-12'
        }, [
          React.createElement('a', {
            key: 'cta-button',
            href: '#contact',
            className: 'inline-block border-2 border-white px-8 py-4 text-sm tracking-widest hover:bg-white hover:text-black transition-all'
          }, 'GET IN TOUCH')
        ])
      ])
    ]),

    React.createElement('section', {
      key: 'skills',
      id: 'skills',
      className: 'py-20 px-8'
    }, [
      React.createElement('div', {
        key: 'skills-container',
        className: 'max-w-7xl mx-auto'
      }, [
        React.createElement('h2', {
          key: 'skills-title',
          className: 'text-4xl md:text-5xl font-bold mb-12 tracking-tighter'
        }, 'SKILLS'),
        React.createElement('div', {
          key: 'skills-grid',
          className: 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'
        }, skills.map(skill => 
          React.createElement('div', {
            key: skill,
            className: 'border border-white p-6 text-center hover:bg-white hover:text-black transition-all cursor-default'
          }, [
            React.createElement('span', {
              key: skill + '-text',
              className: 'text-sm tracking-widest font-medium'
            }, skill)
          ])
        ))
      ])
    ]),

    React.createElement('section', {
      key: 'projects',
      id: 'projects',
      className: 'py-20 px-8 bg-gray-900'
    }, [
      React.createElement('div', {
        key: 'projects-container',
        className: 'max-w-7xl mx-auto'
      }, [
        React.createElement('h2', {
          key: 'projects-title',
          className: 'text-4xl md:text-5xl font-bold mb-12 tracking-tighter'
        }, 'FEATURED PROJECTS'),
        React.createElement('div', {
          key: 'projects-grid',
          className: 'grid md:grid-cols-3 gap-8'
        }, projects.map((project, index) => 
          React.createElement('div', {
            key: index,
            className: 'border border-white p-8 hover:border-gray-400 transition-all'
          }, [
            React.createElement('h3', {
              key: project.title + '-title',
              className: 'text-xl font-bold mb-4 tracking-wide'
            }, project.title),
            React.createElement('p', {
              key: project.title + '-desc',
              className: 'text-gray-400 mb-6 leading-relaxed'
            }, project.description),
            React.createElement('div', {
              key: project.title + '-tech',
              className: 'flex flex-wrap gap-2 mb-6'
            }, project.tech.map(tech => 
              React.createElement('span', {
                key: tech,
                className: 'border border-gray-600 px-3 py-1 text-xs tracking-widest'
              }, tech)
            )),
            React.createElement('a', {
              key: project.title + '-link',
              href: project.link,
              className: 'inline-block text-sm tracking-widest hover:text-gray-400 transition-colors'
            }, 'VIEW PROJECT →')
          ])
        ))
      ])
    ]),

    React.createElement('section', {
      key: 'contact',
      id: 'contact',
      className: 'py-20 px-8'
    }, [
      React.createElement('div', {
        key: 'contact-container',
        className: 'max-w-4xl mx-auto'
      }, [
        React.createElement('h2', {
          key: 'contact-title',
          className: 'text-4xl md:text-5xl font-bold mb-12 tracking-tighter'
        }, 'CONTACT'),
        React.createElement('div', {
          key: 'contact-content',
          className: 'grid md:grid-cols-2 gap-12'
        }, [
          React.createElement('div', {
            key: 'contact-info'
          }, [
            React.createElement('h3', {
              key: 'contact-subtitle',
              className: 'text-2xl font-bold mb-6'
            }, 'LET\'S BUILD SOMETHING'),
            React.createElement('p', {
              key: 'contact-description',
              className: 'text-gray-400 mb-8 leading-relaxed'
            }, 'Available for freelance work and full-time opportunities. Specializing in distributed systems, high-performance APIs, and cloud infrastructure.'),
            React.createElement('div', {
              key: 'contact-links',
              className: 'space-y-4'
            }, [
              React.createElement('a', {
                key: 'email',
                href: 'mailto:alex@alexchen.dev',
                className: 'block text-gray-400 hover:text-white transition-colors'
              }, 'alex@alexchen.dev'),
              React.createElement('a', {
                key: 'github',
                href: 'https://github.com/alexchen',
                className: 'block text-gray-400 hover:text-white transition-colors'
              }, 'GITHUB'),
              React.createElement('a', {
                key: 'linkedin',
                href: 'https://linkedin.com/in/alexchen',
                className: 'block text-gray-400 hover:text-white transition-colors'
              }, 'LINKEDIN')
            ])
          ]),
          React.createElement('form', {
            key: 'contact-form',
            onSubmit: handleSubmit,
            className: 'space-y-6'
          }, [
            React.createElement('input', {
              key: 'name-input',
              type: 'text',
              name: 'name',
              placeholder: 'NAME',
              value: formData.name,
              onChange: handleInputChange,
              required: true,
              className: 'w-full bg-transparent border-b border-white pb-2 text-white placeholder-gray-500 focus:outline-none focus:border-gray-400 transition-colors'
            }),
            React.createElement('input', {
              key: 'email-input',
              type: 'email',
              name: 'email',
              placeholder: 'EMAIL',
              value: formData.email,
              onChange: handleInputChange,
              required: true,
              className: 'w-full bg-transparent border-b border-white pb-2 text-white placeholder-gray-500 focus:outline-none focus:border-gray-400 transition-colors'
            }),
            React.createElement('textarea', {
              key: 'message-input',
              name: 'message',
              placeholder: 'MESSAGE',
              value: formData.message,
              onChange: handleInputChange,
              required: true,
              rows: 4,
              className: 'w-full bg-transparent border-b border-white pb-2 text-white placeholder-gray-500 focus:outline-none focus:border-gray-400 transition-colors resize-none'
            }),
            React.createElement('button', {
              key: 'submit-button',
              type: 'submit',
              disabled: isSubmitted,
              className: 'w-full border border-white px-6 py-3 text-sm tracking-widest hover:bg-white hover:text-black transition-all disabled:opacity-50 disabled:cursor-not-allowed'
            }, isSubmitted ? 'SENT' : 'SEND MESSAGE')
          ])
        ])
      ])
    ]),

    React.createElement('footer', {
      key: 'footer',
      className: 'border-t border-white py-8 px-8'
    }, [
      React.createElement('div', {
        key: 'footer-content',
        className: 'max-w-7xl mx-auto text-center'
      }, [
        React.createElement('p', {
          key: 'footer-text',
          className: 'text-sm text-gray-500 tracking-widest'
        }, '© 2024 ALEX CHEN. ALL RIGHTS RESERVED.')
      ])
    ])
  ]);
};

ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));