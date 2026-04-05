import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Code,
  Brain,
  Wrench,
  Atom,
  Server,
  Database,
  GitBranch,
} from 'lucide-react';
import GlowCard from '@/components/GlowCard';

type Proficiency = 'Intermediate' | 'Advanced';

interface Skill {
  name: string;
  icon?: React.ReactNode;
  proficiency: Proficiency;
  highlight?: boolean;
}

interface Category {
  title: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  skills: Skill[];
}

const getProficiency = (level: number): Proficiency => {
  return level < 85 ? 'Intermediate' : 'Advanced';
};

const categories: Category[] = [
  {
    title: 'Web Development',
    icon: Code,
    skills: [
      {
        name: 'React / Next.js',
        icon: <Atom size={14} />,
        proficiency: getProficiency(75),
        
      },
      {
        name: 'TypeScript',
        icon: <Code size={14} />,
        proficiency: getProficiency(60),
      },
      {
        name: 'Node.js',
        icon: <Server size={14} />,
        proficiency: getProficiency(85),
        
      },
      {
        name: 'Java',
        icon: <Code size={14} />,
        proficiency: getProficiency(84),
      },
      {
        name: 'Tailwind CSS',
        icon: <Code size={14} />,
        proficiency: getProficiency(95),
        
      },
      {
        name: 'SQL / MongoDB',
        icon: <Database size={14} />,
        proficiency: getProficiency(82),
      },
    ],
  },
  {
    title: 'AI / ML',
    icon: Brain,
    skills: [
      {
        name: 'Python',
        icon: <Code size={14} />,
        proficiency: getProficiency(88),
        
      },
      {
        name: 'Scikit-Learn',
        icon: <Brain size={14} />,
        proficiency: getProficiency(75),
      },
      {
        name: 'Pandas / NumPy',
        icon: <Database size={14} />,
        proficiency: getProficiency(85),
        
      },
      {
        name: 'Matplotlib',
        icon: <Brain size={14} />,
        proficiency: getProficiency(70),
      },
      {
        name: 'IBM Watson / SPSS',
        icon: <Brain size={14} />,
        proficiency: getProficiency(85),
      },
      {
        name: 'Power BI / Tableau',
        icon: <Database size={14} />,
        proficiency: getProficiency(70),
      },
    ],
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: [
      {
        name: 'Git / GitHub',
        icon: <GitBranch size={14} />,
        proficiency: getProficiency(90),
        
      },
      {
        name: 'SQL / MongoDB',
        icon: <Database size={14} />,
        proficiency: getProficiency(82),
      },
      {
        name: 'IBM Cognos',
        icon: <Brain size={14} />,
        proficiency: getProficiency(85),
      },
      {
        name: 'Power BI',
        icon: <Database size={14} />,
        proficiency: getProficiency(70),
      },
      {
        name: 'Excel',
        icon: <Database size={14} />,
        proficiency: getProficiency(80),
      },
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="pt-16 pb-20 px-6" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Skills
          </span>

          <h2 className="text-4xl font-bold mt-3 mb-14 bg-gradient-to-r from-white via-gray-200 to-yellow-400 bg-clip-text text-transparent">
            What I work with
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <GlowCard className="h-full group p-6 rounded-2xl border border-white/10 hover:border-yellow-400/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(255,200,0,0.12)]">
                
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition">
                    <category.icon size={20} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold tracking-wide">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`
                        flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium transition-all duration-300
                        ${
                          skill.highlight
                            ? 'bg-yellow-400/15 text-yellow-300 border border-yellow-400/30 shadow-[0_0_12px_rgba(255,200,0,0.2)]'
                            : 'bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10'
                        }
                      `}
                    >
                      {/* Icon */}
                      <span className="opacity-80">{skill.icon}</span>

                      {/* Name */}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;