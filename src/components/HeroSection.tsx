import { motion } from "framer-motion";
import { FileDown, ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { useRef } from "react";

const HeroSection = () => {
  const ref = useRef(null);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-20"
    >
      {/* Background Elements Handled By Global Network Canvas */}

      {/* Main Content */}
      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Available for new opportunities
        </motion.div>

        {/* Name & Title */}
        <div className="relative mb-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight flex flex-col gap-2"
          >
            <span className="text-3xl sm:text-4xl md:text-5xl text-muted-foreground font-medium">
              Hello, I'm
            </span>
            <span>
              Akash Singh{" "}
              <span className="relative whitespace-nowrap inline-block">
                <span className="absolute -inset-1 block bg-gradient-to-r from-primary/30 to-emerald-500/30 blur-lg rounded-xl opacity-50"></span>
                <span className="relative bg-gradient-to-r from-primary via-emerald-500 to-teal-500 bg-clip-text text-transparent">
                  Rautela
                </span>
              </span>
            </span>
          </motion.h1>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl font-light leading-relaxed mb-10"
        >
          A passionate <span className="text-foreground font-medium">Full-Stack Developer</span> & AI Enthusiast building modern, scalable, and dynamic web experiences.
        </motion.h2>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <a
            href="#projects"
            className="group relative flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(var(--primary),0.3)] hover:shadow-[0_0_30px_rgba(var(--primary),0.5)]"
          >
            <span>View My Work</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="/dsResume.pdf"
            className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-full border border-border bg-background/50 backdrop-blur-md text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300"
          >
            <FileDown className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            <span>Download Resume</span>
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 flex items-center gap-6"
        >
          {[
            { icon: Github, href: "https://github.com/akash-rautela", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com/in/akash-singh-rautela", label: "LinkedIn" },
            { icon: Mail, href: "mailto:akashrautelacms@gmaill.com", label: "Email" }
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="p-3 rounded-full border border-border bg-background/50 backdrop-blur-sm text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-sm hover:scale-110"
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;