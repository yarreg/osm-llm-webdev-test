const { useState, useEffect } = React;

// Hero Component
const Hero = () => {
  return React.createElement('section', { 
    className: 'min-h-screen flex flex-col justify-center items-center p-8 border-b-4 border-black bg-white'
  },
    React.createElement('h1', { 
      className: 'text-6xl md:text-8xl font-black mb-4 text-black tracking-tighter uppercase'
    }, 'ALEX MORGAN'),
    React.createElement('p', { 
      className: 'text-xl md:text-2xl font-bold text-black max-w-2xl text-center uppercase'
    }, 'BACKEND DEVELOPER & SYSTEMS ARCHITECT'),
    React.createElement('div', { 
      className: 'mt-12 flex flex-col md:flex-row gap-4'
    },
      React.createElement('a', { 
        href: '#projects',
        className: 'px-8 py-4 bg-black text-white font-bold text-lg border-2 border-black hover:bg-white hover:text-black transition-all duration-200 uppercase'
      }, 'VIEW WORK'),
      React.createElement('a', { 
        href: '#contact',
        className: 'px-8 py-4 bg-white text-black font-bold text-lg border-2 border-black hover:bg-black hover:text-white transition-all duration-200 uppercase'
      }, 'CONTACT ME')
    )
  );
};

// Skills Grid Component
const SkillsGrid = () => {
  const skills = [
    'Node.js', 'Python', 'Java', 'PostgreSQL', 'MongoDB', 
    'Redis', 'Docker', 'Kubernetes', 'AWS', 'GraphQL',
    'REST APIs', 'Microservices', 'System Design', 'CI/CD'
  ];
  
  return React.createElement('section', { 
    className: 'py-20 px-8 border-b-4 border-black bg-gray-50'
  },
    React.createElement('div', { 
      className: 'max-w-6xl mx-auto'
    },
      React.createElement('h2', { 
        className: 'text-4xl md:text-5xl font-black mb-12 text-black uppercase'
      }, 'TECHNICAL SKILLS'),
      React.createElement('div', { 
        className: 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'
      },
        skills.map((skill, index) => 
          React.createElement('div', { 
            key: index,
            className: 'p-6 bg-white border-2 border-black font-bold text-lg text-black hover:bg-black hover:text-white transition-all duration-200 uppercase'
          }, skill)
        )
      )
    )
  );
};

// Projects Component
const Projects = () => {
  const projects = [
    {
      title: 'DISTRIBUTED API GATEWAY',
      description: 'High-throughput API gateway handling 10M+ requests daily with auto-scaling and circuit breaker patterns.',
      technologies: ['Node.js', 'Redis', 'Docker', 'Kubernetes']
    },
    {
      title: 'REAL-TIME ANALYTICS PLATFORM',
      description: 'Stream processing system for real-time data analytics with sub-second latency on terabyte-scale data.',
      technologies: ['Python', 'Kafka', 'PostgreSQL', 'AWS']
    },
    {
      title: 'MICROSERVICES FRAMEWORK',
      description: 'Custom framework for building resilient microservices with built-in service discovery and load balancing.',
      technologies: ['Java', 'GraphQL', 'MongoDB', 'CI/CD']
    }
  ];
  
  return React.createElement('section', { 
    id: 'projects',
    className: 'py-20 px-8 border-b-4 border-black bg-white'
  },
    React.createElement('div', { 
      className: 'max-w-6xl mx-auto'
    },
      React.createElement('h2', { 
        className: 'text-4xl md:text-5xl font-black mb-12 text-black uppercase'
      }, 'FEATURED PROJECTS'),
      React.createElement('div', { 
        className: 'grid grid-cols-1 md:grid-cols-3 gap-8'
      },
        projects.map((project, index) => 
          React.createElement('div', { 
            key: index,
            className: 'border-2 border-black p-6 bg-white hover:bg-black hover:text-white transition-all duration-200'
          },
            React.createElement('h3', { 
              className: 'text-2xl font-black mb-4 uppercase'
            }, project.title),
            React.createElement('p', { 
              className: 'mb-6 font-bold'
            }, project.description),
            React.createElement('div', { 
              className: 'flex flex-wrap gap-2'
            },
              project.technologies.map((tech, techIndex) => 
                React.createElement('span', { 
                  key: techIndex,
                  className: 'px-3 py-1 bg-gray-200 text-black font-bold text-sm border border-black'
                }, tech)
              )
            )
          )
        )
      )
    )
  );
};

// Contact Component
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };
  
  return React.createElement('section', { 
    id: 'contact',
    className: 'py-20 px-8 bg-gray-50'
  },
    React.createElement('div', { 
      className: 'max-w-4xl mx-auto'
    },
      React.createElement('h2', { 
        className: 'text-4xl md:text-5xl font-black mb-12 text-black uppercase text-center'
      }, 'GET IN TOUCH'),
      React.createElement('div', { 
        className: 'grid grid-cols-1 md:grid-cols-2 gap-12'
      },
        React.createElement('div', {},
          React.createElement('p', { 
            className: 'text-lg font-bold mb-6 uppercase'
          }, 'Interested in working together or have a project in mind? Reach out directly.'),
          React.createElement('div', { 
            className: 'space-y-4'
          },
            React.createElement('div', { 
              className: 'flex items-start'
            },
              React.createElement('span', { 
                className: 'font-bold mr-3 uppercase'
              }, 'EMAIL:'),
              React.createElement('a', { 
                href: 'mailto:alex@example.com',
                className: 'font-bold hover:underline'
              }, 'alex@example.com')
            ),
            React.createElement('div', { 
              className: 'flex items-start'
            },
              React.createElement('span', { 
                className: 'font-bold mr-3 uppercase'
              }, 'LOCATION:'),
              React.createElement('span', { 
                className: 'font-bold'
              }, 'SAN FRANCISCO, CA')
            )
          )
        ),
        React.createElement('form', { 
          onSubmit: handleSubmit,
          className: 'border-2 border-black p-6 bg-white'
        },
          React.createElement('div', { 
            className: 'mb-4'
          },
            React.createElement('input', {
              type: 'text',
              name: 'name',
              value: formData.name,
              onChange: handleChange,
              placeholder: 'NAME',
              className: 'w-full p-3 border-2 border-black font-bold uppercase',
              required: true
            })
          ),
          React.createElement('div', { 
            className: 'mb-4'
          },
            React.createElement('input', {
              type: 'email',
              name: 'email',
              value: formData.email,
              onChange: handleChange,
              placeholder: 'EMAIL',
              className: 'w-full p-3 border-2 border-black font-bold uppercase',
              required: true
            })
          ),
          React.createElement('div', { 
            className: 'mb-4'
          },
            React.createElement('textarea', {
              name: 'message',
              value: formData.message,
              onChange: handleChange,
              placeholder: 'MESSAGE',
              rows: 4,
              className: 'w-full p-3 border-2 border-black font-bold uppercase',
              required: true
            })
          ),
          React.createElement('button', { 
            type: 'submit',
            className: 'w-full py-3 bg-black text-white font-bold border-2 border-black hover:bg-white hover:text-black transition-all duration-200 uppercase'
          }, 'SEND MESSAGE'),
          isSubmitted && React.createElement('div', { 
            className: 'mt-4 p-3 bg-black text-white font-bold text-center uppercase'
          }, 'MESSAGE SENT!')
        )
      )
    )
  );
};

// Footer Component
const Footer = () => {
  return React.createElement('footer', { 
    className: 'py-8 px-8 border-t-4 border-black bg-white'
  },
    React.createElement('div', { 
      className: 'max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center'
    },
      React.createElement('div', { 
        className: 'font-bold text-lg mb-4 md:mb-0 uppercase'
      }, '© 2023 ALEX MORGAN'),
      React.createElement('div', { 
        className: 'flex space-x-6'
      },
        React.createElement('a', { 
          href: 'https://github.com',
          target: '_blank',
          rel: 'noopener noreferrer',
          className: 'font-bold hover:underline uppercase'
        }, 'GITHUB'),
        React.createElement('a', { 
          href: 'https://linkedin.com',
          target: '_blank',
          rel: 'noopener noreferrer',
          className: 'font-bold hover:underline uppercase'
        }, 'LINKEDIN'),
        React.createElement('a', { 
          href: 'https://twitter.com',
          target: '_blank',
          rel: 'noopener noreferrer',
          className: 'font-bold hover:underline uppercase'
        }, 'TWITTER')
      )
    )
  );
};

// Navigation Component
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return React.createElement('nav', { 
    className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2 bg-white shadow-brutal' : 'py-4 bg-transparent'}`
  },
    React.createElement('div', { 
      className: 'max-w-6xl mx-auto px-8 flex justify-between items-center'
    },
      React.createElement('div', { 
        className: 'text-2xl font-black uppercase'
      }, 'AM'),
      React.createElement('div', { 
        className: 'hidden md:flex space-x-8'
      },
        React.createElement('button', { 
          onClick: () => scrollToSection('projects'),
          className: 'font-bold hover:underline uppercase'
        }, 'PROJECTS'),
        React.createElement('button', { 
          onClick: () => scrollToSection('contact'),
          className: 'font-bold hover:underline uppercase'
        }, 'CONTACT')
      )
    )
  );
};

// Main App Component
const App = () => {
  return React.createElement('div', { 
    className: 'font-sans antialiased text-black bg-white'
  },
    React.createElement(Navigation),
    React.createElement(Hero),
    React.createElement(SkillsGrid),
    React.createElement(Projects),
    React.createElement(Contact),
    React.createElement(Footer)
  );
};

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));