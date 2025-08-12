const { useState, useEffect } = React;

const Hero = () => {
    return React.createElement("section", { className: "py-20 px-4 bg-gray-100" },
        React.createElement("div", { className: "container mx-auto max-w-4xl" },
            React.createElement("h1", { className: "text-5xl font-bold mb-4" }, "John Doe"),
            React.createElement("p", { className: "text-2xl mb-8" }, "Backend Developer | Problem Solver"),
            React.createElement("a", {
                href: "#contact",
                className: "inline-block bg-black text-white px-6 py-3 text-lg font-semibold hover:bg-gray-800 transition-colors"
            }, "Get in Touch")
        )
    );
};

const Skills = () => {
    const skills = ["Node.js", "Python", "Docker", "AWS", "PostgreSQL", "GraphQL"];
    
    return React.createElement("section", { className: "py-20 px-4 bg-white" },
        React.createElement("div", { className: "container mx-auto max-w-4xl" },
            React.createElement("h2", { className: "text-3xl font-bold mb-12" }, "Skills"),
            React.createElement("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-6" },
                skills.map((skill, index) => {
                    return React.createElement("div", {
                        key: index,
                        className: "p-6 border-2 border-gray-200 hover:border-black transition-colors"
                    }, skill);
                })
            )
        )
    );
};

const Projects = () => {
    const projects = [
        {
            title: "E-commerce Platform",
            description: "Scalable backend for online store",
            image: "https://placehold.co/600x400/png?text=E-commerce"
        },
        {
            title: "Data Analytics Dashboard",
            description: "Real-time analytics solution",
            image: "https://placehold.co/600x400/png?text=Analytics"
        },
        {
            title: "API Gateway",
            description: "Microservices architecture",
            image: "https://placehold.co/600x400/png?text=API"
        }
    ];
    
    return React.createElement("section", { className: "py-20 px-4 bg-gray-100" },
        React.createElement("div", { className: "container mx-auto max-w-4xl" },
            React.createElement("h2", { className: "text-3xl font-bold mb-12" }, "Featured Projects"),
            React.createElement("div", { className: "grid gap-12" },
                projects.map((project, index) => {
                    return React.createElement("div", {
                        key: index,
                        className: "border-2 border-gray-200 hover:border-black transition-colors"
                    },
                        React.createElement("img", {
                            src: project.image,
                            alt: project.title,
                            className: "w-full h-64 object-cover"
                        }),
                        React.createElement("div", { className: "p-6" },
                            React.createElement("h3", { className: "text-xl font-bold mb-2" }, project.title),
                            React.createElement("p", { className: "mb-4" }, project.description),
                            React.createElement("a", {
                                href: "#",
                                className: "inline-block text-lg font-semibold hover:underline"
                            }, "View Project")
                        )
                    );
                })
            )
        )
    );
};

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission logic here
        setIsSubmitted(true);
    };
    
    return React.createElement("section", { id: "contact", className: "py-20 px-4 bg-white" },
        React.createElement("div", { className: "container mx-auto max-w-4xl" },
            React.createElement("h2", { className: "text-3xl font-bold mb-12" }, "Get in Touch"),
            isSubmitted ? (
                React.createElement("div", { className: "p-6 border-2 border-gray-200" },
                    React.createElement("p", { className: "text-xl" }, "Thank you for your message! I'll get back to you soon."))
            ) : (
                React.createElement("form", { onSubmit: handleSubmit, className: "grid gap-6" },
                    React.createElement("div", null,
                        React.createElement("label", { htmlFor: "name", className: "block mb-2 font-semibold" }, "Name"),
                        React.createElement("input", {
                            type: "text",
                            id: "name",
                            name: "name",
                            value: formData.name,
                            onChange: handleChange,
                            className: "w-full p-3 border-2 border-gray-200 focus:border-black transition-colors",
                            required: true
                        })
                    ),
                    React.createElement("div", null,
                        React.createElement("label", { htmlFor: "email", className: "block mb-2 font-semibold" }, "Email"),
                        React.createElement("input", {
                            type: "email",
                            id: "email",
                            name: "email",
                            value: formData.email,
                            onChange: handleChange,
                            className: "w-full p-3 border-2 border-gray-200 focus:border-black transition-colors",
                            required: true
                        })
                    ),
                    React.createElement("div", null,
                        React.createElement("label", { htmlFor: "message", className: "block mb-2 font-semibold" }, "Message"),
                        React.createElement("textarea", {
                            id: "message",
                            name: "message",
                            value: formData.message,
                            onChange: handleChange,
                            className: "w-full p-3 border-2 border-gray-200 focus:border-black transition-colors",
                            rows: 5,
                            required: true
                        })
                    ),
                    React.createElement("button", {
                        type: "submit",
                        className: "bg-black text-white px-6 py-3 text-lg font-semibold hover:bg-gray-800 transition-colors"
                    }, "Send Message")
                )
            )
        )
    );
};

const App = () => {
    return React.createElement("div", null,
        React.createElement(Hero),
        React.createElement(Skills),
        React.createElement(Projects),
        React.createElement(Contact)
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));