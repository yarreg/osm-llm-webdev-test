const { useState, useEffect } = React;

const App = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const features = [
        {
            icon: '📱',
            title: 'Focus Mode',
            description: 'Block distractions and stay productive with our distraction-free mode.'
        },
        {
            icon: '📊',
            title: 'Task Management',
            description: 'Organize your tasks with our intuitive task management system.'
        },
        {
            icon: '📅',
            title: 'Habit Tracking',
            description: 'Build and track your habits with our habit tracking feature.'
        }
    ];

    const testimonials = [
        {
            name: 'Sarah Johnson',
            role: 'Product Manager',
            quote: 'FocusFlow has completely transformed how I manage my tasks. I can finally stay focused and productive throughout the day.'
        },
        {
            name: 'Michael Chen',
            role: 'Software Engineer',
            quote: 'I love the distraction-free mode. It helps me stay focused on my work and get more done in less time.'
        }
    ];

    const faqs = [
        {
            question: 'How do I get started with FocusFlow?',
            answer: 'Simply download the app from the App Store or Google Play Store and create an account. You can start using FocusFlow right away.'
        },
        {
            question: 'Is FocusFlow free to use?',
            answer: 'Yes, FocusFlow is completely free to use. We offer premium features that you can unlock with a subscription.'
        },
        {
            question: 'Can I use FocusFlow on multiple devices?',
            answer: 'Yes, you can use FocusFlow on multiple devices. Your data will be synced across all your devices.'
        }
    ];

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return React.createElement(
        'div',
        { className: 'min-h-screen bg-gray-50' },
        React.createElement(
            'header',
            { className: 'fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-sm' },
            React.createElement(
                'div',
                { className: 'container mx-auto px-4 py-4 flex justify-between items-center' },
                React.createElement(
                    'div',
                    { className: 'text-2xl font-bold text-gray-800' },
                    'FocusFlow'
                ),
                React.createElement(
                    'nav',
                    { className: 'hidden md:flex space-x-8' },
                    React.createElement(
                        'button',
                        {
                            onClick: () => scrollToSection('features'),
                            className: 'text-gray-600 hover:text-gray-900 transition-colors'
                        },
                        'Features'
                    ),
                    React.createElement(
                        'button',
                        {
                            onClick: () => scrollToSection('testimonials'),
                            className: 'text-gray-600 hover:text-gray-900 transition-colors'
                        },
                        'Testimonials'
                    ),
                    React.createElement(
                        'button',
                        {
                            onClick: () => scrollToSection('faq'),
                            className: 'text-gray-600 hover:text-gray-900 transition-colors'
                        },
                        'FAQ'
                    )
                ),
                React.createElement(
                    'button',
                    {
                        onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen),
                        className: 'md:hidden text-gray-600 focus:outline-none'
                    },
                    React.createElement(
                        'svg',
                        {
                            className: 'w-6 h-6',
                            fill: 'none',
                            stroke: 'currentColor',
                            viewBox: '0 0 24 24',
                            xmlns: 'http://www.w3.org/2000/svg'
                        },
                        React.createElement('path', {
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                            strokeWidth: 2,
                            d: isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'
                        })
                    )
                )
            ),
            isMobileMenuOpen && React.createElement(
                'div',
                { className: 'md:hidden absolute top-16 left-0 right-0 bg-white/90 backdrop-blur-md shadow-lg py-4' },
                React.createElement(
                    'div',
                    { className: 'container mx-auto px-4 flex flex-col space-y-4' },
                    React.createElement(
                        'button',
                        {
                            onClick: () => scrollToSection('features'),
                            className: 'text-gray-600 hover:text-gray-900 transition-colors text-left'
                        },
                        'Features'
                    ),
                    React.createElement(
                        'button',
                        {
                            onClick: () => scrollToSection('testimonials'),
                            className: 'text-gray-600 hover:text-gray-900 transition-colors text-left'
                        },
                        'Testimonials'
                    ),
                    React.createElement(
                        'button',
                        {
                            onClick: () => scrollToSection('faq'),
                            className: 'text-gray-600 hover:text-gray-900 transition-colors text-left'
                        },
                        'FAQ'
                    )
                )
            )
        ),

        React.createElement(
            'main',
            null,
            React.createElement(
                'section',
                { className: 'pt-24 pb-16 bg-gradient-to-br from-blue-50 to-indigo-50' },
                React.createElement(
                    'div',
                    { className: 'container mx-auto px-4 flex flex-col md:flex-row items-center' },
                    React.createElement(
                        'div',
                        { className: 'md:w-1/2 mb-12 md:mb-0' },
                        React.createElement(
                            'h1',
                            { className: 'text-4xl md:text-5xl font-bold text-gray-800 mb-6' },
                            'Boost Your Productivity with FocusFlow'
                        ),
                        React.createElement(
                            'p',
                            { className: 'text-xl text-gray-600 mb-8' },
                            'FocusFlow helps you stay focused and productive throughout your day. With our distraction-free mode, task management, and habit tracking, you can achieve more in less time.'
                        ),
                        React.createElement(
                            'div',
                            { className: 'flex space-x-4' },
                            React.createElement(
                                'button',
                                {
                                    className: 'neumorphic-button px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 transition-colors',
                                    onClick: () => scrollToSection('download')
                                },
                                'Download Now'
                            ),
                            React.createElement(
                                'button',
                                {
                                    className: 'neumorphic-button px-6 py-3 text-gray-800 bg-gray-100 hover:bg-gray-200 transition-colors',
                                    onClick: () => scrollToSection('features')
                                },
                                'Learn More'
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'md:w-1/2 flex justify-center' },
                        React.createElement(
                            'div',
                            { className: 'relative w-64 h-96' },
                            React.createElement('img', {
                                src: 'https://placehold.co/300x600/png',
                                alt: 'FocusFlow App Mockup',
                                className: 'w-full h-full object-contain rounded-xl shadow-2xl neumorphic-card'
                            })
                        )
                    )
                )
            ),

            React.createElement(
                'section',
                { id: 'features', className: 'py-16 bg-white' },
                React.createElement(
                    'div',
                    { className: 'container mx-auto px-4' },
                    React.createElement(
                        'h2',
                        { className: 'text-3xl font-bold text-gray-800 text-center mb-12' },
                        'Key Features'
                    ),
                    React.createElement(
                        'div',
                        { className: 'grid grid-cols-1 md:grid-cols-3 gap-8' },
                        features.map((feature, index) => React.createElement(
                            'div',
                            {
                                key: index,
                                className: 'neumorphic-card p-6 rounded-xl transition-all duration-300 hover:shadow-lg'
                            },
                            React.createElement(
                                'div',
                                { className: 'text-4xl mb-4' },
                                feature.icon
                            ),
                            React.createElement(
                                'h3',
                                { className: 'text-xl font-semibold text-gray-800 mb-2' },
                                feature.title
                            ),
                            React.createElement(
                                'p',
                                { className: 'text-gray-600' },
                                feature.description
                            )
                        ))
                    )
                )
            ),

            React.createElement(
                'section',
                { id: 'testimonials', className: 'py-16 bg-gray-50' },
                React.createElement(
                    'div',
                    { className: 'container mx-auto px-4' },
                    React.createElement(
                        'h2',
                        { className: 'text-3xl font-bold text-gray-800 text-center mb-12' },
                        'What Our Users Say'
                    ),
                    React.createElement(
                        'div',
                        { className: 'max-w-3xl mx-auto' },
                        testimonials.map((testimonial, index) => React.createElement(
                            'div',
                            {
                                key: index,
                                className: `neumorphic-card p-8 rounded-xl mb-8 transition-all duration-300 ${activeTab === index ? 'shadow-lg' : 'opacity-70'}`,
                                onClick: () => setActiveTab(index)
                            },
                            React.createElement(
                                'p',
                                { className: 'text-lg text-gray-700 mb-6 italic' },
                                testimonial.quote
                            ),
                            React.createElement(
                                'div',
                                { className: 'flex items-center' },
                                React.createElement(
                                    'div',
                                    { className: 'w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4' },
                                    React.createElement(
                                        'span',
                                        { className: 'text-blue-600 font-bold' },
                                        testimonial.name.charAt(0)
                                    )
                                ),
                                React.createElement(
                                    'div',
                                    null,
                                    React.createElement(
                                        'h4',
                                        { className: 'font-semibold text-gray-800' },
                                        testimonial.name
                                    ),
                                    React.createElement(
                                        'p',
                                        { className: 'text-gray-600' },
                                        testimonial.role
                                    )
                                )
                            )
                        ))
                    )
                )
            ),

            React.createElement(
                'section',
                { id: 'download', className: 'py-16 bg-white' },
                React.createElement(
                    'div',
                    { className: 'container mx-auto px-4 text-center' },
                    React.createElement(
                        'h2',
                        { className: 'text-3xl font-bold text-gray-800 mb-8' },
                        'Ready to Get Started?'
                    ),
                    React.createElement(
                        'p',
                        { className: 'text-xl text-gray-600 mb-12 max-w-2xl mx-auto' },
                        'Download FocusFlow today and start boosting your productivity.'
                    ),
                    React.createElement(
                        'div',
                        { className: 'flex justify-center space-x-6' },
                        React.createElement(
                            'a',
                            {
                                href: '#',
                                className: 'inline-block neumorphic-button p-3 rounded-lg transition-all duration-300 hover:shadow-lg'
                            },
                            React.createElement('img', {
                                src: 'https://placehold.co/150x50/png?text=App+Store',
                                alt: 'Download on the App Store',
                                className: 'h-12'
                            })
                        ),
                        React.createElement(
                            'a',
                            {
                                href: '#',
                                className: 'inline-block neumorphic-button p-3 rounded-lg transition-all duration-300 hover:shadow-lg'
                            },
                            React.createElement('img', {
                                src: 'https://placehold.co/150x50/png?text=Google+Play',
                                alt: 'Get it on Google Play',
                                className: 'h-12'
                            })
                        )
                    )
                )
            ),

            React.createElement(
                'section',
                { id: 'faq', className: 'py-16 bg-gray-50' },
                React.createElement(
                    'div',
                    { className: 'container mx-auto px-4' },
                    React.createElement(
                        'h2',
                        { className: 'text-3xl font-bold text-gray-800 text-center mb-12' },
                        'Frequently Asked Questions'
                    ),
                    React.createElement(
                        'div',
                        { className: 'max-w-3xl mx-auto space-y-6' },
                        faqs.map((faq, index) => React.createElement(
                            'div',
                            {
                                key: index,
                                className: 'neumorphic-card p-6 rounded-xl transition-all duration-300 hover:shadow-lg'
                            },
                            React.createElement(
                                'h3',
                                { className: 'text-xl font-semibold text-gray-800 mb-2' },
                                faq.question
                            ),
                            React.createElement(
                                'p',
                                { className: 'text-gray-600' },
                                faq.answer
                            )
                        ))
                    )
                )
            )
        ),

        React.createElement(
            'footer',
            { className: 'bg-gray-800 text-white py-8' },
            React.createElement(
                'div',
                { className: 'container mx-auto px-4 text-center' },
                React.createElement(
                    'p',
                    { className: 'text-gray-400' },
                    '© 2023 FocusFlow. All rights reserved.'
                )
            )
        )
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));