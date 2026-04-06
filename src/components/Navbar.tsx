import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Navbar = ({ isDark, toggleTheme }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('#about');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll('section');
      let current = '';

      sections.forEach((sec) => {
        const top = sec.offsetTop - 150;
        if (window.scrollY >= top) {
          current = '#' + sec.getAttribute('id');
        }
      });

      if (current) setActive(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);

    if (el) {
      window.scrollTo({
        top: (el as HTMLElement).offsetTop - 80,
        behavior: 'smooth',
      });
    }

    setMobileOpen(false);
  };

  return (
    <>
      {/* 🌟 Navbar */}
      <div className="fixed top-4 left-0 w-full z-50 flex justify-center">
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`relative px-6 py-3 flex items-center justify-between w-[90%] max-w-5xl rounded-2xl
          ${
            scrolled
              ? "bg-background/70 backdrop-blur-2xl border border-border shadow-xl scale-[0.97]"
              : "bg-transparent"
          }`}
        >
          {/* Logo */}
          <h1
            onClick={() => handleNavClick('#about')}
            className="font-semibold text-lg cursor-pointer hover:scale-105 transition"
          >
            <span className="text-gradient">Akash</span>.dev
          </h1>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-2 relative">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => handleNavClick(l.href)}
                className="relative px-4 py-2 text-sm font-medium"
              >
                {active === l.href && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-primary/10 rounded-lg"
                    transition={{ type: "spring", stiffness: 200, damping: 30 }}
                  />
                )}
                <span className={`relative z-10 ${
                  active === l.href
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-yellow-400'
                }`}>
                  {l.label}
                </span>
              </button>
            ))}

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="ml-3 p-2 rounded-lg bg-secondary"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </motion.button>
          </div>

          {/* Mobile */}
          <div className="flex md:hidden items-center gap-3">
            <button onClick={toggleTheme} className="p-2 rounded-lg bg-secondary">
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg bg-secondary"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        </motion.nav>
      </div>

      {/* 📱 Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/30 backdrop-blur-[6px] z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Floating Drawer */}
            <motion.div
              initial={{ x: 120, opacity: 0, scale: 0.95 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ x: 120, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
              className="
              fixed top-4 right-3 h-[90%] w-[75%] max-w-[280px]
              bg-background/60 backdrop-blur-2xl
              border border-white/10
              rounded-2xl
              z-50 p-6 flex flex-col
              shadow-2xl shadow-black/30
              "
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl pointer-events-none" />

              {/* Close */}
              <div className="flex justify-end mb-8 relative z-10">
                <button onClick={() => setMobileOpen(false)}>
                  <X size={24} />
                </button>
              </div>

              {/* Links */}
              <div className="flex flex-col gap-6 text-lg relative z-10">
                {links.map((l, i) => (
                  <motion.button
                    key={l.href}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    onClick={() => handleNavClick(l.href)}
                    className={`text-left ${
                      active === l.href
                        ? 'text-primary'
                        : 'text-muted-foreground hover:text-yellow-400'
                    }`}
                  >
                    {l.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;