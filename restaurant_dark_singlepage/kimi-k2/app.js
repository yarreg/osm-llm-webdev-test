const { useState, useEffect, useRef } = React;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return React.createElement('nav', {
    className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`
  },
    React.createElement('div', { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' },
      React.createElement('div', { className: 'flex justify-between items-center py-4' },
        React.createElement('div', { className: 'text-2xl font-bold text-white tracking-wider' }, 'NOCTURNE'),
        
        React.createElement('div', { className: 'hidden md:flex space-x-8' },
          React.createElement('button', {
            onClick: () => scrollToSection('hero'),
            className: 'text-gray-300 hover:text-white transition-colors duration-200'
          }, 'Home'),
          React.createElement('button', {
            onClick: () => scrollToSection('menu'),
            className: 'text-gray-300 hover:text-white transition-colors duration-200'
          }, 'Menu'),
          React.createElement('button', {
            onClick: () => scrollToSection('reservation'),
            className: 'text-gray-300 hover:text-white transition-colors duration-200'
          }, 'Reservations'),
          React.createElement('button', {
            onClick: () => scrollToSection('location'),
            className: 'text-gray-300 hover:text-white transition-colors duration-200'
          }, 'Location')
        ),

        React.createElement('button', {
          className: 'md:hidden text-white',
          onClick: () => setIsMenuOpen(!isMenuOpen)
        },
          React.createElement('div', { className: 'w-6 h-0.5 bg-white mb-1' }),
          React.createElement('div', { className: 'w-6 h-0.5 bg-white mb-1' }),
          React.createElement('div', { className: 'w-6 h-0.5 bg-white' })
        )
      ),

      isMenuOpen && React.createElement('div', { className: 'md:hidden bg-slate-900/95 backdrop-blur-md rounded-lg mt-2' },
        React.createElement('div', { className: 'px-4 py-2 space-y-2' },
          React.createElement('button', {
            onClick: () => scrollToSection('hero'),
            className: 'block w-full text-left text-gray-300 hover:text-white py-2'
          }, 'Home'),
          React.createElement('button', {
            onClick: () => scrollToSection('menu'),
            className: 'block w-full text-left text-gray-300 hover:text-white py-2'
          }, 'Menu'),
          React.createElement('button', {
            onClick: () => scrollToSection('reservation'),
            className: 'block w-full text-left text-gray-300 hover:text-white py-2'
          }, 'Reservations'),
          React.createElement('button', {
            onClick: () => scrollToSection('location'),
            className: 'block w-full text-left text-gray-300 hover:text-white py-2'
          }, 'Location')
        )
      )
    )
  );
};

const Hero = () => {
  return React.createElement('section', {
    id: 'hero',
    className: 'relative min-h-screen flex items-center justify-center overflow-hidden'
  },
    React.createElement('div', { className: 'absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' }),
    React.createElement('div', { className: 'absolute inset-0 opacity-20' },
      React.createElement('div', { className: 'absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl' }),
      React.createElement('div', { className: 'absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-3xl' })
    ),
    
    React.createElement('div', { className: 'relative z-10 text-center px-4 max-w-4xl mx-auto' },
      React.createElement('h1', {
        className: 'text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight',
        style: { fontFamily: 'serif' }
      }, 'Experience Culinary Excellence'),
      React.createElement('p', {
        className: 'text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed'
      }, 'Where every dish tells a story and every moment becomes a memory'),
      React.createElement('div', { className: 'flex flex-col sm:flex-row gap-4 justify-center' },
        React.createElement('button', {
          onClick: () => document.getElementById('reservation').scrollIntoView({ behavior: 'smooth' }),
          className: 'px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-500 text-white font-semibold rounded-lg hover:from-amber-700 hover:to-amber-600 transition-all duration-300 transform hover:scale-105'
        }, 'Reserve Your Table'),
        React.createElement('button', {
          onClick: () => document.getElementById('menu').scrollIntoView({ behavior: 'smooth' }),
          className: 'px-8 py-4 border border-gray-500 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300'
        }, 'Explore Menu')
      )
    )
  );
};

const MenuHighlights = () => {
  const dishes = [
    {
      name: 'Pan-Seared Scallops',
      description: 'With saffron risotto and microgreens',
      price: '$42',
      image: 'https://placehold.co/400x300/1e293b/64748b?text=Scallops'
    },
    {
      name: 'Wagyu Tenderloin',
      description: 'Grade A5 with truffle butter and roasted vegetables',
      price: '$85',
      image: 'https://placehold.co/400x300/1e293b/64748b?text=Wagyu'
    },
    {
      name: 'Lobster Thermidor',
      description: 'Fresh Atlantic lobster with cognac cream sauce',
      price: '$68',
      image: 'https://placehold.co/400x300/1e293b/64748b?text=Lobster'
    }
  ];

  return React.createElement('section', {
    id: 'menu',
    className: 'py-20 px-4 bg-slate-900'
  },
    React.createElement('div', { className: 'max-w-7xl mx-auto' },
      React.createElement('div', { className: 'text-center mb-16' },
        React.createElement('h2', {
          className: 'text-4xl md:text-5xl font-bold text-white mb-4',
          style: { fontFamily: 'serif' }
        }, 'Signature Dishes'),
        React.createElement('p', { className: 'text-gray-400 text-lg' }, 'Crafted with passion, served with perfection')
      ),

      React.createElement('div', { className: 'grid md:grid-cols-3 gap-8' },
        dishes.map((dish, index) =>
          React.createElement('div', {
            key: index,
            className: 'group relative overflow-hidden rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-amber-500/50 transition-all duration-300'
          },
            React.createElement('div', { className: 'aspect-w-16 aspect-h-12 overflow-hidden' },
              React.createElement('img', {
                src: dish.image,
                alt: dish.name,
                className: 'w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300'
              })
            ),
            React.createElement('div', { className: 'p-6' },
              React.createElement('h3', { className: 'text-xl font-semibold text-white mb-2' }, dish.name),
              React.createElement('p', { className: 'text-gray-400 mb-4' }, dish.description),
              React.createElement('div', { className: 'flex justify-between items-center' },
                React.createElement('span', { className: 'text-2xl font-bold text-amber-500' }, dish.price),
                React.createElement('button', { className: 'text-sm text-amber-500 hover:text-amber-400 transition-colors' }, 'Learn More →')
              )
            )
          )
        )
      )
    )
  );
};

const ReservationCTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return React.createElement('section', {
    id: 'reservation',
    className: 'py-20 px-4 bg-gradient-to-br from-slate-800 to-slate-900'
  },
    React.createElement('div', { className: 'max-w-4xl mx-auto' },
      React.createElement('div', { className: 'text-center mb-12' },
        React.createElement('h2', {
          className: 'text-4xl md:text-5xl font-bold text-white mb-4',
          style: { fontFamily: 'serif' }
        }, 'Reserve Your Experience'),
        React.createElement('p', { className: 'text-gray-400 text-lg' }, 'Book your table for an unforgettable evening')
      ),

      React.createElement('div', { className: 'bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50' },
        isSubmitted ? 
          React.createElement('div', { className: 'text-center py-12' },
            React.createElement('div', { className: 'text-green-500 text-6xl mb-4' }, '✓'),
            React.createElement('h3', { className: 'text-2xl text-white mb-2' }, 'Reservation Confirmed!'),
            React.createElement('p', { className: 'text-gray-400' }, 'We\'ll contact you shortly to confirm your booking.')
          ) :
          React.createElement('form', { onSubmit: handleSubmit, className: 'space-y-6' },
            React.createElement('div', { className: 'grid md:grid-cols-2 gap-6' },
              React.createElement('div', null,
                React.createElement('label', { className: 'block text-sm font-medium text-gray-300 mb-2' }, 'Full Name'),
                React.createElement('input', {
                  type: 'text',
                  name: 'name',
                  required: true,
                  value: formData.name,
                  onChange: handleChange,
                  className: 'w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 transition-colors'
                })
              ),
              React.createElement('div', null,
                React.createElement('label', { className: 'block text-sm font-medium text-gray-300 mb-2' }, 'Email'),
                React.createElement('input', {
                  type: 'email',
                  name: 'email',
                  required: true,
                  value: formData.email,
                  onChange: handleChange,
                  className: 'w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 transition-colors'
                })
              )
            ),
            React.createElement('div', { className: 'grid md:grid-cols-2 gap-6' },
              React.createElement('div', null,
                React.createElement('label', { className: 'block text-sm font-medium text-gray-300 mb-2' }, 'Phone'),
                React.createElement('input', {
                  type: 'tel',
                  name: 'phone',
                  required: true,
                  value: formData.phone,
                  onChange: handleChange,
                  className: 'w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 transition-colors'
                })
              ),
              React.createElement('div', null,
                React.createElement('label', { className: 'block text-sm font-medium text-gray-300 mb-2' }, 'Number of Guests'),
                React.createElement('select', {
                  name: 'guests',
                  value: formData.guests,
                  onChange: handleChange,
                  className: 'w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-amber-500 transition-colors'
                },
                  [1, 2, 3, 4, 5, 6, 7, 8].map(num =>
                    React.createElement('option', { key: num, value: num }, `${num} ${num === 1 ? 'Guest' : 'Guests'}`)
                  )
                )
              )
            ),
            React.createElement('div', { className: 'grid md:grid-cols-2 gap-6' },
              React.createElement('div', null,
                React.createElement('label', { className: 'block text-sm font-medium text-gray-300 mb-2' }, 'Date'),
                React.createElement('input', {
                  type: 'date',
                  name: 'date',
                  required: true,
                  value: formData.date,
                  onChange: handleChange,
                  min: new Date().toISOString().split('T')[0],
                  className: 'w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-amber-500 transition-colors'
                })
              ),
              React.createElement('div', null,
                React.createElement('label', { className: 'block text-sm font-medium text-gray-300 mb-2' }, 'Time'),
                React.createElement('select', {
                  name: 'time',
                  required: true,
                  value: formData.time,
                  onChange: handleChange,
                  className: 'w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-amber-500 transition-colors'
                },
                  ['5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM'].map(time =>
                    React.createElement('option', { key: time, value: time }, time)
                  )
                )
              )
            ),
            React.createElement('button', {
              type: 'submit',
              className: 'w-full py-4 bg-gradient-to-r from-amber-600 to-amber-500 text-white font-semibold rounded-lg hover:from-amber-700 hover:to-amber-600 transition-all duration-300 transform hover:scale-105'
            }, 'Reserve Table')
          )
      )
    )
  );
};

const LocationHours = () => {
  return React.createElement('section', {
    id: 'location',
    className: 'py-20 px-4 bg-slate-900'
  },
    React.createElement('div', { className: 'max-w-7xl mx-auto' },
      React.createElement('div', { className: 'text-center mb-12' },
        React.createElement('h2', {
          className: 'text-4xl md:text-5xl font-bold text-white mb-4',
          style: { fontFamily: 'serif' }
        }, 'Visit Us'),
        React.createElement('p', { className: 'text-gray-400 text-lg' }, 'Find us in the heart of downtown')
      ),

      React.createElement('div', { className: 'grid lg:grid-cols-2 gap-12' },
        React.createElement('div', { className: 'space-y-8' },
          React.createElement('div', { className: 'bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50' },
            React.createElement('h3', { className: 'text-2xl font-semibold text-white mb-4' }, 'Location'),
            React.createElement('p', { className: 'text-gray-300 mb-2' }, '123 Culinary Avenue'),
            React.createElement('p', { className: 'text-gray-300 mb-2' }, 'Downtown District'),
            React.createElement('p', { className: 'text-gray-300' }, 'New York, NY 10001')
          ),

          React.createElement('div', { className: 'bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50' },
            React.createElement('h3', { className: 'text-2xl font-semibold text-white mb-4' }, 'Hours of Operation'),
            React.createElement('div', { className: 'space-y-2 text-gray-300' },
              React.createElement('div', { className: 'flex justify-between' },
                React.createElement('span', null, 'Monday - Thursday'),
                React.createElement('span', null, '5:00 PM - 10:00 PM')
              ),
              React.createElement('div', { className: 'flex justify-between' },
                React.createElement('span', null, 'Friday - Saturday'),
                React.createElement('span', null, '5:00 PM - 11:00 PM')
              ),
              React.createElement('div', { className: 'flex justify-between' },
                React.createElement('span', null, 'Sunday'),
                React.createElement('span', null, '5:00 PM - 9:00 PM')
              )
            )
          ),

          React.createElement('div', { className: 'bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50' },
            React.createElement('h3', { className: 'text-2xl font-semibold text-white mb-4' }, 'Contact'),
            React.createElement('p', { className: 'text-gray-300 mb-2' }, 'Phone: (555) 123-NOCT'),
            React.createElement('p', { className: 'text-gray-300' }, 'Email: reservations@nocturne.com')
          )
        ),

        React.createElement('div', { className: 'relative' },
          React.createElement('div', { className: 'aspect-w-16 aspect-h-12 rounded-xl overflow-hidden' },
            React.createElement('img', {
              src: 'https://placehold.co/600x400/1e293b/64748b?text=Nocturne+Location',
              alt: 'Nocturne Restaurant',
              className: 'w-full h-full object-cover rounded-xl'
            })
          ),
          React.createElement('div', { className: 'absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent rounded-xl' })
        )
      )
    )
  );
};

const Footer = () => {
  return React.createElement('footer', {
    className: 'bg-slate-900 border-t border-slate-800'
  },
    React.createElement('div', { className: 'max-w-7xl mx-auto px-4 py-12' },
      React.createElement('div', { className: 'grid md:grid-cols-4 gap-8' },
        React.createElement('div', null,
          React.createElement('h3', { className: 'text-2xl font-bold text-white mb-4' }, 'NOCTURNE'),
          React.createElement('p', { className: 'text-gray-400' }, 'Experience the art of fine dining')
        ),
        React.createElement('div', null,
          React.createElement('h4', { className: 'text-white font-semibold mb-4' }, 'Quick Links'),
          React.createElement('ul', { className: 'space-y-2 text-gray-400' },
            React.createElement('li', null, React.createElement('a', { href: '#hero', className: 'hover:text-white transition-colors' }, 'Home')),
            React.createElement('li', null, React.createElement('a', { href: '#menu', className: 'hover:text-white transition-colors' }, 'Menu')),
            React.createElement('li', null, React.createElement('a', { href: '#reservation', className: 'hover:text-white transition-colors' }, 'Reservations'))
          )
        ),
        React.createElement('div', null,
          React.createElement('h4', { className: 'text-white font-semibold mb-4' }, 'Connect'),
          React.createElement('ul', { className: 'space-y-2 text-gray-400' },
            React.createElement('li', null, React.createElement('a', { href: '#', className: 'hover:text-white transition-colors' }, 'Instagram')),
            React.createElement('li', null, React.createElement('a', { href: '#', className: 'hover:text-white transition-colors' }, 'Facebook')),
            React.createElement('li', null, React.createElement('a', { href: '#', className: 'hover:text-white transition-colors' }, 'Twitter'))
          )
        ),
        React.createElement('div', null,
          React.createElement('h4', { className: 'text-white font-semibold mb-4' }, 'Newsletter'),
          React.createElement('input', {
            type: 'email',
            placeholder: 'Enter your email',
            className: 'w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500'
          })
        )
      ),
      React.createElement('div', { className: 'border-t border-slate-800 mt-8 pt-8 text-center' },
        React.createElement('p', { className: 'text-gray-400' }, '© 2024 Nocturne. All rights reserved.')
      )
    )
  );
};

const App = () => {
  return React.createElement('div', { className: 'min-h-screen bg-slate-900' },
    React.createElement(Navbar),
    React.createElement(Hero),
    React.createElement(MenuHighlights),
    React.createElement(ReservationCTA),
    React.createElement(LocationHours),
    React.createElement(Footer)
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));