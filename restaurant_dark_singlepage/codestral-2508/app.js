const { useState, useEffect } = React;

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return React.createElement("nav", {
        className: `fixed w-full z-10 transition-all duration-300 ${scrolled ? 'bg-gray-900/90 backdrop-blur-sm' : 'bg-transparent'}`,
        "aria-label": "Main navigation"
    }, React.createElement("div", {
        className: "container mx-auto px-4 py-4 flex justify-between items-center"
    }, React.createElement("a", {
        href: "#",
        className: "text-2xl font-bold text-white hover:text-amber-400 transition-colors duration-300"
    }, "Nocturne"), React.createElement("ul", {
        className: "flex space-x-8"
    }, [
        "Home", "Menu", "Reservations", "Location"
    ].map((item, index) => React.createElement("li", {
        key: index
    }, React.createElement("a", {
        href: `#${item.toLowerCase().replace(' ', '-')}`,
        className: "text-white hover:text-amber-400 transition-colors duration-300"
    }, item))))));
};

const Hero = () => {
    return React.createElement("section", {
        id: "home",
        className: "relative h-screen flex items-center justify-center text-center overflow-hidden"
    }, React.createElement("div", {
        className: "absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 z-0"
    }), React.createElement("div", {
        className: "absolute inset-0 bg-[url('https://placehold.co/1920x1080/000000/FFFFFF?text=Nocturne+Bistro')] bg-cover bg-center opacity-30 z-10"
    }), React.createElement("div", {
        className: "relative z-20 container mx-auto px-4"
    }, React.createElement("h1", {
        className: "text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in"
    }, "Nocturne Bistro"), React.createElement("p", {
        className: "text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto animate-fade-in animation-delay-200"
    }, "An elegant dining experience in the heart of the city"), React.createElement("a", {
        href: "#reservations",
        className: "inline-block bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 animate-fade-in animation-delay-400"
    }, "Make a Reservation"))));
};

const MenuHighlights = () => {
    const dishes = [
        {
            name: "Truffle Risotto",
            description: "Creamy Arborio rice with wild mushrooms and white truffle oil",
            price: "$28",
            image: "https://placehold.co/300x200/000000/FFFFFF?text=Truffle+Risotto"
        },
        {
            name: "Seared Scallops",
            description: "Perfectly seared scallops with lemon beurre blanc and asparagus",
            price: "$32",
            image: "https://placehold.co/300x200/000000/FFFFFF?text=Seared+Scallops"
        },
        {
            name: "Filet Mignon",
            description: "8oz USDA prime beef with red wine reduction and roasted potatoes",
            price: "$48",
            image: "https://placehold.co/300x200/000000/FFFFFF?text=Filet+Mignon"
        }
    ];

    return React.createElement("section", {
        id: "menu",
        className: "py-20 bg-gray-800"
    }, React.createElement("div", {
        className: "container mx-auto px-4"
    }, React.createElement("h2", {
        className: "text-4xl font-bold text-white text-center mb-16"
    }, "Menu Highlights"), React.createElement("div", {
        className: "grid grid-cols-1 md:grid-cols-3 gap-8"
    }, dishes.map((dish, index) => React.createElement("div", {
        key: index,
        className: "bg-gray-900 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
    }, React.createElement("img", {
        src: dish.image,
        alt: dish.name,
        className: "w-full h-48 object-cover"
    }), React.createElement("div", {
        className: "p-6"
    }, React.createElement("h3", {
        className: "text-xl font-bold text-white mb-2"
    }, dish.name), React.createElement("p", {
        className: "text-gray-400 mb-4"
    }, dish.description), React.createElement("div", {
        className: "flex justify-between items-center"
    }, React.createElement("span", {
        className: "text-amber-400 font-bold text-lg"
    }, dish.price), React.createElement("button", {
        className: "bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold py-2 px-4 rounded-full transition-colors duration-300"
    }, "Order Now"))))))));
};

const ReservationCTA = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        time: '',
        guests: '2'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Reservation request submitted for ${formData.name}`);
    };

    return React.createElement("section", {
        id: "reservations",
        className: "py-20 bg-gray-900"
    }, React.createElement("div", {
        className: "container mx-auto px-4"
    }, React.createElement("div", {
        className: "max-w-2xl mx-auto bg-gray-800 rounded-lg p-8 shadow-xl"
    }, React.createElement("h2", {
        className: "text-3xl font-bold text-white text-center mb-8"
    }, "Make a Reservation"), React.createElement("form", {
        onSubmit: handleSubmit,
        className: "space-y-6"
    }, [
        {
            label: "Full Name",
            name: "name",
            type: "text",
            required: true
        },
        {
            label: "Email Address",
            name: "email",
            type: "email",
            required: true
        },
        {
            label: "Date",
            name: "date",
            type: "date",
            required: true
        },
        {
            label: "Time",
            name: "time",
            type: "time",
            required: true
        },
        {
            label: "Number of Guests",
            name: "guests",
            type: "number",
            min: "1",
            max: "10",
            required: true
        }
    ].map((field, index) => React.createElement("div", {
        key: index,
        className: "flex flex-col"
    }, React.createElement("label", {
        htmlFor: field.name,
        className: "text-white mb-2"
    }, field.label), React.createElement("input", {
        type: field.type,
        id: field.name,
        name: field.name,
        value: formData[field.name],
        onChange: handleChange,
        required: field.required,
        min: field.min,
        max: field.max,
        className: "bg-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
    }))), React.createElement("button", {
        type: "submit",
        className: "w-full bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold py-3 px-6 rounded-lg transition-colors duration-300"
    }, "Submit Reservation"))))));
};

const LocationHours = () => {
    return React.createElement("section", {
        id: "location",
        className: "py-20 bg-gray-800"
    }, React.createElement("div", {
        className: "container mx-auto px-4"
    }, React.createElement("div", {
        className: "grid grid-cols-1 md:grid-cols-2 gap-12"
    }, [
        {
            title: "Our Location",
            content: React.createElement("div", null, React.createElement("p", {
                className: "text-gray-300 mb-4"
            }, "123 Elegance Avenue"), React.createElement("p", {
                className: "text-gray-300 mb-4"
            }, "New York, NY 10001"), React.createElement("p", {
                className: "text-gray-300"
            }, "(212) 555-1234")),
            map: "https://placehold.co/600x400/000000/FFFFFF?text=Map"
        },
        {
            title: "Hours of Operation",
            content: React.createElement("ul", {
                className: "space-y-3"
            }, [
                "Monday - Thursday: 5:00 PM - 10:00 PM",
                "Friday - Saturday: 5:00 PM - 11:00 PM",
                "Sunday: 4:00 PM - 9:00 PM"
            ].map((item, index) => React.createElement("li", {
                key: index,
                className: "text-gray-300 flex justify-between"
            }, React.createElement("span", null, item.split(':')[0]), React.createElement("span", {
                className: "font-bold text-amber-400"
            }, item.split(':')[1]))))
        }
    ].map((item, index) => React.createElement("div", {
        key: index,
        className: `bg-gray-900 rounded-lg p-8 ${index === 0 ? 'md:order-1' : ''}`
    }, React.createElement("h3", {
        className: "text-2xl font-bold text-white mb-6"
    }, item.title), item.content, index === 0 && React.createElement("img", {
        src: item.map,
        alt: "Map of our location",
        className: "w-full h-64 object-cover rounded-lg mt-6"
    }))))));
};

const Footer = () => {
    return React.createElement("footer", {
        className: "bg-gray-900 py-12"
    }, React.createElement("div", {
        className: "container mx-auto px-4"
    }, React.createElement("div", {
        className: "grid grid-cols-1 md:grid-cols-4 gap-8"
    }, [
        {
            title: "Nocturne Bistro",
            content: React.createElement("p", {
                className: "text-gray-400"
            }, "An elegant dining experience in the heart of the city. We pride ourselves on exceptional service and culinary excellence.")
        },
        {
            title: "Quick Links",
            content: React.createElement("ul", {
                className: "space-y-3"
            }, [
                "Home", "Menu", "Reservations", "Location"
            ].map((item, index) => React.createElement("li", {
                key: index
            }, React.createElement("a", {
                href: `#${item.toLowerCase().replace(' ', '-')}`,
                className: "text-gray-400 hover:text-amber-400 transition-colors duration-300"
            }, item))))
        },
        {
            title: "Contact Us",
            content: React.createElement("ul", {
                className: "space-y-3"
            }, [
                {
                    icon: "📍",
                    text: "123 Elegance Avenue, New York, NY 10001"
                },
                {
                    icon: "📞",
                    text: "(212) 555-1234"
                },
                {
                    icon: "✉️",
                    text: "info@nocturnebistro.com"
                }
            ].map((item, index) => React.createElement("li", {
                key: index,
                className: "flex items-start"
            }, React.createElement("span", {
                className: "mr-2"
            }, item.icon), React.createElement("span", {
                className: "text-gray-400"
            }, item.text))))
        },
        {
            title: "Newsletter",
            content: React.createElement("div", null, React.createElement("p", {
                className: "text-gray-400 mb-4"
            }, "Subscribe to our newsletter for exclusive offers and updates."), React.createElement("form", {
                className: "flex"
            }, React.createElement("input", {
                type: "email",
                placeholder: "Your email address",
                className: "bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-amber-500 flex-grow"
            }), React.createElement("button", {
                type: "submit",
                className: "bg-amber-500 hover:bg-amber-600 text-gray-900 px-4 py-2 rounded-r-lg transition-colors duration-300"
            }, "Subscribe")))
        }
    ].map((item, index) => React.createElement("div", {
        key: index
    }, React.createElement("h4", {
        className: "text-xl font-bold text-white mb-6"
    }, item.title), item.content))), React.createElement("div", {
        className: "border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
    }, React.createElement("p", {
        className: "text-gray-400 mb-4 md:mb-0"
    }, "© 2023 Nocturne Bistro. All rights reserved."), React.createElement("div", {
        className: "flex space-x-4"
    }, [
        "Facebook", "Instagram", "Twitter"
    ].map((item, index) => React.createElement("a", {
        key: index,
        href: "#",
        className: "text-gray-400 hover:text-amber-400 transition-colors duration-300"
    }, item))))));
};

const App = () => {
    return React.createElement("div", {
        className: "min-h-screen bg-gray-900 text-white"
    }, [
        React.createElement(Navbar, { key: "navbar" }),
        React.createElement(Hero, { key: "hero" }),
        React.createElement(MenuHighlights, { key: "menu" }),
        React.createElement(ReservationCTA, { key: "reservation" }),
        React.createElement(LocationHours, { key: "location" }),
        React.createElement(Footer, { key: "footer" })
    ]);
};

ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));