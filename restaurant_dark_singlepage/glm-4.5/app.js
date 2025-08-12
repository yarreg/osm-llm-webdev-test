const { useState, useEffect, useRef } = React;

// App Component
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [reservationData, setReservationData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '2',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle scroll to detect active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'menu', 'reservation', 'location'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReservationData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after success
      setTimeout(() => {
        setReservationData({
          name: '',
          email: '',
          date: '',
          time: '',
          guests: '2',
          message: ''
        });
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  // Scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  // Navigation Component
  const Navigation = () => {
    return React.createElement('nav', {
      className: `fixed w-full z-50 transition-all duration-300 ${activeSection !== 'hero' ? 'bg-gray-900/95 backdrop-blur-md py-2 shadow-lg' : 'bg-transparent py-4'}`
    },
      React.createElement('div', { className: 'container mx-auto px-4 flex justify-between items-center' },
        React.createElement('div', { 
          className: 'text-2xl font-serif font-bold text-amber-400 cursor-pointer',
          onClick: () => scrollToSection('hero')
        }, 'Nocturne'),
        
        // Desktop Navigation
        React.createElement('div', { className: 'hidden md:flex space-x-8' },
          ['menu', 'reservation', 'location'].map(item => (
            React.createElement('button', {
              key: item,
              className: `text-sm uppercase tracking-wider transition-colors duration-300 ${activeSection === item ? 'text-amber-400' : 'text-gray-300 hover:text-amber-400'}`,
              onClick: () => scrollToSection(item)
            }, item.charAt(0).toUpperCase() + item.slice(1))
          ))
        ),
        
        // Mobile Menu Button
        React.createElement('button', {
          className: 'md:hidden text-gray-300 focus:outline-none',
          onClick: () => setIsMenuOpen(!isMenuOpen)
        },
          React.createElement('svg', {
            className: 'w-6 h-6',
            fill: 'none',
            stroke: 'currentColor',
            viewBox: '0 0 24 24',
            xmlns: 'http://www.w3.org/2000/svg'
          },
            React.createElement('path', {
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeWidth: 2,
              d: isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'
            })
          )
        )
      ),
      
      // Mobile Navigation
      isMenuOpen && React.createElement('div', { className: 'md:hidden bg-gray-900/95 backdrop-blur-md' },
        React.createElement('div', { className: 'container mx-auto px-4 py-4 flex flex-col space-y-4' },
          ['menu', 'reservation', 'location'].map(item => (
            React.createElement('button', {
              key: item,
              className: `text-left py-2 text-sm uppercase tracking-wider transition-colors duration-300 ${activeSection === item ? 'text-amber-400' : 'text-gray-300 hover:text-amber-400'}`,
              onClick: () => scrollToSection(item)
            }, item.charAt(0).toUpperCase() + item.slice(1))
          ))
        )
      )
    );
  };

  // Hero Section
  const HeroSection = () => {
    return React.createElement('section', {
      id: 'hero',
      className: 'min-h-screen flex items-center justify-center relative overflow-hidden'
    },
      // Background Gradient
      React.createElement('div', {
        className: 'absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900/20 z-0'
      }),
      
      // Decorative Elements
      React.createElement('div', { className: 'absolute top-20 left-10 w-64 h-64 bg-amber-500/10 rounded-full filter blur-3xl animate-pulse-slow' }),
      React.createElement('div', { className: 'absolute bottom-20 right-10 w-72 h-72 bg-amber-400/10 rounded-full filter blur-3xl animate-pulse-slow' }),
      
      // Content
      React.createElement('div', { className: 'container mx-auto px-4 z-10 relative' },
        React.createElement('div', { className: 'max-w-3xl mx-auto text-center' },
          React.createElement('h1', { className: 'text-5xl md:text-7xl font-serif font-bold text-white mb-6' },
            'An Exquisite ',
            React.createElement('span', { className: 'text-amber-400' }, 'Culinary'),
            ' Journey'
          ),
          React.createElement('p', { className: 'text-xl text-gray-300 mb-10 max-w-2xl mx-auto' },
            'Experience the art of fine dining in an intimate atmosphere where every dish tells a story.'
          ),
          React.createElement('div', { className: 'flex flex-col sm:flex-row justify-center gap-4' },
            React.createElement('button', {
              className: 'px-8 py-3 bg-amber-500 text-gray-900 font-medium rounded-lg hover:bg-amber-400 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-amber-500/30',
              onClick: () => scrollToSection('reservation')
            }, 'Reserve a Table'),
            React.createElement('button', {
              className: 'px-8 py-3 bg-transparent border-2 border-amber-500 text-amber-400 font-medium rounded-lg hover:bg-amber-500/10 transition-all duration-300',
              onClick: () => scrollToSection('menu')
            }, 'View Menu')
          )
        )
      ),
      
      // Scroll Indicator
      React.createElement('div', { className: 'absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce' },
        React.createElement('button', {
          className: 'text-gray-400 hover:text-amber-400 transition-colors duration-300',
          onClick: () => scrollToSection('menu')
        },
          React.createElement('svg', {
            className: 'w-8 h-8',
            fill: 'none',
            stroke: 'currentColor',
            viewBox: '0 0 24 24',
            xmlns: 'http://www.w3.org/2000/svg'
          },
            React.createElement('path', {
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeWidth: 2,
              d: 'M19 14l-7 7m0 0l-7-7m7 7V3'
            })
          )
        )
      )
    );
  };

  // Menu Section
  const MenuSection = () => {
    const menuItems = [
      {
        category: 'Starters',
        items: [
          { name: 'Truffle Arancini', description: 'Crispy risotto balls with black truffle and parmesan', price: '$18' },
          { name: 'Seared Scallops', description: 'With cauliflower puree and caviar', price: '$24' },
          { name: 'Foie Gras Torchon', description: 'With fig compote and brioche', price: '$28' }
        ]
      },
      {
        category: 'Mains',
        items: [
          { name: 'Wagyu Beef Tenderloin', description: 'With roasted vegetables and red wine jus', price: '$48' },
          { name: 'Lobster Risotto', description: 'With saffron and asparagus', price: '$42' },
          { name: 'Duck Confit', description: 'With cherry gastrique and wild rice', price: '$38' }
        ]
      },
      {
        category: 'Desserts',
        items: [
          { name: 'Chocolate Soufflé', description: 'With vanilla bean ice cream', price: '$16' },
          { name: 'Crème Brûlée', description: 'With seasonal berries', price: '$14' },
          { name: 'Tiramisu', description: 'Classic Italian with espresso', price: '$14' }
        ]
      }
    ];

    return React.createElement('section', {
      id: 'menu',
      className: 'py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative'
    },
      // Decorative Elements
      React.createElement('div', { className: 'absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent' }),
      
      React.createElement('div', { className: 'container mx-auto px-4' },
        React.createElement('div', { className: 'text-center mb-16' },
          React.createElement('h2', { className: 'text-4xl md:text-5xl font-serif font-bold text-white mb-4' }, 'Culinary Delights'),
          React.createElement('p', { className: 'text-xl text-gray-400 max-w-2xl mx-auto' },
            'Our chef-curated menu features seasonal ingredients and innovative techniques.'
          )
        ),
        
        React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-3 gap-8' },
          menuItems.map((category, index) => (
            React.createElement('div', {
              key: index,
              className: 'bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-amber-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10'
            },
              React.createElement('h3', { className: 'text-2xl font-serif font-bold text-amber-400 mb-6 pb-2 border-b border-gray-700' }, category.category),
              React.createElement('div', { className: 'space-y-6' },
                category.items.map((item, itemIndex) => (
                  React.createElement('div', { key: itemIndex },
                    React.createElement('div', { className: 'flex justify-between items-start mb-2' },
                      React.createElement('h4', { className: 'text-lg font-medium text-white' }, item.name),
                      React.createElement('span', { className: 'text-amber-400 font-medium' }, item.price)
                    ),
                    React.createElement('p', { className: 'text-gray-400' }, item.description)
                  )
                ))
              )
            )
          ))
        ),
        
        React.createElement('div', { className: 'text-center mt-16' },
          React.createElement('button', {
            className: 'px-8 py-3 bg-transparent border-2 border-amber-500 text-amber-400 font-medium rounded-lg hover:bg-amber-500/10 transition-all duration-300',
            onClick: () => scrollToSection('reservation')
          }, 'Reserve Your Experience')
        )
      )
    );
  };

  // Reservation Section
  const ReservationSection = () => {
    return React.createElement('section', {
      id: 'reservation',
      className: 'py-20 bg-gradient-to-b from-gray-800 to-gray-900 relative'
    },
      // Decorative Elements
      React.createElement('div', { className: 'absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent' }),
      React.createElement('div', { className: 'absolute inset-0 bg-[url("https://placehold.co/1920x1080/000000/FFFFFF?text=Nocturne")] bg-cover bg-center opacity-5' }),
      
      React.createElement('div', { className: 'container mx-auto px-4' },
        React.createElement('div', { className: 'max-w-4xl mx-auto' },
          React.createElement('div', { className: 'text-center mb-16' },
            React.createElement('h2', { className: 'text-4xl md:text-5xl font-serif font-bold text-white mb-4' }, 'Reserve Your Table'),
            React.createElement('p', { className: 'text-xl text-gray-400 max-w-2xl mx-auto' },
              'Join us for an unforgettable dining experience. Book your table now.'
            )
          ),
          
          React.createElement('div', { className: 'bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-700/50' },
            isSubmitted ? (
              React.createElement('div', { className: 'text-center py-12' },
                React.createElement('div', { className: 'w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6' },
                  React.createElement('svg', {
                    className: 'w-8 h-8 text-gray-900',
                    fill: 'none',
                    stroke: 'currentColor',
                    viewBox: '0 0 24 24',
                    xmlns: 'http://www.w3.org/2000/svg'
                  },
                    React.createElement('path', {
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                      strokeWidth: 2,
                      d: 'M5 13l4 4L19 7'
                    })
                  )
                ),
                React.createElement('h3', { className: 'text-2xl font-bold text-white mb-2' }, 'Reservation Confirmed!'),
                React.createElement('p', { className: 'text-gray-400' }, 'Thank you for your reservation. We look forward to welcoming you to Nocturne.')
              )
            ) : (
              React.createElement('form', { onSubmit: handleSubmit, className: 'space-y-6' },
                React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-2 gap-6' },
                  React.createElement('div', null,
                    React.createElement('label', { className: 'block text-gray-300 mb-2' }, 'Full Name'),
                    React.createElement('input', {
                      type: 'text',
                      name: 'name',
                      value: reservationData.name,
                      onChange: handleInputChange,
                      required: true,
                      className: 'w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300',
                      placeholder: 'John Doe'
                    })
                  ),
                  React.createElement('div', null,
                    React.createElement('label', { className: 'block text-gray-300 mb-2' }, 'Email Address'),
                    React.createElement('input', {
                      type: 'email',
                      name: 'email',
                      value: reservationData.email,
                      onChange: handleInputChange,
                      required: true,
                      className: 'w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300',
                      placeholder: 'john@example.com'
                    })
                  )
                ),
                
                React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-3 gap-6' },
                  React.createElement('div', null,
                    React.createElement('label', { className: 'block text-gray-300 mb-2' }, 'Date'),
                    React.createElement('input', {
                      type: 'date',
                      name: 'date',
                      value: reservationData.date,
                      onChange: handleInputChange,
                      required: true,
                      className: 'w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300'
                    })
                  ),
                  React.createElement('div', null,
                    React.createElement('label', { className: 'block text-gray-300 mb-2' }, 'Time'),
                    React.createElement('input', {
                      type: 'time',
                      name: 'time',
                      value: reservationData.time,
                      onChange: handleInputChange,
                      required: true,
                      className: 'w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300'
                    })
                  ),
                  React.createElement('div', null,
                    React.createElement('label', { className: 'block text-gray-300 mb-2' }, 'Guests'),
                    React.createElement('select', {
                      name: 'guests',
                      value: reservationData.guests,
                      onChange: handleInputChange,
                      className: 'w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300'
                    },
                      [1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                        React.createElement('option', { key: num, value: num }, `${num} ${num === 1 ? 'Person' : 'People'}`)
                      ))
                    )
                  )
                ),
                
                React.createElement('div', null,
                  React.createElement('label', { className: 'block text-gray-300 mb-2' }, 'Special Requests (Optional)'),
                  React.createElement('textarea', {
                    name: 'message',
                    value: reservationData.message,
                    onChange: handleInputChange,
                    rows: 3,
                    className: 'w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300',
                    placeholder: 'Any dietary restrictions or special occasions?'
                  })
                ),
                
                React.createElement('div', { className: 'text-center pt-4' },
                  React.createElement('button', {
                    type: 'submit',
                    disabled: isSubmitting,
                    className: 'px-8 py-3 bg-amber-500 text-gray-900 font-medium rounded-lg hover:bg-amber-400 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-amber-500/30 disabled:opacity-70 disabled:cursor-not-allowed'
                  }, isSubmitting ? 'Processing...' : 'Complete Reservation')
                )
              )
            )
          )
        )
      )
    );
  };

  // Location Section
  const LocationSection = () => {
    return React.createElement('section', {
      id: 'location',
      className: 'py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative'
    },
      // Decorative Elements
      React.createElement('div', { className: 'absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent' }),
      
      React.createElement('div', { className: 'container mx-auto px-4' },
        React.createElement('div', { className: 'max-w-6xl mx-auto' },
          React.createElement('div', { className: 'text-center mb-16' },
            React.createElement('h2', { className: 'text-4xl md:text-5xl font-serif font-bold text-white mb-4' }, 'Visit Us'),
            React.createElement('p', { className: 'text-xl text-gray-400 max-w-2xl mx-auto' },
              'Find us in the heart of the city for an exceptional dining experience.'
            )
          ),
          
          React.createElement('div', { className: 'grid grid-cols-1 lg:grid-cols-2 gap-12' },
            // Map Placeholder
            React.createElement('div', { className: 'bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 h-96' },
              React.createElement('div', {
                className: 'w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center',
                style: { backgroundImage: 'url("https://placehold.co/800x600/000000/FFFFFF?text=Map+Location")' }
              })
            ),
            
            // Location Info
            React.createElement('div', { className: 'flex flex-col justify-center' },
              React.createElement('div', { className: 'bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50' },
                React.createElement('h3', { className: 'text-2xl font-serif font-bold text-amber-400 mb-6' }, 'Restaurant Information'),
                
                React.createElement('div', { className: 'space-y-6' },
                  React.createElement('div', { className: 'flex items-start' },
                    React.createElement('div', { className: 'mr-4 mt-1 text-amber-400' },
                      React.createElement('svg', {
                        className: 'w-6 h-6',
                        fill: 'none',
                        stroke: 'currentColor',
                        viewBox: '0 0 24 24',
                        xmlns: 'http://www.w3.org/2000/svg'
                      },
                        React.createElement('path', {
                          strokeLinecap: 'round',
                          strokeLinejoin: 'round',
                          strokeWidth: 2,
                          d: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                        }),
                        React.createElement('path', {
                          strokeLinecap: 'round',
                          strokeLinejoin: 'round',
                          strokeWidth: 2,
                          d: 'M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                        })
                      )
                    ),
                    React.createElement('div', null,
                      React.createElement('h4', { className: 'text-lg font-medium text-white mb-1' }, 'Address'),
                      React.createElement('p', { className: 'text-gray-400' }, '123 Culinary Avenue, Downtown District, New York, NY 10001')
                    )
                  ),
                  
                  React.createElement('div', { className: 'flex items-start' },
                    React.createElement('div', { className: 'mr-4 mt-1 text-amber-400' },
                      React.createElement('svg', {
                        className: 'w-6 h-6',
                        fill: 'none',
                        stroke: 'currentColor',
                        viewBox: '0 0 24 24',
                        xmlns: 'http://www.w3.org/2000/svg'
                      },
                        React.createElement('path', {
                          strokeLinecap: 'round',
                          strokeLinejoin: 'round',
                          strokeWidth: 2,
                          d: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                        })
                      )
                    ),
                    React.createElement('div', null,
                      React.createElement('h4', { className: 'text-lg font-medium text-white mb-1' }, 'Hours'),
                      React.createElement('div', { className: 'text-gray-400 space-y-1' },
                        React.createElement('p', null, 'Monday - Thursday: 5pm - 10pm'),
                        React.createElement('p', null, 'Friday - Saturday: 5pm - 11pm'),
                        React.createElement('p', null, 'Sunday: 5pm - 9pm')
                      )
                    )
                  ),
                  
                  React.createElement('div', { className: 'flex items-start' },
                    React.createElement('div', { className: 'mr-4 mt-1 text-amber-400' },
                      React.createElement('svg', {
                        className: 'w-6 h-6',
                        fill: 'none',
                        stroke: 'currentColor',
                        viewBox: '0 0 24 24',
                        xmlns: 'http://www.w3.org/2000/svg'
                      },
                        React.createElement('path', {
                          strokeLinecap: 'round',
                          strokeLinejoin: 'round',
                          strokeWidth: 2,
                          d: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                        })
                      )
                    ),
                    React.createElement('div', null,
                      React.createElement('h4', { className: 'text-lg font-medium text-white mb-1' }, 'Contact'),
                      React.createElement('div', { className: 'text-gray-400 space-y-1' },
                        React.createElement('p', null, 'Phone: (212) 555-1234'),
                        React.createElement('p', null, 'Email: info@nocturne.com')
                      )
                    )
                  )
                )
              )
            )
          )
        )
      )
    );
  };

  // Footer
  const Footer = () => {
    return React.createElement('footer', { className: 'py-12 bg-gray-900 border-t border-gray-800' },
      React.createElement('div', { className: 'container mx-auto px-4' },
        React.createElement('div', { className: 'flex flex-col md:flex-row justify-between items-center' },
          React.createElement('div', { className: 'mb-6 md:mb-0' },
            React.createElement('div', { className: 'text-2xl font-serif font-bold text-amber-400 mb-2' }, 'Nocturne'),
            React.createElement('p', { className: 'text-gray-500' }, 'An exquisite culinary journey')
          ),
          
          React.createElement('div', { className: 'flex space-x-6' },
            ['facebook', 'instagram', 'twitter'].map(platform => (
              React.createElement('a', {
                key: platform,
                href: '#',
                className: 'text-gray-500 hover:text-amber-400 transition-colors duration-300',
                'aria-label': platform
              },
                React.createElement('svg', {
                  className: 'w-6 h-6',
                  fill: 'currentColor',
                  viewBox: '0 0 24 24',
                  xmlns: 'http://www.w3.org/2000/svg'
                },
                  React.createElement('path', { d: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z' })
                )
              )
            ))
          )
        ),
        
        React.createElement('div', { className: 'mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm' },
          React.createElement('p', null, '© ', new Date().getFullYear(), ' Nocturne. All rights reserved.')
        )
      )
    );
  };

  // Main App Render
  return React.createElement(React.Fragment, null,
    React.createElement(Navigation),
    React.createElement(HeroSection),
    React.createElement(MenuSection),
    React.createElement(ReservationSection),
    React.createElement(LocationSection),
    React.createElement(Footer)
  );
};

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));