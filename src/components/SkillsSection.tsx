import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Brain, Wrench } from 'lucide-react';
import GlowCard from '@/components/GlowCard';

type Proficiency = 'Beginner' | 'Intermediate' | 'Advanced';

interface Skill {
  name: string;
  proficiency: Proficiency;
}

interface Category {
  title: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  skills: Skill[];
}

const getProficiency = (level: number): Proficiency => {
  if (level < 70) return 'Beginner';
  if (level < 85) return 'Intermediate';
  return 'Advanced';
};

const categories: Category[] = [
  {
    title: 'Web Development',
    icon: Code,
    skills: [
      { name: 'React / Next.js', proficiency: getProficiency(75) },
      { name: 'TypeScript', proficiency: getProficiency(60) },
      { name: 'Node.js', proficiency: getProficiency(85) },
      { name: 'Java', proficiency: getProficiency(84) },
      { name: 'Tailwind CSS/ Bootstrap', proficiency: getProficiency(95) },
      { name: 'SQL / MongoDB', proficiency: getProficiency(82) },
    ],
  },
  {
    title: 'AI / ML',
    icon: Brain,
    skills: [
      { name: 'Python', proficiency: getProficiency(88) },
      { name: 'Scikit-Learn', proficiency: getProficiency(75) },
      { name: 'Pandas / NumPy', proficiency: getProficiency(85) },
      { name: 'Matplotlib / Seaborn', proficiency: getProficiency(70) },
      { name: 'IBM Cognos/ IBM Watson/ IBM SPSS', proficiency: getProficiency(85) },
      { name: 'Power BI/ Tableau', proficiency: getProficiency(70) },
    ],
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: [
      { name: 'Git / GitHub', proficiency: getProficiency(90) },
      { name: 'SQL / MongoDB', proficiency: getProficiency(82) },
      { name: 'IBM Cognos/ IBM Watson/ IBM SPSS', proficiency: getProficiency(85) },
      { name: 'Power BI/ Tableau', proficiency: getProficiency(70) },
      { name: 'Microsoft Excel', proficiency: getProficiency(80) },
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="pt-10 pb-16 px-6" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Skills</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-12">What I work with</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <GlowCard className="h-full group hover:scale-105 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <category.icon size={20} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 text-secondary-foreground text-xs font-medium hover:bg-secondary transition-colors"
                    >
                      {skill.name}
                      <span className="text-[10px] text-muted-foreground">• {skill.proficiency}</span>
                    </span>
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