// app.js – React 18 with createElement (no JSX)
// All components are built with React.createElement for maximum compatibility.

// Global React & ReactDOM are provided by the CDN scripts in index.html.

const { useState, useEffect } = React;

// ---------- Utility Components ----------
function NeumorphicCard(props) {
    return React.createElement(
        'div',
        { className: 'neumorphic p-6 m-4 shadow-md' },
        props.children
    );
}

function NeumorphicButton({ onClick, children, className = '' }) {
    return React.createElement(
        'button',
        {
            onClick,
            className: `neumorphic-button ${className}`,
            type: 'button',
        },
        children
    );
}

// ---------- Sections ----------
function HeroSection() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState(null); // null | 'success' | 'error'

    const handleSubmit = (e) => {
        e.preventDefault();
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (re.test(email)) {
            setStatus('success');
            setEmail('');
        } else {
            setStatus('error');
        }
    };

    return React.createElement(
        'section',
        { className: 'hero min-h-screen flex flex-col items-center justify-center text-center p-4' },
        [
            React.createElement('h1', { key: 'title', className: 'text-5xl font-bold mb-4' }, 'FocusFlow'),
            React.createElement('p', { key: 'subtitle', className: 'text-lg text-gray-700 mb-6' }, 'A minimalist app that helps you stay in the zone.'),
            React.createElement('img', {
                key: 'mockup',
                src: 'https://placehold.co/600x400/ffffff/000000?text=App+Mockup',
                alt: 'App mockup',
                className: 'rounded-xl shadow-lg mb-8 w-full max-w-md',
            }),
            React.createElement(
                'a',
                {
                    key: 'cta',
                    href: '#features',
                    className: 'neumorphic-button bg-primary text-white mb-8 inline-block',
                },
                'Explore Features'
            ),
            // Email capture form
            React.createElement(
                'form',
                { key: 'form', onSubmit: handleSubmit, className: 'flex flex-col sm:flex-row items-center justify-center gap-2' },
                [
                    React.createElement('input', {
                        key: 'input',
                        type: 'email',
                        placeholder: 'Enter your email',
                        value: email,
                        onChange: (e) => setEmail(e.target.value),
                        required: true,
                        className: 'p-3 rounded-full w-64 focus:outline-none focus:ring-2 focus:ring-primary',
                        'aria-label': 'Email address',
                    }),
                    React.createElement(
                        'button',
                        {
                            key: 'submit',
                            type: 'submit',
                            className: 'neumorphic-button bg-primary text-white px-6 py-3 rounded-full',
                        },
                        'Notify Me'
                    ),
                ]
            ),
            status === 'success' &&
                React.createElement(
                    'p',
                    { key: 'success', className: 'text-green-600 mt-2' },
                    'Thanks! We\'ll keep you posted.'
                ),
            status === 'error' &&
                React.createElement(
                    'p',
                    { key: 'error', className: 'text-red-600 mt-2' },
                    'Please enter a valid email address.'
                ),
        ]
    );
}

function FeaturesSection() {
    const features = [
        { title: 'Focus Timer', description: 'Pomodoro‑style timer to keep you on track.', icon: '⏱️' },
        { title: 'Distraction Blocker', description: 'Temporarily mute notifications.', icon: '🚫' },
        { title: 'Progress Insights', description: 'Visual charts of your focus sessions.', icon: '📈' },
    ];

    return React.createElement(
        'section',
        { id: 'features', className: 'py-16 bg-gray-50' },
        React.createElement(
            'div',
            { className: 'container mx-auto px-4' },
            [
                React.createElement('h2', { key: 'h2', className: 'text-3xl font-semibold text-center mb-12' }, 'Features'),
                React.createElement(
                    'div',
                    { key: 'grid', className: 'grid grid-cols-1 md:grid-cols-3 gap-6' },
                    features.map((f, i) =>
                        React.createElement(
                            NeumorphicCard,
                            { key: i },
                            [
                                React.createElement('div', { key: 'icon', className: 'text-4xl mb-4' }, f.icon),
                                React.createElement('h3', { key: 'title', className: 'text-xl font-medium mb-2' }, f.title),
                                React.createElement('p', { key: 'desc', className: 'text-gray-600' }, f.description),
                            ]
                        )
                    )
                ),
            ]
        )
    );
}

function TestimonialsSection() {
    const testimonials = [
        { name: 'Alex Johnson', text: 'FocusFlow changed the way I work. I finally finish projects on time!' },
        { name: 'Maria Gomez', text: 'The distraction blocker is a lifesaver during deep work.' },
        { name: 'Liam Patel', text: 'I love the clean UI – it feels calm and motivating.' },
    ];

    return React.createElement(
        'section',
        { className: 'py-16' },
        React.createElement(
            'div',
            { className: 'container mx-auto px-4' },
            [
                React.createElement('h2', { key: 'h2', className: 'text-3xl font-semibold text-center mb-12' }, 'What Users Say'),
                React.createElement(
                    'div',
                    { key: 'grid', className: 'grid grid-cols-1 md:grid-cols-3 gap-6' },
                    testimonials.map((t, i) =>
                        React.createElement(
                            NeumorphicCard,
                            { key: i },
                            [
                                React.createElement('p', { key: 'text', className: 'italic text-gray-700 mb-4' }, `"${t.text}"`),
                                React.createElement('p', { key: 'name', className: 'font-medium text-right' }, `- ${t.name}`),
                            ]
                        )
                    )
                ),
            ]
        )
    );
}

function DownloadSection() {
    return React.createElement(
        'section',
        { className: 'py-16 bg-gray-50' },
        React.createElement(
            'div',
            { className: 'container mx-auto px-4 text-center' },
            [
                React.createElement('h2', { key: 'h2', className: 'text-3xl font-semibold mb-8' }, 'Get FocusFlow'),
                React.createElement(
                    'div',
                    { key: 'badges', className: 'flex flex-col sm:flex-row justify-center items-center gap-4' },
                    [
                        React.createElement('a', {
                            key: 'appstore',
                            href: '#',
                            className: 'neumorphic p-4 rounded-xl',
                            'aria-label': 'Download on the App Store',
                        },
                            React.createElement('img', {
                                src: 'https://placehold.co/150x50/4f46e5/ffffff?text=App+Store',
                                alt: 'App Store badge',
                            })
                        ),
                        React.createElement('a', {
                            key: 'playstore',
                            href: '#',
                            className: 'neumorphic p-4 rounded-xl',
                            'aria-label': 'Get it on Google Play',
                        },
                            React.createElement('img', {
                                src: 'https://placehold.co/150x50/4f46e5/ffffff?text=Google+Play',
                                alt: 'Google Play badge',
                            })
                        ),
                    ]
                ),
            ]
        )
    );
}

function FAQSection() {
    const faqs = [
        { q: 'Is FocusFlow free?', a: 'Yes! The core features are completely free. Premium plans add advanced analytics.' },
        { q: 'Which platforms are supported?', a: 'Available on iOS and Android. A web version is coming soon.' },
        { q: 'Can I sync data across devices?', a: 'Sync is available for premium users via your email account.' },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (i) => {
        setOpenIndex(openIndex === i ? null : i);
    };

    return React.createElement(
        'section',
        { className: 'py-16' },
        React.createElement(
            'div',
            { className: 'container mx-auto px-4' },
            [
                React.createElement('h2', { key: 'h2', className: 'text-3xl font-semibold text-center mb-12' }, 'Frequently Asked Questions'),
                React.createElement(
                    'div',
                    { key: 'list', className: 'space-y-4' },
                    faqs.map((item, i) =>
                        React.createElement(
                            'div',
                            { key: i, className: 'neumorphic' },
                            [
                                React.createElement(
                                    'button',
                                    {
                                        onClick: () => toggle(i),
                                        className: 'w-full text-left p-4 flex justify-between items-center focus:outline-none',
                                        'aria-expanded': openIndex === i,
                                    },
                                    [
                                        React.createElement('span', { key: 'q', className: 'font-medium' }, item.q),
                                        React.createElement('span', { key: 'icon', className: 'ml-2' }, openIndex === i ? '▲' : '▼'),
                                    ]
                                ),
                                openIndex === i &&
                                    React.createElement('p', { key: 'a', className: 'p-4 pt-0 text-gray-600' }, item.a),
                            ]
                        )
                    )
                ),
            ]
        )
    );
}

function Footer() {
    return React.createElement(
        'footer',
        { className: 'py-8 bg-gray-800 text-white text-center' },
        React.createElement('p', null, '\u00A9 2025 FocusFlow. All rights reserved.')
    );
}

function App() {
    // Smooth scrolling for internal links
    useEffect(() => {
        const handler = (e) => {
            const target = e.target;
            if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
                const id = target.getAttribute('href').slice(1);
                const element = document.getElementById(id);
                if (element) {
                    e.preventDefault();
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };
        document.addEventListener('click', handler);
        return () => document.removeEventListener('click', handler);
    }, []);

    return React.createElement(
        React.Fragment,
        null,
        React.createElement(HeroSection, null),
        React.createElement(FeaturesSection, null),
        React.createElement(TestimonialsSection, null),
        React.createElement(DownloadSection, null),
        React.createElement(FAQSection, null),
        React.createElement(Footer, null)
    );
}

// Render the app
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App, null));
