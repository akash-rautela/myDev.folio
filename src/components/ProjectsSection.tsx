import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import GlowCard from '@/components/GlowCard';
import Swal from 'sweetalert2';

type ProjectCategory = 'all' | 'web' | 'aiml' | 'data';

interface Project {
  title: string;
  description: string;
  stack: string[];
  category: ProjectCategory;
  github: string;
  demo: string;
}

const projects: Project[] = [
  {
    title: 'Road Accident Analysis',
    description: 'Analyzed 50K+ accident records using SPSS Modeler to identify key severity drivers and build predictive models, delivering actionable insights through KPI dashboards.',
    stack: ['Python', 'IBM SPSS Modeler', 'Machine Learning', 'Data Analysis'],
    category: 'aiml',
    github: 'https://github.com/akash-rautela/Road-Accident-Analysis',
    demo: '#',
  },
  {
    title: 'IPL Match Outcome Predictor',
    description: 'Built a machine learning pipeline to analyze IPL match data, comparing 6 models and achieving 85% accuracy using cross-validation and evaluation metrics.',
    stack: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Pickle'],
    category: 'aiml',
    github: 'https://github.com/akash-rautela/ml-project',
    demo: '#',
  },
  {
    title: 'Titanic Survival Analysis',
    description: 'Performed exploratory data analysis and statistical testing on Titanic dataset, identifying key factors influencing survival and generating insights through visualizations.',
    stack: ['Python', 'Pandas', 'NumPy', 'Matplotlib'],
    category: 'data',
    github: 'https://github.com/akash-rautela/titanicAnalysis',
    demo: '#',
  },
  {
    title: 'Data Analysis Mini-Projects',
    description: 'A collection of multiple data analysis mini-projects covering data cleaning, visualization, and statistical insights using real-world datasets.',
    stack: ['Python', 'Pandas', 'NumPy', 'Matplotlib'],
    category: 'data',
    github: 'https://github.com/akash-rautela/data-analytics',
    demo: '#',
  },
  {
    title: 'Vehicle Finder',
    description: 'Designed and developed a vehicle recommendation system using React and AI-powered logic, enabling users to discover 2W/4W vehicles based on personalized preferences.',
    stack: ['React', 'Node.js', 'MongoDB', 'OpenAI API'],
    category: 'web',
    github: 'https://github.com/akash-rautela/vehicle-finder',
    demo: 'https://vehicle-finder-zeta.vercel.app/',
  },
  {
    title: 'Campus Chronicles',
    description: 'Developed a dynamic news portal using the MERN stack, building responsive frontend interfaces with React and robust backend APIs using Express.js.',
    stack: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    category: 'web',
    github: 'https://github.com/akash-rautela/Campus-Chronicle',
    demo: '#',
  },
  {
    title: 'Akash.dev Portfolio',
    description: 'Designed and developed a personal portfolio using React, showcasing projects, skills, and interactive UI with responsive design and modern animations.',
    stack: ['React', 'Tailwind CSS', 'Bootstrap', 'EmailJS', 'OpenAI API'],
    category: 'web',
    github: 'https://github.com/akash-rautela/myDev.folio', 
    demo: 'https://my-dev-folio-six.vercel.app/',
  },
  {
    title: 'Amazon Landing Page Clone',
    description: 'Built an Amazon landing page clone using React, focusing on responsive design and UI replication.',
    stack: ['React', 'JavaScript', 'HTML', 'CSS', 'Bootstrap css'],
    category: 'web',
    github: 'https://github.com/akash-rautela/amazon-clone',
    demo: 'https://amazon-clone-r6jj.vercel.app/'
  },
];

const filters: { key: ProjectCategory; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'web', label: 'Web' },
  { key: 'aiml', label: 'AI' },
  { key: 'data', label: 'Data' },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const handleDemoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (project.demo === '#') {
      e.preventDefault();

      Swal.fire({
        title: 'Demo Unavailable',
        html: 'This project is not deployed yet.<br><span style="font-size: 0.95em; color: #d1d5db;">You can explore the complete code on GitHub.</span>',
        background: '#0f172a',
        color: '#f3f4f6',
        confirmButtonText: '📌 View on GitHub',
        cancelButtonText: 'Close',
        showCancelButton: true,
        allowOutsideClick: true,
        allowEscapeKey: true,
      }).then((result) => {
        if (result.isConfirmed) {
          window.open(project.github, '_blank');
        }
      });

    } else {
      // ✅ open demo if available
      e.preventDefault();
      window.open(project.demo, '_blank');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.15 }}
    >
      <GlowCard className="flex flex-col h-full min-h-80">
        <h3 className="text-lg font-bold mb-2">{project.title}</h3>
        <p className="text-sm text-muted-foreground mb-4 flex-1 leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {project.stack.map(tech => (
            <span key={tech} className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-primary/10 text-primary">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <a target='_blank' rel="noopener noreferrer" href={project.github} className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors">
            <Github size={14} /> Code
          </a>
          <a
            href={project.demo}
            onClick={handleDemoClick}
            className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ExternalLink size={14} /> Demo
          </a>
        </div>
      </GlowCard>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const [active, setActive] = useState<ProjectCategory>('all');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const filtered = active === 'all' ? projects : projects.filter(p => p.category === active);

  return (
    <section id="projects" className="py-16 px-6" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Projects</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-8">Selected work</h2>
        </motion.div>

        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map(f => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${active === f.key ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
