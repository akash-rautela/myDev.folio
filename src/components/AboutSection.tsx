import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Brain, Rocket, Linkedin, FileDown } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const cards = [
  { icon: Code2, title: 'Full-Stack', desc: 'React, Next.js, Node.js' },
  { icon: Brain, title: 'AI / ML', desc: 'Python, ML Models' },
  { icon: Rocket, title: 'Projects', desc: '10+ builds' },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="pt-24 pb-20 px-6 relative overflow-hidden" ref={ref}>
      
      {/* 🔥 Background Glow */}
      {/* <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full" />
      </div> */}

      <div className="container mx-auto max-w-6xl relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >

          {/* LEFT SIDE (Avatar + floating cards) */}
          <div className="relative flex justify-center md:justify-start">

            {/* Avatar */}
            <motion.div whileHover={{ scale: 1.05 }}>
              <Avatar className="w-36 h-36 ring-2 ring-yellow-400/30 shadow-[0_0_60px_rgba(255,200,0,0.25)]">
                <AvatarImage src="/myImg.jpeg" />
                <AvatarFallback>AS</AvatarFallback>
              </Avatar>
            </motion.div>

          </div>

          {/* RIGHT SIDE */}
          <div>
            <h2 className="text-4xl font-bold mb-6 
            bg-gradient-to-r from-foreground to-primary 
            bg-clip-text text-transparent">
              About Me
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mb-6">
              Hi, I’m <span className="text-primary font-medium">Akash</span> 👋 — a 
              <span className="text-primary font-medium"> Full-Stack Developer</span> 
              and AI enthusiast. I build 
              <span className="text-primary font-medium"> scalable web applications</span> 
              and intelligent systems focused on solving 
              <span className="text-primary font-medium"> real-world problems</span>.
            </p>

            {/* Stats */}
            <div className="flex gap-6 text-sm text-muted-foreground mb-6">
              <span>🚀 10+ Projects</span>
              <span>💻 Full-Stack</span>
              <span>📊 AI/ML</span>
            </div>

            {/* CTA */}
            <div className="flex gap-4 flex-wrap">
              <a
                href="/resume.pdf"
                className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2 rounded-xl font-medium hover:scale-105 transition"
              >
                <FileDown size={16} />
                Resume
              </a>

              <a
                href="https://linkedin.com/in/akash-singh-rautela"
                target="_blank"
                className="flex items-center gap-2 border border-border px-5 py-2 rounded-xl hover:border-primary/40 transition"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;