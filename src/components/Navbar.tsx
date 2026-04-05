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

  // 🔥 Scroll detection + active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll('section');
      let current = '';

      sections.forEach((sec) => {
        const top = sec.offsetTop - 120;
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
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <>
      {/* 🌟 Floating Navbar */}
      <div className="fixed top-4 left-0 w-full z-50 flex justify-center">
        <motion.nav
          initial={{ y: -80 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className={`relative transition-all duration-300 px-6 py-3 flex items-center justify-between w-[90%] max-w-5xl rounded-2xl
          ${
            scrolled
              ? "bg-background/60 backdrop-blur-2xl border border-white/10 shadow-xl shadow-primary/10 scale-[0.97]"
              : "bg-transparent"
          }`}
        >
          {/* Logo */}
          <h1 className="font-semibold text-lg cursor-pointer transition hover:scale-110">
            <span className="text-gradient">Akash</span>.dev
          </h1>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-2 relative">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => handleNavClick(l.href)}
                className="relative px-4 py-2 text-sm font-medium"
              >
                {/* Active pill */}
                {active === l.href && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-primary/10 rounded-lg"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}

                {/* Text */}
                <span
                  className={`relative z-10 transition ${
                    active === l.href
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-yellow-400'
                  }`}
                >
                  {l.label}
                </span>
              </button>
            ))}

            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="ml-3 p-2 rounded-lg bg-secondary"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </motion.button>
          </div>

          {/* Mobile Buttons */}
          <div className="flex md:hidden items-center gap-3">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-secondary"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg bg-secondary"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>

          {/* Glow line */}
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        </motion.nav>
      </div>

      {/* 📱 Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 120 }}
              className="fixed top-0 right-0 h-full w-[75%] bg-background/90 backdrop-blur-xl z-50 p-6 flex flex-col"
            >
              <div className="flex justify-end mb-8">
                <button onClick={() => setMobileOpen(false)}>
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col gap-6 text-lg">
                {links.map((l, i) => (
                  <motion.button
                    key={l.href}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => handleNavClick(l.href)}
                    className={`text-left transition ${
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