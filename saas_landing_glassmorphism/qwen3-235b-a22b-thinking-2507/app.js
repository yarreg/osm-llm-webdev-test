const { useState, useEffect } = React;

const Hero = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setSubmitted(true);
      setEmail('');
      setEmailError(null);
      setTimeout(() => setSubmitted(false), 5000);
    } else {
      setEmailError('Please enter a valid email address');
    }
  };

  return React.createElement('section', { id: 'hero', className: 'relative py-20 md:py-32 overflow-hidden' },
    React.createElement('div', { className: 'hero-bg' }),
    React.createElement('div', { className: 'container mx-auto px-4 relative z-10' },
      React.createElement('div', { className: 'max-w-4xl mx-auto text-center' },
        React.createElement('h1', { className: 'text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-400 animate-fadeIn' }, 'Team Dashboards, Perfected'),
        React.createElement('p', { className: 'text-xl text-slate-300 mb-10 max-w-2xl mx-auto animate-fadeIn animation-delay-200' }, 'NimbusBoard brings your team\'s data together in one beautiful, customizable dashboard. No more switching between tools.'),
        React.createElement('form', { onSubmit: handleSubmit, className: 'max-w-md mx-auto flex flex-col sm:flex-row gap-4 animate-fadeIn animation-delay-400' },
          React.createElement('input', {
            type: 'email',
            value: email,
            onChange: (e) => setEmail(e.target.value),
            placeholder: 'your@email.com',
            className: 'flex-grow px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all'
          }),
          React.createElement('button', {
            type: 'submit',
            className: 'bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-200 transform hover:scale-[1.02] active:scale-[0.98]'
          }, 'Get Started')
        ),
        emailError && React.createElement('p', { className: 'text-red-400 mt-2 animate-fadeIn' }, emailError),
        submitted && React.createElement('p', { className: 'text-green-400 mt-2 animate-fadeIn' }, 'Check your email for the next steps!')
      )
    )
  );
};

const Features = () => {
  const features = [
    {
      icon: React.createElement('svg', { className: 'w-8 h-8 mb-4 text-indigo-400', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
        React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' })
      ),
      title: 'Unified Analytics',
      description: 'Combine data from all your tools into a single, customizable dashboard with real-time updates.'
    },
    {
      icon: React.createElement('svg', { className: 'w-8 h-8 mb-4 text-indigo-400', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
        React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' })
      ),
      title: 'Team Collaboration',
      description: 'Share dashboards, add comments, and collaborate in real-time with your entire team.'
    },
    {
      icon: React.createElement('svg', { className: 'w-8 h-8 mb-4 text-indigo-400', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
        React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M13 10V3L4 14h7v7l9-11h-7z' })
      ),
      title: 'Lightning Fast',
      description: 'Optimized for performance with sub-second load times, even with massive datasets.'
    }
  ];

  return React.createElement('section', { id: 'features', className: 'py-20 bg-slate-900/50' },
    React.createElement('div', { className: 'container mx-auto px-4' },
      React.createElement('div', { className: 'text-center max-w-3xl mx-auto mb-16' },
        React.createElement('h2', { className: 'text-3xl md:text-4xl font-bold mb-4' }, 'Everything you need to succeed'),
        React.createElement('p', { className: 'text-slate-400' }, 'Powerful features designed to make your team more productive and data-driven')
      ),
      React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-3 gap-8' },
        features.map((feature, index) => React.createElement('div', {
          key: index,
          className: 'glass p-8 rounded-2xl border border-slate-700/50 transform transition-all duration-300 hover:scale-[1.02] hover:border-slate-600/70 animate-fadeIn animation-delay-' + (200 + index * 200)
        },
          feature.icon,
          React.createElement('h3', { className: 'text-xl font-semibold mb-3' }, feature.title),
          React.createElement('p', { className: 'text-slate-400' }, feature.description)
        ))
      )
    )
  );
};

const Pricing = () => {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      description: 'Perfect for getting started',
      features: ['2 dashboards', '5 team members', 'Basic analytics', 'Community support'],
      cta: 'Get Started',
      highlighted: false
    },
    {
      name: 'Pro',
      price: '$19',
      description: 'For growing teams',
      features: ['Unlimited dashboards', '20 team members', 'Advanced analytics', 'Priority support', 'Custom domains'],
      cta: 'Start Free Trial',
      highlighted: true
    },
    {
      name: 'Team',
      price: '$49',
      description: 'For entire organizations',
      features: ['Everything in Pro', 'Unlimited team members', 'Enterprise security', 'Dedicated account manager', 'Custom SLA'],
      cta: 'Contact Sales',
      highlighted: false
    }
  ];

  return React.createElement('section', { id: 'pricing', className: 'py-20' },
    React.createElement('div', { className: 'container mx-auto px-4' },
      React.createElement('div', { className: 'text-center max-w-3xl mx-auto mb-16' },
        React.createElement('h2', { className: 'text-3xl md:text-4xl font-bold mb-4' }, 'Simple, transparent pricing'),
        React.createElement('p', { className: 'text-slate-400' }, 'Choose the plan that fits your team\'s needs')
      ),
      React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto' },
        plans.map((plan, index) => React.createElement('div', {
          key: index,
          className: `glass rounded-2xl border border-slate-700/50 p-8 transition-all duration-300 animate-fadeIn animation-delay-${200 + index * 200} ${plan.highlighted ? 'ring-2 ring-indigo-500/50 scale-105' : 'hover:border-slate-600/70'}`
        },
          React.createElement('div', { className: 'text-center mb-6' },
            React.createElement('h3', { className: 'text-2xl font-bold mb-2' }, plan.name),
            React.createElement('div', { className: 'flex items-baseline justify-center' },
              React.createElement('span', { className: 'text-4xl font-bold' }, plan.price),
              React.createElement('span', { className: 'text-slate-400' }, '/month')
            ),
            React.createElement('p', { className: 'text-slate-400 mt-2' }, plan.description)
          ),
          React.createElement('ul', { className: 'space-y-3 mb-8' },
            plan.features.map((feature, i) => React.createElement('li', { key: i, className: 'flex items-start' },
              React.createElement('svg', { className: 'w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0', fill: 'currentColor', viewBox: '0 0 20 20' },
                React.createElement('path', { fillRule: 'evenodd', d: 'M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z', clipRule: 'evenodd' })
              ),
              React.createElement('span', null, feature)
            ))
          ),
          React.createElement('button', {
            className: `w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
              plan.highlighted
                ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                : 'bg-slate-800/50 hover:bg-slate-700/50 text-white border border-slate-600'
            }`
          }, plan.cta)
        ))
      )
    )
  );
};

const Logos = () => {
  const logos = [
    'https://placehold.co/150x50/1e293b/94a3b8?text=Acme',
    'https://placehold.co/150x50/1e293b/94a3b8?text=Innovate',
    'https://placehold.co/150x50/1e293b/94a3b8?text=Vertex',
    'https://placehold.co/150x50/1e293b/94a3b8?text=Nexus',
    'https://placehold.co/150x50/1e293b/94a3b8?text=Strato'
  ];

  return React.createElement('section', { id: 'logos', className: 'py-12 bg-slate-900/50' },
    React.createElement('div', { className: 'container mx-auto px-4' },
      React.createElement('div', { className: 'text-center max-w-2xl mx-auto mb-10' },
        React.createElement('h2', { className: 'text-2xl font-semibold mb-2' }, 'Trusted by industry leaders'),
        React.createElement('p', { className: 'text-slate-400' }, 'Join thousands of teams using NimbusBoard to power their data')
      ),
      React.createElement('div', { className: 'flex flex-wrap justify-center items-center gap-12 opacity-70' },
        logos.map((logo, index) => React.createElement('img', {
          key: index,
          src: logo,
          alt: 'Customer logo',
          className: 'h-8 object-contain grayscale hover:grayscale-0 transition-all duration-300'
        }))
      )
    )
  );
};

const Footer = () => {
  return React.createElement('footer', { className: 'py-12 bg-slate-900 border-t border-slate-800' },
    React.createElement('div', { className: 'container mx-auto px-4' },
      React.createElement('div', { className: 'flex flex-col md:flex-row justify-between items-center' },
        React.createElement('div', { className: 'mb-6 md:mb-0' },
          React.createElement('h3', { className: 'text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-400' }, 'NimbusBoard')
        ),
        React.createElement('div', { className: 'flex space-x-6' },
          ['Features', 'Pricing', 'Blog', 'Contact'].map((item, index) => React.createElement('a', {
            key: index,
            href: '#',
            className: 'text-slate-400 hover:text-white transition-colors duration-200'
          }, item))
        )
      ),
      React.createElement('div', { className: 'mt-8 text-center text-slate-500 text-sm' },
        '© ' + new Date().getFullYear() + ' NimbusBoard. All rights reserved.'
      )
    )
  );
};

const App = () => {
  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9) {
          el.classList.add('opacity-100', 'translate-y-0');
          el.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return React.createElement('main', { className: 'font-sans text-slate-200' },
    React.createElement(Hero, null),
    React.createElement(Features, null),
    React.createElement(Logos, null),
    React.createElement(Pricing, null),
    React.createElement(Footer, null)
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App, null));