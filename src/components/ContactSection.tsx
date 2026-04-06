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
  MessageSquare
} from 'lucide-react';

// 🔥 Custom Animated Cartoon/Graphic Component
const AnimatedMailGraphic = () => {
  return (
    <div className="relative w-full h-48 sm:h-64 flex items-center justify-center mb-8 overflow-visible">
      {/* Soft Center Glow */}
      <div className="absolute w-40 h-40 bg-primary/20 blur-[50px] rounded-full animate-pulse" />
      
      {/* Rotating Dashed Ring */}
      <motion.div 
         animate={{ rotate: 360 }} 
         transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
         className="absolute w-48 h-48 sm:w-56 sm:h-56 border-2 border-primary/20 rounded-full border-dashed"
      />
      
      {/* Counter-Rotating inner ring */}
      <motion.div 
         animate={{ rotate: -360 }} 
         transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
         className="absolute w-32 h-32 sm:w-40 sm:h-40 border border-emerald-500/20 rounded-full border-dotted"
      />

      {/* Main Mail Icon (Floating Base) */}
      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-card border border-border shadow-[0_0_40px_rgba(var(--primary),0.15)] group"
      >
        <Mail size={40} className="text-primary group-hover:scale-110 transition-transform duration-300" />
      </motion.div>

      {/* Ejected Paper Planes (Cartoon Effect) */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: 0, y: 0, scale: 0.5, rotate: 0 }}
          animate={{ 
            opacity: [0, 1, 0],
            x: [0, 80 + Math.random() * 60],
            y: [0, -60 - Math.random() * 80],
            scale: [0.5, 1.2, 0.8],
            rotate: [0, 25 + Math.random() * 45]
          }}
          transition={{ 
            duration: 2.5, 
            repeat: Infinity, 
            delay: i * 0.8,
            ease: "easeOut"
          }}
          className="absolute z-20"
        >
          <Send size={24} className="text-emerald-500/80 drop-shadow-md" />
        </motion.div>
      ))}

      {/* Little floating speech bubbles */}
      <motion.div
        animate={{ opacity: [0, 1, 0], y: [0, -40], x: [-10, -20] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        className="absolute z-20 top-1/4 left-1/3"
      >
         <MessageSquare size={16} className="text-primary/60" />
      </motion.div>
    </div>
  );
};

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const btnRef = useRef<HTMLButtonElement>(null);

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

  // 3D Tilt Effect only for the Submit Button
  const handleBtnMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!btnRef.current || status === 'sending') return;
    const rect = btnRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    // Tilt the button towards the cursor
    btnRef.current.style.transform = `perspective(500px) rotateX(${-y * 25}deg) rotateY(${x * 25}deg) scale(1.02)`;
  };

  const handleBtnLeave = () => {
    if (!btnRef.current) return;
    btnRef.current.style.transform = 'perspective(500px) rotateX(0deg) rotateY(0deg) scale(1)';
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
          <span className="text-xs uppercase tracking-widest text-primary font-bold">
            Contact
          </span>

          <h2 className="text-4xl md:text-5xl font-black mt-4 mb-4 bg-gradient-to-r from-foreground via-muted-foreground to-primary bg-clip-text text-transparent">
            Let’s build together
          </h2>

          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Have an idea, project, or opportunity? Drop a message — I’ll get back to you quickly.
          </p>
        </motion.div>

        {/* 🔥 GRID */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ================= LEFT: INFO & ANIMATION ================= */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="flex flex-col"
          >
            {/* Custom Animation */}
            <AnimatedMailGraphic />

            <div className="text-center lg:text-left space-y-6">
              <h3 className="text-2xl font-bold">
                Let’s connect directly 👋
              </h3>

              <p className="text-muted-foreground leading-relaxed max-w-md mx-auto lg:mx-0">
                I’m always open to discussing web development internships, freelance projects, and creative collaborations. 
                Choose your preferred way to reach out!
              </p>

              {/* Polished Contact Links */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-4 mt-8 justify-center lg:justify-start">
                <a href="mailto:akashrautelacms@gmail.com" className="flex items-center justify-center lg:justify-start gap-4 p-4 rounded-2xl bg-card border border-border hover:border-primary/50 hover:bg-primary/5 transition-all group">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-medium text-foreground">Email Me</p>
                    <p className="text-xs text-muted-foreground">akashrautelacms@gmail.com</p>
                  </div>
                </a>

                <div className="grid grid-cols-2 gap-4">
                  <a href="https://linkedin.com/in/akash-singh-rautela" target="_blank" className="flex items-center justify-center gap-2 p-4 rounded-2xl bg-card border border-border hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/5 transition-all group">
                    <Linkedin size={20} className="text-muted-foreground group-hover:text-[#0A66C2] transition-colors" />
                    <span className="text-sm font-medium">LinkedIn</span>
                  </a>

                  <a href="https://github.com/akash-rautela" target="_blank" className="flex items-center justify-center gap-2 p-4 rounded-2xl bg-card border border-border hover:border-foreground/30 hover:bg-foreground/5 transition-all group">
                    <Github size={20} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                    <span className="text-sm font-medium">GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT: FORM ================= */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            onSubmit={handleSubmit}
            className="space-y-6 bg-card/60 backdrop-blur-xl border border-white/10 p-8 sm:p-10 rounded-3xl shadow-2xl relative overflow-hidden group"
          >
            {/* Form Glow Effect on focus (subtle) */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 transition-opacity opacity-0 group-hover:opacity-100" />

            <div>
              <h3 className="text-xl font-bold mb-6">Send a Message</h3>
            </div>

            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider ml-1">Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    required
                    value={form.name}
                    onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                    className="w-full px-5 py-4 rounded-xl bg-background/50 border border-border text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all transition-shadow"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider ml-1">Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    required
                    value={form.email}
                    onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                    className="w-full px-5 py-4 rounded-xl bg-background/50 border border-border text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all transition-shadow"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider ml-1">Message</label>
                <textarea
                  placeholder="Tell me about your project or idea..."
                  rows={5}
                  required
                  value={form.message}
                  onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                  className="w-full px-5 py-4 rounded-xl bg-background/50 border border-border text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all transition-shadow resize-none"
                />
              </div>
            </div>

            <button
              ref={btnRef}
              type="submit"
              disabled={status === 'sending'}
              onMouseMove={handleBtnMove}
              onMouseLeave={handleBtnLeave}
              className="w-full relative flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-primary text-primary-foreground font-bold active:scale-95 transition-all duration-200 ease-out shadow-lg hover:shadow-[0_0_25px_rgba(var(--primary),0.4)] mt-4 z-10"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {status === 'sending' ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                <>
                  <Send size={18} /> Send Message
                </>
              )}
            </button>

            {/* Feedback Toasts inline */}
            {status === 'success' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 font-medium flex items-center gap-3 text-sm">
                <CheckCircle size={18} /> Message sent successfully! I'll be in touch soon.
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 font-medium flex items-center gap-3 text-sm">
                <AlertCircle size={18} /> Something went wrong. Please try again later.
              </motion.div>
            )}
          </motion.form>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;