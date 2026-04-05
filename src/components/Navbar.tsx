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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
          className={`transition-all duration-300 px-6 py-3 flex items-center justify-between w-[90%] max-w-5xl rounded-2xl
          ${
            scrolled
              ? "bg-background/70 backdrop-blur-xl border border-white/10 shadow-xl"
              : "bg-transparent"
          }`}
        >
          {/* Logo */}
          <h1 className="font-semibold text-lg">
            <span className="text-gradient">myDev</span>.folio
          </h1>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(l.href);
                }}
                className="text-sm text-muted-foreground hover:text-yellow-400 transition"
              >
                {l.label}
              </a>
            ))}

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-secondary"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {/* <button className="bg-yellow-400 text-black px-4 py-2 rounded-xl font-medium hover:scale-105 transition">
              Hire Me
            </button> */}
          </div>

          {/* Mobile Buttons */}
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
        </motion.nav>
      </div>

      {/* 📱 Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 120 }}
              className="fixed top-0 right-0 h-full w-[75%] bg-background/90 backdrop-blur-xl z-50 p-6"
            >
              <div className="flex justify-end mb-8">
                <button onClick={() => setMobileOpen(false)}>
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col gap-6 text-lg">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(l.href);
                    }}
                    className="text-muted-foreground hover:text-yellow-400 transition"
                  >
                    {l.label}
                  </a>
                ))}
              </div>

              {/* <div className="mt-auto pt-10">
                <button className="w-full py-3 rounded-xl bg-yellow-400 text-black font-medium">
                  Hire Me 🚀
                </button>
              </div> */}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;