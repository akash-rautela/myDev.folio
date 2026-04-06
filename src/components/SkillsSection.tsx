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
}

interface Category {
  title: string;
  icon: React.ElementType;
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
      { name: 'React / Next.js', icon: <Atom size={14} />, proficiency: getProficiency(75) },
      { name: 'TypeScript', icon: <Code size={14} />, proficiency: getProficiency(60) },
      { name: 'Node.js', icon: <Server size={14} />, proficiency: getProficiency(85) },
      { name: 'Java', icon: <Code size={14} />, proficiency: getProficiency(84) },
      { name: 'Tailwind CSS', icon: <Code size={14} />, proficiency: getProficiency(95) },
      { name: 'SQL / MongoDB', icon: <Database size={14} />, proficiency: getProficiency(82) },
    ],
  },
  {
    title: 'AI / ML',
    icon: Brain,
    skills: [
      { name: 'Python', icon: <Code size={14} />, proficiency: getProficiency(88) },
      { name: 'Scikit-Learn', icon: <Brain size={14} />, proficiency: getProficiency(75) },
      { name: 'Pandas / NumPy', icon: <Database size={14} />, proficiency: getProficiency(85) },
      { name: 'Matplotlib', icon: <Brain size={14} />, proficiency: getProficiency(70) },
      { name: 'IBM Watson / SPSS', icon: <Brain size={14} />, proficiency: getProficiency(85) },
      { name: 'Power BI / Tableau', icon: <Database size={14} />, proficiency: getProficiency(70) },
    ],
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: [
      { name: 'Git / GitHub', icon: <GitBranch size={14} />, proficiency: getProficiency(90) },
      { name: 'SQL / MongoDB', icon: <Database size={14} />, proficiency: getProficiency(82) },
      { name: 'IBM Cognos', icon: <Brain size={14} />, proficiency: getProficiency(85) },
      { name: 'Power BI', icon: <Database size={14} />, proficiency: getProficiency(70) },
      { name: 'Excel', icon: <Database size={14} />, proficiency: getProficiency(80) },
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="relative pt-20 pb-24 px-6 overflow-hidden" ref={ref}>
      
      {/* 🔥 BACKGROUND GLOW (tech vibe) */}
      {/* <div className="absolute inset-0 pointer-events-none flex justify-center">
        <div className="w-[600px] h-[600px] bg-primary/10 blur-[140px] rounded-full" />
      </div> */}

      <div className="container mx-auto max-w-6xl relative z-10">
        
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

          <h2 className="text-4xl font-bold mt-3 mb-16 bg-gradient-to-r from-foreground via-muted-foreground to-primary bg-clip-text text-transparent">
            What I work with
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <GlowCard
                className="h-full group p-6 rounded-2xl border border-border 
                bg-card/60 backdrop-blur-md"
              >
                
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center 
                  group-hover:scale-110 transition">
                    <category.icon size={20} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.08, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium
                      bg-muted text-muted-foreground border border-border
                      hover:bg-primary/10 hover:text-primary hover:border-primary/30
                      transition-colors duration-300 cursor-pointer"
                    >
                      <span className="opacity-80">{skill.icon}</span>
                      <span>{skill.name}</span>
                    </motion.div>
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