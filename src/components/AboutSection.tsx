import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Code2, Brain, Rocket, Linkedin, FileDown } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const hoverCards = [
  { icon: Code2, title: 'Full-Stack', desc: 'React, Next.js, Node.js', color: 'from-blue-500/20 to-cyan-400/20' },
  { icon: Brain, title: 'AI / ML', desc: 'Python, ML Models, Data', color: 'from-purple-500/20 to-pink-400/20' },
  { icon: Rocket, title: 'Projects', desc: '10+ builds', color: 'from-yellow-400/20 to-orange-400/20' },
  { icon: Code2, title: 'Focus', desc: 'Scalable apps', color: 'from-green-400/20 to-emerald-400/20' },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [active, setActive] = useState(false);

  return (
    <section id="about" className="pt-24 pb-20 px-6" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Avatar */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex justify-center md:justify-start">
            <Avatar className="w-36 h-36 ring-2 ring-yellow-400/30 shadow-[0_0_60px_rgba(255,200,0,0.25)]">
              <AvatarImage src="/myImg.jpeg" />
              <AvatarFallback>AS</AvatarFallback>
            </Avatar>
          </motion.div>

          {/* Content */}
          <div className="relative">
            {/* <span className="text-xs uppercase tracking-widest text-primary">
              About
            </span> */}

            {/* 🔥 Hover / Click trigger */}
            <div
              className="relative inline-block"
              onMouseEnter={() => setActive(true)}
              onMouseLeave={() => setActive(false)}
              onClick={() => setActive(!active)} // mobile support
            >
              <h2 className="text-4xl font-bold mt-2 mb-6 cursor-pointer 
              bg-gradient-to-r from-white via-yellow-200 to-yellow-400 
              bg-clip-text text-transparent">
                A bit about me
              </h2>

              {/* 🔥 Emerging Cards */}
              <AnimatePresence>
                {active && (
                  <>
                    {hoverCards.map((card, i) => {
                      const positions = [
                        { x: -140, y: -120 },
                        { x: 120, y: -140 },
                        { x: -100, y: -220 },
                        { x: 100, y: -240 },
                      ];

                      return (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: 0, y: 0, scale: 0.5 }}
                          animate={{
                            opacity: 1,
                            x: positions[i].x,
                            y: positions[i].y,
                            scale: 1,
                          }}
                          exit={{ opacity: 0, scale: 0.5 }}
                          transition={{
                            type: 'spring',
                            stiffness: 120,
                            damping: 12,
                            delay: i * 0.05,
                          }}
                          className={`absolute left-1/2 top-1/2 
                          -translate-x-1/2 -translate-y-1/2
                          w-[150px] p-3 rounded-xl 
                          bg-gradient-to-br ${card.color}
                          backdrop-blur-xl border border-white/10 
                          shadow-[0_10px_40px_rgba(0,0,0,0.4)]
                          hover:scale-105 transition`}
                        >
                          <card.icon size={16} className="mb-1 text-white" />
                          <p className="text-xs font-semibold">{card.title}</p>
                          <p className="text-[10px] text-muted-foreground">
                            {card.desc}
                          </p>
                        </motion.div>
                      );
                    })}
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* Text */}
            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mb-6">
              Hi, I’m <span className="text-yellow-400 font-medium">Akash</span> 👋 — a 
              <span className="text-yellow-400 font-medium"> Full-Stack Developer</span> 
              and data enthusiast. I build 
              <span className="text-yellow-400 font-medium"> scalable applications</span> 
              and intelligent systems that solve 
              <span className="text-yellow-400 font-medium"> real-world problems</span>.
            </p>

            {/* CTA */}
            <div className="flex gap-4">
              <a
                target="_blank"
                href="/dsResume.pdf"
                className="flex items-center gap-2 bg-yellow-400 text-black px-5 py-2 rounded-xl font-medium hover:scale-105 transition"
              >
                <FileDown size={16} />
                Resume
              </a>

              <a
                href="https://linkedin.com/in/akash-singh-rautela"
                target="_blank"
                className="flex items-center gap-2 border border-white/10 px-5 py-2 rounded-xl hover:border-yellow-400/40 transition"
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