import { motion, useInView } from 'framer-motion';
import { useRef, useState, FormEvent } from 'react';
import emailjs from 'emailjs-com';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const RECEIVE_EMAIL = 'akashrautelacms@gmail.com'; // your destination email

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        'service_ew9qg1e', // your EmailJS service ID
        'template_wczujes', // your EmailJS template ID
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_email: RECEIVE_EMAIL,
        },
        'G0fTdY0es3SPMiW-Q' // your EmailJS user ID (public key),
      );

      setStatus('success');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch (error) {
      console.error('Contact send error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section id="contact" className="py-16 px-6" ref={ref}>
      <div className="container mx-auto max-w-2xl">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Contact</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-3">Let's connect</h2>
          <p className="text-muted-foreground mb-10">Have a project in mind or want to chat? Drop me a message.</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <input
              type="text"
              placeholder="Name"
              required
              value={form.name}
              onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
              className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
            />
            <input
              type="email"
              placeholder="Email"
              required
              value={form.email}
              onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
              className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
            />
          </div>
          <textarea
            placeholder="Your message..."
            required
            rows={5}
            value={form.message}
            onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
            className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
          />

          <button
            type="submit"
            disabled={status === 'sending'}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:brightness-110 transition-all hover-lift disabled:opacity-60"
          >
            {status === 'sending' ? (
              'Sending...'
            ) : (
              <>
                <Send size={16} /> Send Message
              </>
            )}
          </button>

          {status === 'success' && (
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 text-sm text-emerald-500 font-medium">
              <CheckCircle size={16} /> Message sent successfully!
            </motion.p>
          )}
          {status === 'error' && (
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 text-sm text-destructive font-medium">
              <AlertCircle size={16} /> Something went wrong. Please try again.
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
