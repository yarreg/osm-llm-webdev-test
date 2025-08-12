const { createElement: e, useState, useEffect } = React;

// Glassmorphism Card Component
const GlassCard = ({ children, className = '' }) => {
  return e('div', {
    className: `glass-card bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 transition-all duration-300 hover:bg-white/20 hover:border-white/30 ${className}`
  }, children);
};

// Feature Component
const Feature = ({ icon, title, description }) => {
  return e(GlassCard, { className: 'flex flex-col items-center text-center' },
    e('div', { className: 'w-16 h-16 rounded-full bg-indigo-500/20 flex items-center justify-center mb-4' },
      e('div', { className: 'text-2xl' }, icon)
    ),
    e('h3', { className: 'text-xl font-bold text-white mb-2' }, title),
    e('p', { className: 'text-gray-300' }, description)
  );
};

// Pricing Plan Component
const PricingPlan = ({ name, price, features, isPopular = false }) => {
  return e(GlassCard, { className: `flex flex-col h-full ${isPopular ? 'ring-2 ring-indigo-400' : ''}` },
    e('div', { className: 'flex justify-between items-start mb-4' },
      e('h3', { className: 'text-xl font-bold text-white' }, name),
      isPopular && e('span', { className: 'bg-indigo-500 text-white text-xs font-semibold px-2.5 py-0.5 rounded-full' }, 'POPULAR')
    ),
    e('div', { className: 'mb-6' },
      e('div', { className: 'text-3xl font-bold text-white mb-1' }, price),
      e('p', { className: 'text-gray-400 text-sm' }, 'per user/month')
    ),
    e('ul', { className: 'space-y-2 mb-8 flex-grow' },
      features.map((feature, i) => 
        e('li', { key: i, className: 'flex items-center' },
          e('svg', { className: 'w-5 h-5 text-green-400 mr-2', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
            e('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2', d: 'M5 13l4 4L19 7' })
          ),
          e('span', { className: 'text-gray-300' }, feature)
        )
      )
    ),
    e('button', {
      className: `w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${isPopular ? 'bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600' : 'bg-white/10 hover:bg-white/20'} text-white`
    }, 'Get Started')
  );
};

// Main App Component
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Features data
  const features = [
    { icon: '📊', title: 'Real-time Analytics', description: 'Track KPIs and metrics with live updates' },
    { icon: '🧩', title: 'Custom Dashboards', description: 'Build tailored views for every team member' },
    { icon: '🤝', title: 'Seamless Collaboration', description: 'Share insights and work together in context' },
    { icon: '🔔', title: 'Smart Notifications', description: 'Get alerts for important changes' }
  ];

  // Pricing plans
  const plans = [
    {
      name: 'Free',
      price: '$0',
      features: ['3 dashboards', 'Basic widgets', '1 user', '7-day history']
    },
    {
      name: 'Pro',
      price: '$15',
      features: ['Unlimited dashboards', 'Advanced widgets', 'Up to 10 users', '30-day history', 'Custom branding'],
      isPopular: true
    },
    {
      name: 'Team',
      price: '$25',
      features: ['Unlimited dashboards', 'All widgets + plugins', 'Unlimited users', '1-year history', 'Custom branding', 'Priority support']
    }
  ];

  // Customer logos
  const customers = [
    { name: 'TechNova', logo: 'https://placehold.co/160x80/1e293b/94a3b8?text=TechNova' },
    { name: 'InnoWave', logo: 'https://placehold.co/160x80/1e293b/94a3b8?text=InnoWave' },
    { name: 'CloudSphere', logo: 'https://placehold.co/160x80/1e293b/94a3b8?text=CloudSphere' },
    { name: 'DataCraft', logo: 'https://placehold.co/160x80/1e293b/94a3b8?text=DataCraft' },
    { name: 'PixelForge', logo: 'https://placehold.co/160x80/1e293b/94a3b8?text=PixelForge' }
  ];

  return e('div', { className: 'min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white' },
    // Header
    e('header', {
      className: `fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/80 backdrop-blur-md py-2' : 'py-4'}`
    },
      e('div', { className: 'container mx-auto px-4 flex justify-between items-center' },
        e('div', { className: 'flex items-center' },
          e('div', { className: 'text-2xl font-bold flex items-center' },
            e('span', { className: 'mr-2' }, '☁️'),
            'NimbusBoard'
          )
        ),
        e('button', {
          className: 'md:hidden text-white',
          onClick: () => setIsMenuOpen(!isMenuOpen)
        },
          e('svg', { className: 'w-6 h-6', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' },
            e('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2', d: 'M4 6h16M4 12h16m-7 6h7' })
          )
        ),
        e('nav', {
          className: `${isMenuOpen ? 'block' : 'hidden'} md:block absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent`
        },
          e('ul', { className: 'flex flex-col md:flex-row md:space-x-8 p-4 md:p-0' },
            ['Home', 'Features', 'Pricing', 'Customers'].map((item) =>
              e('li', { key: item },
                e('a', {
                  href: `#${item.toLowerCase()}`,
                  className: 'block py-2 px-4 rounded hover:bg-gray-800 transition-colors',
                  onClick: () => setIsMenuOpen(false)
                }, item)
              )
            ),
            e('li', null,
              e('a', {
                href: '#',
                className: 'block md:ml-4 mt-2 md:mt-0 py-2 px-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300'
              }, 'Get Started')
            )
          )
        )
      )
    ),

    // Hero Section
    e('section', {
      id: 'home',
      className: 'pt-32 pb-20 md:pt-40 md:pb-28 px-4'
    },
      e('div', { className: 'container mx-auto max-w-6xl text-center' },
        e('h1', {
          className: 'text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-200'
        }, 'Team Dashboards Reimagined'),
        e('p', {
          className: 'text-xl text-gray-300 max-w-2xl mx-auto mb-10'
        }, 'Transform your team\'s workflow with beautiful, real-time dashboards that bring clarity to complexity.'),
        e('div', { className: 'flex flex-col sm:flex-row justify-center gap-4' },
          e('a', {
            href: '#pricing',
            className: 'py-3 px-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg font-semibold text-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 transform hover:-translate-y-1'
          }, 'Start Free Trial'),
          e('a', {
            href: '#',
            className: 'py-3 px-8 bg-white/10 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300'
          }, 'Watch Demo')
        ),
        e('div', { className: 'mt-16 max-w-5xl mx-auto' },
          e('div', {
            className: 'glass-card p-4 md:p-6 rounded-2xl overflow-hidden'
          },
            e('img', {
              src: 'https://placehold.co/1200x600/0f172a/1e293b?text=NimbusBoard+Dashboard',
              alt: 'NimbusBoard Dashboard',
              className: 'w-full rounded-lg'
            })
          )
        )
      )
    ),

    // Features Section
    e('section', {
      id: 'features',
      className: 'py-20 bg-gradient-to-b from-gray-800/50 to-gray-900/50'
    },
      e('div', { className: 'container mx-auto px-4' },
        e('div', { className: 'text-center max-w-3xl mx-auto mb-16' },
          e('h2', { className: 'text-3xl md:text-4xl font-bold mb-4' }, 'Powerful Features, Beautiful Simplicity'),
          e('p', { className: 'text-gray-400' }, 'Everything your team needs to visualize data and make better decisions')
        ),
        e('div', { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6' },
          features.map((feature, index) =>
            e(Feature, {
              key: index,
              icon: feature.icon,
              title: feature.title,
              description: feature.description
            })
          )
        )
      )
    ),

    // Pricing Section
    e('section', {
      id: 'pricing',
      className: 'py-20'
    },
      e('div', { className: 'container mx-auto px-4' },
        e('div', { className: 'text-center max-w-3xl mx-auto mb-16' },
          e('h2', { className: 'text-3xl md:text-4xl font-bold mb-4' }, 'Simple, Transparent Pricing'),
          e('p', { className: 'text-gray-400' }, 'Choose the plan that works best for your team')
        ),
        e('div', { className: 'grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto' },
          plans.map((plan, index) =>
            e(PricingPlan, {
              key: index,
              name: plan.name,
              price: plan.price,
              features: plan.features,
              isPopular: plan.isPopular
            })
          )
        )
      )
    ),

    // Customers Section
    e('section', {
      id: 'customers',
      className: 'py-20 bg-gradient-to-b from-gray-800/50 to-gray-900/50'
    },
      e('div', { className: 'container mx-auto px-4' },
        e('div', { className: 'text-center max-w-3xl mx-auto mb-16' },
          e('h2', { className: 'text-3xl md:text-4xl font-bold mb-4' }, 'Trusted by Innovative Teams'),
          e('p', { className: 'text-gray-400' }, 'Join thousands of teams transforming their workflow with NimbusBoard')
        ),
        e('div', { className: 'flex flex-wrap justify-center gap-8 md:gap-12' },
          customers.map((customer, index) =>
            e('div', {
              key: index,
              className: 'flex items-center justify-center'
            },
              e('img', {
                src: customer.logo,
                alt: customer.name,
                className: 'h-12 object-contain opacity-80 hover:opacity-100 transition-opacity'
              })
            )
          )
        )
      )
    ),

    // CTA Section
    e('section', {
      className: 'py-20'
    },
      e('div', { className: 'container mx-auto px-4 text-center' },
        e('div', { className: 'glass-card max-w-3xl mx-auto p-8 md:p-12 rounded-2xl' },
          e('h2', { className: 'text-3xl md:text-4xl font-bold mb-4' }, 'Ready to Transform Your Team\'s Workflow?'),
          e('p', { className: 'text-gray-300 mb-8 max-w-2xl mx-auto' }, 'Join thousands of teams using NimbusBoard to visualize data, collaborate effectively, and make better decisions.'),
          e('a', {
            href: '#pricing',
            className: 'inline-block py-3 px-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg font-semibold text-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 transform hover:-translate-y-1'
          }, 'Start Your Free Trial')
        )
      )
    ),

    // Footer
    e('footer', {
      className: 'py-12 border-t border-gray-800'
    },
      e('div', { className: 'container mx-auto px-4' },
        e('div', { className: 'grid grid-cols-1 md:grid-cols-4 gap-8' },
          e('div', { className: 'md:col-span-1' },
            e('div', { className: 'text-2xl font-bold flex items-center mb-4' },
              e('span', { className: 'mr-2' }, '☁️'),
              'NimbusBoard'
            ),
            e('p', { className: 'text-gray-400' }, 'Beautiful dashboards for modern teams')
          ),
          e('div', null,
            e('h3', { className: 'text-lg font-semibold mb-4' }, 'Product'),
            e('ul', { className: 'space-y-2' },
              ['Features', 'Pricing', 'Integrations', 'Roadmap'].map((item) =>
                e('li', { key: item },
                  e('a', { href: '#', className: 'text-gray-400 hover:text-white transition-colors' }, item)
                )
              )
            )
          ),
          e('div', null,
            e('h3', { className: 'text-lg font-semibold mb-4' }, 'Resources'),
            e('ul', { className: 'space-y-2' },
              ['Documentation', 'Guides', 'Blog', 'Support'].map((item) =>
                e('li', { key: item },
                  e('a', { href: '#', className: 'text-gray-400 hover:text-white transition-colors' }, item)
                )
              )
            )
          ),
          e('div', null,
            e('h3', { className: 'text-lg font-semibold mb-4' }, 'Company'),
            e('ul', { className: 'space-y-2' },
              ['About', 'Careers', 'Contact', 'Legal'].map((item) =>
                e('li', { key: item },
                  e('a', { href: '#', className: 'text-gray-400 hover:text-white transition-colors' }, item)
                )
              )
            )
          )
        ),
        e('div', { className: 'border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm' },
          '© ' + new Date().getFullYear() + ' NimbusBoard. All rights reserved.'
        )
      )
    )
  );
};

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(e(App));