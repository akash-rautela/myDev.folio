import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative border-t border-border py-12 px-6 overflow-hidden">
      


      <div className="container mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">

        {/* Left */}
        <p className="text-sm text-muted-foreground text-center sm:text-left">
          © {new Date().getFullYear()}{" "}
          <span className="font-display font-semibold text-gradient">
            Akash
          </span>{" "}
          Rautela — Built with passion 🚀
        </p>

        {/* Center (Back to top) */}
        <motion.button
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition"
        >
          <ArrowUp size={14} />
          Back to top
        </motion.button>

        {/* Right Icons */}
        <div className="flex gap-5">
          {[ 
            { icon: Github, link: "https://github.com/akash-rautela" },
            { icon: Linkedin, link: "https://linkedin.com/in/akash-singh-rautela" },
            { icon: Mail, link: "mailto:akashrautelacms@gmail.com" }
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-lg bg-muted/40 hover:bg-primary/10 border border-border 
              text-muted-foreground hover:text-primary transition"
            >
              <item.icon size={16} />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;