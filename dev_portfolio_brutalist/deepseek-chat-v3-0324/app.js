const Hero = () => React.createElement('section', { className: 'hero' },
  React.createElement('h1', { className: 'name' }, 'DEVELOPER_NAME'),
  React.createElement('p', { className: 'tagline' }, 'BACKEND SYSTEMS | PERFORMANCE OPTIMIZATION | SCALABLE ARCHITECTURES')
);

const SkillsGrid = () => {
  const skills = ['Python', 'Go', 'Rust', 'Kubernetes', 'PostgreSQL', 'Redis', 'AWS', 'Terraform', 'CI/CD'];
  return React.createElement('section', { className: 'skills' },
    React.createElement('h2', null, 'SKILLS'),
    React.createElement('div', { className: 'grid' },
      skills.map(skill => React.createElement('div', { key: skill, className: 'skill-item' }, skill))
    )
  );
};

const ProjectCard = ({ title, description, tech }) => React.createElement('div', { className: 'project-card' },
  React.createElement('h3', null, title),
  React.createElement('p', null, description),
  React.createElement('div', { className: 'tech-tags' },
    tech.map(t => React.createElement('span', { key: t }, t))
  )
);

const Projects = () => {
  const projects = [
    { title: 'DISTRIBUTED TASK QUEUE', description: 'High-throughput job processing system with Redis backend', tech: ['Go', 'Redis', 'K8s'] },
    { title: 'PERFORMANCE MONITOR', description: 'Real-time system metrics dashboard with 1M+ datapoints/sec', tech: ['Rust', 'WebAssembly', 'PostgreSQL'] },
    { title: 'AUTOSCALING SERVICE', description: 'Kubernetes operator for predictive workload scaling', tech: ['Python', 'K8s', 'Prometheus'] }
  ];
  
  return React.createElement('section', { className: 'projects' },
    React.createElement('h2', null, 'FEATURED WORK'),
    React.createElement('div', { className: 'project-grid' },
      projects.map((p, i) => React.createElement(ProjectCard, { key: i, ...p }))
    )
  );
};

const Contact = () => React.createElement('section', { className: 'contact' },
  React.createElement('h2', null, 'CONTACT'),
  React.createElement('p', null, 'AVAILABLE FOR CONSULTING & CONTRACTS'),
  React.createElement('a', { href: 'mailto:contact@example.com', className: 'email' }, 'CONTACT@EXAMPLE.COM')
);

const App = () => React.createElement('main', { className: 'portfolio' },
  React.createElement(Hero, null),
  React.createElement(SkillsGrid, null),
  React.createElement(Projects, null),
  React.createElement(Contact, null)
);

ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App, null));