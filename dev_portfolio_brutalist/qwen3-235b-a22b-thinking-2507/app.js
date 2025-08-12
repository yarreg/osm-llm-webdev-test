const { createElement: h } = React;

function Hero() {
  return h('section', {
    className: 'py-20 text-center border-b-2 border-black'
  },
    h('h1', {
      className: 'text-6xl md:text-8xl font-black tracking-tight mb-4'
    }, 'JOHN DOE'),
    h('p', {
      className: 'text-2xl md:text-3xl font-bold uppercase tracking-widest'
    }, 'BACKEND DEVELOPER')
  );
}

function Skills() {
  const skills = [
    'NODE.JS', 'PYTHON', 'DOCKER', 'KUBERNETES',
    'AWS', 'POSTGRESQL', 'REDIS', 'RABBITMQ',
    'TYPESCRIPT', 'GO', 'TERRAFORM', 'CI/CD'
  ];

  return h('section', {
    className: 'py-16 px-4'
  },
    h('h2', {
      className: 'text-3xl md:text-4xl font-black text-center mb-12 uppercase tracking-widest'
    }, 'TECHNICAL SKILLS'),
    h('div', {
      className: 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-4xl mx-auto'
    },
      skills.map(skill => h('div', {
        key: skill,
        className: 'border-2 border-black p-4 font-black text-center uppercase tracking-wider transition-colors duration-200 hover:bg-black hover:text-white'
      }, skill))
    )
  );
}

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'DISTRIBUTED TASK QUEUE',
      desc: 'High-throughput message processing system handling 10k+ RPS with zero data loss',
      img: 'https://placehold.co/600x400/000000/FFFFFF?text=Task+Queue'
    },
    {
      id: 2,
      title: 'REAL-TIME ANALYTICS ENGINE',
      desc: 'Streaming data pipeline processing 5TB/day with sub-100ms latency',
      img: 'https://placehold.co/600x400/000000/FFFFFF?text=Analytics+Engine'
    },
    {
      id: 3,
      title: 'SECURE API GATEWAY',
      desc: 'Zero-trust authentication layer serving 2M+ daily requests',
      img: 'https://placehold.co/600x400/000000/FFFFFF?text=API+Gateway'
    }
  ];

  return h('section', {
    className: 'py-16 px-4'
  },
    h('h2', {
      className: 'text-3xl md:text-4xl font-black text-center mb-12 uppercase tracking-widest'
    }, 'FEATURED PROJECTS'),
    h('div', {
      className: 'grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'
    },
      projects.map(project => h('article', {
        key: project.id,
        className: 'border-2 border-black overflow-hidden'
      },
        h('img', {
          src: project.img,
          alt: `${project.title} screenshot`,
          className: 'w-full h-48 object-cover'
        }),
        h('div', {
          className: 'p-6'
        },
          h('h3', {
            className: 'text-2xl font-black mb-3 uppercase tracking-wider'
          }, project.title),
          h('p', {
            className: 'mb-4 font-mono text-lg'
          }, project.desc),
          h('a', {
            href: '#',
            className: 'font-black border-b-2 border-black inline-block transition-colors duration-200 hover:border-[#e63946] focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-black'
          }, 'VIEW CASE STUDY →')
        )
      ))
    )
  );
}

function Contact() {
  const [copied, setCopied] = React.useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('hello@johndoe.dev');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return h('section', {
    className: 'py-16 px-4 bg-black text-white'
  },
    h('div', {
      className: 'max-w-2xl mx-auto text-center'
    },
      h('h2', {
        className: 'text-3xl md:text-4xl font-black mb-6 uppercase tracking-widest'
      }, 'LET\'S BUILD SOMETHING'),
      h('p', {
        className: 'text-xl mb-8 font-mono'
      }, 'Have a complex backend challenge? I solve hard infrastructure problems.'),
      h('div', {
        className: 'relative inline-block'
      },
        h('button', {
          onClick: copyEmail,
          className: 'bg-white text-black font-black py-4 px-8 text-xl uppercase tracking-wider transition-colors duration-200 hover:bg-gray-200 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-white',
          'aria-label': 'Copy email address to clipboard'
        }, 'hello@johndoe.dev'),
        copied && h('div', {
          className: 'absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-4 py-2 bg-white text-black text-sm font-black rounded-sm whitespace-nowrap transition-opacity duration-300',
          'aria-live': 'polite'
        }, 'EMAIL COPIED!')
      )
    )
  );
}

function App() {
  return h('main', {
    className: 'font-mono'
  },
    h(Hero, null),
    h(Skills, null),
    h(Projects, null),
    h(Contact, null)
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(h(App));