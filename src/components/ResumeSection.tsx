import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FileText, Download, ExternalLink, Sparkles } from 'lucide-react';
import GlowCard from '@/components/GlowCard';

const resume = {
  title: 'Full Stack Developer & ML Enthusiast',
  description:
    'I build scalable web apps and intelligent data solutions using React, Node.js, and Python — focused on performance, clean architecture, and real-world impact.',
  viewLink: '/dsResume.pdf',
  downloadLink: '/dsResume.pdf',
};

const stats = [
  { label: 'Projects', value: '10+' },
  { label: 'Tech Stack', value: '15+' },
  { label: 'Experience', value: 'Fresher' },
];

const ResumeSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-16 px-6 relative overflow-hidden" ref={ref}>
      
      {/* 🔥 Background Glow */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs mb-4">
            <Sparkles size={14} /> Resume
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            My Professional Snapshot
          </h2>

          <p className="text-muted-foreground max-w-xl mx-auto">
            A quick overview of my skills, projects, and experience.
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <GlowCard className="p-8 rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_50px_rgba(255,200,0,0.15)]">
            
            {/* Icon */}
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <FileText size={26} className="text-primary" />
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-center mb-3">
              {resume.title}
            </h3>

            {/* Description */}
            <p className="text-muted-foreground text-center text-sm mb-6 leading-relaxed">
              {resume.description}
            </p>

            {/* 🔥 Stats Row */}
            <div className="flex justify-center gap-6 mb-8 flex-wrap">
              {stats.map((item) => (
                <div key={item.label} className="text-center">
                  <p className="text-lg font-semibold text-primary">
                    {item.value}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              
              {/* Primary CTA */}
              <a
                href={resume.downloadLink}
                download
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:brightness-110 transition-all"
              >
                <Download size={16} /> Download Resume
              </a>

              {/* Secondary CTA */}
              <a
                href={resume.viewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-semibold text-sm hover:border-primary/50 transition-all"
              >
                <ExternalLink size={16} /> View Online
              </a>

            </div>
          </GlowCard>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;