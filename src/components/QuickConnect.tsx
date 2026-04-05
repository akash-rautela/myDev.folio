import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageCircle, Mail, Linkedin, Github } from 'lucide-react';

const links = [
  { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/+918604735639', color: 'hover:border-emerald-500/50 hover:bg-emerald-500/5' },
  { icon: Mail, label: 'Email', href: 'mailto:akashrautelacms@gmail.com', color: 'hover:border-primary/50 hover:bg-primary/5' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/akash-singh-rautela', color: 'hover:border-blue-500/50 hover:bg-blue-500/5' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/akash-rautela', color: 'hover:border-foreground/30 hover:bg-foreground/5' },
];

const QuickConnect = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section className="py-10 px-6" ref={ref}>
      <div className="container mx-auto max-w-2xl text-center">
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
          Quick Connect
        </motion.p>
        <div className="flex justify-center gap-4 flex-wrap">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl border border-border bg-card text-sm font-medium transition-all duration-200 hover-lift ${link.color}`}
            >
              <link.icon size={18} />
              {link.label}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickConnect;
