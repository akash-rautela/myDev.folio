import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Lightbulb, Code, Brain, Rocket } from 'lucide-react';
import GlowCard from '@/components/GlowCard';

const stats = [
  {
    icon: Lightbulb,
    title: 'Problem Solver',
    description: 'Building solutions for real-world use cases',
  },
  {
    icon: Code,
    title: 'Full Stack Developer',
    description: 'React, Node.js, and modern web tech',
  },
  {
    icon: Brain,
    title: 'Data Enthusiast',
    description: 'Working with ML, analysis & insights',
  },
  {
    icon: Rocket,
    title: 'Continuous Learner',
    description: 'Always exploring new tools & technologies',
  },
];

const StatsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-14 px-6" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="h-full"
            >
              <GlowCard className="h-full min-h-72 flex flex-col items-center justify-between text-center group hover:scale-105 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 p-6">

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <stat.icon size={24} className="text-primary" />
                </div>

                {/* Title (fixed height) */}
                <h3 className="text-lg font-semibold mb-2 min-h-[48px] flex items-center justify-center">
                  {stat.title}
                </h3>

                {/* Description (fixed height) */}
                <p className="text-sm text-muted-foreground leading-relaxed min-h-[56px]">
                  {stat.description}
                </p>

              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;