import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Briefcase, Mail } from 'lucide-react';

const SECTIONS = ['home', 'about', 'portfolio', 'contact'];

const navItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'portfolio', label: 'Portfolio', icon: Briefcase },
  { id: 'contact', label: 'Contact', icon: Mail },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  /* Track scroll depth for background opacity */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Section highlight via IntersectionObserver */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { root: null, threshold: 0.35 }
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    /* ── Fixed, full-width, always on top ──────────────────────────────── */
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        zIndex: 9999,
        background: scrolled
          ? 'rgba(5,7,15,0.92)'
          : 'rgba(5,7,15,0.70)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.09)',
        transition: 'background 0.3s ease',
      }}
    >
      <div
        style={{
          maxWidth: '80rem',   /* 7xl = 1280px */
          margin: '0 auto',
          padding: '0 1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '4rem',
        }}
      >
        {/* Brand Identity - Top Left */}
        <button
          onClick={() => scrollTo('home')}
          className="text-xl sm:text-2xl font-black transition-all hover:scale-[1.02] flex-shrink-0 z-50 group"
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#a855f7] via-[#6366f1] to-[#22d3ee] drop-shadow-[0_0_15px_rgba(168,85,247,0.3)] group-hover:drop-shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all">
            Mohammed Adil
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2">
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${activeSection === id
                ? 'text-accent-primary'
                : 'text-text-secondary hover:text-text-primary'
                }`}
              style={{
                background: activeSection === id ? 'rgba(124,124,255,0.15)' : 'transparent',
                border: activeSection === id ? '1px solid rgba(124,124,255,0.30)' : '1px solid transparent',
                cursor: 'pointer',
              }}
            >
              <Icon size={16} />
              <span>{label}</span>
            </button>
          ))}
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen((o) => !o)}
          className="md:hidden p-2 rounded-lg text-text-secondary hover:text-text-primary transition-colors flex-shrink-0"
          style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.10)', cursor: 'pointer' }}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            style={{
              overflow: 'hidden',
              borderTop: '1px solid rgba(255,255,255,0.08)',
              background: 'rgba(5,7,15,0.95)',
            }}
          >
            <div style={{ padding: '0.75rem 1rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              {navItems.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 text-left ${activeSection === id
                    ? 'text-accent-primary'
                    : 'text-text-secondary hover:text-text-primary'
                    }`}
                  style={{
                    background: activeSection === id ? 'rgba(124,124,255,0.12)' : 'transparent',
                    border: activeSection === id ? '1px solid rgba(124,124,255,0.25)' : '1px solid transparent',
                    cursor: 'pointer',
                  }}
                >
                  <Icon size={18} />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
