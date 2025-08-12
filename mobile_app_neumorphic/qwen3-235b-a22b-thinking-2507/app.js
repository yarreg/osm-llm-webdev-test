const { createElement: h, useState, useEffect } = React;

const App = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e) => {
      if (e.target.tagName === 'A') {
        const href = e.target.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const targetId = href.substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: 'smooth'
            });
            setMobileMenuOpen(false);
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  // Scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Header scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (window.scrollY > 50) {
        header?.classList.add('scrolled');
      } else {
        header?.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return h('div', { className: 'font-sans text-gray-800 min-h-screen flex flex-col' },
    h(Header, { mobileMenuOpen, setMobileMenuOpen }),
    h('main', { className: 'flex-grow' },
      h(Hero),
      h(Features),
      h(Testimonials),
      h(Download),
      h(FAQ, { openFaq, setOpenFaq })
    ),
    h(Footer)
  );
};

const Header = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  return h('header', {
    className: 'px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center fixed w-full z-50 transition-all duration-300'
  },
    h('a', {
      href: '#',
      className: 'text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600'
    }, 'FocusFlow'),
    h('nav', {
      className: `md:flex ${mobileMenuOpen ? 'block' : 'hidden'} md:block absolute md:relative top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none p-4 md:p-0`
    },
      h('ul', { className: 'flex flex-col md:flex-row md:space-x-8' },
        h('li', null, h('a', { href: '#features', className: 'block py-2 md:py-0 text-gray-700 hover:text-indigo-600 transition-colors' }, 'Features')),
        h('li', null, h('a', { href: '#testimonials', className: 'block py-2 md:py-0 text-gray-700 hover:text-indigo-600 transition-colors' }, 'Testimonials')),
        h('li', null, h('a', { href: '#faq', className: 'block py-2 md:py-0 text-gray-700 hover:text-indigo-600 transition-colors' }, 'FAQ')),
        h('li', null, h('a', { href: '#download', className: 'neumorphic-btn mt-4 md:mt-0' }, 'Download'))
      )
    ),
    h('button', {
      className: 'md:hidden text-gray-700',
      onClick: () => setMobileMenuOpen(!mobileMenuOpen)
    },
      mobileMenuOpen ? '✕' : '☰'
    )
  );
};

const Hero = () => {
  return h('section', {
    id: 'hero',
    className: 'pt-24 pb-16 md:pt-32 md:pb-24 flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50'
  },
    h('div', { className: 'max-w-xl px-4 text-center md:text-left animate-on-scroll' },
      h('h1', { className: 'text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600' },
        'FocusFlow: Your Productivity Companion'
      ),
      h('p', { className: 'text-xl text-gray-600 mb-8' },
        'Streamline your workflow with intelligent task management and focus-enhancing features designed to boost your productivity.'
      ),
      h('div', { className: 'flex flex-col sm:flex-row justify-center md:justify-start gap-4' },
        h('a', { href: '#download', className: 'neumorphic-btn' }, 'Get Started'),
        h('a', { href: '#features', className: 'neumorphic-btn bg-white text-indigo-600' }, 'Learn More')
      )
    ),
    h('div', { className: 'mt-12 md:mt-0 md:ml-12 animate-on-scroll' },
      h('img', {
        src: 'https://placehold.co/300x600/4361ee/ffffff?text=FocusFlow+App',
        alt: 'FocusFlow Mobile App Mockup',
        className: 'rounded-3xl shadow-2xl'
      })
    )
  );
};

const Features = () => {
  const features = [
    {
      title: 'Smart Task Management',
      description: 'AI-powered task organization that adapts to your workflow and priorities.',
      icon: '📊'
    },
    {
      title: 'Focus Mode',
      description: 'Distraction-free environment with Pomodoro timer and deep work sessions.',
      icon: '⏱️'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Visualize your productivity trends and identify improvement areas.',
      icon: '📈'
    }
  ];

  return h('section', {
    id: 'features',
    className: 'py-16 md:py-24 bg-white'
  },
    h('div', { className: 'max-w-6xl mx-auto px-4' },
      h('div', { className: 'text-center mb-16 animate-on-scroll' },
        h('h2', { className: 'text-3xl md:text-4xl font-bold mb-4' }, 'Powerful Features'),
        h('p', { className: 'text-xl text-gray-600 max-w-3xl mx-auto' },
          'Everything you need to take control of your productivity in one elegant package'
        )
      ),
      h('div', { className: 'grid grid-cols-1 md:grid-cols-3 gap-8' },
        features.map((feature, index) =>
          h('div', {
            key: index,
            className: 'neumorphic p-8 rounded-2xl transition-all duration-300 hover:shadow-lg animate-on-scroll',
            style: { animationDelay: `${index * 150}ms` }
          },
            h('div', { className: 'text-4xl mb-4' }, feature.icon),
            h('h3', { className: 'text-xl font-bold mb-3' }, feature.title),
            h('p', { className: 'text-gray-600' }, feature.description)
          )
        )
      )
    )
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Project Manager',
      content: 'FocusFlow transformed how my team manages projects. We\'ve cut meeting times by 30% and hit deadlines consistently.',
      avatar: 'https://placehold.co/100x100/4361ee/ffffff?text=SJ'
    },
    {
      name: 'Michael Chen',
      role: 'Freelance Developer',
      content: 'The focus mode is a game-changer. I get twice as much coding done in half the time without distractions.',
      avatar: 'https://placehold.co/100x100/4cc9f0/ffffff?text=MC'
    },
    {
      name: 'Alex Rivera',
      role: 'Startup Founder',
      content: 'The analytics dashboard helped me identify productivity bottlenecks I never knew existed. Worth every penny!',
      avatar: 'https://placehold.co/100x100/720573/ffffff?text=AR'
    }
  ];

  return h('section', {
    id: 'testimonials',
    className: 'py-16 md:py-24 bg-gradient-to-br from-indigo-50 to-purple-50'
  },
    h('div', { className: 'max-w-6xl mx-auto px-4' },
      h('div', { className: 'text-center mb-16 animate-on-scroll' },
        h('h2', { className: 'text-3xl md:text-4xl font-bold mb-4' }, 'Trusted by Professionals'),
        h('p', { className: 'text-xl text-gray-600 max-w-3xl mx-auto' },
          'Join thousands of users who have transformed their productivity with FocusFlow'
        )
      ),
      h('div', { className: 'grid grid-cols-1 md:grid-cols-3 gap-8' },
        testimonials.map((testimonial, index) =>
          h('div', {
            key: index,
            className: 'neumorphic p-6 rounded-2xl animate-on-scroll',
            style: { animationDelay: `${index * 150}ms` }
          },
            h('div', { className: 'flex items-center mb-4' },
              h('img', {
                src: testimonial.avatar,
                alt: testimonial.name,
                className: 'w-12 h-12 rounded-full mr-4'
              }),
              h('div', null,
                h('h4', { className: 'font-bold' }, testimonial.name),
                h('p', { className: 'text-sm text-gray-500' }, testimonial.role)
              )
            ),
            h('p', { className: 'text-gray-600 italic' }, `"${testimonial.content}"`)
          )
        )
      )
    )
  );
};

const Download = () => {
  return h('section', {
    id: 'download',
    className: 'py-16 md:py-24 bg-white'
  },
    h('div', { className: 'max-w-4xl mx-auto px-4 text-center' },
      h('div', { className: 'mb-12 animate-on-scroll' },
        h('h2', { className: 'text-3xl md:text-4xl font-bold mb-4' }, 'Download Today'),
        h('p', { className: 'text-xl text-gray-600' },
          'Start your productivity journey on any device'
        )
      ),
      h('div', { className: 'flex flex-col sm:flex-row justify-center items-center gap-6 animate-on-scroll' },
        h('a', {
          href: '#',
          className: 'neumorphic-btn w-48 h-14 flex items-center justify-center'
        },
          h('img', {
            src: 'https://placehold.co/150x50/svg?text=App+Store',
            alt: 'Download on App Store',
            className: 'w-full h-full object-contain'
          })
        ),
        h('a', {
          href: '#',
          className: 'neumorphic-btn w-48 h-14 flex items-center justify-center'
        },
          h('img', {
            src: 'https://placehold.co/150x50/svg?text=Google+Play',
            alt: 'Get it on Google Play',
            className: 'w-full h-full object-contain'
          })
        )
      ),
      h('p', { className: 'mt-8 text-gray-500 animate-on-scroll' },
        'Also available on web and desktop apps'
      )
    )
  );
};

const FAQ = ({ openFaq, setOpenFaq }) => {
  const faqs = [
    {
      question: 'How does FocusFlow handle data privacy?',
      answer: 'We take privacy seriously. All your data is encrypted end-to-end and never shared with third parties. We comply with GDPR and CCPA regulations.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes! We offer a 14-day free trial with full access to all features. No credit card required to start.'
    },
    {
      question: 'Can I use FocusFlow offline?',
      answer: 'Absolutely. All your tasks and data sync automatically when you\'re back online.'
    },
    {
      question: 'What platforms does FocusFlow support?',
      answer: 'We have apps for iOS, Android, macOS, Windows, and a web version that works on any browser.'
    }
  ];

  return h('section', {
    id: 'faq',
    className: 'py-16 md:py-24 bg-gradient-to-br from-indigo-50 to-purple-50'
  },
    h('div', { className: 'max-w-3xl mx-auto px-4' },
      h('div', { className: 'text-center mb-12 animate-on-scroll' },
        h('h2', { className: 'text-3xl md:text-4xl font-bold mb-4' }, 'Frequently Asked Questions'),
        h('p', { className: 'text-xl text-gray-600' },
          'Everything you need to know about the product and billing'
        )
      ),
      h('div', { className: 'space-y-4' },
        faqs.map((faq, index) =>
          h('div', {
            key: index,
            className: 'neumorphic rounded-xl overflow-hidden animate-on-scroll',
            style: { animationDelay: `${index * 100}ms` }
          },
            h('button', {
              className: 'w-full px-6 py-4 text-left font-bold flex justify-between items-center',
              onClick: () => setOpenFaq(openFaq === index ? null : index),
              'aria-expanded': openFaq === index,
              'aria-controls': `faq-answer-${index}`
            },
              h('span', null, faq.question),
              h('span', { className: 'text-2xl' }, openFaq === index ? '−' : '+')
            ),
            openFaq === index && h('div', {
              id: `faq-answer-${index}`,
              className: 'px-6 pb-4 pt-0 text-gray-600 border-t border-gray-200'
            },
              faq.answer
            )
          )
        )
      )
    )
  );
};

const Footer = () => {
  return h('footer', {
    className: 'py-8 bg-gray-900 text-white'
  },
    h('div', { className: 'max-w-6xl mx-auto px-4 text-center' },
      h('div', { className: 'mb-4' },
        h('a', {
          href: '#',
          className: 'text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400'
        }, 'FocusFlow')
      ),
      h('p', { className: 'text-gray-400 mb-6' },
        '© 2023 FocusFlow. All rights reserved.'
      ),
      h('div', { className: 'flex justify-center space-x-6' },
        h('a', { href: '#', className: 'text-gray-400 hover:text-white transition-colors' }, 'Privacy Policy'),
        h('a', { href: '#', className: 'text-gray-400 hover:text-white transition-colors' }, 'Terms of Service'),
        h('a', { href: '#', className: 'text-gray-400 hover:text-white transition-colors' }, 'Contact')
      )
    )
  );
};

// Mount the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(h(App));