const { useState, useEffect, useRef } = React;

// Navigation Component
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };
  
  return React.createElement('nav', { className: 'fixed w-full z-50 py-4 px-6 transition-all duration-300' },
    React.createElement('div', { className: 'max-w-7xl mx-auto flex justify-between items-center' },
      React.createElement('div', { className: 'flex items-center' },
        React.createElement('div', { className: 'neumorphic-logo w-10 h-10 rounded-xl flex items-center justify-center mr-3' },
          React.createElement('span', { className: 'text-indigo-600 font-bold text-xl' }, 'F')
        ),
        React.createElement('span', { className: 'text-xl font-bold text-gray-800' }, 'FocusFlow')
      ),
      
      // Desktop Navigation
      React.createElement('div', { className: 'hidden md:flex space-x-8' },
        ['features', 'testimonials', 'download', 'faq'].map((item) => (
          React.createElement('button', {
            key: item,
            onClick: () => scrollToSection(item),
            className: 'text-gray-600 hover:text-indigo-600 transition-colors capitalize font-medium'
          }, item)
        ))
      ),
      
      // Mobile Menu Button
      React.createElement('button', {
        onClick: () => setIsMenuOpen(!isMenuOpen),
        className: 'md:hidden neumorphic-button w-10 h-10 rounded-lg flex items-center justify-center'
      },
        React.createElement('svg', {
          className: 'w-6 h-6 text-gray-600',
          fill: 'none',
          stroke: 'currentColor',
          viewBox: '0 0 24 24',
          xmlns: 'http://www.w3.org/2000/svg'
        },
          React.createElement('path', {
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: 2,
            d: isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'
          })
        )
      )
    ),
    
    // Mobile Navigation
    isMenuOpen && React.createElement('div', { className: 'md:hidden mt-4 neumorphic-card rounded-xl p-4' },
      ['features', 'testimonials', 'download', 'faq'].map((item) => (
        React.createElement('button', {
          key: item,
          onClick: () => scrollToSection(item),
          className: 'block w-full text-left py-2 px-4 text-gray-600 hover:text-indigo-600 transition-colors capitalize font-medium'
        }, item)
      ))
    )
  );
};

// Hero Section
const HeroSection = () => {
  return React.createElement('section', { id: 'hero', className: 'pt-24 pb-16 px-6' },
    React.createElement('div', { className: 'max-w-7xl mx-auto flex flex-col md:flex-row items-center' },
      React.createElement('div', { className: 'md:w-1/2 mb-12 md:mb-0' },
        React.createElement('h1', { className: 'text-4xl md:text-5xl font-bold text-gray-800 mb-6' },
          'Stay Focused, ',
          React.createElement('span', { className: 'text-indigo-600' }, 'Get More Done')
        ),
        React.createElement('p', { className: 'text-lg text-gray-600 mb-8 max-w-lg' },
          'FocusFlow helps you eliminate distractions, manage your time effectively, and achieve your goals with our innovative focus techniques.'
        ),
        React.createElement('div', { className: 'flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4' },
          React.createElement('button', { className: 'neumorphic-button-primary px-8 py-3 rounded-xl font-semibold text-white' },
            'Get Started'
          ),
          React.createElement('button', { className: 'neumorphic-button px-8 py-3 rounded-xl font-semibold text-gray-700' },
            'Learn More'
          )
        )
      ),
      React.createElement('div', { className: 'md:w-1/2 flex justify-center' },
        React.createElement('div', { className: 'neumorphic-card p-6 rounded-3xl transform rotate-6 hover:rotate-3 transition-transform duration-500' },
          React.createElement('img', {
            src: 'https://placehold.co/300x600/4F46E5/FFFFFF?text=FocusFlow+App',
            alt: 'FocusFlow App Mockup',
            className: 'w-64 h-auto rounded-2xl shadow-lg'
          })
        )
      )
    )
  );
};

// Features Section
const FeaturesSection = () => {
  const features = [
    {
      title: 'Focus Timer',
      description: 'Customizable Pomodoro timer to help you stay focused and take regular breaks.',
      icon: '⏱️'
    },
    {
      title: 'Task Management',
      description: 'Organize your tasks with priority levels and due dates.',
      icon: '📋'
    },
    {
      title: 'Progress Tracking',
      description: 'Visualize your productivity with detailed analytics and insights.',
      icon: '📊'
    },
    {
      title: 'Distraction Blocker',
      description: 'Block distracting websites and apps during your focus sessions.',
      icon: '🚫'
    }
  ];
  
  return React.createElement('section', { id: 'features', className: 'py-16 px-6 bg-gray-50' },
    React.createElement('div', { className: 'max-w-7xl mx-auto' },
      React.createElement('div', { className: 'text-center mb-16' },
        React.createElement('h2', { className: 'text-3xl md:text-4xl font-bold text-gray-800 mb-4' }, 'Powerful Features'),
        React.createElement('p', { className: 'text-lg text-gray-600 max-w-2xl mx-auto' },
          'Everything you need to boost your productivity and achieve your goals.'
        )
      ),
      React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8' },
        features.map((feature, index) => (
          React.createElement('div', {
            key: index,
            className: 'neumorphic-card p-6 rounded-2xl transition-all duration-300 hover:scale-105'
          },
            React.createElement('div', { className: 'text-4xl mb-4' }, feature.icon),
            React.createElement('h3', { className: 'text-xl font-semibold text-gray-800 mb-2' }, feature.title),
            React.createElement('p', { className: 'text-gray-600' }, feature.description)
          )
        ))
      )
    )
  );
};

// Testimonials Section
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Product Manager',
      content: 'FocusFlow has completely transformed how I work. I\'ve doubled my productivity and finally have work-life balance.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Software Developer',
      content: 'The distraction blocker is a game-changer. I can finally focus on deep work without getting sidetracked by social media.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Freelance Designer',
      content: 'As a freelancer, managing my time is crucial. FocusFlow helps me stay on track and meet all my deadlines.',
      rating: 4
    }
  ];
  
  return React.createElement('section', { id: 'testimonials', className: 'py-16 px-6' },
    React.createElement('div', { className: 'max-w-7xl mx-auto' },
      React.createElement('div', { className: 'text-center mb-16' },
        React.createElement('h2', { className: 'text-3xl md:text-4xl font-bold text-gray-800 mb-4' }, 'What Our Users Say'),
        React.createElement('p', { className: 'text-lg text-gray-600 max-w-2xl mx-auto' },
          'Join thousands of satisfied users who have improved their productivity with FocusFlow.'
        )
      ),
      React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-3 gap-8' },
        testimonials.map((testimonial, index) => (
          React.createElement('div', {
            key: index,
            className: 'neumorphic-card p-6 rounded-2xl'
          },
            React.createElement('div', { className: 'flex mb-4' },
              Array.from({ length: 5 }).map((_, i) => (
                React.createElement('svg', {
                  key: i,
                  className: `w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`,
                  fill: 'currentColor',
                  viewBox: '0 0 20 20',
                  xmlns: 'http://www.w3.org/2000/svg'
                },
                  React.createElement('path', {
                    d: 'M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'
                  })
                )
              ))
            ),
            React.createElement('p', { className: 'text-gray-600 mb-6 italic' }, `"${testimonial.content}"`),
            React.createElement('div', { className: 'flex items-center' },
              React.createElement('div', { className: 'neumorphic-avatar w-12 h-12 rounded-full flex items-center justify-center mr-4' },
                React.createElement('span', { className: 'text-indigo-600 font-bold' }, testimonial.name.charAt(0))
              ),
              React.createElement('div', null,
                React.createElement('h4', { className: 'font-semibold text-gray-800' }, testimonial.name),
                React.createElement('p', { className: 'text-sm text-gray-600' }, testimonial.role)
              )
            )
          )
        ))
      )
    )
  );
};

// Download Section
const DownloadSection = () => {
  return React.createElement('section', { id: 'download', className: 'py-16 px-6 bg-gray-50' },
    React.createElement('div', { className: 'max-w-4xl mx-auto text-center' },
      React.createElement('h2', { className: 'text-3xl md:text-4xl font-bold text-gray-800 mb-4' }, 'Download FocusFlow Today'),
      React.createElement('p', { className: 'text-lg text-gray-600 mb-10 max-w-2xl mx-auto' },
        'Available on iOS and Android. Start your productivity journey now.'
      ),
      React.createElement('div', { className: 'flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6' },
        React.createElement('div', { className: 'neumorphic-card p-4 rounded-xl transition-all duration-300 hover:scale-105' },
          React.createElement('div', { className: 'flex items-center' },
            React.createElement('div', { className: 'mr-4' },
              React.createElement('svg', {
                className: 'w-10 h-10 text-gray-800',
                fill: 'currentColor',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg'
              },
                React.createElement('path', { d: 'M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z' })
              )
            ),
            React.createElement('div', { className: 'text-left' },
              React.createElement('div', { className: 'text-xs text-gray-600' }, 'Download on the'),
              React.createElement('div', { className: 'text-lg font-semibold text-gray-800' }, 'App Store')
            )
          )
        ),
        React.createElement('div', { className: 'neumorphic-card p-4 rounded-xl transition-all duration-300 hover:scale-105' },
          React.createElement('div', { className: 'flex items-center' },
            React.createElement('div', { className: 'mr-4' },
              React.createElement('svg', {
                className: 'w-10 h-10 text-gray-800',
                fill: 'currentColor',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg'
              },
                React.createElement('path', { d: 'M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z' })
              )
            ),
            React.createElement('div', { className: 'text-left' },
              React.createElement('div', { className: 'text-xs text-gray-600' }, 'Get it on'),
              React.createElement('div', { className: 'text-lg font-semibold text-gray-800' }, 'Google Play')
            )
          )
        )
      )
    )
  );
};

// FAQ Section
const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  
  const faqs = [
    {
      question: 'How does FocusFlow help improve productivity?',
      answer: 'FocusFlow uses proven techniques like the Pomodoro method to help you work in focused bursts with regular breaks, preventing burnout and maintaining high productivity levels throughout the day.'
    },
    {
      question: 'Is FocusFlow available on all devices?',
      answer: 'Yes, FocusFlow is available on both iOS and Android devices. We also have a web version that you can access from any browser.'
    },
    {
      question: 'Can I sync my data across multiple devices?',
      answer: 'Absolutely! With our premium plan, you can sync your tasks, progress, and settings across all your devices seamlessly.'
    },
    {
      question: 'Is there a free version of FocusFlow?',
      answer: 'Yes, we offer a free version with core features like the focus timer and basic task management. Premium features include advanced analytics, custom settings, and cross-device sync.'
    }
  ];
  
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  return React.createElement('section', { id: 'faq', className: 'py-16 px-6' },
    React.createElement('div', { className: 'max-w-4xl mx-auto' },
      React.createElement('div', { className: 'text-center mb-16' },
        React.createElement('h2', { className: 'text-3xl md:text-4xl font-bold text-gray-800 mb-4' }, 'Frequently Asked Questions'),
        React.createElement('p', { className: 'text-lg text-gray-600 max-w-2xl mx-auto' },
          'Everything you need to know about FocusFlow.'
        )
      ),
      React.createElement('div', { className: 'space-y-4' },
        faqs.map((faq, index) => (
          React.createElement('div', {
            key: index,
            className: 'neumorphic-card rounded-2xl overflow-hidden transition-all duration-300'
          },
            React.createElement('button', {
              onClick: () => toggleFAQ(index),
              className: 'w-full p-6 text-left flex justify-between items-center'
            },
              React.createElement('h3', { className: 'font-semibold text-gray-800' }, faq.question),
              React.createElement('svg', {
                className: `w-5 h-5 text-gray-600 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`,
                fill: 'none',
                stroke: 'currentColor',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg'
              },
                React.createElement('path', {
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeWidth: 2,
                  d: 'M19 9l-7 7-7-7'
                })
              )
            ),
            activeIndex === index && React.createElement('div', { className: 'px-6 pb-6 pt-2' },
              React.createElement('p', { className: 'text-gray-600' }, faq.answer)
            )
          )
        ))
      )
    )
  );
};

// Footer Component
const Footer = () => {
  return React.createElement('footer', { className: 'py-8 px-6 bg-gray-50' },
    React.createElement('div', { className: 'max-w-7xl mx-auto' },
      React.createElement('div', { className: 'flex flex-col md:flex-row justify-between items-center' },
        React.createElement('div', { className: 'flex items-center mb-4 md:mb-0' },
          React.createElement('div', { className: 'neumorphic-logo w-8 h-8 rounded-xl flex items-center justify-center mr-2' },
            React.createElement('span', { className: 'text-indigo-600 font-bold' }, 'F')
          ),
          React.createElement('span', { className: 'text-lg font-bold text-gray-800' }, 'FocusFlow')
        ),
        React.createElement('div', { className: 'text-gray-600 text-sm' },
          '© 2023 FocusFlow. All rights reserved.'
        )
      )
    )
  );
};

// Main App Component
const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return React.createElement('div', { className: 'min-h-screen bg-gray-50' },
    React.createElement(Navigation, { isScrolled }),
    React.createElement('main', null,
      React.createElement(HeroSection),
      React.createElement(FeaturesSection),
      React.createElement(TestimonialsSection),
      React.createElement(DownloadSection),
      React.createElement(FAQSection)
    ),
    React.createElement(Footer)
  );
};

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));