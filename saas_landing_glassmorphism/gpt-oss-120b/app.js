// app.js
const { createElement, useState, useEffect } = React;
const { createRoot } = ReactDOM;

// Utility for smooth scroll
function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

// Hero component
function Hero() {
  return createElement(
    "section",
    { id: "hero", className: "min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-primary-500 to-primary-700 text-white text-center px-4" },
    createElement("h1", { className: "text-5xl md:text-6xl font-bold mb-4" }, "NimbusBoard"),
    createElement("p", { className: "text-lg md:text-xl mb-8 max-w-2xl" }, "Collaborate, visualise, and manage your team's work with a sleek, real‑time dashboard."),
    createElement(
      "button",
      {
        className: "bg-white text-primary-600 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-gray-100 transition",
        onClick: () => scrollTo("pricing"),
        "aria-label": "Get started"
      },
      "Get Started"
    )
  );
}

// Feature Card component
function FeatureCard({ icon, title, description }) {
  return createElement(
    "div",
    { className: "glass p-6 text-center flex flex-col items-center transition transform hover:scale-105" },
    createElement("img", { src: icon, alt: `${title} icon`, className: "w-12 h-12 mb-4" }),
    createElement("h3", { className: "text-xl font-semibold mb-2" }, title),
    createElement("p", { className: "text-sm text-gray-200" }, description)
  );
}

// Features section
function Features() {
  const features = [
    {
      icon: "https://placehold.co/48x48/ffffff/000000?text=%F0%9F%97%82",
      title: "Unified Boards",
      description: "All your projects in one visual board, customizable to any workflow."
    },
    {
      icon: "https://placehold.co/48x48/ffffff/000000?text=%F0%9F%94%9F",
      title: "Real‑time Sync",
      description: "Instant updates across devices, keeping every teammate on the same page."
    },
    {
      icon: "https://placehold.co/48x48/ffffff/000000?text=%F0%9F%94%92",
      title: "Secure Access",
      description: "Granular permissions and SSO integration for enterprise‑grade security."
    }
  ];
  return createElement(
    "section",
    { id: "features", className: "py-20 bg-gray-100" },
    createElement("div", { className: "container mx-auto px-4 text-center" },
      createElement("h2", { className: "text-3xl font-bold mb-12" }, "Features"),
      createElement(
        "div",
        { className: "grid gap-8 md:grid-cols-3" },
        ...features.map(f => createElement(FeatureCard, f, null))
      )
    )
  );
}

// Pricing Card component
function PricingCard({ plan, price, features, popular }) {
  return createElement(
    "div",
    {
      className: `glass p-8 flex flex-col items-center text-center transition transform hover:scale-105 ${popular ? "border-2 border-primary-500" : ""}`
    },
    popular && createElement("span", { className: "bg-primary-500 text-white px-3 py-1 rounded-full text-xs mb-4" }, "Most Popular"),
    createElement("h3", { className: "text-2xl font-semibold mb-4" }, plan),
    createElement("p", { className: "text-4xl font-bold mb-6" }, price),
    createElement(
      "ul",
      { className: "mb-6 space-y-2 text-left" },
      ...features.map(item => createElement("li", { key: item }, "✔ " + item))
    ),
    createElement(
      "button",
      {
        className: "bg-primary-600 text-white font-medium py-2 px-6 rounded-full hover:bg-primary-700 transition",
        onClick: () => alert(`You selected the ${plan} plan!`),
        "aria-label": `Choose ${plan} plan`
      },
      "Choose"
    )
  );
}

// Pricing section
function Pricing() {
  const plans = [
    {
      plan: "Free",
      price: "$0",
      features: ["Unlimited boards", "Basic analytics", "Community support"],
      popular: false
    },
    {
      plan: "Pro",
      price: "$12/mo",
      features: ["Everything in Free", "Advanced analytics", "Custom branding", "Priority email support"],
      popular: true
    },
    {
      plan: "Team",
      price: "$30/mo",
      features: ["Everything in Pro", "Team admin console", "SSO & SCIM", "Dedicated account manager"],
      popular: false
    }
  ];
  return createElement(
    "section",
    { id: "pricing", className: "py-20 bg-gray-50" },
    createElement("div", { className: "container mx-auto px-4 text-center" },
      createElement("h2", { className: "text-3xl font-bold mb-12" }, "Pricing"),
      createElement(
        "div",
        { className: "grid gap-8 md:grid-cols-3" },
        ...plans.map(p => createElement(PricingCard, p, null))
      )
    )
  );
}

// Logos section
function Logos() {
  const logos = [
    "https://placehold.co/150x50/000000/FFFFFF?text=Logo1",
    "https://placehold.co/150x50/000000/FFFFFF?text=Logo2",
    "https://placehold.co/150x50/000000/FFFFFF?text=Logo3",
    "https://placehold.co/150x50/000000/FFFFFF?text=Logo4",
    "https://placehold.co/150x50/000000/FFFFFF?text=Logo5"
  ];
  return createElement(
    "section",
    { id: "logos", className: "py-12 bg-white" },
    createElement("div", { className: "container mx-auto px-4 flex flex-wrap justify-center items-center gap-8" },
      ...logos.map(src => createElement("img", { src, alt: "Customer logo", className: "h-12 object-contain" }, null))
    )
  );
}

// Footer with newsletter form
function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null); // null, "success", "error"

  const handleSubmit = e => {
    e.preventDefault();
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (re.test(email)) {
      setStatus("success");
      setEmail("");
    } else {
      setStatus("error");
    }
  };

  return createElement(
    "footer",
    { className: "bg-primary-800 text-white py-12" },
    createElement("div", { className: "container mx-auto px-4 text-center" },
      createElement("h3", { className: "text-xl font-semibold mb-4" }, "Stay in the loop"),
      createElement(
        "form",
        { onSubmit: handleSubmit, className: "flex flex-col sm:flex-row justify-center items-center gap-2" },
        createElement("input", {
          type: "email",
          placeholder: "Enter your email",
          value: email,
          onChange: e => setEmail(e.target.value),
          className: "px-4 py-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-400",
          "aria-label": "Email address",
          required: true
        }),
        createElement(
          "button",
          {
            type: "submit",
            className: "bg-primary-600 hover:bg-primary-500 text-white font-medium py-2 px-4 rounded-md transition"
          },
          "Subscribe"
        )
      ),
      status === "success" && createElement("p", { className: "mt-2 text-green-300" }, "✅ Thanks for subscribing!"),
      status === "error" && createElement("p", { className: "mt-2 text-red-300" }, "❌ Please enter a valid email.")
    ),
    createElement("div", { className: "mt-8 text-sm" }, "© 2025 NimbusBoard. All rights reserved.")
  );
}

// Main App component
function App() {
  return createElement(
    React.Fragment,
    null,
    createElement(Hero, null),
    createElement(Features, null),
    createElement(Logos, null),
    createElement(Pricing, null),
    createElement(Footer, null)
  );
}

// Render the app
createRoot(document.getElementById("root")).render(createElement(App, null));
