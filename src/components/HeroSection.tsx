import { motion } from 'framer-motion';
import { ArrowDown, FolderOpen, Mail, FileDown } from 'lucide-react';
import MagneticButton from './MagneticButton';
import TechCube from './TechCube';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-24">
      
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full bg-primary/10 blur-[140px] pointer-events-none" />

      {/* Floating shapes */}
      <div className="absolute top-20 right-[15%] w-16 h-16 border border-primary/20 rounded-lg animate-float opacity-30 rotate-12" />
      <div className="absolute bottom-32 left-[10%] w-10 h-10 bg-primary/10 rounded-full animate-float opacity-20" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* LEFT CONTENT */}
          <div className="flex-1 text-center lg:text-left">

            {/* Tag */}
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-1.5 rounded-full text-xs font-medium 
              bg-primary/10 text-primary border border-primary/20 mb-6"
            >
              Full-Stack Developer • Data Engineer
            </motion.span>

            {/* 🔥 IMPROVED HEADLINE */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-6"
            >
              Building scalable
              <br />
              <span className="text-gradient">web apps</span> & systems
            </motion.h1>

            {/* 🔥 BETTER SUBTEXT */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              I build full-stack applications and data-driven systems that solve real-world problems and scale efficiently.
            </motion.p>

            {/* 🔥 TRUST SIGNALS */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex gap-5 justify-center lg:justify-start text-sm text-muted-foreground mb-10"
            >
              <span>🚀 10+ Projects</span>
              <span>💻 Full-Stack</span>
              <span>📊 ML</span>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <MagneticButton
                href="#projects"
                strength={0.4}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:brightness-110 transition hover:scale-105"
              >
                <FolderOpen size={16} />
                View Projects
              </MagneticButton>

              {/* 🔥 UPDATED BUTTON */}
              <MagneticButton
                href="/resume.pdf"
                strength={0.4}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-white/10 bg-white/5 text-white font-semibold text-sm hover:border-primary/40 hover:scale-105 transition"
              >
                <FileDown size={16} />
                Resume
              </MagneticButton>
            </motion.div>
          </div>

          {/* RIGHT SIDE (Cube toned down) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 0.85, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex-shrink-0 opacity-70"
          >
            <TechCube />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="text-muted-foreground hover:text-primary transition">
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;