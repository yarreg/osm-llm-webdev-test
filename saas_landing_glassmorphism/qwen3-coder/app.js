const { createElement: e, useState, useEffect } = React;
const { createRoot } = ReactDOM;

const App = () => {
  return e('div', { className: 'min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50' },
    e(Header),
    e(Hero),
    e(Features),
    e(Pricing),
    e(Customers),
    e(Footer)
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return e('header', { className: 'py-6 px-4 sm:px-8 lg:px-16' },
    e('div', { className: 'flex justify-between items-center' },
      e('div', { className: 'flex items-center space-x-2' },
        e('div', { className: 'w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center' },
          e('span', { className: 'text-white font-bold text-xl' }, 'N')
        ),
        e('span', { className: 'text-2xl font-bold text-gray-900' }, 'NimbusBoard')
      ),
      e('div', { className: 'hidden md:flex space-x-8' },
        e('a', { href: '#features', className: 'text-gray-600 hover:text-indigo-600 transition-colors' }, 'Features'),
        e('a', { href: '#pricing', className: 'text-gray-600 hover:text-indigo-600 transition-colors' }, 'Pricing'),
        e('a', { href: '#', className: 'text-gray-600 hover:text-indigo-600 transition-colors' }, 'Docs')
      ),
      e('div', { className: 'hidden md:block' },
        e('button', { 
          className: 'px-5 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors',
          onClick: () => window.location.href = '#pricing'
        }, 'Get Started')
      ),
      e('button', { 
        className: 'md:hidden text-gray-600',
        onClick: () => setIsMenuOpen(!isMenuOpen)
      },
        e('svg', { className: 'w-6 h-6', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' },
          e('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M4 6h16M4 12h16M4 18h16' })
        )
      )
    ),
    isMenuOpen && e('div', { className: 'md:hidden mt-4 py-4 border-t border-gray-200' },
      e('div', { className: 'flex flex-col space-y-4' },
        e('a', { href: '#features', className: 'text-gray-600 hover:text-indigo-600 transition-colors' }, 'Features'),
        e('a', { href: '#pricing', className: 'text-gray-600 hover:text-indigo-600 transition-colors' }, 'Pricing'),
        e('a', { href: '#', className: 'text-gray-600 hover:text-indigo-600 transition-colors' }, 'Docs'),
        e('button', { 
          className: 'px-5 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors w-full',
          onClick: () => window.location.href = '#pricing'
        }, 'Get Started')
      )
    )
  );
};

const Hero = () => {
  return e('section', { className: 'py-16 px-4 sm:px-8 lg:px-16' },
    e('div', { className: 'max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center' },
      e('div', { className: 'space-y-6' },
        e('h1', { className: 'text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight' },
          'Visualize your team’s progress in real-time'
        ),
        e('p', { className: 'text-xl text-gray-600 max-w-2xl' },
          'NimbusBoard transforms how teams collaborate with beautiful, customizable dashboards that keep everyone aligned.'
        ),
        e('div', { className: 'flex flex-col sm:flex-row gap-4 pt-4' },
          e('button', { 
            className: 'px-8 py-4 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300',
            onClick: () => window.location.href = '#pricing'
          }, 'Start Free Trial'),
          e('button', { 
            className: 'px-8 py-4 rounded-xl bg-white text-gray-900 font-medium border border-gray-300 hover:border-indigo-300 transition-colors flex items-center justify-center gap-2',
            onClick: () => window.location.href = '#features'
          },
            e('svg', { className: 'w-5 h-5 text-red-500', fill: 'currentColor', viewBox: '0 0 20 20' },
              e('path', { fillRule: 'evenodd', d: 'M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z', clipRule: 'evenodd' })
            ),
            'Watch Demo'
          )
        ),
        e('p', { className: 'text-gray-500 pt-4' }, 'No credit card required • 14-day free trial')
      ),
      e('div', { className: 'relative' },
        e('div', { className: 'glass-card rounded-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500' },
          e('div', { className: 'bg-gray-200 border-2 border-dashed rounded-xl w-full h-80 flex items-center justify-center' },
            e('span', { className: 'text-gray-500' }, 'Dashboard Preview')
          )
        ),
        e('div', { className: 'glass-card absolute -bottom-6 -left-6 rounded-2xl p-6 transform -rotate-6 hover:rotate-0 transition-transform duration-500' },
          e('div', { className: 'bg-gray-200 border-2 border-dashed rounded-xl w-64 h-48 flex items-center justify-center' },
            e('span', { className: 'text-gray-500 text-sm' }, 'Team Analytics')
          )
        )
      )
    )
  );
};

const Features = () => {
  const features = [
    {
      title: 'Real-time Collaboration',
      description: 'Work together seamlessly with live updates and shared editing capabilities.',
      icon: '👥'
    },
    {
      title: 'Customizable Widgets',
      description: 'Build dashboards with drag-and-drop components tailored to your workflow.',
      icon: '🧩'
    },
    {
      title: 'Advanced Analytics',
      description: 'Gain insights with powerful visualization tools and performance metrics.',
      icon: '📊'
    },
    {
      title: 'Secure & Compliant',
      description: 'Enterprise-grade security with SOC2, GDPR, and HIPAA compliance.',
      icon: '🔒'
    }
  ];

  return e('section', { id: 'features', className: 'py-20 px-4 sm:px-8 lg:px-16 bg-white' },
    e('div', { className: 'max-w-7xl mx-auto' },
      e('div', { className: 'text-center max-w-3xl mx-auto mb-16' },
        e('h2', { className: 'text-3xl md:text-4xl font-bold text-gray-900 mb-4' }, 'Powerful features for modern teams'),
        e('p', { className: 'text-xl text-gray-600' }, 'Everything you need to visualize, track, and optimize team performance')
      ),
      e('div', { className: 'grid md:grid-cols-2 lg:grid-cols-4 gap-8' },
        features.map((feature, index) => 
          e('div', { 
            key: index, 
            className: 'glass-card rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2'
          },
            e('div', { className: 'text-4xl mb-4' }, feature.icon),
            e('h3', { className: 'text-xl font-bold text-gray-900 mb-2' }, feature.title),
            e('p', { className: 'text-gray-600' }, feature.description)
          )
        )
      )
    )
  );
};

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState('pro');
  
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'Perfect for individuals getting started',
      features: [
        'Up to 3 dashboards',
        '5 team members',
        'Basic widgets',
        'Community support'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Pro',
      price: '$12',
      period: 'per user/month',
      description: 'For growing teams and professionals',
      features: [
        'Unlimited dashboards',
        '20 team members',
        'Advanced widgets',
        'Priority support',
        'Analytics & reporting'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Team',
      price: '$24',
      period: 'per user/month',
      description: 'For large organizations with complex needs',
      features: [
        'Everything in Pro',
        'Unlimited team members',
        'Custom integrations',
        'Dedicated account manager',
        'SSO & advanced security',
        'Custom training'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  return e('section', { id: 'pricing', className: 'py-20 px-4 sm:px-8 lg:px-16' },
    e('div', { className: 'max-w-7xl mx-auto' },
      e('div', { className: 'text-center max-w-3xl mx-auto mb-16' },
        e('h2', { className: 'text-3xl md:text-4xl font-bold text-gray-900 mb-4' }, 'Simple, transparent pricing'),
        e('p', { className: 'text-xl text-gray-600' }, 'Choose the plan that works best for your team')
      ),
      e('div', { className: 'grid md:grid-cols-3 gap-8 max-w-5xl mx-auto' },
        plans.map((plan, index) => 
          e('div', { 
            key: index, 
            className: `rounded-2xl p-8 relative ${plan.popular ? 'ring-2 ring-indigo-600 bg-white transform -translate-y-2' : 'bg-white'}`
          },
            plan.popular && e('div', { className: 'absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white text-sm font-bold px-4 py-1 rounded-full' }, 'MOST POPULAR'),
            e('h3', { className: 'text-2xl font-bold text-gray-900 mb-2' }, plan.name),
            e('div', { className: 'mb-6' },
              e('span', { className: 'text-4xl font-bold text-gray-900' }, plan.price),
              e('span', { className: 'text-gray-600' }, ` ${plan.period}`)
            ),
            e('p', { className: 'text-gray-600 mb-6' }, plan.description),
            e('ul', { className: 'mb-8 space-y-3' },
              plan.features.map((feature, i) => 
                e('li', { key: i, className: 'flex items-center' },
                  e('svg', { className: 'w-5 h-5 text-green-500 mr-2', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' },
                    e('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M5 13l4 4L19 7' })
                  ),
                  feature
                )
              )
            ),
            e('button', { 
              className: `w-full py-3 rounded-lg font-medium transition-colors ${plan.popular ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`,
              onClick: () => setSelectedPlan(plan.name.toLowerCase())
            }, plan.cta)
          )
        )
      )
    )
  );
};

const Customers = () => {
  const logos = [
    { name: 'TechCorp', color: 'bg-blue-500' },
    { name: 'InnovateX', color: 'bg-purple-500' },
    { name: 'Global Solutions', color: 'bg-green-500' },
    { name: 'Future Labs', color: 'bg-yellow-500' },
    { name: 'Nexus Inc', color: 'bg-red-500' }
  ];

  return e('section', { className: 'py-16 px-4 sm:px-8 lg:px-16 bg-white' },
    e('div', { className: 'max-w-7xl mx-auto' },
      e('div', { className: 'text-center mb-12' },
        e('h3', { className: 'text-lg font-semibold text-indigo-600 mb-2' }, 'Trusted by industry leaders'),
        e('p', { className: 'text-gray-600' }, 'Join thousands of teams who use NimbusBoard daily')
      ),
      e('div', { className: 'flex flex-wrap justify-center gap-12 md:gap-20' },
        logos.map((logo, index) => 
          e('div', { key: index, className: 'flex flex-col items-center' },
            e('div', { className: `w-16 h-16 rounded-full ${logo.color} flex items-center justify-center mb-3` },
              e('span', { className: 'text-white font-bold' }, logo.name.charAt(0))
            ),
            e('span', { className: 'text-gray-700 font-medium' }, logo.name)
          )
        )
      )
    )
  );
};

const Footer = () => {
  return e('footer', { className: 'py-12 px-4 sm:px-8 lg:px-16 bg-gray-900 text-white' },
    e('div', { className: 'max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8' },
      e('div', { className: 'space-y-4' },
        e('div', { className: 'flex items-center space-x-2' },
          e('div', { className: 'w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center' },
            e('span', { className: 'text-white font-bold' }, 'N')
          ),
          e('span', { className: 'text-xl font-bold' }, 'NimbusBoard')
        ),
        e('p', { className: 'text-gray-400' }, 'Visualize your team’s progress in real-time with beautiful dashboards.'),
        e('div', { className: 'flex space-x-4' },
          e('a', { href: '#', className: 'text-gray-400 hover:text-white transition-colors' }, 'Twitter'),
          e('a', { href: '#', className: 'text-gray-400 hover:text-white transition-colors' }, 'LinkedIn'),
          e('a', { href: '#', className: 'text-gray-400 hover:text-white transition-colors' }, 'GitHub')
        )
      ),
      e('div', null,
        e('h4', { className: 'text-lg font-semibold mb-4' }, 'Product'),
        e('ul', { className: 'space-y-2' },
          e('li', null, e('a', { href: '#', className: 'text-gray-400 hover:text-white transition-colors' }, 'Features')),
          e('li', null, e('a', { href: '#', className: 'text-gray-400 hover:text-white transition-colors' }, 'Pricing')),
          e('li', null, e('a', { href: '#', className: 'text-gray-400 hover:text-white transition-colors' }, 'Integrations')),
          e('li', null, e('a', { href: '#', className: 'text-gray-400 hover:text-white transition-colors' }, 'Roadmap'))
        )
      ),
      e('div', null,
        e('h4', { className: 'text-lg font-semibold mb-4' }, 'Resources'),
        e('ul', { className: 'space-y-2' },
          e('li', null, e('a', { href: '#', className: 'text-gray-400 hover:text-white transition-colors' }, 'Documentation')),
          e('li', null, e('a', { href: '#', className: 'text-gray-400 hover:text-white transition-colors' }, 'Blog')),
          e('li', null, e('a', { href: '#', className: 'text-gray-400 hover:text-white transition-colors' }, 'Tutorials')),
          e('li', null, e('a', { href: '#', className: 'text-gray-400 hover:text-white transition-colors' }, 'Support'))
        )
      ),
      e('div', null,
        e('h4', { className: 'text-lg font-semibold mb-4' }, 'Company'),
        e('ul', { className: 'space-y-2' },
          e('li', null, e('a', { href: '#', className: 'text-gray-400 hover:text-white transition-colors' }, 'About')),
          e('li', null, e('a', { href: '#', className: 'text-gray-400 hover:text-white transition-colors' }, 'Careers')),
          e('li', null, e('a', { href: '#', className: 'text-gray-400 hover:text-white transition-colors' }, 'Contact')),
          e('li', null, e('a', { href: '#', className: 'text-gray-400 hover:text-white transition-colors' }, 'Partners'))
        )
      )
    ),
    e('div', { className: 'max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-gray-400' },
      e('p', null, '© 2023 NimbusBoard. All rights reserved.')
    )
  );
};

createRoot(document.getElementById('root')).render(e(App));