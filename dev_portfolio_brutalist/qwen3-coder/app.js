const { createElement: e, useState } = React;

function Hero() {
  return e('section', { className: 'hero' },
    e('div', { className: 'container mx-auto px-4 py-20' },
      e('h1', { className: 'text-5xl md:text-7xl font-bold mb-4' }, 'ALEX MORGAN'),
      e('p', { className: 'text-2xl md:text-3xl font-mono' }, 'BACKEND SYSTEMS ARCHITECT'),
      e('div', { className: 'mt-8' },
        e('a', { 
          href: '#projects', 
          className: 'inline-block border-2 border-black px-6 py-3 font-mono hover:bg-black hover:text-white transition-colors'
        }, 'VIEW WORK'),
        e('a', { 
          href: '#contact', 
          className: 'inline-block border-2 border-black px-6 py-3 font-mono ml-4 hover:bg-black hover:text-white transition-colors'
        }, 'CONTACT')
      )
    )
  );
}

function SkillsGrid() {
  const skills = [
    'Python', 'Go', 'Rust', 'Node.js',
    'PostgreSQL', 'MongoDB', 'Redis', 'Kafka',
    'Docker', 'Kubernetes', 'AWS', 'GCP',
    'GraphQL', 'gRPC', 'REST', 'WebSockets'
  ];

  return e('section', { className: 'skills py-16' },
    e('div', { className: 'container mx-auto px-4' },
      e('h2', { className: 'text-4xl font-bold mb-12 text-center' }, 'TECHNICAL SKILLS'),
      e('div', { className: 'grid grid-cols-2 md:grid-cols-4 gap-6' },
        skills.map((skill, index) => 
          e('div', { 
            key: index, 
            className: 'border-2 border-black p-6 text-center font-mono hover:bg-black hover:text-white transition-colors'
          }, skill)
        )
      )
    )
  );
}

function Projects() {
  const projects = [
    {
      title: 'Distributed Task Queue',
      description: 'High-throughput job processing system handling 100k+ tasks per second',
      tech: ['Rust', 'Redis', 'Kafka']
    },
    {
      title: 'Real-time Analytics API',
      description: 'Low-latency data pipeline serving 1M+ concurrent users',
      tech: ['Go', 'PostgreSQL', 'WebSockets']
    },
    {
      title: 'Microservices Framework',
      description: 'Kubernetes-native platform for deploying 200+ microservices',
      tech: ['Python', 'Docker', 'Kubernetes']
    }
  ];

  return e('section', { id: 'projects', className: 'projects py-16 bg-gray-100' },
    e('div', { className: 'container mx-auto px-4' },
      e('h2', { className: 'text-4xl font-bold mb-12 text-center' }, 'FEATURED PROJECTS'),
      e('div', { className: 'grid grid-cols-1 md:grid-cols-3 gap-8' },
        projects.map((project, index) => 
          e('div', { 
            key: index, 
            className: 'border-2 border-black bg-white p-6 hover:shadow-[8px_8px_0_0_#000] transition-shadow'
          },
            e('h3', { className: 'text-2xl font-bold mb-3' }, project.title),
            e('p', { className: 'mb-4' }, project.description),
            e('div', { className: 'flex flex-wrap gap-2' },
              project.tech.map((tech, i) => 
                e('span', { 
                  key: i, 
                  className: 'text-sm font-mono border border-black px-2 py-1'
                }, tech)
              )
            )
          )
        )
      )
    )
  );
}

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return e('section', { id: 'contact', className: 'contact py-16' },
    e('div', { className: 'container mx-auto px-4 max-w-3xl' },
      e('h2', { className: 'text-4xl font-bold mb-12 text-center' }, 'GET IN TOUCH'),
      
      submitted ? 
        e('div', { className: 'border-2 border-black p-8 text-center bg-black text-white' },
          'MESSAGE SENT SUCCESSFULLY!'
        ) :
        e('form', { onSubmit: handleSubmit, className: 'space-y-6' },
          e('div', null,
            e('label', { htmlFor: 'name', className: 'block font-mono mb-2' }, 'NAME'),
            e('input', { 
              type: 'text', 
              id: 'name', 
              name: 'name', 
              required: true,
              value: formData.name,
              onChange: handleChange,
              className: 'w-full border-2 border-black p-3 font-mono'
            })
          ),
          e('div', null,
            e('label', { htmlFor: 'email', className: 'block font-mono mb-2' }, 'EMAIL'),
            e('input', { 
              type: 'email', 
              id: 'email', 
              name: 'email', 
              required: true,
              value: formData.email,
              onChange: handleChange,
              className: 'w-full border-2 border-black p-3 font-mono'
            })
          ),
          e('div', null,
            e('label', { htmlFor: 'message', className: 'block font-mono mb-2' }, 'MESSAGE'),
            e('textarea', { 
              id: 'message', 
              name: 'message', 
              required: true,
              rows: 5,
              value: formData.message,
              onChange: handleChange,
              className: 'w-full border-2 border-black p-3 font-mono'
            })
          ),
          e('button', { 
            type: 'submit', 
            className: 'border-2 border-black px-8 py-4 font-mono hover:bg-black hover:text-white transition-colors'
          }, 'SEND MESSAGE')
        ),
        
      e('div', { className: 'mt-12 text-center' },
        e('p', { className: 'font-mono mb-4' }, 'OR REACH ME DIRECTLY:'),
        e('div', { className: 'flex justify-center space-x-6' },
          e('a', { 
            href: 'mailto:alex@example.com', 
            className: 'border-2 border-black px-4 py-2 font-mono hover:bg-black hover:text-white transition-colors'
          }, 'EMAIL'),
          e('a', { 
            href: 'https://github.com/alex', 
            className: 'border-2 border-black px-4 py-2 font-mono hover:bg-black hover:text-white transition-colors'
          }, 'GITHUB'),
          e('a', { 
            href: 'https://linkedin.com/in/alex', 
            className: 'border-2 border-black px-4 py-2 font-mono hover:bg-black hover:text-white transition-colors'
          }, 'LINKEDIN')
        )
      )
    )
  );
}

function App() {
  return e('div', { className: 'font-sans' },
    e(Hero),
    e(SkillsGrid),
    e(Projects),
    e(Contact)
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(e(App));