import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Brain, Rocket, Linkedin } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import GlowCard from '@/components/GlowCard';

const highlights = [
  { icon: Code2, label: 'Full-Stack Dev', desc: 'React, Node.js, TypeScript' },
  { icon: Brain, label: 'AI / ML', desc: 'Python, TensorFlow, Data Pipelines' },
  { icon: Rocket, label: 'Product Focus', desc: 'Performance, UX, Scalability' },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="pt-20 pb-10 px-6" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row gap-8 items-start mb-12"
        >
          {/* Profile image */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="shrink-0"
          >
            <Avatar className="w-28 h-28 sm:w-32 sm:h-32 shadow-lg shadow-primary/10 ring-2 ring-primary/20">
              <AvatarImage
                src="/myImg.jpeg"
                alt="Profile photo"
              />
              <AvatarFallback className="text-2xl font-bold bg-primary/10 text-primary">
                JD
              </AvatarFallback>
            </Avatar>
          </motion.div>

          {/* Text content */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">About</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
              A bit about me
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mb-4">
              I’m Akash Singh Rautela, a developer and data enthusiast passionate about building products that solve real-world problems.
With experience across frontend, backend, and machine learning, I combine technical depth with product thinking to create efficient, scalable, and user-focused solutions.
            </p>
            <a
              href="https://linkedin.com/in/akash-singh-rautela"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={18} />
              <span>Connect on LinkedIn</span>
            </a>
          </div>
        </motion.div>

        {/* <div className="grid sm:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            >
              <GlowCard className="h-full">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-semibold mb-1">{item.label}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </GlowCard>
            </motion.div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default AboutSection;
