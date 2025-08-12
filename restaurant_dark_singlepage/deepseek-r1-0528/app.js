const { useState, useEffect } = React;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };
  
  return React.createElement('nav', {
    className: `fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-3 bg-black/80 backdrop-blur-md' : 'py-5 bg-transparent'}`
  },
    React.createElement('div', { className: 'container mx-auto px-4 flex justify-between items-center' },
      React.createElement('div', { className: 'flex items-center' },
        React.createElement('div', { className: 'w-10 h-10 rounded-full bg-gradient-to-r from-amber-600 to-amber-900 mr-3' }),
        React.createElement('h1', { className: 'text-2xl font-serif font-bold text-amber-400' }, 'Nocturne')
      ),
      React.createElement('div', { className: 'hidden md:flex space-x-8' },
        ['hero', 'menu', 'reservation', 'location'].map((item) => 
          React.createElement('button', {
            key: item,
            onClick: () => scrollToSection(item),
            className: 'text-gray-300 hover:text-amber-400 transition-colors capitalize font-medium'
          }, item.replace('_', ' '))
        )
      ),
      React.createElement('button', {
        className: 'md:hidden text-gray-300',
        onClick: () => scrollToSection('reservation')
      },
        React.createElement('div', { className: 'w-8 h-8 flex flex-col justify-center' },
          React.createElement('div', { className: 'w-6 h-0.5 bg-amber-400 mb-1' }),
          React.createElement('div', { className: 'w-6 h-0.5 bg-amber-400 mb-1' }),
          React.createElement('div', { className: 'w-6 h-0.5 bg-amber-400' })
        )
      )
    )
  );
};

const Hero = () => {
  return React.createElement('section', {
    id: 'hero',
    className: 'min-h-screen flex items-center justify-center relative overflow-hidden'
  },
    React.createElement('div', { className: 'absolute inset-0 w-full h-full bg-gradient-to-b from-black/80 to-black' }),
    React.createElement('div', { className: 'absolute inset-0 w-full h-full bg-gradient-to-r from-black/30 to-black/70' }),
    React.createElement('div', { className: 'absolute inset-0 w-full h-full bg-[url("https://placehold.co/1920x1080/1a1a1a/333333?text=Nocturne")] bg-cover bg-center opacity-30' }),
    React.createElement('div', { className: 'container mx-auto px-4 z-10 text-center' },
      React.createElement('h1', { className: 'text-5xl md:text-7xl font-serif font-bold text-amber-400 mb-6 tracking-wide' }, 'Nocturne'),
      React.createElement('p', { className: 'text-xl text-gray-300 max-w-2xl mx-auto mb-10' }, 'An intimate dining experience where culinary artistry meets timeless elegance'),
      React.createElement('button', {
        className: 'px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-full transition-all transform hover:scale-105',
        onClick: () => document.getElementById('reservation').scrollIntoView({ behavior: 'smooth' })
      }, 'Reserve Your Table')
    )
  );
};

const MenuHighlights = () => {
  const menuItems = [
    {
      title: 'Truffle Risotto',
      description: 'Arborio rice with black truffle and parmesan',
      price: '$28',
      image: 'https://placehold.co/600x400/222222/444444?text=Truffle+Risotto'
    },
    {
      title: 'Seared Scallops',
      description: 'With cauliflower puree and caviar beurre blanc',
      price: '$32',
      image: 'https://placehold.co/600x400/222222/444444?text=Seared+Scallops'
    },
    {
      title: 'Duck Confit',
      description: 'Slow-cooked duck leg with cherry reduction',
      price: '$34',
      image: 'https://placehold.co/600x400/222222/444444?text=Duck+Confit'
    },
    {
      title: 'Chocolate Soufflé',
      description: 'Warm chocolate soufflé with vanilla ice cream',
      price: '$16',
      image: 'https://placehold.co/600x400/222222/444444?text=Chocolate+Soufflé'
    }
  ];
  
  return React.createElement('section', {
    id: 'menu',
    className: 'py-20 bg-gradient-to-b from-black to-gray-900'
  },
    React.createElement('div', { className: 'container mx-auto px-4' },
      React.createElement('div', { className: 'text-center mb-16' },
        React.createElement('h2', { className: 'text-3xl font-serif font-bold text-amber-400 mb-4' }, 'Menu Highlights'),
        React.createElement('div', { className: 'w-20 h-1 bg-amber-600 mx-auto' })
      ),
      React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8' },
        menuItems.map((item, index) =>
          React.createElement('div', {
            key: index,
            className: 'bg-gray-800/50 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-amber-900/30'
          },
            React.createElement('div', { className: 'h-48 overflow-hidden' },
              React.createElement('div', {
                className: 'w-full h-full bg-cover bg-center transition-transform duration-500 hover:scale-110',
                style: { backgroundImage: `url('${item.image}')` }
              })
            ),
            React.createElement('div', { className: 'p-6' },
              React.createElement('div', { className: 'flex justify-between items-start mb-2' },
                React.createElement('h3', { className: 'text-xl font-medium text-gray-100' }, item.title),
                React.createElement('span', { className: 'text-amber-400 font-medium' }, item.price)
              ),
              React.createElement('p', { className: 'text-gray-400' }, item.description)
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
    date: '',
    time: '19:00',
    guests: '2',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };
  
  return React.createElement('section', {
    id: 'reservation',
    className: 'py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden'
  },
    React.createElement('div', { className: 'absolute inset-0 w-full h-full bg-[url("https://placehold.co/1920x1080/1a1a1a/333333?text=")] bg-cover bg-center opacity-10' }),
    React.createElement('div', { className: 'container mx-auto px-4 relative z-10' },
      React.createElement('div', { className: 'max-w-4xl mx-auto' },
        React.createElement('div', { className: 'text-center mb-12' },
          React.createElement('h2', { className: 'text-3xl font-serif font-bold text-amber-400 mb-4' }, 'Reserve Your Table'),
          React.createElement('p', { className: 'text-gray-400 max-w-2xl mx-auto' }, 'Experience an unforgettable evening of culinary excellence in our intimate dining space')
        ),
        React.createElement('div', { className: 'glass p-8 rounded-2xl' },
          submitted ? 
            React.createElement('div', { className: 'text-center py-10' },
              React.createElement('div', { className: 'text-amber-400 text-5xl mb-4' }, '✓'),
              React.createElement('h3', { className: 'text-2xl font-bold text-gray-100 mb-2' }, 'Reservation Confirmed!'),
              React.createElement('p', { className: 'text-gray-400' }, 'We look forward to welcoming you to Nocturne')
            ) : 
            React.createElement('form', { onSubmit: handleSubmit },
              React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-2 gap-6 mb-6' },
                React.createElement('div', null,
                  React.createElement('label', { className: 'block text-gray-400 mb-2' }, 'Name'),
                  React.createElement('input', {
                    type: 'text',
                    name: 'name',
                    value: formData.name,
                    onChange: handleChange,
                    className: 'w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500',
                    required: true
                  })
                ),
                React.createElement('div', null,
                  React.createElement('label', { className: 'block text-gray-400 mb-2' }, 'Email'),
                  React.createElement('input', {
                    type: 'email',
                    name: 'email',
                    value: formData.email,
                    onChange: handleChange,
                    className: 'w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500',
                    required: true
                  })
                ),
                React.createElement('div', null,
                  React.createElement('label', { className: 'block text-gray-400 mb-2' }, 'Date'),
                  React.createElement('input', {
                    type: 'date',
                    name: 'date',
                    value: formData.date,
                    onChange: handleChange,
                    className: 'w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500',
                    required: true
                  })
                ),
                React.createElement('div', null,
                  React.createElement('label', { className: 'block text-gray-400 mb-2' }, 'Time'),
                  React.createElement('select', {
                    name: 'time',
                    value: formData.time,
                    onChange: handleChange,
                    className: 'w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500'
                  },
                    ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'].map(time =>
                      React.createElement('option', { key: time, value: time }, time)
                    )
                  )
                ),
                React.createElement('div', null,
                  React.createElement('label', { className: 'block text-gray-400 mb-2' }, 'Number of Guests'),
                  React.createElement('select', {
                    name: 'guests',
                    value: formData.guests,
                    onChange: handleChange,
                    className: 'w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500'
                  },
                    ['1', '2', '3', '4', '5', '6+'].map(num =>
                      React.createElement('option', { key: num, value: num }, num)
                    )
                  )
                )
              ),
              React.createElement('div', { className: 'mb-6' },
                React.createElement('label', { className: 'block text-gray-400 mb-2' }, 'Special Requests'),
                React.createElement('textarea', {
                  name: 'message',
                  value: formData.message,
                  onChange: handleChange,
                  className: 'w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500',
                  rows: 3
                })
              ),
              React.createElement('button', {
                type: 'submit',
                className: 'w-full py-4 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-all duration-300'
              }, 'Reserve Now')
            )
        )
      )
    )
  );
};

const LocationHours = () => {
  const hours = [
    { day: 'Monday - Thursday', time: '5:00 PM - 10:00 PM' },
    { day: 'Friday - Saturday', time: '5:00 PM - 11:00 PM' },
    { day: 'Sunday', time: '5:00 PM - 9:00 PM' }
  ];
  
  return React.createElement('section', {
    id: 'location',
    className: 'py-20 bg-gradient-to-b from-black to-gray-900'
  },
    React.createElement('div', { className: 'container mx-auto px-4' },
      React.createElement('div', { className: 'text-center mb-16' },
        React.createElement('h2', { className: 'text-3xl font-serif font-bold text-amber-400 mb-4' }, 'Visit Us'),
        React.createElement('div', { className: 'w-20 h-1 bg-amber-600 mx-auto' })
      ),
      React.createElement('div', { className: 'flex flex-col lg:flex-row gap-12 items-center' },
        React.createElement('div', { className: 'lg:w-1/2 h-96 rounded-2xl overflow-hidden glass' },
          React.createElement('div', {
            className: 'w-full h-full bg-cover bg-center',
            style: { backgroundImage: 'url(https://placehold.co/800x600/222222/444444?text=Map+Location)' }
          })
        ),
        React.createElement('div', { className: 'lg:w-1/2' },
          React.createElement('div', { className: 'mb-8' },
            React.createElement('h3', { className: 'text-xl font-bold text-gray-100 mb-4' }, 'Location'),
            React.createElement('p', { className: 'text-gray-400 mb-2' }, '123 Gourmet Avenue'),
            React.createElement('p', { className: 'text-gray-400 mb-2' }, 'Culinary District, NY 10001'),
            React.createElement('p', { className: 'text-gray-400' }, 'Reservations: (212) 555-1234')
          ),
          React.createElement('div', null,
            React.createElement('h3', { className: 'text-xl font-bold text-gray-100 mb-4' }, 'Hours'),
            React.createElement('div', { className: 'space-y-3' },
              hours.map((item, index) =>
                React.createElement('div', {
                  key: index,
                  className: 'flex justify-between py-2 border-b border-gray-800'
                },
                  React.createElement('span', { className: 'text-gray-300' }, item.day),
                  React.createElement('span', { className: 'text-amber-400' }, item.time)
                )
              )
            )
          )
        )
      )
    )
  );
};

const Footer = () => {
  return React.createElement('footer', {
    className: 'py-12 bg-black'
  },
    React.createElement('div', { className: 'container mx-auto px-4' },
      React.createElement('div', { className: 'flex flex-col md:flex-row justify-between items-center' },
        React.createElement('div', { className: 'mb-6 md:mb-0' },
          React.createElement('div', { className: 'flex items-center mb-4' },
            React.createElement('div', { className: 'w-8 h-8 rounded-full bg-gradient-to-r from-amber-600 to-amber-900 mr-3' }),
            React.createElement('h2', { className: 'text-xl font-serif font-bold text-amber-400' }, 'Nocturne')
          ),
          React.createElement('p', { className: 'text-gray-500 max-w-xs' }, 'Where culinary artistry meets timeless elegance')
        ),
        React.createElement('div', { className: 'flex space-x-6 mb-6 md:mb-0' },
          ['facebook', 'instagram', 'twitter'].map(social =>
            React.createElement('a', {
              key: social,
              href: '#',
              className: 'text-gray-500 hover:text-amber-400 transition-colors',
              'aria-label': social
            },
              React.createElement('div', { className: 'w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center' },
                React.createElement('div', { className: 'w-4 h-4 bg-gray-500 rounded-full' })
              )
            )
          )
        ),
        React.createElement('div', null,
          React.createElement('button', {
            onClick: () => document.getElementById('reservation').scrollIntoView({ behavior: 'smooth' }),
            className: 'px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-full transition-all'
          }, 'Book a Table')
        )
      ),
      React.createElement('div', { className: 'border-t border-gray-900 mt-12 pt-8 text-center' },
        React.createElement('p', { className: 'text-gray-600' }, '© 2023 Nocturne Bistro. All rights reserved.')
      )
    )
  );
};

const App = () => {
  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }, []);
  
  return React.createElement('div', { className: 'font-sans text-gray-300 bg-black' },
    React.createElement(Navbar, null),
    React.createElement(Hero, null),
    React.createElement(MenuHighlights, null),
    React.createElement(ReservationCTA, null),
    React.createElement(LocationHours, null),
    React.createElement(Footer, null)
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App, null));