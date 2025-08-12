const { useState, useEffect } = React;

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'Menu', href: '#menu' },
    { name: 'Reserve', href: '#reservation' },
    { name: 'Location', href: '#location' }
  ];

  return React.createElement('nav', {
    className: `fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'glass py-2 shadow-lg' : 'py-4'
    }`
  },
    React.createElement('div', { className: 'container mx-auto px-4 flex justify-between items-center' },
      React.createElement('a', {
        href: '#hero',
        className: 'text-2xl font-serif font-bold text-primary transition-colors hover:text-primary-dark'
      }, 'Nocturne'),
      
      React.createElement('div', {
        className: `md:flex space-y-4 md:space-y-0 md:space-x-8 items-center ${
          isMobileMenuOpen ? 'flex' : 'hidden md:flex'
        }`,
        style: { transition: 'all 0.3s ease' }
      },
        navItems.map(item => 
          React.createElement('a', {
            key: item.name,
            href: item.href,
            className: 'text-text-light hover:text-primary transition-colors font-medium',
            onClick: () => setIsMobileMenuOpen(false)
          }, item.name)
        )
      ),
      
      React.createElement('button', {
        className: 'md:hidden text-text-light focus:outline-none',
        onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen)
      },
        isMobileMenuOpen 
          ? React.createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', className: 'h-6 w-6', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
              React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M6 18L18 6M6 6l12 12' }))
          : React.createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', className: 'h-6 w-6', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
              React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M4 6h16M4 12h16M4 18h16' }))
      )
    )
  );
}

function Hero() {
  return React.createElement('section', {
    id: 'hero',
    className: 'relative h-screen flex items-center overflow-hidden'
  },
    React.createElement('div', { className: 'absolute inset-0 z-0' },
      React.createElement('div', { className: 'absolute inset-0 bg-gradient-to-b from-black/70 to-dark-bg/90' }),
      React.createElement('img', {
        src: 'https://placehold.co/1920x1080/0a0a0a/c6a47e?text=Elegant+Dining',
        alt: 'Upscale bistro interior',
        className: 'w-full h-full object-cover object-center'
      })
    ),
    React.createElement('div', { className: 'container mx-auto px-4 relative z-10 text-center' },
      React.createElement('h1', {
        className: 'text-6xl md:text-8xl font-serif font-bold mb-6 text-text-light tracking-tight'
      }, 'Nocturne'),
      React.createElement('p', {
        className: 'text-xl md:text-2xl text-text-gray max-w-2xl mx-auto mb-10'
      }, 'An intimate culinary journey through seasonal ingredients and refined techniques'),
      React.createElement('a', {
        href: '#reservation',
        className: 'inline-block bg-primary hover:bg-primary-dark text-dark-bg font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg'
      }, 'Reserve Your Table')
    )
  );
}

function MenuHighlights() {
  const menuItems = [
    {
      title: 'Seared Scallops',
      description: 'Day-boat scallops with truffle risotto and seasonal vegetables',
      price: '$28',
      img: 'https://placehold.co/600x400/2c1b11/c6a47e?text=Seared+Scallops'
    },
    {
      title: 'Wagyu Beef Tenderloin',
      description: '10oz American Wagyu with roasted garlic butter and heirloom carrots',
      price: '$42',
      img: 'https://placehold.co/600x400/2a1515/c6a47e?text=Wagyu+Beef'
    },
    {
      title: 'Truffle Wild Mushroom Risotto',
      description: 'Arborio rice with wild mushrooms, white truffle oil, and parmesan',
      price: '$24',
      img: 'https://placehold.co/600x400/2d2010/c6a47e?text=Truffle+Risotto'
    }
  ];

  return React.createElement('section', {
    id: 'menu',
    className: 'py-20 bg-dark-bg-2'
  },
    React.createElement('div', { className: 'container mx-auto px-4' },
      React.createElement('div', { className: 'text-center mb-16' },
        React.createElement('h2', {
          className: 'text-4xl font-serif font-bold mb-4 text-text-light'
        }, 'Culinary Highlights'),
        React.createElement('div', {
          className: 'w-24 h-1 bg-primary mx-auto mb-6'
        }),
        React.createElement('p', {
          className: 'text-text-gray max-w-2xl mx-auto'
        }, 'Seasonal ingredients transformed into unforgettable dining experiences')
      ),
      
      React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-3 gap-10' },
        menuItems.map((item, index) => 
          React.createElement('div', {
            key: index,
            className: 'group relative rounded-2xl overflow-hidden shadow-xl'
          },
            React.createElement('div', { className: 'aspect-w-3 aspect-h-2' },
              React.createElement('img', {
                src: item.img,
                alt: item.title,
                className: 'w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500'
              })
            ),
            React.createElement('div', {
              className: 'p-6 bg-dark-bg-2/90 backdrop-blur-sm'
            },
              React.createElement('div', { className: 'flex justify-between items-start mb-2' },
                React.createElement('h3', {
                  className: 'text-xl font-serif font-bold text-text-light'
                }, item.title),
                React.createElement('span', {
                  className: 'text-primary font-medium'
                }, item.price)
              ),
              React.createElement('p', {
                className: 'text-text-gray text-sm leading-relaxed'
              }, item.description)
            )
          )
        )
      )
    )
  );
}

function ReservationCTA() {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    guests: 2
  });
  const [success, setSuccess] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.time) newErrors.time = 'Time is required';
    if (formData.guests < 1) newErrors.guests = 'At least 1 guest required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSuccess('Reservation confirmed! We\'ll see you soon.');
      setFormData({ name: '', date: '', time: '', guests: 2 });
      setTimeout(() => setSuccess(''), 5000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  return React.createElement('section', {
    id: 'reservation',
    className: 'py-20 relative overflow-hidden'
  },
    React.createElement('div', { className: 'absolute inset-0 z-0' },
      React.createElement('div', { className: 'absolute inset-0 bg-gradient-to-b from-dark-bg to-dark-bg-2' }),
      React.createElement('img', {
        src: 'https://placehold.co/1920x1080/0d0d0d/c6a47e?text=Elegant+Table+Setting',
        alt: 'Restaurant table setting',
        className: 'w-full h-full object-cover object-center opacity-20'
      })
    ),
    React.createElement('div', { className: 'container mx-auto px-4 relative z-10' },
      React.createElement('div', { className: 'max-w-3xl mx-auto glass rounded-3xl p-8 md:p-12' },
        React.createElement('h2', {
          className: 'text-3xl md:text-4xl font-serif font-bold text-center mb-2 text-text-light'
        }, 'Reserve Your Table'),
        React.createElement('p', {
          className: 'text-center text-text-gray mb-8'
        }, 'Experience our intimate dining room for an unforgettable evening'),
        
        success && React.createElement('div', {
          className: 'mb-6 p-4 bg-green-900/30 border border-green-700/50 rounded-lg text-center text-green-200'
        }, success),

        React.createElement('form', { onSubmit: handleSubmit },
          React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-2 gap-6 mb-6' },
            React.createElement('div', null,
              React.createElement('label', {
                htmlFor: 'name',
                className: 'block text-sm font-medium text-text-gray mb-1'
              }, 'Full Name'),
              React.createElement('input', {
                type: 'text',
                id: 'name',
                name: 'name',
                value: formData.name,
                onChange: handleChange,
                className: `w-full px-4 py-3 rounded-lg bg-dark-bg-2 border ${
                  errors.name ? 'border-red-500' : 'border-gray-700'
                } text-text-light focus:outline-none focus:ring-2 focus:ring-primary/50`
              }),
              errors.name && React.createElement('p', {
                className: 'mt-1 text-red-400 text-sm'
              }, errors.name)
            ),
            React.createElement('div', null,
              React.createElement('label', {
                htmlFor: 'guests',
                className: 'block text-sm font-medium text-text-gray mb-1'
              }, 'Guests'),
              React.createElement('input', {
                type: 'number',
                id: 'guests',
                name: 'guests',
                min: '1',
                max: '10',
                value: formData.guests,
                onChange: handleChange,
                className: `w-full px-4 py-3 rounded-lg bg-dark-bg-2 border ${
                  errors.guests ? 'border-red-500' : 'border-gray-700'
                } text-text-light focus:outline-none focus:ring-2 focus:ring-primary/50`
              }),
              errors.guests && React.createElement('p', {
                className: 'mt-1 text-red-400 text-sm'
              }, errors.guests)
            )
          ),
          
          React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-2 gap-6 mb-8' },
            React.createElement('div', null,
              React.createElement('label', {
                htmlFor: 'date',
                className: 'block text-sm font-medium text-text-gray mb-1'
              }, 'Date'),
              React.createElement('input', {
                type: 'date',
                id: 'date',
                name: 'date',
                value: formData.date,
                onChange: handleChange,
                className: `w-full px-4 py-3 rounded-lg bg-dark-bg-2 border ${
                  errors.date ? 'border-red-500' : 'border-gray-700'
                } text-text-light focus:outline-none focus:ring-2 focus:ring-primary/50`
              }),
              errors.date && React.createElement('p', {
                className: 'mt-1 text-red-400 text-sm'
              }, errors.date)
            ),
            React.createElement('div', null,
              React.createElement('label', {
                htmlFor: 'time',
                className: 'block text-sm font-medium text-text-gray mb-1'
              }, 'Time'),
              React.createElement('input', {
                type: 'time',
                id: 'time',
                name: 'time',
                value: formData.time,
                onChange: handleChange,
                className: `w-full px-4 py-3 rounded-lg bg-dark-bg-2 border ${
                  errors.time ? 'border-red-500' : 'border-gray-700'
                } text-text-light focus:outline-none focus:ring-2 focus:ring-primary/50`
              }),
              errors.time && React.createElement('p', {
                className: 'mt-1 text-red-400 text-sm'
              }, errors.time)
            )
          ),
          
          React.createElement('button', {
            type: 'submit',
            className: 'w-full bg-primary hover:bg-primary-dark text-dark-bg font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg'
          }, 'Confirm Reservation')
        )
      )
    )
  );
}

function LocationHours() {
  return React.createElement('section', {
    id: 'location',
    className: 'py-20 bg-dark-bg-2'
  },
    React.createElement('div', { className: 'container mx-auto px-4' },
      React.createElement('div', { className: 'grid grid-cols-1 lg:grid-cols-2 gap-12 items-center' },
        React.createElement('div', null,
          React.createElement('h2', {
            className: 'text-4xl font-serif font-bold mb-8 text-text-light'
          }, 'Visit Us'),
          React.createElement('div', { className: 'mb-8' },
            React.createElement('h3', {
              className: 'text-xl font-semibold text-text-light mb-2'
            }, 'Address'),
            React.createElement('p', {
              className: 'text-text-gray'
            }, '123 Midnight Lane, Downtown, City 10001')
          ),
          React.createElement('div', { className: 'mb-8' },
            React.createElement('h3', {
              className: 'text-xl font-semibold text-text-light mb-2'
            }, 'Hours'),
            React.createElement('div', { className: 'space-y-2' },
              React.createElement('p', { className: 'text-text-gray' }, 'Monday - Thursday: 5pm - 10pm'),
              React.createElement('p', { className: 'text-text-gray' }, 'Friday - Saturday: 5pm - 11pm'),
              React.createElement('p', { className: 'text-text-gray' }, 'Sunday: Closed')
            )
          ),
          React.createElement('div', null,
            React.createElement('h3', {
              className: 'text-xl font-semibold text-text-light mb-2'
            }, 'Contact'),
            React.createElement('p', { className: 'text-text-gray' }, 'reservations@nocturne.com'),
            React.createElement('p', { className: 'text-text-gray' }, '+1 (212) 555-7890')
          )
        ),
        
        React.createElement('div', { className: 'rounded-2xl overflow-hidden shadow-2xl' },
          React.createElement('img', {
            src: 'https://placehold.co/600x400/1a1a1a/c6a47e?text=Restaurant+Exterior',
            alt: 'Nocturne restaurant exterior',
            className: 'w-full h-auto object-cover'
          })
        )
      )
    )
  );
}

function Footer() {
  return React.createElement('footer', {
    className: 'py-10 bg-dark-bg border-t border-gray-800'
  },
    React.createElement('div', { className: 'container mx-auto px-4' },
      React.createElement('div', { className: 'flex flex-col md:flex-row justify-between items-center' },
        React.createElement('div', { className: 'mb-4 md:mb-0' },
          React.createElement('a', {
            href: '#hero',
            className: 'text-2xl font-serif font-bold text-primary'
          }, 'Nocturne')
        ),
        React.createElement('div', { className: 'text-text-gray text-sm' },
          React.createElement('p', null, '© ', new Date().getFullYear(), ' Nocturne Bistro. All rights reserved.')
        ),
        React.createElement('div', { className: 'flex space-x-6 mt-4 md:mt-0' },
          ['Instagram', 'Facebook', 'Twitter'].map(platform =>
            React.createElement('a', {
              key: platform,
              href: `#${platform.toLowerCase()}`,
              className: 'text-text-gray hover:text-primary transition-colors',
              'aria-label': platform
            }, platform)
          )
        )
      )
    )
  );
}

function App() {
  return React.createElement(React.Fragment, null,
    Navbar(),
    Hero(),
    MenuHighlights(),
    ReservationCTA(),
    LocationHours(),
    Footer()
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));