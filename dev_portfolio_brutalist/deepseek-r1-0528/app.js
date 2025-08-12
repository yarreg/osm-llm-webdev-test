const { createElement: e, useState } = React;

// Main App Component
const App = () => {
  const [activeProject, setActiveProject] = useState(null);
  
  const projects = [
    {
      id: 1,
      title: "Distributed Task Queue",
      description: "Scalable background job processing system with Redis",
      technologies: ["Python", "Redis", "Docker", "Kubernetes"]
    },
    {
      id: 2,
      title: "API Gateway",
      description: "High-performance microservices routing layer",
      technologies: ["Go", "gRPC", "OAuth2", "Prometheus"]
    },
    {
      id: 3,
      title: "Data Pipeline",
      description: "Real-time event streaming with Kafka",
      technologies: ["Kafka", "Spark", "Avro", "Airflow"]
    }
  ];

  const skills = [
    "Python", "Go", "Rust", "Docker", "Kubernetes", 
    "PostgreSQL", "Redis", "Kafka", "AWS", "Terraform",
    "gRPC", "GraphQL", "Prometheus", "CI/CD"
  ];

  // Components
  const Header = () => e(
    'header', 
    { 
      className: 'fixed w-full bg-white z-10 border-b-4 border-black py-4 px-6'
    },
    e('div', { className: 'container mx-auto flex justify-between items-center' },
      e('h1', { className: 'text-2xl font-bold font-space-grotesk' }, 'DEV_PORTFOLIO'),
      e('nav', null,
        e('ul', { className: 'flex space-x-6' },
          e('li', null, e('a', { href: '#skills', className: 'hover:text-red-600 transition-colors' }, 'SKILLS')),
          e('li', null, e('a', { href: '#projects', className: 'hover:text-red-600 transition-colors' }, 'PROJECTS')),
          e('li', null, e('a', { href: '#contact', className: 'hover:text-red-600 transition-colors' }, 'CONTACT'))
        )
      )
    )
  );

  const Hero = () => e(
    'section', 
    { 
      className: 'min-h-screen flex items-center justify-center bg-white border-b-4 border-black p-6',
      style: { backgroundImage: 'repeating-linear-gradient(45deg, #f0f0f0, #f0f0f0 10px, #ffffff 10px, #ffffff 20px)' }
    },
    e('div', { className: 'text-center max-w-3xl' },
      e('h2', { className: 'text-5xl md:text-7xl font-bold font-space-grotesk mb-4' }, 'BACKEND SYSTEMS ENGINEER'),
      e('p', { className: 'text-xl md:text-2xl font-space-mono mb-8' }, 'Building robust distributed systems with surgical precision'),
      e('div', { className: 'mt-12' },
        e('a', { 
          href: '#projects', 
          className: 'inline-block bg-black text-white px-8 py-4 font-space-grotesk text-lg border-4 border-black hover:bg-white hover:text-black transition-all duration-300'
        }, 'EXPLORE WORK')
      )
    )
  );

  const SkillsGrid = () => e(
    'section', 
    { 
      id: 'skills', 
      className: 'py-20 bg-white border-b-4 border-black'
    },
    e('div', { className: 'container mx-auto px-6' },
      e('h2', { className: 'text-4xl font-bold font-space-grotesk mb-12 text-center' }, 'TECHNICAL SKILLSET'),
      e('div', { className: 'grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4' },
        skills.map((skill, index) => 
          e('div', { 
            key: index,
            className: 'p-4 border-4 border-black bg-white text-center font-space-mono hover:bg-black hover:text-white transition-all duration-300 cursor-pointer'
          }, skill)
        )
      )
    )
  );

  const ProjectCard = ({ project, onClick }) => e(
    'div', 
    { 
      className: 'border-4 border-black bg-white p-6 cursor-pointer transition-all duration-300 hover:bg-black hover:text-white',
      onClick: () => onClick(project.id)
    },
    e('h3', { className: 'text-2xl font-bold font-space-grotesk mb-3' }, project.title),
    e('p', { className: 'font-space-mono mb-4' }, project.description),
    e('div', { className: 'flex flex-wrap gap-2' },
      project.technologies.map((tech, i) => 
        e('span', { 
          key: i,
          className: 'px-3 py-1 bg-gray-200 text-sm font-space-mono'
        }, tech)
      )
    )
  );

  const Projects = () => e(
    'section', 
    { 
      id: 'projects', 
      className: 'py-20 bg-white border-b-4 border-black'
    },
    e('div', { className: 'container mx-auto px-6' },
      e('h2', { className: 'text-4xl font-bold font-space-grotesk mb-12 text-center' }, 'FEATURED PROJECTS'),
      e('div', { className: 'grid grid-cols-1 md:grid-cols-3 gap-8' },
        projects.map(project => 
          e(ProjectCard, { 
            key: project.id, 
            project: project,
            onClick: setActiveProject
          })
        )
      )
    )
  );

  const Contact = () => e(
    'section', 
    { 
      id: 'contact', 
      className: 'py-20 bg-black text-white'
    },
    e('div', { className: 'container mx-auto px-6 text-center' },
      e('h2', { className: 'text-4xl font-bold font-space-grotesk mb-6' }, 'READY TO BUILD SOMETHING SOLID?'),
      e('p', { className: 'font-space-mono mb-8 max-w-2xl mx-auto' }, 'Looking for a backend engineer who understands distributed systems at a fundamental level? Let\'s architect robust solutions together.'),
      e('a', { 
        href: 'mailto:contact@devportfolio.com', 
        className: 'inline-block bg-white text-black px-8 py-4 font-space-grotesk text-lg border-4 border-white hover:bg-black hover:text-white transition-all duration-300'
      }, 'CONTACT ME')
    )
  );

  const Footer = () => e(
    'footer', 
    { className: 'py-6 bg-white border-t-4 border-black text-center font-space-mono' },
    e('p', null, '© 2023 BACKEND SYSTEMS ENGINEER — BUILT FOR PERFORMANCE')
  );

  return e('div', { className: 'font-sans' },
    e(Header, null),
    e(Hero, null),
    e(SkillsGrid, null),
    e(Projects, null),
    e(Contact, null),
    e(Footer, null)
  );
};

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(e(App));