import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FileText, Download } from 'lucide-react';
import GlowCard from '@/components/GlowCard';

const resume = {
  title: 'Full Stack Developer & Machine Learning Enthusiast',
  description:
    'Developer and data enthusiast with experience in building scalable web applications and applying machine learning techniques to solve real-world problems. Skilled in React, Node.js, and Python, with a strong focus on clean code, performance, and user-centric design.',
  viewLink: '/dsResume.pdf',
  downloadLink: '/dsResume.pdf',
};

const ResumeSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-10 px-6" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <FileText size={24} className="text-primary" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Resume</h2>

          {/* ✅ Updated subtitle */}
          <p className="text-muted-foreground text-sm sm:text-base">
            A snapshot of my skills, projects, and experience
          </p>
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="w-full max-w-sm"
          >
            <GlowCard className="p-8 h-full flex flex-col items-center text-center">

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <FileText size={24} className="text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-2">{resume.title}</h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-6 flex-1">
                {resume.description}
              </p>

              {/* Buttons */}
              <div className="flex flex-col xs:flex-row gap-3 w-full justify-center">
                <a
                  href={resume.viewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-border text-foreground font-medium text-sm hover:border-primary/50 transition-all"
                >
                  <FileText size={15} /> View Resume
                </a>

                <a
                  href={resume.downloadLink}
                  download
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:brightness-110 transition-all"
                >
                  <Download size={15} /> Download PDF
                </a>
              </div>

            </GlowCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;