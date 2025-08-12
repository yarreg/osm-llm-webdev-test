// app.js – Nocturne landing page (React 18, no JSX)
// Global variables: React, ReactDOM

// Utility: smooth scroll to element by id
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

// Navbar component – sticky, glass effect
function Navbar() {
  const navItems = [
    { name: 'Home', target: 'hero' },
    { name: 'Menu', target: 'menu' },
    { name: 'Reserve', target: 'reservation' },
    { name: 'Location', target: 'location' },
  ];

  const handleClick = (e, target) => {
    e.preventDefault();
    scrollToSection(target);
  };

  return React.createElement(
    'nav',
    { className: 'sticky top-0 z-50 w-full backdrop-blur-md bg-black/30 border-b border-white/10' },
    React.createElement(
      'div',
      { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16' },
      // Logo
      React.createElement(
        'a',
        { href: '#', className: 'text-2xl font-bold text-white hover:text-gray-300', onClick: (e) => handleClick(e, 'hero') },
        'Nocturne'
      ),
      // Nav links
      React.createElement(
        'div',
        { className: 'hidden md:flex space-x-6' },
        navItems.map(item =>
          React.createElement(
            'a',
            {
              key: item.target,
              href: `#${item.target}`,
              className: 'text-gray-200 hover:text-white transition-colors',
              onClick: (e) => handleClick(e, item.target),
            },
            item.name
          )
        )
      )
    )
  );
}

// Hero section – full‑screen background with CTA
function Hero() {
  return React.createElement(
    'section',
    { id: 'hero', className: 'relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 to-black' },
    // Background image placeholder (dark overlay)
    React.createElement('img', {
      src: 'https://placehold.co/1200x800/111111/555555?text=Restaurant+Ambiance',
      alt: 'Restaurant ambience',
      className: 'absolute inset-0 w-full h-full object-cover opacity-30',
    }),
    // Content
    React.createElement(
      'div',
      { className: 'relative z-10 text-center max-w-2xl mx-auto p-4' },
      React.createElement('h1', { className: 'text-5xl md:text-6xl font-extrabold text-white mb-4' }, 'Elevate Your Evening'),
      React.createElement('p', { className: 'text-lg md:text-xl text-gray-300 mb-8' }, 'Fine dining in the heart of the city – a symphony of flavors after dark.'),
      React.createElement(
        'button',
        {
          className: 'bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-3 px-6 rounded-lg transition',
          onClick: (e) => { e.preventDefault(); scrollToSection('reservation'); },
        },
        'Reserve a Table'
      )
    )
  );
}

// Menu highlights – three featured dishes
function MenuHighlights() {
  const dishes = [
    { title: 'Seared Scallops', img: 'https://placehold.co/400x300/222222/eeeeee?text=Scallops' },
    { title: 'Truffle Risotto', img: 'https://placehold.co/400x300/222222/eeeeee?text=Risotto' },
    { title: 'Chocolate Soufflé', img: 'https://placehold.co/400x300/222222/eeeeee?text=Soufflé' },
  ];

  return React.createElement(
    'section',
    { id: 'menu', className: 'py-20 bg-gray-900' },
    React.createElement(
      'div',
      { className: 'max-w-6xl mx-auto px-4 sm:px-6 lg:px-8' },
      React.createElement('h2', { className: 'text-3xl md:text-4xl font-bold text-center text-white mb-12' }, 'Signature Dishes'),
      React.createElement(
        'div',
        { className: 'grid gap-8 md:grid-cols-3' },
        dishes.map((dish, i) =>
          React.createElement(
            'div',
            { key: i, className: 'glass p-4 rounded-xl overflow-hidden transform hover:scale-105 transition' },
            React.createElement('img', { src: dish.img, alt: dish.title, className: 'w-full h-48 object-cover rounded-md mb-4' }),
            React.createElement('h3', { className: 'text-xl font-semibold text-white' }, dish.title)
          )
        )
      )
    )
  );
}

// Reservation CTA – form with validation
function ReservationCTA() {
  const [form, setForm] = React.useState({ name: '', email: '', date: '', time: '', guests: '' });
  const [status, setStatus] = React.useState({ submitted: false, error: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    if (!form.name || !form.email || !form.date || !form.time || !form.guests) {
      return 'All fields are required.';
    }
    // Simple email regex
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(form.email)) return 'Please enter a valid email.';
    const selectedDate = new Date(form.date);
    const today = new Date();
    today.setHours(0,0,0,0);
    if (selectedDate < today) return 'Reservation date cannot be in the past.';
    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      setStatus({ submitted: false, error: err });
      return;
    }
    // Simulate async submission
    setStatus({ submitted: true, error: '' });
    // Reset form after a short delay
    setTimeout(() => setForm({ name: '', email: '', date: '', time: '', guests: '' }), 2000);
  };

  return React.createElement(
    'section',
    { id: 'reservation', className: 'py-20 bg-gray-800' },
    React.createElement(
      'div',
      { className: 'max-w-2xl mx-auto px-4 sm:px-6 lg:px-8' },
      React.createElement('h2', { className: 'text-3xl md:text-4xl font-bold text-center text-white mb-8' }, 'Reserve Your Table'),
      status.submitted
        ? React.createElement('p', { className: 'text-green-400 text-center mb-4' }, 'Thank you! Your reservation request has been received.')
        : null,
      status.error
        ? React.createElement('p', { className: 'text-red-400 text-center mb-4' }, status.error)
        : null,
      React.createElement(
        'form',
        { onSubmit: handleSubmit, className: 'space-y-4' },
        // Name
        React.createElement(
          'div',
          null,
          React.createElement('label', { htmlFor: 'name', className: 'block text-sm font-medium text-gray-200' }, 'Name'),
          React.createElement('input', {
            type: 'text',
            id: 'name',
            name: 'name',
            value: form.name,
            onChange: handleChange,
            required: true,
            className: 'mt-1 block w-full rounded-md bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500',
          })
        ),
        // Email
        React.createElement(
          'div',
          null,
          React.createElement('label', { htmlFor: 'email', className: 'block text-sm font-medium text-gray-200' }, 'Email'),
          React.createElement('input', {
            type: 'email',
            id: 'email',
            name: 'email',
            value: form.email,
            onChange: handleChange,
            required: true,
            className: 'mt-1 block w-full rounded-md bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500',
          })
        ),
        // Date & Time (grid)
        React.createElement(
          'div',
          { className: 'grid grid-cols-1 md:grid-cols-2 gap-4' },
          // Date
          React.createElement(
            'div',
            null,
            React.createElement('label', { htmlFor: 'date', className: 'block text-sm font-medium text-gray-200' }, 'Date'),
            React.createElement('input', {
              type: 'date',
              id: 'date',
              name: 'date',
              value: form.date,
              onChange: handleChange,
              required: true,
              className: 'mt-1 block w-full rounded-md bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500',
            })
          ),
          // Time
          React.createElement(
            'div',
            null,
            React.createElement('label', { htmlFor: 'time', className: 'block text-sm font-medium text-gray-200' }, 'Time'),
            React.createElement('input', {
              type: 'time',
              id: 'time',
              name: 'time',
              value: form.time,
              onChange: handleChange,
              required: true,
              className: 'mt-1 block w-full rounded-md bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500',
            })
          )
        ),
        // Guests
        React.createElement(
          'div',
          null,
          React.createElement('label', { htmlFor: 'guests', className: 'block text-sm font-medium text-gray-200' }, 'Number of Guests'),
          React.createElement('input', {
            type: 'number',
            id: 'guests',
            name: 'guests',
            min: '1',
            max: '20',
            value: form.guests,
            onChange: handleChange,
            required: true,
            className: 'mt-1 block w-full rounded-md bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500',
          })
        ),
        // Submit button
        React.createElement(
          'div',
          { className: 'text-center' },
          React.createElement(
            'button',
            {
              type: 'submit',
              className: 'bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-2 px-6 rounded-lg transition',
            },
            'Send Request'
          )
        )
      )
    )
  );
}

// Location & Hours section
function LocationHours() {
  return React.createElement(
    'section',
    { id: 'location', className: 'py-20 bg-gray-900' },
    React.createElement(
      'div',
      { className: 'max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center' },
      // Map placeholder
      React.createElement('img', {
        src: 'https://placehold.co/600x400/111111/eeeeee?text=Map+Location',
        alt: 'Map location',
        className: 'rounded-lg shadow-lg',
      }),
      // Details
      React.createElement(
        'div',
        null,
        React.createElement('h2', { className: 'text-3xl md:text-4xl font-bold text-white mb-4' }, 'Find Us'),
        React.createElement('p', { className: 'text-gray-300 mb-2' }, '123 Nocturne Avenue, Night City, NC 12345'),
        React.createElement('p', { className: 'text-gray-300 mb-2' }, 'Phone: (555) 123‑4567'),
        React.createElement('h3', { className: 'text-xl font-semibold text-white mt-6 mb-2' }, 'Opening Hours'),
        React.createElement('ul', { className: 'text-gray-300 list-disc list-inside' },
          React.createElement('li', null, 'Mon‑Thu: 5 pm – 12 am'),
          React.createElement('li', null, 'Fri‑Sat: 5 pm – 2 am'),
          React.createElement('li', null, 'Sun: Closed')
        )
      )
    )
  );
}

// Footer component
function Footer() {
  return React.createElement(
    'footer',
    { className: 'bg-gray-950 py-6' },
    React.createElement(
      'div',
      { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm' },
      '\u00A9 ',
      new Date().getFullYear(),
      ' Nocturne – All rights reserved.'
    )
  );
}

// Main App component
function App() {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(Navbar, null),
    React.createElement(Hero, null),
    React.createElement(MenuHighlights, null),
    React.createElement(ReservationCTA, null),
    React.createElement(LocationHours, null),
    React.createElement(Footer, null)
  );
}

// Render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App, null));
