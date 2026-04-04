import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => (
  <footer className="border-t border-border py-10 px-6">
    <div className="container mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} <span className="font-display font-semibold text-gradient">dev.folio</span> — Built with passion.
      </p>
      <div className="flex gap-4">
        <a href="https://github.com/akash-rautela" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub"><Github size={18} /></a>
        <a href="https://linkedin.com/in/akash-singh-rautela" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn"><Linkedin size={18} /></a>
        <a href="mailto:akashrautelacms@gmail.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Email"><Mail size={18} /></a>
      </div>
    </div>
  </footer>
);

export default Footer;
