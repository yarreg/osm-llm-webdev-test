// App.js - Main React Application
const { useState, useEffect, useRef } = React;

// Main App Component
const App = () => {
  return React.createElement('div', { className: 'min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50' },
    React.createElement(Header),
    React.createElement(Hero),
    React.createElement(Features),
    React.createElement(Pricing),
    React.createElement(Customers),
    React.createElement(Footer)
  );
};

// Header Component
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return React.createElement('header', { className: 'fixed w-full z-50 backdrop-blur-lg bg-white/30 border-b border-white/20' },
    React.createElement('div', { className: 'container mx-auto px-4 py-4 flex justify-between items-center' },
      React.createElement('div', { className: 'flex items-center space-x-2' },
        React.createElement('div', { className: 'w-10 h-10 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center' },
          React.createElement('span', { className: 'text-white font-bold' }, 'N')
        ),
        React.createElement('span', { className: 'text-xl font-bold text-gray-800' }, 'NimbusBoard')
      ),
      
      // Desktop Navigation
      React.createElement('nav', { className: 'hidden md:flex space-x-8' },
        React.createElement('a', { href: '#features', className: 'text-gray-600 hover:text-indigo-600 transition-colors duration-300' }, 'Features'),
        React.createElement('a', { href: '#pricing', className: 'text-gray-600 hover:text-indigo-600 transition-colors duration-300' }, 'Pricing'),
        React.createElement('a', { href: '#customers', className: 'text-gray-600 hover:text-indigo-600 transition-colors duration-300' }, 'Customers'),
        React.createElement('a', { href: '#contact', className: 'text-gray-600 hover:text-indigo-600 transition-colors duration-300' }, 'Contact')
      ),
      
      // Desktop CTA
      React.createElement('div', { className: 'hidden md:flex space-x-4' },
        React.createElement('button', { className: 'px-4 py-2 text-gray-600 hover:text-indigo-600 transition-colors duration-300' }, 'Log in'),
        React.createElement('button', { className: 'px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-300 transform hover:-translate-y-0.5' }, 'Get Started')
      ),
      
      // Mobile menu button
      React.createElement('button', { 
        className: 'md:hidden text-gray-600', 
        onClick: () => setMobileMenuOpen(!mobileMenuOpen) 
      },
        React.createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', className: 'h-6 w-6', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
          React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16' })
        )
      )
    ),
    
    // Mobile Navigation
    mobileMenuOpen && React.createElement('div', { className: 'md:hidden bg-white/80 backdrop-blur-lg border-b border-white/20' },
      React.createElement('div', { className: 'container mx-auto px-4 py-4 flex flex-col space-y-4' },
        React.createElement('a', { href: '#features', className: 'text-gray-600 hover:text-indigo-600 transition-colors duration-300' }, 'Features'),
        React.createElement('a', { href: '#pricing', className: 'text-gray-600 hover:text-indigo-600 transition-colors duration-300' }, 'Pricing'),
        React.createElement('a', { href: '#customers', className: 'text-gray-600 hover:text-indigo-600 transition-colors duration-300' }, 'Customers'),
        React.createElement('a', { href: '#contact', className: 'text-gray-600 hover:text-indigo-600 transition-colors duration-300' }, 'Contact'),
        React.createElement('div', { className: 'flex flex-col space-y-2 pt-4' },
          React.createElement('button', { className: 'px-4 py-2 text-gray-600 hover:text-indigo-600 transition-colors duration-300' }, 'Log in'),
          React.createElement('button', { className: 'px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-300' }, 'Get Started')
        )
      )
    )
  );
};

// Hero Component
const Hero = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };
  
  return React.createElement('section', { id: 'hero', className: 'pt-32 pb-20 px-4' },
    React.createElement('div', { className: 'container mx-auto max-w-6xl' },
      React.createElement('div', { className: 'flex flex-col md:flex-row items-center' },
        // Hero Content
        React.createElement('div', { className: 'md:w-1/2 mb-12 md:mb-0' },
          React.createElement('h1', { className: 'text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6' },
            'Team Dashboards ',
            React.createElement('span', { className: 'text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600' }, 'Reimagined')
          ),
          React.createElement('p', { className: 'text-lg text-gray-600 mb-8 max-w-lg' },
            'NimbusBoard transforms how teams visualize data, collaborate, and make decisions with our intuitive dashboard platform.'
          ),
          
          // CTA Form
          React.createElement('form', { onSubmit: handleSubmit, className: 'flex flex-col sm:flex-row gap-4 mb-8' },
            React.createElement('input', {
              type: 'email',
              value: email,
              onChange: (e) => setEmail(e.target.value),
              placeholder: 'Enter your email',
              className: 'px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent flex-grow'
            }),
            React.createElement('button', { 
              type: 'submit',
              className: 'px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:opacity-90 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl'
            }, 'Get Started Free')
          ),
          
          submitted && React.createElement('div', { className: 'mb-4 p-3 bg-green-100 text-green-700 rounded-lg' }, 'Thank you! Check your email for next steps.'),
          
          // Trust indicators
          React.createElement('div', { className: 'flex items-center space-x-6 text-gray-500' },
            React.createElement('span', null, 'No credit card required'),
            React.createElement('span', null, '•'),
            React.createElement('span', null, 'Free 14-day trial')
          )
        ),
        
        // Hero Image
        React.createElement('div', { className: 'md:w-1/2 flex justify-center' },
          React.createElement('div', { className: 'relative' },
            React.createElement('div', { className: 'absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl transform rotate-6 opacity-20 blur-xl' }),
            React.createElement('div', { className: 'relative bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-2 border border-white/50' },
              React.createElement('img', { 
                src: 'https://placehold.co/600x400/ffffff/4f46e5?text=NimbusBoard+Dashboard', 
                alt: 'NimbusBoard Dashboard', 
                className: 'rounded-xl' 
              })
            )
          )
        )
      )
    )
  );
};

// Features Component
const Features = () => {
  const features = [
    {
      title: 'Real-time Collaboration',
      description: 'Work together seamlessly with live updates, comments, and shared views across your team.',
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
    },
    {
      title: 'Customizable Dashboards',
      description: 'Create tailored views with drag-and-drop widgets, custom layouts, and personalized data visualizations.',
      icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z'
    },
    {
      title: 'Advanced Analytics',
      description: 'Gain insights with powerful analytics, predictive modeling, and automated reporting capabilities.',
      icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
    },
    {
      title: 'Enterprise Security',
      description: 'Rest easy with bank-level encryption, SSO, compliance certifications, and advanced permission controls.',
      icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
    }
  ];
  
  return React.createElement('section', { id: 'features', className: 'py-20 px-4' },
    React.createElement('div', { className: 'container mx-auto max-w-6xl' },
      React.createElement('div', { className: 'text-center mb-16' },
        React.createElement('h2', { className: 'text-3xl md:text-4xl font-bold text-gray-800 mb-4' }, 'Powerful Features for Modern Teams'),
        React.createElement('p', { className: 'text-lg text-gray-600 max-w-2xl mx-auto' }, 'Everything you need to visualize data, collaborate effectively, and drive decisions.'
        )
      ),
      
      React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8' },
        features.map((feature, index) => 
          React.createElement(FeatureCard, { key: index, feature: feature, index: index })
        )
      )
    )
  );
};

// Feature Card Component
const FeatureCard = ({ feature, index }) => {
  return React.createElement('div', { 
    className: 'bg-white/60 backdrop-blur-lg rounded-2xl p-6 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2',
    style: { transitionDelay: `${index * 100}ms` }
  },
    React.createElement('div', { className: 'w-12 h-12 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center mb-4' },
      React.createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', className: 'h-6 w-6 text-white', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
        React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: feature.icon })
      )
    ),
    React.createElement('h3', { className: 'text-xl font-bold text-gray-800 mb-2' }, feature.title),
    React.createElement('p', { className: 'text-gray-600' }, feature.description)
  );
};

// Pricing Component
const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  
  const plans = [
    {
      name: 'Free',
      price: billingCycle === 'monthly' ? '$0' : '$0',
      period: '',
      description: 'Perfect for individuals and small teams getting started',
      features: ['Up to 3 dashboards', 'Basic templates', '5GB storage', 'Email support'],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Pro',
      price: billingCycle === 'monthly' ? '$19' : '$190',
      period: billingCycle === 'monthly' ? '/month' : '/year',
      description: 'For growing teams that need more power and flexibility',
      features: ['Unlimited dashboards', 'Advanced templates', '100GB storage', 'Priority support', 'Team collaboration', 'API access'],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Team',
      price: billingCycle === 'monthly' ? '$49' : '$490',
      period: billingCycle === 'monthly' ? '/month' : '/year',
      description: 'For large teams and enterprises with advanced needs',
      features: ['Everything in Pro', 'Unlimited storage', 'Dedicated account manager', 'SSO & advanced security', 'Custom integrations', 'SLA guarantee'],
      cta: 'Contact Sales',
      popular: false
    }
  ];
  
  return React.createElement('section', { id: 'pricing', className: 'py-20 px-4' },
    React.createElement('div', { className: 'container mx-auto max-w-6xl' },
      React.createElement('div', { className: 'text-center mb-16' },
        React.createElement('h2', { className: 'text-3xl md:text-4xl font-bold text-gray-800 mb-4' }, 'Simple, Transparent Pricing'),
        React.createElement('p', { className: 'text-lg text-gray-600 max-w-2xl mx-auto mb-8' }, 'Choose the plan that works best for your team. Upgrade or downgrade at any time.'
        ),
        
        // Billing Toggle
        React.createElement('div', { className: 'inline-flex items-center bg-white/60 backdrop-blur-lg rounded-full p-1 border border-white/50' },
          React.createElement('button', { 
            onClick: () => setBillingCycle('monthly'),
            className: `px-6 py-2 rounded-full transition-colors duration-300 ${billingCycle === 'monthly' ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white' : 'text-gray-600'}`
          }, 'Monthly'),
          React.createElement('button', { 
            onClick: () => setBillingCycle('yearly'),
            className: `px-6 py-2 rounded-full transition-colors duration-300 ${billingCycle === 'yearly' ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white' : 'text-gray-600'}`
          }, 'Yearly'),
          React.createElement('span', { className: 'ml-2 px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full' }, 'Save 20%')
        )
      ),
      
      // Pricing Cards
      React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-3 gap-8' },
        plans.map((plan, index) => 
          React.createElement(PricingCard, { key: index, plan: plan, index: index })
        )
      )
    )
  );
};

// Pricing Card Component
const PricingCard = ({ plan, index }) => {
  return React.createElement('div', { 
    className: `relative bg-white/60 backdrop-blur-lg rounded-2xl p-8 border ${plan.popular ? 'border-indigo-300 shadow-xl' : 'border-white/50'} transition-all duration-300 transform hover:-translate-y-2`,
    style: { transitionDelay: `${index * 100}ms` }
  },
    plan.popular && React.createElement('div', { className: 'absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium' }, 'Most Popular'),
    
    React.createElement('h3', { className: 'text-2xl font-bold text-gray-800 mb-2' }, plan.name),
    React.createElement('div', { className: 'mb-6' },
      React.createElement('span', { className: 'text-4xl font-bold text-gray-800' }, plan.price),
      React.createElement('span', { className: 'text-gray-600' }, plan.period)
    ),
    React.createElement('p', { className: 'text-gray-600 mb-6' }, plan.description),
    
    React.createElement('ul', { className: 'mb-8 space-y-3' },
      plan.features.map((feature, i) => 
        React.createElement('li', { key: i, className: 'flex items-start' },
          React.createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', className: 'h-5 w-5 text-green-500 mr-2 mt-0.5', viewBox: '0 0 20 20', fill: 'currentColor' },
            React.createElement('path', { fillRule: 'evenodd', d: 'M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z', clipRule: 'evenodd' })
          ),
          React.createElement('span', { className: 'text-gray-600' }, feature)
        )
      )
    ),
    
    React.createElement('button', { 
      className: `w-full py-3 rounded-lg font-medium transition-all duration-300 ${plan.popular ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:opacity-90' : 'bg-white text-gray-800 border border-gray-300 hover:bg-gray-50'}`
    }, plan.cta)
  );
};

// Customers Component
const Customers = () => {
  const customers = [
    { name: 'TechCorp', logo: 'https://placehold.co/120x60/ffffff/4f46e5?text=TechCorp' },
    { name: 'InnovateCo', logo: 'https://placehold.co/120x60/ffffff/4f46e5?text=InnovateCo' },
    { name: 'DataSys', logo: 'https://placehold.co/120x60/ffffff/4f46e5?text=DataSys' },
    { name: 'CloudNet', logo: 'https://placehold.co/120x60/ffffff/4f46e5?text=CloudNet' },
    { name: 'FutureSoft', logo: 'https://placehold.co/120x60/ffffff/4f46e5?text=FutureSoft' },
    { name: 'NextGen', logo: 'https://placehold.co/120x60/ffffff/4f46e5?text=NextGen' }
  ];
  
  const testimonials = [
    {
      quote: 'NimbusBoard transformed how our team collaborates on data. We\'ve seen a 40% increase in productivity since implementing it.',
      author: 'Sarah Johnson',
      role: 'CTO at TechCorp',
      avatar: 'https://placehold.co/80x80/ffffff/4f46e5?text=SJ'
    },
    {
      quote: 'The customizable dashboards and real-time collaboration features have been game-changers for our distributed team.',
      author: 'Michael Chen',
      role: 'Product Lead at InnovateCo',
      avatar: 'https://placehold.co/80x80/ffffff/4f46e5?text=MC'
    },
    {
      quote: 'We tried several dashboard tools, but NimbusBoard\'s combination of ease-of-use and powerful features is unmatched.',
      author: 'Emily Rodriguez',
      role: 'Data Director at DataSys',
      avatar: 'https://placehold.co/80x80/ffffff/4f46e5?text=ER'
    }
  ];
  
  return React.createElement('section', { id: 'customers', className: 'py-20 px-4' },
    React.createElement('div', { className: 'container mx-auto max-w-6xl' },
      React.createElement('div', { className: 'text-center mb-16' },
        React.createElement('h2', { className: 'text-3xl md:text-4xl font-bold text-gray-800 mb-4' }, 'Trusted by Industry Leaders'),
        React.createElement('p', { className: 'text-lg text-gray-600 max-w-2xl mx-auto' }, 'Join thousands of teams that use NimbusBoard to visualize data and make better decisions.'
        )
      ),
      
      // Customer Logos
      React.createElement('div', { className: 'mb-20' },
        React.createElement('div', { className: 'flex flex-wrap justify-center items-center gap-8 md:gap-12' },
          customers.map((customer, index) => 
            React.createElement('div', { key: index, className: 'opacity-70 hover:opacity-100 transition-opacity duration-300' },
              React.createElement('img', { src: customer.logo, alt: customer.name, className: 'h-10 md:h-12' })
            )
          )
        )
      ),
      
      // Testimonials
      React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-3 gap-8' },
        testimonials.map((testimonial, index) => 
          React.createElement(TestimonialCard, { key: index, testimonial: testimonial, index: index })
        )
      )
    )
  );
};

// Testimonial Card Component
const TestimonialCard = ({ testimonial, index }) => {
  return React.createElement('div', { 
    className: 'bg-white/60 backdrop-blur-lg rounded-2xl p-6 border border-white/50 shadow-lg transition-all duration-300 transform hover:-translate-y-2',
    style: { transitionDelay: `${index * 100}ms` }
  },
    React.createElement('div', { className: 'flex items-center mb-4' },
      React.createElement('img', { src: testimonial.avatar, alt: testimonial.author, className: 'w-12 h-12 rounded-full mr-4' }),
      React.createElement('div', null,
        React.createElement('h4', { className: 'font-bold text-gray-800' }, testimonial.author),
        React.createElement('p', { className: 'text-gray-600 text-sm' }, testimonial.role)
      )
    ),
    React.createElement('p', { className: 'text-gray-700 italic' }, `"${testimonial.quote}"`)
  );
};

// Footer Component
const Footer = () => {
  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Integrations', href: '#' },
      { name: 'Roadmap', href: '#' }
    ],
    company: [
      { name: 'About', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Contact', href: '#' }
    ],
    resources: [
      { name: 'Documentation', href: '#' },
      { name: 'Tutorials', href: '#' },
      { name: 'Community', href: '#' },
      { name: 'Support', href: '#' }
    ],
    legal: [
      { name: 'Privacy', href: '#' },
      { name: 'Terms', href: '#' },
      { name: 'Security', href: '#' },
      { name: 'Cookies', href: '#' }
    ]
  };
  
  return React.createElement('footer', { className: 'bg-gradient-to-r from-indigo-900 to-purple-900 text-white pt-16 pb-8 px-4' },
    React.createElement('div', { className: 'container mx-auto max-w-6xl' },
      React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12' },
        // Logo and Description
        React.createElement('div', { className: 'lg:col-span-2' },
          React.createElement('div', { className: 'flex items-center space-x-2 mb-4' },
            React.createElement('div', { className: 'w-10 h-10 rounded-lg bg-white flex items-center justify-center' },
              React.createElement('span', { className: 'text-indigo-600 font-bold' }, 'N')
            ),
            React.createElement('span', { className: 'text-xl font-bold' }, 'NimbusBoard')
          ),
          React.createElement('p', { className: 'text-indigo-200 mb-6 max-w-md' },
            'The modern dashboard platform that helps teams visualize data, collaborate effectively, and make better decisions.'
          ),
          React.createElement('div', { className: 'flex space-x-4' },
            React.createElement('a', { href: '#', className: 'w-10 h-10 rounded-full bg-indigo-800 flex items-center justify-center hover:bg-indigo-700 transition-colors duration-300' },
              React.createElement('svg', { className: 'w-5 h-5', fill: 'currentColor', viewBox: '0 0 24 24' },
                React.createElement('path', { d: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z' })
              )
            ),
            React.createElement('a', { href: '#', className: 'w-10 h-10 rounded-full bg-indigo-800 flex items-center justify-center hover:bg-indigo-700 transition-colors duration-300' },
              React.createElement('svg', { className: 'w-5 h-5', fill: 'currentColor', viewBox: '0 0 24 24' },
                React.createElement('path', { d: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' })
              )
            ),
            React.createElement('a', { href: '#', className: 'w-10 h-10 rounded-full bg-indigo-800 flex items-center justify-center hover:bg-indigo-700 transition-colors duration-300' },
              React.createElement('svg', { className: 'w-5 h-5', fill: 'currentColor', viewBox: '0 0 24 24' },
                React.createElement('path', { d: 'M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.09.682-.218.682-.485 0-.236-.008-.866-.013-1.7-2.782.602-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.307.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z' })
              )
            ),
            React.createElement('a', { href: '#', className: 'w-10 h-10 rounded-full bg-indigo-800 flex items-center justify-center hover:bg-indigo-700 transition-colors duration-300' },
              React.createElement('svg', { className: 'w-5 h-5', fill: 'currentColor', viewBox: '0 0 24 24' },
                React.createElement('path', { d: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' })
              )
            )
          )
        ),
        
        // Footer Links
        Object.entries(footerLinks).map(([category, links]) => 
          React.createElement('div', { key: category },
            React.createElement('h3', { className: 'text-lg font-semibold mb-4 capitalize' }, category),
            React.createElement('ul', { className: 'space-y-2' },
              links.map((link, index) => 
                React.createElement('li', { key: index },
                  React.createElement('a', { 
                    href: link.href, 
                    className: 'text-indigo-200 hover:text-white transition-colors duration-300' 
                  }, link.name)
                )
              )
            )
          )
        )
      ),
      
      // Copyright
      React.createElement('div', { className: 'pt-8 border-t border-indigo-800 text-center text-indigo-300 text-sm' },
        React.createElement('p', null, '© ', new Date().getFullYear(), ' NimbusBoard. All rights reserved.')
      )
    )
  );
};

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));