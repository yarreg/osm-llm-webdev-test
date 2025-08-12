const { createElement: e, useState, useEffect } = React;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return e('nav', {
    className: `fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/90 backdrop-blur-md py-2 shadow-lg' : 'bg-transparent py-4'}`,
    'aria-label': "Main navigation"
  },
    e('div', { className: 'container mx-auto px-6 flex justify-between items-center' },
      e('div', { className: 'flex items-center' },
        e('h1', { className: 'text-2xl font-bold text-amber-400' }, 'Nocturne'),
      ),
      e('div', { className: 'hidden md:flex space-x-8' },
        ['Home', 'Menu', 'Reservations', 'Contact'].map(item =>
          e('a', {
            key: item,
            href: `#${item.toLowerCase()}`,
            className: 'text-gray-300 hover:text-amber-400 transition-colors',
            'aria-label': `${item} section`
          }, item)
        )
      ),
      e('button', {
        className: 'md:hidden text-gray-300 focus:outline-none',
        onClick: () => {},
        'aria-label': "Mobile menu toggle"
      }, '☰')
    )
  );
};

const Hero = () => e('section', {
  id: 'home',
  className: 'relative h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden',
  'aria-label': "Hero section"
},
  e('div', { className: 'absolute inset-0 bg-black/50 z-10' }),
  e('div', {
    className: 'absolute inset-0 bg-gradient-to-b from-amber-400/10 to-gray-900 z-0',
    style: { backgroundImage: 'linear-gradient(to bottom, rgba(251, 191, 36, 0.1), rgba(17, 24, 39, 1))' }
  }),
  e('div', { className: 'container mx-auto px-6 z-20 text-center' },
    e('h1', { className: 'text-5xl md:text-7xl font-bold mb-6' }, 'Nocturne Bistro'),
    e('p', { className: 'text-xl md:text-2xl mb-8 max-w-2xl mx-auto' }, 'Elevated dining in an intimate atmosphere'),
    e('div', { className: 'flex justify-center space-x-4' },
      e('a', {
        href: '#reservations',
        className: 'bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold py-3 px-8 rounded-full transition-colors',
        'aria-label': "Make a reservation"
      }, 'Reserve a Table'),
      e('a', {
        href: '#menu',
        className: 'border border-amber-400 hover:bg-amber-400/10 text-amber-400 font-bold py-3 px-8 rounded-full transition-colors',
        'aria-label': "View our menu"
      }, 'View Menu')
    )
  )
);

const MenuHighlights = () => {
  const menuItems = [
    { name: 'Truffle Risotto', price: '$28', desc: 'Arborio rice, wild mushrooms, white truffle oil' },
    { name: 'Duck Confit', price: '$34', desc: 'Slow-cooked duck leg, cherry reduction, roasted vegetables' },
    { name: 'Chocolate Soufflé', price: '$14', desc: 'Warm chocolate center, vanilla bean ice cream' },
  ];

  return e('section', {
    id: 'menu',
    className: 'py-20 bg-gray-900 text-white',
    'aria-label': "Menu highlights section"
  },
    e('div', { className: 'container mx-auto px-6' },
      e('div', { className: 'text-center mb-16' },
        e('h2', { className: 'text-4xl font-bold mb-4' }, 'Menu Highlights'),
        e('div', { className: 'w-20 h-1 bg-amber-400 mx-auto' })
      ),
      e('div', { className: 'grid md:grid-cols-3 gap-10' },
        menuItems.map((item, index) =>
          e('article', {
            key: index,
            className: 'bg-gray-800/50 p-8 rounded-lg hover:bg-gray-800/70 transition-all duration-300 border border-gray-700 hover:border-amber-400/30',
            'aria-label': `${item.name} menu item`
          },
            e('div', { className: 'flex justify-between items-start mb-4' },
              e('h3', { className: 'text-xl font-bold text-amber-400' }, item.name),
              e('span', { className: 'text-amber-400 font-medium' }, item.price)
            ),
            e('p', { className: 'text-gray-300' }, item.desc)
          )
        )
      ),
      e('div', { className: 'text-center mt-12' },
        e('a', {
          href: '#',
          className: 'inline-block border border-amber-400 text-amber-400 hover:bg-amber-400/10 font-bold py-3 px-8 rounded-full transition-colors',
          'aria-label': "View full menu"
        }, 'View Full Menu')
      )
    )
  );
};

const ReservationCTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    guests: '2',
    time: '19:00'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reservation request received for ${formData.name} on ${formData.date} at ${formData.time}`);
  };

  return e('section', {
    id: 'reservations',
    className: 'py-20 bg-gray-800 text-white',
    'aria-label': "Reservation section"
  },
    e('div', { className: 'container mx-auto px-6' },
      e('div', { className: 'max-w-4xl mx-auto bg-gray-900/50 rounded-xl p-8 md:p-12 border border-gray-700' },
        e('div', { className: 'text-center mb-10' },
          e('h2', { className: 'text-4xl font-bold mb-4' }, 'Make a Reservation'),
          e('p', { className: 'text-gray-300 max-w-2xl mx-auto' }, 'Experience our culinary excellence in an intimate setting. Reserve your table today.')
        ),
        e('form', { onSubmit: handleSubmit, className: 'grid md:grid-cols-2 gap-6', 'aria-label': "Reservation form" },
          e('div', null,
            e('label', { htmlFor: 'name', className: 'block text-gray-300 mb-2' }, 'Full Name'),
            e('input', {
              type: 'text',
              id: 'name',
              name: 'name',
              value: formData.name,
              onChange: handleChange,
              required: true,
              className: 'w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-400',
              'aria-required': "true"
            })
          ),
          e('div', null,
            e('label', { htmlFor: 'email', className: 'block text-gray-300 mb-2' }, 'Email'),
            e('input', {
              type: 'email',
              id: 'email',
              name: 'email',
              value: formData.email,
              onChange: handleChange,
              required: true,
              className: 'w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-400',
              'aria-required': "true"
            })
          ),
          e('div', null,
            e('label', { htmlFor: 'date', className: 'block text-gray-300 mb-2' }, 'Date'),
            e('input', {
              type: 'date',
              id: 'date',
              name: 'date',
              value: formData.date,
              onChange: handleChange,
              required: true,
              className: 'w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-400',
              'aria-required': "true"
            })
          ),
          e('div', null,
            e('label', { htmlFor: 'time', className: 'block text-gray-300 mb-2' }, 'Time'),
            e('select', {
              id: 'time',
              name: 'time',
              value: formData.time,
              onChange: handleChange,
              required: true,
              className: 'w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-400',
              'aria-required': "true"
            },
              ['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'].map(time =>
                e('option', { key: time, value: time }, time)
              )
            )
          ),
          e('div', null,
            e('label', { htmlFor: 'guests', className: 'block text-gray-300 mb-2' }, 'Number of Guests'),
            e('select', {
              id: 'guests',
              name: 'guests',
              value: formData.guests,
              onChange: handleChange,
              required: true,
              className: 'w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-400',
              'aria-required': "true"
            },
              [1, 2, 3, 4, 5, 6, 7, 8].map(num =>
                e('option', { key: num, value: num }, num)
              )
            )
          ),
          e('div', { className: 'md:col-span-2' },
            e('button', {
              type: 'submit',
              className: 'w-full bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold py-4 px-6 rounded-lg transition-colors',
              'aria-label': "Submit reservation"
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
    { day: 'Sunday', time: '5:00 PM - 9:00 PM' },
  ];

  return e('section', {
    id: 'contact',
    className: 'py-20 bg-gray-900 text-white',
    'aria-label': "Location and hours section"
  },
    e('div', { className: 'container mx-auto px-6' },
      e('div', { className: 'grid md:grid-cols-2 gap-12 items-center' },
        e('div', null,
          e('h2', { className: 'text-4xl font-bold mb-6' }, 'Location & Hours'),
          e('div', { className: 'space-y-6' },
            e('div', null,
              e('h3', { className: 'text-xl font-bold text-amber-400 mb-2' }, 'Address'),
              e('p', { className: 'text-gray-300' }, '123 Gourmet Avenue'),
              e('p', { className: 'text-gray-300' }, 'Culinary District, NY 10001')
            ),
            e('div', null,
              e('h3', { className: 'text-xl font-bold text-amber-400 mb-2' }, 'Hours'),
              e('div', { className: 'space-y-2' },
                hours.map((item, index) =>
                  e('div', { key: index, className: 'flex justify-between' },
                    e('span', { className: 'text-gray-300' }, item.day),
                    e('span', { className: 'text-gray-300' }, item.time)
                  )
                )
              )
            ),
            e('div', null,
              e('h3', { className: 'text-xl font-bold text-amber-400 mb-2' }, 'Contact'),
              e('p', { className: 'text-gray-300' }, 'reservations@nocturne.example'),
              e('p', { className: 'text-gray-300' }, '(212) 555-7890')
            )
          )
        ),
        e('div', { className: 'h-96 bg-gray-800 rounded-xl overflow-hidden' },
          e('iframe', {
            src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215573291234!2d-73.9878449242393!3d40.74844097138948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1712345678901!5m2!1sen!2sus',
            width: '100%',
            height: '100%',
            style: { border: 0 },
            allowFullScreen: '',
            loading: 'lazy',
            title: 'Nocturne Bistro Location',
            'aria-label': 'Map showing restaurant location'
          })
        )
      )
    )
  );
};

const Footer = () => e('footer', {
  className: 'bg-gray-900 text-gray-400 py-12 border-t border-gray-800',
  'aria-label': "Footer"
},
  e('div', { className: 'container mx-auto px-6' },
    e('div', { className: 'grid md:grid-cols-4 gap-8' },
      e('div', { className: 'md:col-span-2' },
        e('h3', { className: 'text-2xl font-bold text-amber-400 mb-4' }, 'Nocturne'),
        e('p', { className: 'mb-4' }, 'An intimate dining experience where culinary artistry meets elegant ambiance.'),
        e('div', { className: 'flex space-x-4' },
          ['instagram', 'twitter', 'facebook'].map(social =>
            e('a', {
              key: social,
              href: '#',
              className: 'text-gray-400 hover:text-amber-400 transition-colors',
              'aria-label': social
            }, e('span', { className: 'text-xl' }, social === 'instagram' ? '📷' : social === 'twitter' ? '🐦' : '👍'))
          )
        )
      ),
      e('div', null,
        e('h4', { className: 'text-lg font-bold text-white mb-4' }, 'Quick Links'),
        e('ul', { className: 'space-y-2' },
          ['Home', 'Menu', 'Reservations', 'About Us'].map(item =>
            e('li', { key: item },
              e('a', {
                href: `#${item.toLowerCase().replace(' ', '')}`,
                className: 'hover:text-amber-400 transition-colors',
                'aria-label': `${item} link`
              }, item)
            )
          )
        )
      ),
      e('div', null,
        e('h4', { className: 'text-lg font-bold text-white mb-4' }, 'Newsletter'),
        e('p', { className: 'mb-4' }, 'Subscribe for exclusive offers and events'),
        e('form', { className: 'flex', 'aria-label': "Newsletter subscription form" },
          e('input', {
            type: 'email',
            placeholder: 'Your email',
            className: 'bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-amber-400 flex-grow',
            'aria-label': "Email input"
          }),
          e('button', {
            type: 'submit',
            className: 'bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold px-4 py-2 rounded-r-lg transition-colors',
            'aria-label': "Subscribe button"
          }, 'Join')
        )
      )
    ),
    e('div', { className: 'border-t border-gray-800 mt-12 pt-8 text-center' },
      e('p', null, '© 2023 Nocturne Bistro. All rights reserved.')
    )
  )
);

const App = () => e('div', { className: 'bg-gray-900 text-white' },
  e(Navbar, null),
  e(Hero, null),
  e(MenuHighlights, null),
  e(ReservationCTA, null),
  e(LocationHours, null),
  e(Footer, null)
);

ReactDOM.createRoot(document.getElementById('root')).render(e(App));