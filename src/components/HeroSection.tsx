import { motion } from 'framer-motion';
import { ArrowDown, FolderOpen, Mail } from 'lucide-react';
import MagneticButton from './MagneticButton';
import TechCube from './TechCube';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-24">
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      {/* Floating geometric shapes */}
      <div className="absolute top-20 right-[15%] w-16 h-16 border border-primary/20 rounded-lg animate-float opacity-40 rotate-12" />
      <div className="absolute bottom-32 left-[10%] w-10 h-10 bg-primary/10 rounded-full animate-float opacity-30" style={{ animationDelay: '2s' }} />
      <div className="absolute top-40 left-[20%] w-6 h-6 border border-border rounded animate-float opacity-20" style={{ animationDelay: '4s' }} />

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-8">
                Full-Stack Developer &bull; Data Engineer
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-6"
            >
              Building the
              <br />
              <span className="text-gradient">future</span> with code
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              Crafting scalable web experiences & intelligent data solutions.
              Turning complex problems into elegant, performant products.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <MagneticButton
                href="#projects"
                strength={0.4}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:brightness-110 transition-all duration-200 hover-lift"
              >
                <FolderOpen size={16} />
                View Projects
              </MagneticButton>
              <MagneticButton
                href="#contact"
                strength={0.4}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border border-border bg-card text-card-foreground font-semibold text-sm hover:border-primary/50 transition-all duration-200 hover-lift"
              >
                <Mail size={16} />
                Contact Me
              </MagneticButton>
            </motion.div>
          </div>

          {/* 3D Cube */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
            className="flex-shrink-0"
          >
            <TechCube />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Scroll down">
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
