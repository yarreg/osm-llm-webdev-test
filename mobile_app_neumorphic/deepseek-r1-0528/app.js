const { createElement: e, useState, useEffect } = React;

const Hero = () => e('section', {
  className: 'min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4',
  'aria-label': 'Hero Section'
},
  e('div', { className: 'container mx-auto flex flex-col md:flex-row items-center justify-between gap-12' },
    e('div', { className: 'md:w-1/2 text-center md:text-left' },
      e('h1', { className: 'text-5xl md:text-6xl font-bold mb-4 text-gray-800' }, 'FocusFlow'),
      e('h2', { className: 'text-2xl md:text-3xl font-light mb-6 text-gray-600' }, 'Transform Your Productivity'),
      e('p', { className: 'text-lg mb-8 text-gray-500 max-w-lg' }, 'The ultimate app for deep focus, task management, and achieving your goals without distractions.'),
      e('div', { className: 'flex flex-col sm:flex-row gap-4 justify-center md:justify-start' },
        e('button', {
          className: 'neumorphic-btn-primary px-8 py-4 rounded-xl text-lg font-medium transition-all duration-300 hover:scale-105',
          'aria-label': 'Download FocusFlow App'
        }, 'Download Now'),
        e('button', {
          className: 'neumorphic-btn-secondary px-8 py-4 rounded-xl text-lg font-medium transition-all duration-300 hover:scale-105',
          'aria-label': 'Learn More About FocusFlow'
        }, 'Learn More')
      )
    ),
    e('div', { className: 'md:w-1/2 flex justify-center' },
      e('div', { className: 'neumorphic-card p-6 rounded-3xl max-w-md' },
        e('img', {
          src: 'https://placehold.co/600x1200/5e72e4/FFFFFF?text=FocusFlow\nApp\nMockup',
          alt: 'FocusFlow mobile app interface',
          className: 'w-full h-auto rounded-2xl',
          loading: 'lazy'
        })
      )
    )
  )
);

const FeatureCard = ({ title, description, icon }) => e('div', {
  className: 'neumorphic-card p-8 rounded-3xl transition-all duration-300 hover:translate-y-2',
  'aria-label': `Feature: ${title}`
},
  e('div', { className: 'neumorphic-icon w-16 h-16 rounded-2xl flex items-center justify-center mb-6' },
    e('span', { className: 'text-2xl' }, icon)
  ),
  e('h3', { className: 'text-2xl font-bold mb-4 text-gray-800' }, title),
  e('p', { className: 'text-gray-600' }, description)
);

const Features = () => e('section', {
  className: 'py-20 bg-gradient-to-b from-gray-100 to-gray-50',
  'aria-label': 'Features Section'
},
  e('div', { className: 'container mx-auto px-4' },
    e('div', { className: 'text-center mb-16' },
      e('h2', { className: 'text-4xl font-bold mb-4 text-gray-800' }, 'Powerful Features'),
      e('p', { className: 'text-xl text-gray-600 max-w-2xl mx-auto' }, 'Designed to help you achieve deep focus and maximize productivity')
    ),
    e('div', { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' },
      FeatureCard({
        title: 'Focus Timer',
        description: 'Customizable Pomodoro technique with smart intervals to maintain your flow state',
        icon: '⏱️'
      }),
      FeatureCard({
        title: 'Task Management',
        description: 'Organize tasks with priority levels and smart reminders',
        icon: '✅'
      }),
      FeatureCard({
        title: 'Distraction Block',
        description: 'Block distracting apps and websites during focus sessions',
        icon: '🚫'
      }),
      FeatureCard({
        title: 'Progress Tracking',
        description: 'Visualize your productivity trends and achievements',
        icon: '📊'
      }),
      FeatureCard({
        title: 'Mindful Breaks',
        description: 'Guided breathing exercises for effective rest periods',
        icon: '🧘'
      }),
      FeatureCard({
        title: 'Sync Across Devices',
        description: 'Seamlessly continue your work on all your devices',
        icon: '🔄'
      })
    )
  )
);

const TestimonialCard = ({ quote, author, role }) => e('div', {
  className: 'neumorphic-card p-8 rounded-3xl',
  'aria-label': `Testimonial from ${author}`
},
  e('div', { className: 'text-yellow-400 text-4xl mb-4' }, '★★★★★'),
  e('p', { className: 'text-gray-700 italic mb-6 text-lg' }, `"${quote}"`),
  e('div', { className: 'flex items-center' },
    e('div', { className: 'bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16' }),
    e('div', { className: 'ml-4' },
      e('p', { className: 'font-bold text-gray-800' }, author),
      e('p', { className: 'text-gray-600' }, role)
    )
  )
);

const Testimonials = () => e('section', {
  className: 'py-20 bg-gradient-to-b from-gray-50 to-gray-100',
  'aria-label': 'Testimonials Section'
},
  e('div', { className: 'container mx-auto px-4' },
    e('div', { className: 'text-center mb-16' },
      e('h2', { className: 'text-4xl font-bold mb-4 text-gray-800' }, 'Trusted by Thousands'),
      e('p', { className: 'text-xl text-gray-600 max-w-2xl mx-auto' }, 'See what our users say about their FocusFlow experience')
    ),
    e('div', { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' },
      TestimonialCard({
        quote: 'FocusFlow completely changed how I work. My productivity has doubled since I started using it!',
        author: 'Alex Johnson',
        role: 'Software Engineer'
      }),
      TestimonialCard({
        quote: 'The distraction blocking feature saved me from my social media addiction. Highly recommend!',
        author: 'Sarah Williams',
        role: 'Graphic Designer'
      }),
      TestimonialCard({
        quote: 'As a student, this app helped me focus during exams. The progress tracking keeps me motivated.',
        author: 'Michael Chen',
        role: 'University Student'
      })
    )
  )
);

const DownloadBadges = () => e('section', {
  className: 'py-20 bg-gradient-to-b from-gray-100 to-gray-50',
  'aria-label': 'Download Section'
},
  e('div', { className: 'container mx-auto px-4 text-center' },
    e('h2', { className: 'text-4xl font-bold mb-4 text-gray-800' }, 'Get FocusFlow Today'),
    e('p', { className: 'text-xl text-gray-600 mb-12 max-w-2xl mx-auto' }, 'Join thousands of productive people and transform your workflow'),
    e('div', { className: 'flex flex-wrap justify-center gap-8' },
      e('a', {
        href: '#',
        'aria-label': 'Download on the App Store',
        className: 'neumorphic-btn-download transition-transform duration-300 hover:scale-105'
      }, e('img', {
        src: 'https://placehold.co/200x70/000000/FFFFFF?text=App+Store',
        alt: 'Download on the App Store',
        className: 'h-16 md:h-20',
        loading: 'lazy'
      })),
      e('a', {
        href: '#',
        'aria-label': 'Get it on Google Play',
        className: 'neumorphic-btn-download transition-transform duration-300 hover:scale-105'
      }, e('img', {
        src: 'https://placehold.co/200x70/000000/FFFFFF?text=Google+Play',
        alt: 'Get it on Google Play',
        className: 'h-16 md:h-20',
        loading: 'lazy'
      }))
    )
  )
);

const FAQItem = ({ question, answer, isOpen, onClick }) => e('div', {
  className: 'neumorphic-card rounded-2xl overflow-hidden mb-6 transition-all duration-300',
  'aria-expanded': isOpen
},
  e('button', {
    className: 'w-full text-left p-6 flex justify-between items-center',
    onClick: onClick,
    'aria-label': `Toggle FAQ: ${question}`
  },
    e('h3', { className: 'text-xl font-bold text-gray-800' }, question),
    e('span', { className: 'text-2xl' }, isOpen ? '−' : '+')
  ),
  e('div', {
    className: `px-6 pb-6 pt-2 transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`,
    'aria-hidden': !isOpen
  },
    e('p', { className: 'text-gray-600' }, answer)
  )
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  
  const faqs = [
    {
      question: 'Is FocusFlow available on both iOS and Android?',
      answer: 'Yes, FocusFlow is available on both the Apple App Store for iOS devices and Google Play Store for Android devices.'
    },
    {
      question: 'Can I use FocusFlow without creating an account?',
      answer: 'You can use basic features without an account, but creating a free account unlocks synchronization across devices and advanced analytics.'
    },
    {
      question: 'How does the distraction blocking work?',
      answer: 'During focus sessions, FocusFlow can temporarily block access to distracting apps and websites based on your settings.'
    },
    {
      question: 'Is there a free version available?',
      answer: 'Yes, FocusFlow offers a free tier with core features. Premium features are available through a subscription.'
    },
    {
      question: 'How does FocusFlow protect my privacy?',
      answer: 'We take privacy seriously. All your data is encrypted, and we never sell your information to third parties.'
    }
  ];
  
  return e('section', {
    className: 'py-20 bg-gradient-to-b from-gray-50 to-gray-100',
    'aria-label': 'FAQ Section'
  },
    e('div', { className: 'container mx-auto px-4' },
      e('div', { className: 'text-center mb-16' },
        e('h2', { className: 'text-4xl font-bold mb-4 text-gray-800' }, 'Frequently Asked Questions'),
        e('p', { className: 'text-xl text-gray-600 max-w-2xl mx-auto' }, 'Find answers to common questions about FocusFlow')
      ),
      e('div', { className: 'max-w-3xl mx-auto' },
        ...faqs.map((faq, index) => 
          FAQItem({
            question: faq.question,
            answer: faq.answer,
            isOpen: openIndex === index,
            onClick: () => setOpenIndex(openIndex === index ? -1 : index)
          })
        )
      )
    )
  );
};

const Footer = () => e('footer', {
  className: 'py-12 bg-gray-800 text-gray-300',
  'aria-label': 'Footer'
},
  e('div', { className: 'container mx-auto px-4' },
    e('div', { className: 'grid grid-cols-1 md:grid-cols-4 gap-8' },
      e('div', { className: 'md:col-span-2' },
        e('h3', { className: 'text-2xl font-bold mb-4 text-white' }, 'FocusFlow'),
        e('p', { className: 'mb-6 max-w-md' }, 'The ultimate productivity app designed to help you achieve deep focus and accomplish your most important work.'),
        e('div', { className: 'flex gap-4' },
          e('a', {
            href: '#',
            'aria-label': 'Facebook',
            className: 'neumorphic-social p-3 rounded-full transition-all duration-300 hover:scale-110'
          }, 'f'),
          e('a', {
            href: '#',
            'aria-label': 'Twitter',
            className: 'neumorphic-social p-3 rounded-full transition-all duration-300 hover:scale-110'
          }, 't'),
          e('a', {
            href: '#',
            'aria-label': 'Instagram',
            className: 'neumorphic-social p-3 rounded-full transition-all duration-300 hover:scale-110'
          }, 'i')
        )
      ),
      e('div', null,
        e('h4', { className: 'text-lg font-semibold mb-4 text-white' }, 'Product'),
        e('ul', null,
          e('li', { className: 'mb-2' }, e('a', { href: '#', className: 'hover:text-white transition-colors' }, 'Features')),
          e('li', { className: 'mb-2' }, e('a', { href: '#', className: 'hover:text-white transition-colors' }, 'Pricing')),
          e('li', { className: 'mb-2' }, e('a', { href: '#', className: 'hover:text-white transition-colors' }, 'Download'))
        )
      ),
      e('div', null,
        e('h4', { className: 'text-lg font-semibold mb-4 text-white' }, 'Company'),
        e('ul', null,
          e('li', { className: 'mb-2' }, e('a', { href: '#', className: 'hover:text-white transition-colors' }, 'About Us')),
          e('li', { className: 'mb-2' }, e('a', { href: '#', className: 'hover:text-white transition-colors' }, 'Careers')),
          e('li', { className: 'mb-2' }, e('a', { href: '#', className: 'hover:text-white transition-colors' }, 'Contact'))
        )
      )
    ),
    e('div', { className: 'border-t border-gray-700 mt-12 pt-8 text-center' },
      e('p', null, '© 2023 FocusFlow. All rights reserved.')
    )
  )
);

const App = () => {
  useEffect(() => {
    // Add scroll animation effects
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);
  
  return e('div', { className: 'font-sans' },
    Hero(),
    e('div', { className: 'animate-on-scroll' }, Features()),
    e('div', { className: 'animate-on-scroll' }, Testimonials()),
    e('div', { className: 'animate-on-scroll' }, DownloadBadges()),
    e('div', { className: 'animate-on-scroll' }, FAQ()),
    Footer()
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(e(App));