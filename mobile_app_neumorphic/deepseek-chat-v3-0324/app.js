const { createElement: e, useState } = React;

const HeroSection = () => e('section', { className: 'min-h-screen flex flex-col md:flex-row items-center justify-center p-8 bg-gray-100' },
  e('div', { className: 'md:w-1/2 space-y-6' },
    e('h1', { className: 'text-5xl font-bold text-gray-800' }, 'FocusFlow'),
    e('p', { className: 'text-xl text-gray-600' }, 'The ultimate productivity app designed to help you stay focused and organized.'),
    e('div', { className: 'flex space-x-4' },
      e('button', { className: 'btn-primary' }, 'Download Now'),
      e('button', { className: 'btn-secondary' }, 'Learn More')
    )
  ),
  e('div', { className: 'md:w-1/2 flex justify-center mt-8 md:mt-0' },
    e('img', { src: 'https://placehold.co/400x800/4f46e5/FFFFFF?text=App+Mockup', alt: 'FocusFlow App', className: 'rounded-3xl shadow-neumorph' })
  )
);

const FeatureCard = ({ title, description, icon }) => e('div', { className: 'feature-card' },
  e('div', { className: 'feature-icon' }, icon),
  e('h3', { className: 'text-xl font-semibold mb-2' }, title),
  e('p', { className: 'text-gray-600' }, description)
);

const FeaturesSection = () => e('section', { className: 'py-16 bg-gray-50' },
  e('div', { className: 'container mx-auto px-4' },
    e('h2', { className: 'text-3xl font-bold text-center mb-12' }, 'Powerful Features'),
    e('div', { className: 'grid md:grid-cols-3 gap-8' },
      e(FeatureCard, { title: 'Task Management', description: 'Organize your tasks with intuitive drag and drop interface', icon: '✓' }),
      e(FeatureCard, { title: 'Focus Timer', description: 'Pomodoro technique to boost your productivity', icon: '⏱️' }),
      e(FeatureCard, { title: 'Analytics', description: 'Track your productivity trends over time', icon: '📊' })
    )
  )
);

const TestimonialCard = ({ quote, author, role }) => e('div', { className: 'testimonial-card' },
  e('p', { className: 'text-gray-700 italic mb-4' }, `"${quote}"`),
  e('div', { className: 'font-medium' }, author),
  e('div', { className: 'text-gray-500 text-sm' }, role)
);

const TestimonialsSection = () => e('section', { className: 'py-16 bg-gray-100' },
  e('div', { className: 'container mx-auto px-4' },
    e('h2', { className: 'text-3xl font-bold text-center mb-12' }, 'What Our Users Say'),
    e('div', { className: 'grid md:grid-cols-3 gap-8' },
      e(TestimonialCard, { quote: 'FocusFlow has transformed my daily routine. I get twice as much done now!', author: 'Sarah Johnson', role: 'Freelance Designer' }),
      e(TestimonialCard, { quote: 'The clean interface helps me stay focused without distractions.', author: 'Michael Chen', role: 'Software Engineer' }),
      e(TestimonialCard, { quote: 'Best productivity app I\'ve used in years. Worth every penny.', author: 'Emma Rodriguez', role: 'Marketing Director' })
    )
  )
);

const DownloadSection = () => e('section', { className: 'py-16 bg-gray-50' },
  e('div', { className: 'container mx-auto px-4 text-center' },
    e('h2', { className: 'text-3xl font-bold mb-8' }, 'Download FocusFlow Today'),
    e('div', { className: 'flex justify-center space-x-6' },
      e('img', { src: 'https://placehold.co/200x80/4f46e5/FFFFFF?text=App+Store', alt: 'App Store', className: 'h-16' }),
      e('img', { src: 'https://placehold.co/200x80/4f46e5/FFFFFF?text=Google+Play', alt: 'Google Play', className: 'h-16' })
    )
  )
);

const FAQItem = ({ question, answer, isOpen, onClick }) => e('div', { className: 'faq-item mb-4' },
  e('button', { 
    className: 'faq-question w-full text-left p-4 flex justify-between items-center',
    onClick: onClick
  },
    e('span', null, question),
    e('span', { className: 'text-xl' }, isOpen ? '−' : '+')
  ),
  isOpen && e('div', { className: 'faq-answer p-4' }, answer)
);

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  
  const faqs = [
    {
      question: 'Is FocusFlow available on multiple devices?',
      answer: 'Yes, FocusFlow syncs seamlessly across all your devices including smartphones, tablets, and desktop computers.'
    },
    {
      question: 'How much does FocusFlow cost?',
      answer: 'FocusFlow offers a free version with basic features. The premium version is $9.99/month or $79.99/year with additional advanced features.'
    },
    {
      question: 'Can I try FocusFlow before purchasing?',
      answer: 'Absolutely! Our free version gives you access to all core features with some limitations. You can upgrade anytime.'
    }
  ];
  
  return e('section', { className: 'py-16 bg-gray-100' },
    e('div', { className: 'container mx-auto px-4 max-w-3xl' },
      e('h2', { className: 'text-3xl font-bold text-center mb-12' }, 'Frequently Asked Questions'),
      e('div', null,
        faqs.map((faq, index) => e(FAQItem, {
          key: index,
          question: faq.question,
          answer: faq.answer,
          isOpen: activeIndex === index,
          onClick: () => setActiveIndex(activeIndex === index ? null : index)
        }))
      )
    )
  );
};

const Footer = () => e('footer', { className: 'py-8 bg-gray-800 text-white' },
  e('div', { className: 'container mx-auto px-4 text-center' },
    e('p', null, '© 2023 FocusFlow. All rights reserved.'),
    e('div', { className: 'flex justify-center space-x-6 mt-4' },
      e('a', { href: '#', className: 'hover:text-indigo-300' }, 'Privacy Policy'),
      e('a', { href: '#', className: 'hover:text-indigo-300' }, 'Terms of Service'),
      e('a', { href: '#', className: 'hover:text-indigo-300' }, 'Contact Us')
    )
  )
);

const App = () => e('div', { className: 'font-sans' },
  e(HeroSection, null),
  e(FeaturesSection, null),
  e(TestimonialsSection, null),
  e(DownloadSection, null),
  e(FAQSection, null),
  e(Footer, null)
);

ReactDOM.createRoot(document.getElementById('root')).render(e(App));