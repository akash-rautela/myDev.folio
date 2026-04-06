import { motion, useInView } from 'framer-motion';
import { useRef, useState, FormEvent } from 'react';
import emailjs from 'emailjs-com';
import {
  Send,
  CheckCircle,
  AlertCircle,
  Mail,
  Linkedin,
  Github,
  Code2,
  Brain,
  Terminal,
  Cpu,
  Database,
  Globe,
  Coffee,
} from 'lucide-react';

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        'service_ew9qg1e',
        'template_wczujes',
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        'G0fTdY0es3SPMiW-Q'
      );

      setStatus('success');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden" ref={ref}>
      
      {/* 🔥 Subtle Centered Glow */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[400px] h-[400px] bg-primary/15 blur-[100px] rounded-full" />
      </div>

      {/* 🔥 Floating Icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block">
        {[
          { Icon: Code2, x: '10%', y: '20%' },
          { Icon: Brain, x: '80%', y: '25%' },
          { Icon: Github, x: '20%', y: '75%' },
          { Icon: Linkedin, x: '85%', y: '80%' },
          { Icon: Mail, x: '45%', y: '10%' },
          { Icon: Terminal, x: '90%', y: '55%' },
          { Icon: Cpu, x: '8%', y: '45%' },
          { Icon: Database, x: '15%', y: '90%' },
          { Icon: Globe, x: '60%', y: '85%' },
          { Icon: Coffee, x: '85%', y: '5%' }
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.3, 0.7, 0.3],
              y: [0, -20, 0],
              rotate: [0, 15, -10, 0],
            }}
            transition={{
              duration: 8 + (i % 5) * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
            className="absolute"
            style={{ left: item.x, top: item.y }}
          >
            <item.Icon size={24 + (i % 3) * 8} className="text-primary/40" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">

        {/* 🔥 Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-widest text-primary">
            Contact
          </span>

          <h2 className="text-4xl font-bold mt-3 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Let’s build something together
          </h2>

          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Have an idea, project, or opportunity? Drop a message — I’ll get back to you quickly.
          </p>
        </motion.div>

        {/* 🔥 GRID */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* ================= LEFT: INFO ================= */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold">
              Let’s connect 👋
            </h3>

            <p className="text-muted-foreground">
              I’m open to internships, freelance projects, and collaborations.  
              Whether you have a question or just want to say hi, feel free to reach out.
            </p>

            {/* Contact Links */}
            <div className="flex flex-col gap-3">
              <a href="mailto:akashrautelacms@gmail.com" className="connect-btn">
                <Mail size={16} /> akashrautelacms@gmail.com
              </a>

              <a href="https://linkedin.com/in/akash-singh-rautela" target="_blank" className="connect-btn">
                <Linkedin size={16} /> LinkedIn Profile
              </a>

              <a href="https://github.com/akash-rautela" target="_blank" className="connect-btn">
                <Github size={16} /> GitHub Profile
              </a>
            </div>
          </motion.div>

          {/* ================= RIGHT: FORM ================= */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            onSubmit={handleSubmit}
            className="space-y-5 bg-card/60 backdrop-blur-xl border border-border p-6 rounded-2xl shadow-lg"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                className="input-style"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                value={form.email}
                onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                className="input-style"
              />
            </div>

            <textarea
              placeholder="Tell me about your idea..."
              rows={5}
              required
              value={form.message}
              onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
              className="input-style resize-none"
            />

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:scale-105 transition"
            >
              {status === 'sending' ? 'Sending...' : (<><Send size={16} /> Send Message</>)}
            </button>

            {status === 'success' && (
              <p className="flex items-center gap-2 text-emerald-500 text-sm">
                <CheckCircle size={16} /> Message sent successfully!
              </p>
            )}

            {status === 'error' && (
              <p className="flex items-center gap-2 text-red-500 text-sm">
                <AlertCircle size={16} /> Something went wrong.
              </p>
            )}
          </motion.form>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;