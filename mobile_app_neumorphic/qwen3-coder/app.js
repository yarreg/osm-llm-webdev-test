const { createElement: e, useState, useEffect } = React;
const { createRoot } = ReactDOM;

const App = () => {
  return e('div', { className: 'min-h-screen' },
    e(HeroSection, null),
    e(FeaturesSection, null),
    e(TestimonialsSection, null),
    e(DownloadSection, null),
    e(FAQSection, null),
    e(Footer, null)
  );
};

const HeroSection = () => {
  return e('section', { className: 'py-16 px-4 md:px-8' },
    e('div', { className: 'max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center' },
      e('div', { className: 'text-center md:text-left' },
        e('h1', { className: 'text-4xl md:text-5xl font-bold mb-6 text-gray-800' },
          'FocusFlow: Your Productivity Companion'
        ),
        e('p', { className: 'text-lg text-gray-600 mb-8' },
          'Transform your workflow with our neumorphic productivity app. Focus better, achieve more, and find balance in your daily tasks.'
        ),
        e('div', { className: 'flex flex-col sm:flex-row gap-4 justify-center md:justify-start' },
          e('button', { className: 'neumorphic-btn px-8 py-4 rounded-xl font-semibold text-white bg-blue-500 hover:bg-blue-600 transition-colors' },
            'Get Started Free'
          ),
          e('button', { className: 'neumorphic-btn px-8 py-4 rounded-xl font-semibold text-gray-700 bg-transparent border border-gray-300 hover:bg-gray-50 transition-colors' },
            'Watch Demo'
          )
        )
      ),
      e('div', { className: 'flex justify-center' },
        e('div', { className: 'neumorphic-card p-8 rounded-3xl w-full max-w-md' },
          e('div', { className: 'bg-gray-200 border-2 border-dashed rounded-xl w-full h-80 flex items-center justify-center text-gray-500' },
            'App Mockup Placeholder'
          )
        )
      )
    )
  );
};

const FeaturesSection = () => {
  const features = [
    { title: 'Smart Task Management', description: 'Organize tasks with AI-powered suggestions' },
    { title: 'Focus Timer', description: 'Built-in Pomodoro timer for deep work sessions' },
    { title: 'Progress Analytics', description: 'Visualize your productivity trends over time' },
    { title: 'Cross-Platform Sync', description: 'Seamlessly sync across all your devices' }
  ];

  return e('section', { className: 'py-16 px-4 md:px-8 bg-gray-50' },
    e('div', { className: 'max-w-7xl mx-auto' },
      e('h2', { className: 'text-3xl font-bold text-center mb-16 text-gray-800' }, 'Powerful Features'),
      e('div', { className: 'grid md:grid-cols-2 lg:grid-cols-4 gap-8' },
        features.map((feature, index) => 
          e('div', { key: index, className: 'neumorphic-card p-6 rounded-2xl text-center hover:shadow-lg transition-shadow' },
            e('div', { className: 'text-4xl mb-4 text-blue-500' }, '✦'),
            e('h3', { className: 'text-xl font-semibold mb-2 text-gray-800' }, feature.title),
            e('p', { className: 'text-gray-600' }, feature.description)
          )
        )
      )
    )
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    { quote: 'FocusFlow transformed how I manage my daily tasks. The neumorphic design is a joy to use!', author: 'Alex Johnson, Designer' },
    { quote: 'Finally an app that helps me stay focused without overwhelming me with features.', author: 'Sarah Williams, Developer' },
    { quote: 'The analytics helped me identify my most productive hours. Game changer!', author: 'Michael Chen, Entrepreneur' }
  ];

  return e('section', { className: 'py-16 px-4 md:px-8' },
    e('div', { className: 'max-w-7xl mx-auto' },
      e('h2', { className: 'text-3xl font-bold text-center mb-16 text-gray-800' }, 'What Users Say'),
      e('div', { className: 'grid md:grid-cols-3 gap-8' },
        testimonials.map((testimonial, index) => 
          e('div', { key: index, className: 'neumorphic-card p-8 rounded-2xl' },
            e('p', { className: 'text-gray-700 italic mb-6' }, `"${testimonial.quote}"`),
            e('p', { className: 'text-gray-800 font-medium' }, testimonial.author)
          )
        )
      )
    )
  );
};

const DownloadSection = () => {
  return e('section', { className: 'py-16 px-4 md:px-8 bg-gray-50' },
    e('div', { className: 'max-w-4xl mx-auto text-center' },
      e('h2', { className: 'text-3xl font-bold mb-4 text-gray-800' }, 'Download FocusFlow'),
      e('p', { className: 'text-lg text-gray-600 mb-12' }, 'Available on both iOS and Android platforms'),
      e('div', { className: 'flex flex-col sm:flex-row justify-center gap-6' },
        e('div', { className: 'neumorphic-card p-6 rounded-2xl flex items-center gap-4 cursor-pointer hover:shadow-lg transition-shadow' },
          e('div', { className: 'bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16' }),
          e('div', { className: 'text-left' },
            e('p', { className: 'text-sm text-gray-600' }, 'Download on the'),
            e('p', { className: 'text-xl font-bold text-gray-800' }, 'App Store')
          )
        ),
        e('div', { className: 'neumorphic-card p-6 rounded-2xl flex items-center gap-4 cursor-pointer hover:shadow-lg transition-shadow' },
          e('div', { className: 'bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16' }),
          e('div', { className: 'text-left' },
            e('p', { className: 'text-sm text-gray-600' }, 'GET IT ON'),
            e('p', { className: 'text-xl font-bold text-gray-800' }, 'Google Play')
          )
        )
      )
    )
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  
  const faqs = [
    { question: 'How much does FocusFlow cost?', answer: 'FocusFlow offers a free tier with basic features. Premium plans start at $4.99/month with advanced analytics and integrations.' },
    { question: 'Can I sync between devices?', answer: 'Yes! FocusFlow syncs seamlessly across all your devices with our cloud-based platform.' },
    { question: 'Is there a desktop version?', answer: 'We\'re working on desktop apps for macOS and Windows. Sign up for our newsletter to be notified of the release.' },
    { question: 'How does the focus timer work?', answer: 'Our Pomodoro timer uses customizable work/break intervals to help you maintain deep focus sessions while preventing burnout.' }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return e('section', { className: 'py-16 px-4 md:px-8' },
    e('div', { className: 'max-w-4xl mx-auto' },
      e('h2', { className: 'text-3xl font-bold text-center mb-16 text-gray-800' }, 'Frequently Asked Questions'),
      e('div', { className: 'space-y-4' },
        faqs.map((faq, index) => 
          e('div', { key: index, className: 'neumorphic-card rounded-2xl overflow-hidden' },
            e('button', {
              className: 'w-full p-6 text-left flex justify-between items-center',
              onClick: () => toggleFAQ(index)
            },
              e('span', { className: 'text-lg font-medium text-gray-800' }, faq.question),
              e('span', { className: 'text-xl' }, openIndex === index ? '−' : '+')
            ),
            openIndex === index && e('div', { className: 'px-6 pb-6 text-gray-600' }, faq.answer)
          )
        )
      )
    )
  );
};

const Footer = () => {
  return e('footer', { className: 'py-12 px-4 md:px-8 bg-gray-800 text-white' },
    e('div', { className: 'max-w-7xl mx-auto grid md:grid-cols-4 gap-8' },
      e('div', null,
        e('h3', { className: 'text-xl font-bold mb-4' }, 'FocusFlow'),
        e('p', { className: 'text-gray-400' }, 'Neumorphic productivity for the modern professional.')
      ),
      e('div', null,
        e('h4', { className: 'font-semibold mb-4' }, 'Product'),
        e('ul', { className: 'space-y-2 text-gray-400' },
          e('li', null, e('a', { href: '#', className: 'hover:text-white transition-colors' }, 'Features')),
          e('li', null, e('a', { href: '#', className: 'hover:text-white transition-colors' }, 'Pricing')),
          e('li', null, e('a', { href: '#', className: 'hover:text-white transition-colors' }, 'Download'))
        )
      ),
      e('div', null,
        e('h4', { className: 'font-semibold mb-4' }, 'Company'),
        e('ul', { className: 'space-y-2 text-gray-400' },
          e('li', null, e('a', { href: '#', className: 'hover:text-white transition-colors' }, 'About')),
          e('li', null, e('a', { href: '#', className: 'hover:text-white transition-colors' }, 'Blog')),
          e('li', null, e('a', { href: '#', className: 'hover:text-white transition-colors' }, 'Careers'))
        )
      ),
      e('div', null,
        e('h4', { className: 'font-semibold mb-4' }, 'Support'),
        e('ul', { className: 'space-y-2 text-gray-400' },
          e('li', null, e('a', { href: '#', className: 'hover:text-white transition-colors' }, 'Help Center')),
          e('li', null, e('a', { href: '#', className: 'hover:text-white transition-colors' }, 'Contact Us')),
          e('li', null, e('a', { href: '#', className: 'hover:text-white transition-colors' }, 'Privacy Policy'))
        )
      )
    ),
    e('div', { className: 'max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-700 text-center text-gray-400' },
      '© 2023 FocusFlow. All rights reserved.'
    )
  );
};

const root = createRoot(document.getElementById('root'));
root.render(e(App));