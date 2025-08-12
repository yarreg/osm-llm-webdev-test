const { createElement: e, useState, useEffect } = React;

const Hero = () => e('section', {
  className: 'min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-indigo-800 relative overflow-hidden'
},
  e('div', { className: 'absolute inset-0 bg-white/5 backdrop-blur-sm' }),
  e('div', { className: 'container mx-auto px-6 py-24 z-10' },
    e('div', { className: 'max-w-3xl mx-auto text-center' },
      e('h1', { className: 'text-5xl md:text-6xl font-bold text-white mb-6' }, 'Visualize Your Team\'s Potential'),
      e('p', { className: 'text-xl text-blue-100 mb-10 max-w-2xl mx-auto' }, 'NimbusBoard transforms your team data into beautiful, actionable dashboards with real-time collaboration.'),
      e('div', { className: 'flex flex-col sm:flex-row gap-4 justify-center' },
        e('button', { className: 'bg-white text-blue-900 font-semibold px-8 py-4 rounded-lg hover:bg-blue-100 transition-all transform hover:scale-105 shadow-lg' }, 'Start Free Trial'),
        e('button', { className: 'bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-all' }, 'Watch Demo')
      )
    )
  )
);

const FeatureCard = ({ icon, title, description }) => e('div', {
  className: 'bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all hover:shadow-xl'
},
  e('div', { className: 'w-14 h-14 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6' },
    e('span', { className: 'text-2xl' }, icon)
  ),
  e('h3', { className: 'text-xl font-bold text-white mb-3' }, title),
  e('p', { className: 'text-blue-100' }, description)
);

const Features = () => e('section', { className: 'py-20 bg-gradient-to-b from-indigo-900 to-blue-900' },
  e('div', { className: 'container mx-auto px-6' },
    e('div', { className: 'text-center mb-16' },
      e('h2', { className: 'text-3xl md:text-4xl font-bold text-white mb-4' }, 'Powerful Features'),
      e('p', { className: 'text-blue-200 max-w-2xl mx-auto' }, 'Everything you need to understand and optimize your team\'s performance')
    ),
    e('div', { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' },
      e(FeatureCard, { icon: '📊', title: 'Real-time Analytics', description: 'Monitor KPIs and metrics with up-to-the-minute data visualizations' }),
      e(FeatureCard, { icon: '🤝', title: 'Team Collaboration', description: 'Share insights and annotations directly on dashboards' }),
      e(FeatureCard, { icon: '🔄', title: 'Automated Reports', description: 'Schedule and distribute beautiful reports automatically' })
    )
  )
);

const PricingCard = ({ plan, price, features, cta, popular }) => e('div', {
  className: `bg-white/5 backdrop-blur-lg rounded-xl p-8 border ${popular ? 'border-blue-400' : 'border-white/10'} transition-all hover:shadow-xl relative`
},
  popular && e('div', { className: 'absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full' }, 'POPULAR'),
  e('h3', { className: 'text-2xl font-bold text-white mb-2' }, plan),
  e('div', { className: 'text-4xl font-bold text-white mb-6' }, price),
  e('ul', { className: 'space-y-3 mb-8' },
    features.map((feature, i) => e('li', { key: i, className: 'text-blue-100 flex items-center' },
      e('span', { className: 'mr-2 text-green-400' }, '✓'),
      feature
    ))
  ),
  e('button', { className: `w-full py-3 rounded-lg font-semibold ${popular ? 'bg-blue-500 hover:bg-blue-600' : 'bg-white/10 hover:bg-white/20'} text-white transition-all` }, cta)
);

const Pricing = () => e('section', { className: 'py-20 bg-blue-900' },
  e('div', { className: 'container mx-auto px-6' },
    e('div', { className: 'text-center mb-16' },
      e('h2', { className: 'text-3xl md:text-4xl font-bold text-white mb-4' }, 'Simple, Transparent Pricing'),
      e('p', { className: 'text-blue-200 max-w-2xl mx-auto' }, 'Choose the plan that fits your team\'s needs')
    ),
    e('div', { className: 'grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto' },
      e(PricingCard, {
        plan: 'Free',
        price: '$0',
        features: ['Up to 3 dashboards', 'Basic widgets', 'Email support', '1 team member'],
        cta: 'Get Started'
      }),
      e(PricingCard, {
        plan: 'Pro',
        price: '$29',
        features: ['Unlimited dashboards', 'Advanced analytics', 'Priority support', 'Up to 10 team members'],
        cta: 'Start Free Trial',
        popular: true
      }),
      e(PricingCard, {
        plan: 'Team',
        price: '$99',
        features: ['Unlimited everything', 'Custom branding', 'Dedicated account manager', 'Unlimited team members'],
        cta: 'Contact Sales'
      })
    )
  )
);

const Customers = () => e('section', { className: 'py-16 bg-indigo-900' },
  e('div', { className: 'container mx-auto px-6' },
    e('div', { className: 'text-center mb-12' },
      e('h2', { className: 'text-2xl font-bold text-white mb-4' }, 'Trusted by innovative teams worldwide')
    ),
    e('div', { className: 'flex flex-wrap justify-center gap-12 md:gap-20 items-center' },
      e('img', { src: 'https://placehold.co/160x60/4f46e5/FFFFFF?text=TechCorp', className: 'h-12 opacity-80 hover:opacity-100 transition-all', alt: 'TechCorp' }),
      e('img', { src: 'https://placehold.co/160x60/4f46e5/FFFFFF?text=InnoSoft', className: 'h-12 opacity-80 hover:opacity-100 transition-all', alt: 'InnoSoft' }),
      e('img', { src: 'https://placehold.co/160x60/4f46e5/FFFFFF?text=DataWave', className: 'h-12 opacity-80 hover:opacity-100 transition-all', alt: 'DataWave' }),
      e('img', { src: 'https://placehold.co/160x60/4f46e5/FFFFFF?text=CloudNine', className: 'h-10 opacity-80 hover:opacity-100 transition-all', alt: 'CloudNine' })
    )
  )
);

const Footer = () => e('footer', { className: 'bg-blue-950 text-blue-200 py-12' },
  e('div', { className: 'container mx-auto px-6' },
    e('div', { className: 'grid grid-cols-1 md:grid-cols-4 gap-8' },
      e('div', { className: 'md:col-span-2' },
        e('h3', { className: 'text-xl font-bold text-white mb-4' }, 'NimbusBoard'),
        e('p', { className: 'mb-6' }, 'Beautiful dashboards for modern teams.'),
        e('div', { className: 'flex space-x-4' },
          e('a', { href: '#', className: 'text-blue-300 hover:text-white' }, 'Twitter'),
          e('a', { href: '#', className: 'text-blue-300 hover:text-white' }, 'LinkedIn'),
          e('a', { href: '#', className: 'text-blue-300 hover:text-white' }, 'GitHub')
        )
      ),
      e('div', null,
        e('h4', { className: 'text-white font-semibold mb-4' }, 'Product'),
        e('ul', { className: 'space-y-2' },
          e('li', null, e('a', { href: '#', className: 'hover:text-white' }, 'Features')),
          e('li', null, e('a', { href: '#', className: 'hover:text-white' }, 'Pricing')),
          e('li', null, e('a', { href: '#', className: 'hover:text-white' }, 'Integrations'))
        )
      ),
      e('div', null,
        e('h4', { className: 'text-white font-semibold mb-4' }, 'Company'),
        e('ul', { className: 'space-y-2' },
          e('li', null, e('a', { href: '#', className: 'hover:text-white' }, 'About')),
          e('li', null, e('a', { href: '#', className: 'hover:text-white' }, 'Careers')),
          e('li', null, e('a', { href: '#', className: 'hover:text-white' }, 'Contact'))
        )
      ),
      e('div', null,
        e('h4', { className: 'text-white font-semibold mb-4' }, 'Legal'),
        e('ul', { className: 'space-y-2' },
          e('li', null, e('a', { href: '#', className: 'hover:text-white' }, 'Privacy')),
          e('li', null, e('a', { href: '#', className: 'hover:text-white' }, 'Terms')),
          e('li', null, e('a', { href: '#', className: 'hover:text-white' }, 'Cookies'))
        )
      )
    ),
    e('div', { className: 'border-t border-blue-800 mt-12 pt-8 text-sm text-center' },
      '© 2023 NimbusBoard. All rights reserved.'
    )
  )
);

const App = () => e('div', { className: 'font-sans antialiased text-gray-100' },
  e(Hero, null),
  e(Features, null),
  e(Pricing, null),
  e(Customers, null),
  e(Footer, null)
);

ReactDOM.createRoot(document.getElementById('root')).render(e(App));