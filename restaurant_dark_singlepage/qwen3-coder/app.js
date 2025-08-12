const { createElement: e, useState } = React;

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return e('nav', { className: 'sticky top-0 z-50 bg-gray-900/90 backdrop-blur-sm border-b border-amber-900/30' },
    e('div', { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' },
      e('div', { className: 'flex justify-between h-16' },
        e('div', { className: 'flex items-center' },
          e('div', { className: 'flex-shrink-0 flex items-center' },
            e('h1', { className: 'text-2xl font-serif font-bold text-amber-400' }, 'Nocturne')
          )
        ),
        e('div', { className: 'hidden md:flex items-center space-x-8' },
          ['Menu', 'Reservations', 'Location', 'Hours'].map((item) => 
            e('a', { 
              key: item, 
              href: `#${item.toLowerCase().replace(' ', '-')}`, 
              className: 'text-amber-100 hover:text-amber-400 transition-colors duration-300'
            }, item)
          )
        ),
        e('div', { className: 'md:hidden flex items-center' },
          e('button', {
            onClick: () => setIsMenuOpen(!isMenuOpen),
            className: 'text-amber-100 hover:text-amber-400 focus:outline-none'
          },
            e('svg', { className: 'h-6 w-6', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
              e('path', { 
                strokeLinecap: 'round', 
                strokeLinejoin: 'round', 
                strokeWidth: 2, 
                d: isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16' 
              })
            )
          )
        )
      )
    ),
    isMenuOpen && e('div', { className: 'md:hidden bg-gray-900/95 backdrop-blur-lg' },
      e('div', { className: 'px-2 pt-2 pb-3 space-y-1 sm:px-3' },
        ['Menu', 'Reservations', 'Location', 'Hours'].map((item) => 
          e('a', { 
            key: item, 
            href: `#${item.toLowerCase().replace(' ', '-')}`, 
            className: 'block px-3 py-2 rounded-md text-base font-medium text-amber-100 hover:text-amber-400 hover:bg-gray-800 transition-colors duration-300'
          }, item)
        )
      )
    )
  );
}

function Hero() {
  return e('section', { id: 'hero', className: 'relative min-h-screen flex items-center justify-center overflow-hidden' },
    e('div', { className: 'absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900/90 to-amber-900/20 z-0' },
      e('div', { className: 'absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/10 via-gray-900 to-gray-900' })
    ),
    e('div', { className: 'relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20' },
      e('div', { className: 'mb-6' },
        e('span', { className: 'inline-block px-3 py-1 text-xs font-semibold text-amber-400 bg-amber-900/30 rounded-full' }, 'Fine Dining Experience')
      ),
      e('h1', { className: 'text-4xl md:text-6xl font-serif font-bold text-amber-50 mb-6' },
        'Exquisite Cuisine in an Intimate Setting'
      ),
      e('p', { className: 'text-lg md:text-xl text-amber-100 max-w-3xl mx-auto mb-10' },
        'Experience culinary artistry at Nocturne, where every dish tells a story and every evening becomes unforgettable.'
      ),
      e('div', { className: 'flex flex-col sm:flex-row justify-center gap-4' },
        e('a', { 
          href: '#reservations', 
          className: 'px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-md transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-amber-900/30' 
        }, 'Reserve a Table'),
        e('a', { 
          href: '#menu-highlights', 
          className: 'px-8 py-3 bg-transparent border-2 border-amber-600 text-amber-400 hover:bg-amber-600/10 font-medium rounded-md transition-all duration-300' 
        }, 'View Menu')
      )
    )
  );
}

function MenuHighlights() {
  const dishes = [
    { name: 'Truffle Risotto', description: 'Arborio rice with wild mushrooms and aged parmesan', price: '$28' },
    { name: 'Seared Scallops', description: 'With cauliflower purée and pancetta crisps', price: '$32' },
    { name: 'Wagyu Beef Tenderloin', description: 'Accompanied by roasted root vegetables', price: '$48' },
    { name: 'Chocolate Soufflé', description: 'Served with vanilla bean ice cream', price: '$16' }
  ];

  return e('section', { id: 'menu-highlights', className: 'py-20 bg-gradient-to-b from-gray-900 to-gray-950' },
    e('div', { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' },
      e('div', { className: 'text-center mb-16' },
        e('h2', { className: 'text-3xl md:text-4xl font-serif font-bold text-amber-50 mb-4' }, 'Menu Highlights'),
        e('p', { className: 'text-lg text-amber-200 max-w-2xl mx-auto' }, 'Our chef-curated selections showcase the finest seasonal ingredients')
      ),
      e('div', { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8' },
        dishes.map((dish, index) => 
          e('div', { 
            key: index, 
            className: 'group bg-gray-800/30 backdrop-blur-sm border border-amber-900/30 rounded-lg overflow-hidden transition-all duration-500 hover:border-amber-600/50 hover:shadow-xl hover:shadow-amber-900/10' 
          },
            e('div', { className: 'p-6' },
              e('div', { className: 'h-48 bg-gradient-to-br from-amber-900/30 to-gray-800 rounded-lg mb-4 flex items-center justify-center' },
                e('div', { className: 'text-4xl' }, '🍽️')
              ),
              e('h3', { className: 'text-xl font-serif font-semibold text-amber-50 mb-2' }, dish.name),
              e('p', { className: 'text-amber-200 mb-4' }, dish.description),
              e('div', { className: 'flex justify-between items-center' },
                e('span', { className: 'text-lg font-bold text-amber-400' }, dish.price),
                e('button', { className: 'text-amber-400 hover:text-amber-300 transition-colors' }, 'Details')
              )
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
    email: '',
    date: '',
    time: '',
    guests: '2'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reservation request submitted for ${formData.name}`);
    // In a real app, you would send this data to your backend
  };

  return e('section', { id: 'reservations', className: 'py-20 bg-gradient-to-br from-gray-900 via-gray-900/90 to-amber-900/10' },
    e('div', { className: 'max-w-4xl mx-auto px-4 sm:px-6 lg:px-8' },
      e('div', { className: 'bg-gray-800/40 backdrop-blur-lg border border-amber-900/30 rounded-2xl overflow-hidden shadow-2xl' },
        e('div', { className: 'md:flex' },
          e('div', { className: 'md:w-1/2 p-8 md:p-12 bg-gradient-to-br from-amber-900/20 to-gray-900' },
            e('h2', { className: 'text-3xl font-serif font-bold text-amber-50 mb-4' }, 'Reserve Your Table'),
            e('p', { className: 'text-amber-200 mb-6' }, 'Experience an evening of culinary excellence. Book your table now.'),
            e('div', { className: 'space-y-4' },
              e('div', { className: 'flex items-start' },
                e('div', { className: 'flex-shrink-0 mt-1' },
                  e('div', { className: 'w-6 h-6 rounded-full bg-amber-600 flex items-center justify-center' },
                    e('span', { className: 'text-white text-xs' }, '1')
                  )
                ),
                e('div', { className: 'ml-3' },
                  e('h3', { className: 'text-amber-50 font-medium' }, 'Select Date & Time'),
                  e('p', { className: 'text-amber-200 text-sm' }, 'Choose your preferred date and time')
                )
              ),
              e('div', { className: 'flex items-start' },
                e('div', { className: 'flex-shrink-0 mt-1' },
                  e('div', { className: 'w-6 h-6 rounded-full bg-amber-600 flex items-center justify-center' },
                    e('span', { className: 'text-white text-xs' }, '2')
                  )
                ),
                e('div', { className: 'ml-3' },
                  e('h3', { className: 'text-amber-50 font-medium' }, 'Confirm Details'),
                  e('p', { className: 'text-amber-200 text-sm' }, 'Provide your contact information')
                )
              ),
              e('div', { className: 'flex items-start' },
                e('div', { className: 'flex-shrink-0 mt-1' },
                  e('div', { className: 'w-6 h-6 rounded-full bg-amber-600 flex items-center justify-center' },
                    e('span', { className: 'text-white text-xs' }, '3')
                  )
                ),
                e('div', { className: 'ml-3' },
                  e('h3', { className: 'text-amber-50 font-medium' }, 'Enjoy Your Evening'),
                  e('p', { className: 'text-amber-200 text-sm' }, 'We\'ll prepare an unforgettable experience')
                )
              )
            )
          ),
          e('div', { className: 'md:w-1/2 p-8 md:p-12' },
            e('form', { onSubmit: handleSubmit, className: 'space-y-6' },
              e('div', null,
                e('label', { htmlFor: 'name', className: 'block text-amber-100 mb-2' }, 'Full Name'),
                e('input', {
                  type: 'text',
                  id: 'name',
                  name: 'name',
                  value: formData.name,
                  onChange: handleChange,
                  required: true,
                  className: 'w-full px-4 py-2 bg-gray-700/50 border border-amber-900/50 rounded-md text-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent'
                })
              ),
              e('div', null,
                e('label', { htmlFor: 'email', className: 'block text-amber-100 mb-2' }, 'Email Address'),
                e('input', {
                  type: 'email',
                  id: 'email',
                  name: 'email',
                  value: formData.email,
                  onChange: handleChange,
                  required: true,
                  className: 'w-full px-4 py-2 bg-gray-700/50 border border-amber-900/50 rounded-md text-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent'
                })
              ),
              e('div', { className: 'grid grid-cols-2 gap-4' },
                e('div', null,
                  e('label', { htmlFor: 'date', className: 'block text-amber-100 mb-2' }, 'Date'),
                  e('input', {
                    type: 'date',
                    id: 'date',
                    name: 'date',
                    value: formData.date,
                    onChange: handleChange,
                    required: true,
                    className: 'w-full px-4 py-2 bg-gray-700/50 border border-amber-900/50 rounded-md text-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent'
                  })
                ),
                e('div', null,
                  e('label', { htmlFor: 'time', className: 'block text-amber-100 mb-2' }, 'Time'),
                  e('select', {
                    id: 'time',
                    name: 'time',
                    value: formData.time,
                    onChange: handleChange,
                    required: true,
                    className: 'w-full px-4 py-2 bg-gray-700/50 border border-amber-900/50 rounded-md text-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent'
                  },
                    e('option', { value: '' }, 'Select Time'),
                    ['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'].map(time => 
                      e('option', { key: time, value: time }, time)
                    )
                  )
                )
              ),
              e('div', null,
                e('label', { htmlFor: 'guests', className: 'block text-amber-100 mb-2' }, 'Number of Guests'),
                e('select', {
                  id: 'guests',
                  name: 'guests',
                  value: formData.guests,
                  onChange: handleChange,
                  className: 'w-full px-4 py-2 bg-gray-700/50 border border-amber-900/50 rounded-md text-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent'
                },
                  [1,2,3,4,5,6,7,8].map(num => 
                    e('option', { key: num, value: num }, `${num} ${num === 1 ? 'Guest' : 'Guests'}`)
                  )
                )
              ),
              e('button', { 
                type: 'submit', 
                className: 'w-full py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-md transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-amber-900/30' 
              }, 'Request Reservation')
            )
          )
        )
      )
    )
  );
}

function LocationHours() {
  const hours = [
    { day: 'Monday - Thursday', time: '17:00 - 22:00' },
    { day: 'Friday - Saturday', time: '17:00 - 23:00' },
    { day: 'Sunday', time: '17:00 - 21:00' }
  ];

  return e('section', { id: 'location', className: 'py-20 bg-gradient-to-b from-gray-950 to-gray-900' },
    e('div', { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' },
      e('div', { className: 'grid grid-cols-1 lg:grid-cols-2 gap-16' },
        e('div', null,
          e('h2', { className: 'text-3xl font-serif font-bold text-amber-50 mb-6' }, 'Location & Hours'),
          e('div', { className: 'mb-8' },
            e('h3', { className: 'text-xl font-semibold text-amber-100 mb-4' }, 'Our Address'),
            e('p', { className: 'text-amber-200 mb-2' }, '123 Culinary Avenue'),
            e('p', { className: 'text-amber-200 mb-4' }, 'Gourmet District, GD 10001'),
            e('div', { className: 'h-64 bg-gradient-to-br from-amber-900/20 to-gray-800 rounded-lg flex items-center justify-center' },
              e('div', { className: 'text-center' },
                e('div', { className: 'text-4xl mb-2' }, '📍'),
                e('p', { className: 'text-amber-200' }, 'Interactive Map Placeholder')
              )
            )
          )
        ),
        e('div', null,
          e('h3', { className: 'text-xl font-semibold text-amber-100 mb-4' }, 'Opening Hours'),
          e('div', { className: 'space-y-4' },
            hours.map((item, index) => 
              e('div', { key: index, className: 'flex justify-between py-3 border-b border-amber-900/30' },
                e('span', { className: 'text-amber-100' }, item.day),
                e('span', { className: 'text-amber-400 font-medium' }, item.time)
              )
            )
          ),
          e('div', { className: 'mt-8 p-6 bg-gray-800/30 backdrop-blur-sm border border-amber-900/30 rounded-lg' },
            e('h4', { className: 'text-lg font-semibold text-amber-100 mb-2' }, 'Special Events'),
            e('p', { className: 'text-amber-200' }, 'Join us every Thursday for our exclusive wine pairing dinners. Call for reservations.')
          )
        )
      )
    )
  );
}

function Footer() {
  return e('footer', { className: 'bg-gray-950 border-t border-amber-900/30 py-12' },
    e('div', { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' },
      e('div', { className: 'grid grid-cols-1 md:grid-cols-4 gap-8' },
        e('div', null,
          e('h3', { className: 'text-2xl font-serif font-bold text-amber-400 mb-4' }, 'Nocturne'),
          e('p', { className: 'text-amber-200 mb-4' }, 'Exquisite dining in an intimate setting. Where culinary artistry meets exceptional service.'),
          e('div', { className: 'flex space-x-4' },
            ['facebook', 'instagram', 'twitter'].map((social) => 
              e('a', { 
                key: social, 
                href: '#', 
                className: 'text-amber-400 hover:text-amber-300 transition-colors',
                'aria-label': social
              },
                e('div', { className: 'w-8 h-8 rounded-full bg-amber-900/30 flex items-center justify-center' },
                  e('span', { className: 'text-xs' }, social.charAt(0).toUpperCase())
                )
              )
            )
          )
        ),
        e('div', null,
          e('h4', { className: 'text-lg font-semibold text-amber-100 mb-4' }, 'Navigation'),
          e('ul', { className: 'space-y-2' },
            ['Menu', 'Reservations', 'Location', 'Hours', 'Contact'].map((item) => 
              e('li', { key: item },
                e('a', { 
                  href: `#${item.toLowerCase().replace(' ', '-')}`, 
                  className: 'text-amber-200 hover:text-amber-400 transition-colors' 
                }, item)
              )
            )
          )
        ),
        e('div', null,
          e('h4', { className: 'text-lg font-semibold text-amber-100 mb-4' }, 'Contact'),
          e('address', { className: 'not-italic text-amber-200 space-y-2' },
            e('p', null, '123 Culinary Avenue'),
            e('p', null, 'Gourmet District, GD 10001'),
            e('p', null, 'reservations@nocturne.com'),
            e('p', null, '(555) 123-4567')
          )
        ),
        e('div', null,
          e('h4', { className: 'text-lg font-semibold text-amber-100 mb-4' }, 'Newsletter'),
          e('p', { className: 'text-amber-200 mb-4' }, 'Subscribe for exclusive offers and events.'),
          e('form', { className: 'flex' },
            e('input', { 
              type: 'email', 
              placeholder: 'Your email', 
              className: 'px-4 py-2 bg-gray-800/50 border border-amber-900/50 rounded-l-md text-amber-50 w-full focus:outline-none focus:ring-1 focus:ring-amber-600' 
            }),
            e('button', { 
              type: 'submit', 
              className: 'px-4 bg-amber-600 hover:bg-amber-700 text-white rounded-r-md transition-colors' 
            }, 'Join')
          )
        )
      ),
      e('div', { className: 'border-t border-amber-900/30 mt-12 pt-8 text-center' },
        e('p', { className: 'text-amber-200' }, '© 2023 Nocturne Bistro. All rights reserved.')
      )
    )
  );
}

function App() {
  return e('div', { className: 'min-h-screen bg-gray-900 text-amber-50' },
    e(Navbar),
    e(Hero),
    e(MenuHighlights),
    e(ReservationCTA),
    e(LocationHours),
    e(Footer)
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(e(App));