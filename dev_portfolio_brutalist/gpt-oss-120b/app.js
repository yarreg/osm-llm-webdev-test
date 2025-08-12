// app.js
const { useState } = React;

function Hero() {
  return React.createElement(
    "section",
    { className: "py-20 bg-white" },
    React.createElement(
      "div",
      { className: "container mx-auto px-4 text-center" },
      React.createElement(
        "h1",
        { className: "text-5xl font-extrabold tracking-widest uppercase mb-4" },
        "John Doe"
      ),
      React.createElement(
        "p",
        { className: "text-xl font-bold uppercase" },
        "Backend Engineer • API Craftsman"
      )
    )
  );
}

function Skills() {
  const skills = [
    "Node.js",
    "Express",
    "Python",
    "Django",
    "SQL",
    "NoSQL",
    "Docker",
    "Kubernetes"
  ];
  return React.createElement(
    "section",
    { className: "py-16 bg-gray-100" },
    React.createElement(
      "div",
      { className: "container mx-auto px-4" },
      React.createElement(
        "h2",
        { className: "text-3xl font-bold uppercase text-center mb-8" },
        "Skills"
      ),
      React.createElement(
        "div",
        { className: "grid grid-cols-2 sm:grid-cols-4 gap-4" },
        ...skills.map(skill =>
          React.createElement(
            "div",
            {
              key: skill,
              className:
                "p-4 border-2 border-black text-center font-mono text-lg uppercase hover:bg-black hover:text-white transition-colors duration-200"
            },
            skill
          )
        )
      )
    )
  );
}

function ProjectCard({ title, description, image, link }) {
  return React.createElement(
    "a",
    {
      href: link,
      target: "_blank",
      rel: "noopener noreferrer",
      className:
        "block border-2 border-black hover:bg-black hover:text-white transition-colors duration-200"
    },
    React.createElement(
      "div",
      { className: "overflow-hidden" },
      React.createElement("img", {
        src: image,
        alt: title,
        className: "w-full h-48 object-cover"
      })
    ),
    React.createElement(
      "div",
      { className: "p-4" },
      React.createElement(
        "h3",
        { className: "text-2xl font-bold uppercase mb-2" },
        title
      ),
      React.createElement("p", { className: "text-base" }, description)
    )
  );
}

function Projects() {
  const projects = [
    {
      title: "API Hub",
      description: "RESTful API platform for micro‑services orchestration.",
      image: "https://placehold.co/600x400/cccccc/000000?text=API+Hub",
      link: "#"
    },
    {
      title: "Data Sync",
      description: "Real‑time data replication service using PostgreSQL.",
      image: "https://placehold.co/600x400/cccccc/000000?text=Data+Sync",
      link: "#"
    },
    {
      title: "Auth Engine",
      description: "JWT based authentication server with RBAC.",
      image: "https://placehold.co/600x400/cccccc/000000?text=Auth+Engine",
      link: "#"
    }
  ];
  return React.createElement(
    "section",
    { className: "py-16 bg-white" },
    React.createElement(
      "div",
      { className: "container mx-auto px-4" },
      React.createElement(
        "h2",
        { className: "text-3xl font-bold uppercase text-center mb-8" },
        "Featured Projects"
      ),
      React.createElement(
        "div",
        { className: "grid grid-cols-1 md:grid-cols-3 gap-6" },
        ...projects.map(p =>
          React.createElement(ProjectCard, {
            key: p.title,
            title: p.title,
            description: p.description,
            image: p.image,
            link: p.link
          })
        )
      )
    )
  );
}

function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    if (!email.includes("@")) {
      setStatus("invalid");
      return;
    }
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setEmail("");
      setMessage("");
    }, 1500);
  };

  return React.createElement(
    "section",
    { className: "py-20 bg-gray-100" },
    React.createElement(
      "div",
      { className: "container mx-auto px-4 text-center" },
      React.createElement(
        "h2",
        { className: "text-3xl font-bold uppercase mb-6" },
        "Get In Touch"
      ),
      React.createElement(
        "form",
        {
          onSubmit: handleSubmit,
          className: "max-w-md mx-auto space-y-4"
        },
        React.createElement("input", {
          type: "email",
          placeholder: "Your email",
          value: email,
          onChange: e => setEmail(e.target.value),
          required: true,
          className:
            "w-full p-3 border-2 border-black focus:outline-none focus:bg-black focus:text-white transition-colors duration-200"
        }),
        React.createElement("textarea", {
          placeholder: "Your message",
          value: message,
          onChange: e => setMessage(e.target.value),
          rows: 4,
          className:
            "w-full p-3 border-2 border-black focus:outline-none focus:bg-black focus:text-white transition-colors duration-200"
        }),
        React.createElement(
          "button",
          {
            type: "submit",
            disabled: status === "sending",
            className:
              "w-full p-3 bg-black text-white font-bold uppercase border-2 border-black hover:bg-white hover:text-black transition-colors duration-200 disabled:opacity-50"
          },
          status === "sending" ? "Sending..." : "Send Message"
        )
      ),
      status === "invalid" &&
        React.createElement(
          "p",
          { className: "text-red-600 mt-2" },
          "Please enter a valid email."
        ),
      status === "sent" &&
        React.createElement(
          "p",
          { className: "text-green-600 mt-2" },
          "Message sent! Thank you."
        )
    )
  );
}

function Footer() {
  return React.createElement(
    "footer",
    { className: "py-6 bg-black text-white text-center" },
    React.createElement(
      "p",
      null,
      "© ",
      new Date().getFullYear(),
      " John Doe"
    )
  );
}

function App() {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(Hero, null),
    React.createElement(Skills, null),
    React.createElement(Projects, null),
    React.createElement(Contact, null),
    React.createElement(Footer, null)
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  React.createElement(App, null)
);
