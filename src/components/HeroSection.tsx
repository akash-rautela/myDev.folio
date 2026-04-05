import { motion, useScroll, useTransform } from "framer-motion";
import { FileDown } from "lucide-react";
import { useRef } from "react";

const HeroSection = () => {
  const ref = useRef(null);

  // 🔥 Scroll animation
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
    >
      {/* 🔥 Background Blur Glow */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-primary/20 blur-[140px] rounded-full" />
      </div>

      {/* 🔥 Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center max-w-3xl"
      >
        {/* 👋 Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-sm text-muted-foreground mb-4"
        >
          Hey, I'm Akash 👋
        </motion.p>

        {/* 🔥 Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent"
        >
          Building Modern Web Experiences
        </motion.h1>

        {/* 💬 Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-lg text-muted-foreground"
        >
          Full-stack developer & AI enthusiast crafting scalable,
          high-performance applications.
        </motion.p>

        {/* 🚀 CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8 flex justify-center gap-4 flex-wrap"
        >
          {/* Resume Button */}
          <a
            href="/resume.pdf"
            className="flex items-center gap-2 px-6 py-3 rounded-xl 
            bg-primary text-primary-foreground 
            hover:scale-105 transition font-medium"
          >
            <FileDown size={16} />
            Resume
          </a>

          {/* Secondary */}
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl border border-border 
            text-foreground hover:border-primary/40 
            transition"
          >
            View Projects
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;