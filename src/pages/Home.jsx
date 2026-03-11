import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Github, Linkedin, Instagram, ArrowDown, X,
  Activity, Brain, Radio, Map, BarChart2, Heart,
  Mail, Target, PlayCircle, Cpu, Shield, Sparkles, Zap, ChevronRight
} from 'lucide-react';

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

/* ─── Premium Glass Modal ────────────────────────────────────────────────── */
const ProjectModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <React.Fragment>
          {/* Enhanced Backdrop */}
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(12px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.4 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-[#050714]/80"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[101] overflow-y-auto pointer-events-none">
            <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-6 pb-20 pt-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="pointer-events-auto relative w-full max-w-4xl transform overflow-hidden rounded-[32px] text-left shadow-[0_0_80px_rgba(139,92,246,0.15)] transition-all"
                style={{
                  background: 'rgba(5, 8, 20, 0.85)',
                  border: '1px solid rgba(139, 92, 246, 0.25)',
                  backdropFilter: 'blur(30px)',
                  WebkitBackdropFilter: 'blur(30px)',
                }}
              >
                {/* Modal Glow Accents */}
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#8b5cf6] opacity-[0.1] blur-[100px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#3b82f6] opacity-[0.1] blur-[100px] rounded-full pointer-events-none" />

                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute right-6 top-6 z-20 rounded-full p-2.5 bg-white/5 text-white hover:bg-white/15 hover:text-white transition-all hover:scale-110 active:scale-95"
                >
                  <X size={20} />
                </button>

                <div className="p-8 sm:p-12 relative z-10">
                  {/* Header */}
                  <div className="mb-10 max-w-2xl">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#8b5cf6]/10 border border-[#8b5cf6]/30 mb-5">
                      <div className="w-2 h-2 rounded-full bg-[#8b5cf6] animate-pulse"></div>
                      <span className="text-[#8b5cf6] text-[11px] font-bold uppercase tracking-widest">Ongoing Research</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-[1.2]">
                      AI-Driven Autonomous Agricultural Monitoring System
                    </h2>

                    <p className="text-[#94a3b8] text-[15px] sm:text-base leading-relaxed">
                      Detailed overview of an intelligent platform designed to continuously monitor soil health, ambient climate, and agricultural metrics through embedded IoT devices and compute optimal insights using AI models.
                    </p>
                  </div>

                  {/* Two column layout for details */}
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-10">

                    {/* Left Col: Features */}
                    <div className="lg:col-span-3 space-y-6">
                      <h3 className="text-lg font-bold text-white flex items-center gap-2">
                        <Sparkles size={18} className="text-[#3b82f6]" /> Core Features
                      </h3>

                      <div className="space-y-4">
                        {[
                          { icon: Radio, col: '#8b5cf6', title: 'Real-time environmental monitoring', desc: 'Live data collection from distributed soil and weather nodes.' },
                          { icon: Brain, col: '#3b82f6', title: 'AI predictive analytics', desc: 'Machine learning algorithms to forecast irrigation needs and yield.' },
                          { icon: Map, col: '#06b6d4', title: 'GIS-based mapping', desc: 'Spatial rendering of farm health, topological analysis, and zone categorization.' },
                          { icon: Zap, col: '#10b981', title: 'Automated alerts', desc: 'Instant push notifications for critical climate or moisture thresholds.' }
                        ].map((f, i) => (
                          <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.05] hover:border-white/10 transition-colors group">
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${f.col}15`, color: f.col }}>
                              <f.icon size={22} className="group-hover:scale-110 transition-transform" />
                            </div>
                            <div>
                              <h4 className="text-[15px] font-bold text-white mb-1 group-hover:text-accent-primary transition-colors">{f.title}</h4>
                              <p className="text-[13px] text-[#94a3b8] leading-relaxed">{f.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right Col: Tech & Info */}
                    <div className="lg:col-span-2 space-y-6">
                      <div className="p-6 rounded-3xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.05]">
                        <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                          <Cpu size={18} className="text-[#8b5cf6]" /> Technology Stack
                        </h3>
                        <div className="flex flex-wrap gap-2.5">
                          {['Python', 'IoT Sensors', 'Machine Learning', 'GIS', 'Cloud Data Processing', 'Arduino'].map(t => (
                            <span key={t} className="px-3.5 py-1.5 rounded-lg text-[13px] font-semibold text-[#cdd6f4] bg-[#8b5cf6]/10 border border-[#8b5cf6]/20">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="p-6 rounded-3xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.05]">
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                          <Target size={18} className="text-[#3b82f6]" /> Project Info
                        </h3>
                        <div className="space-y-4 text-sm">
                          <div className="flex justify-between items-center pb-3 border-b border-white/[0.05]">
                            <span className="text-[#94a3b8]">Status</span>
                            <span className="text-[#34d399] font-semibold tracking-wide flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-[#34d399] animate-pulse" /> Active</span>
                          </div>
                          <div className="flex justify-between items-center pb-3 border-b border-white/[0.05]">
                            <span className="text-[#94a3b8]">Phase</span>
                            <span className="text-white font-medium">Research & Prototype</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-[#94a3b8]">Est. Launch</span>
                            <span className="text-white font-medium">Late 2026</span>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Sponsorship Section */}
                  <div className="p-8 sm:p-10 rounded-[28px] text-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#8b5cf6]/10 via-[#3b82f6]/10 to-[#06b6d4]/10" />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
                    <div className="absolute inset-0 border border-white/[0.08] rounded-[28px]" />

                    <div className="relative z-10 flex flex-col items-center">
                      <div className="w-16 h-16 rounded-2xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-white/[0.1] transition-all duration-300">
                        <Heart size={28} className="text-[#ef4444]" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">Support This Project</h3>
                      <p className="text-[#94a3b8] text-[15px] mb-8 max-w-[450px]">
                        Hardware research and cloud infrastructure require ongoing funding. Consider sponsoring or collaborating to accelerate development.
                      </p>

                      <div className="flex flex-wrap justify-center gap-4 w-full max-w-lg">
                        <button className="flex-1 min-w-[160px] flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-[15px] text-white transition-all shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:shadow-[0_0_30px_rgba(139,92,246,0.7)] hover:scale-105"
                          style={{ background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)' }}>
                          <Heart size={18} /> Sponsor
                        </button>
                        <button className="flex-1 min-w-[160px] flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-[15px] text-white transition-all border border-white/20 bg-white/[0.05] hover:bg-white/[0.1] hover:scale-105"
                          onClick={(e) => { onClose(); setTimeout(() => scrollTo('contact'), 300); }}>
                          <Mail size={18} /> Collaborate
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            </div>
          </div>
        </React.Fragment>
      )}
    </AnimatePresence>
  );
};


/* ─── Main Home Component ────────────────────────────────────────────────── */
const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-slide logic
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const techStack = ['React', 'JavaScript', 'Java', 'Python', 'IoT', 'GIS'];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/mohdAdil78', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/mohammed-adil-288888249/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/_.m.adil._/', label: 'Instagram' },
  ];

  return (
    <>
      <section
        id="home"
        style={{ minHeight: '100vh', overflowX: 'clip' }}
        className="flex items-center justify-center relative space-section pt-16 bg-[#03040b]"
      >
        {/* Background Visuals */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Subtle static grain */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPHBhdGggZD0iTTYwIDBMMCAwTDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+Cjwvc3ZnPg==')] opacity-50" />
          {/* Glowing Background Orbs */}
          <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-10 left-[10%] w-[500px] h-[500px] bg-[#8b5cf6] rounded-full blur-[120px]" />
          <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute bottom-10 right-[10%] w-[600px] h-[600px] bg-[#3b82f6] rounded-full blur-[150px]" />
          <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.05, 0.12, 0.05] }} transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
            className="absolute top-[40%] left-[50%] w-[400px] h-[400px] bg-[#06b6d4] rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mb-16 lg:mb-0 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">

            {/* ── Left Content: Intro ────────────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:pr-4 flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              <div className="pt-8 sm:pt-12 lg:pt-0" />
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="mb-4">
                <span className="px-4 py-1.5 rounded-full text-[13px] font-bold tracking-widest uppercase bg-[#3b82f6]/10 text-[#3b82f6] border border-[#3b82f6]/20 inline-flex">
                  Hello, I'm
                </span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8b5cf6] via-[#3b82f6] to-[#06b6d4] drop-shadow-sm">Software</span>
                <br />
                <span>Engineer</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }} className="text-xl sm:text-2xl text-[#cdd6f4] mb-6 font-medium tracking-wide">
                Exploring technology through software, data analysis, IoT, and GIS.
              </motion.p>

              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }} className="text-[#94a3b8] mb-10 text-[16px] leading-relaxed max-w-[540px]">
                A curious engineering graduate passionate about experimenting with diverse technologies, building real-world solutions, and solving complex problems through research and code.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }} className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 mb-10 w-full sm:w-auto">
                <button onClick={() => scrollTo('portfolio')} className="group relative flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-[15px] text-white transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:-translate-y-1 w-full sm:w-auto" style={{ background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)' }}>
                  <span className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  View Portfolio <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button onClick={() => scrollTo('contact')} className="flex items-center justify-center px-8 py-4 rounded-xl font-bold text-[15px] text-white transition-all border border-white/20 bg-white/[0.03] hover:bg-white/[0.08] hover:-translate-y-1 w-full sm:w-auto">
                  Get In Touch
                </button>
              </motion.div>

              {/* Socials & Small Tech Stack */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.6 }} className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label} href={social.href} target="_blank" rel="noopener noreferrer"
                      whileHover={{ scale: 1.15, y: -2 }} whileTap={{ scale: 0.95 }}
                      className="w-11 h-11 rounded-full text-[#94a3b8] hover:text-white transition-all flex items-center justify-center bg-white/[0.03] border border-white/[0.08] hover:border-[#3b82f6] hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
                <div className="hidden sm:block w-px h-8 bg-white/10" />
                <div className="flex gap-2 text-sm">
                  <span className="text-[#94a3b8]"><span className="text-white font-bold">+5</span> Projects</span>
                  <span className="text-[#94a3b8]">•</span>
                  <span className="text-[#94a3b8]">Tech Enthusiast</span>
                </div>
              </motion.div>
            </motion.div>

            {/* ── Right Content: Rotating Research Carousel ────────────── */}
            <div className="relative w-full flex flex-col items-center mt-10 lg:mt-0 viewpoint-card group">
              <div className="w-full max-w-[540px] relative">
                {/* Carousel Container with Hover Detection */}
                <div
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="relative w-full overflow-hidden"
                >
                  <AnimatePresence mode="wait">
                    {currentSlide === 0 ? (
                      <motion.div
                        key="project1"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        onDragEnd={(e, { offset, velocity }) => {
                          if (offset.x < -100) setCurrentSlide(1);
                        }}
                        className="relative w-full rounded-[28px] overflow-hidden p-[1px] glass shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.2)]"
                      >
                        {/* Outer Animated Glow Ring */}
                        <div className="absolute -inset-[2px] rounded-[30px] bg-gradient-to-br from-[#8b5cf6] via-[#3b82f6] to-[#06b6d4] opacity-[0.25] blur-[12px] group-hover:opacity-[0.4] group-hover:blur-[18px] transition-all duration-700 animate-pulse" />

                        <div className="absolute inset-0 bg-[#070b19] opacity-95" />
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />

                        <div className="relative z-10 p-6 sm:p-8 flex flex-col h-full">
                          {/* Top Animated Badge */}
                          <div className="self-start relative mb-5 group/badge">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] rounded-full blur-[6px] opacity-40 animate-pulse"></div>
                            <div className="relative flex items-center gap-2 px-3 py-1.5 bg-[#0a0d20] border border-[#8b5cf6]/40 rounded-full font-bold text-[10px] tracking-widest text-white uppercase">
                              <span className="text-[11px] animate-bounce">🚀</span>
                              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#cdd6f4] to-[#ffffff]">Ongoing Research Project</span>
                            </div>
                          </div>

                          <h3 className="text-xl sm:text-[26px] font-extrabold text-white leading-[1.2] mb-3">
                            AI-Driven Autonomous <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8b5cf6] via-[#3b82f6] to-[#06b6d4]">
                              Agricultural Monitoring System
                            </span>
                          </h3>
                          <p className="text-[13px] sm:text-[14px] text-[#94a3b8] leading-[1.5] mb-5">
                            Developing an intelligent monitoring platform that integrates IoT sensors, machine learning, and GIS analytics to optimize agricultural productivity.
                          </p>

                          {/* Progress Section */}
                          <div className="mb-5 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] relative overflow-hidden">
                            <div className="flex justify-between items-center mb-2 font-semibold">
                              <span className="text-[12px] text-[#cdd6f4] flex items-center gap-1.5"><Activity size={14} className="text-[#3b82f6]" /> Development Progress</span>
                              <span className="text-lg text-white font-bold drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">45%</span>
                            </div>
                            <div className="w-full sm:w-[90%] h-[6px] bg-[#03040b] rounded-full overflow-hidden border border-white/5 relative mb-2">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: '45%' }}
                                transition={{ duration: 1.5 }}
                                className="h-full bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] rounded-full relative"
                              >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent w-full shimmer-animation" />
                              </motion.div>
                            </div>
                            <div className="flex justify-between text-[9px] font-bold tracking-wider text-[#64748b] uppercase w-full">
                              <span>Research & Prototype</span>
                              <span>Phase 1</span>
                            </div>
                          </div>

                          {/* Feature Blocks */}
                          <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-6">
                            {[
                              { i: Radio, t: 'IoT Sensors', c: '#8b5cf6' },
                              { i: Brain, t: 'Machine Learning', c: '#3b82f6' },
                              { i: Map, t: 'GIS Integration', c: '#06b6d4' }
                            ].map((Item, idx) => (
                              <div key={idx} className="flex flex-col items-center justify-center py-3 px-2 rounded-[14px] bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] transition-all">
                                <Item.i size={18} className="mb-1.5" style={{ color: Item.c, filter: `drop-shadow(0 0 8px ${Item.c}60)` }} />
                                <span className="text-[10px] font-bold text-[#e2e8f0] text-center uppercase tracking-wide leading-[1.1]">{Item.t}</span>
                              </div>
                            ))}
                          </div>

                          <button
                            onClick={() => setIsModalOpen(true)}
                            className="relative w-full group/btn overflow-hidden flex items-center justify-center gap-2 py-3.5 sm:py-4 rounded-xl font-bold text-[14px] text-white transition-all transform hover:-translate-y-0.5"
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-[#8b5cf6] via-[#3b82f6] to-[#06b6d4]" />
                            <div className="relative z-10 flex items-center gap-2">
                              <Sparkles size={16} />
                              <span>View Project Details</span>
                            </div>
                          </button>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="project2"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        onDragEnd={(e, { offset, velocity }) => {
                          if (offset.x > 100) setCurrentSlide(0);
                        }}
                        className="relative w-full rounded-[28px] overflow-hidden p-[1px] glass shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.2)]"
                      >
                        {/* Outer Animated Glow Ring (Gold/Amber Theme) */}
                        <div className="absolute -inset-[2px] rounded-[30px] bg-gradient-to-br from-[#f59e0b] via-[#ef4444] to-[#8b5cf6] opacity-[0.25] blur-[12px] group-hover:opacity-[0.4] group-hover:blur-[18px] transition-all duration-700 animate-pulse" />

                        <div className="absolute inset-0 bg-[#070b19] opacity-95" />
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />

                        <div className="relative z-10 p-6 sm:p-8 flex flex-col h-full">
                          {/* Top Animated Badge */}
                          <div className="self-start relative mb-5 group/badge">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#f59e0b] to-[#ef4444] rounded-full blur-[6px] opacity-40 animate-pulse"></div>
                            <div className="relative flex items-center gap-2 px-3 py-1.5 bg-[#0a0d20] border border-[#f59e0b]/40 rounded-full font-bold text-[10px] tracking-widest text-white uppercase">
                              <span className="text-[11px] animate-pulse">⚡</span>
                              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#fbbf24] to-[#f59e0b]">Upcoming Research</span>
                            </div>
                          </div>

                          <h3 className="text-xl sm:text-[26px] font-extrabold text-white leading-[1.2] mb-3">
                            Next Generation Smart <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f59e0b] via-[#ef4444] to-[#8b5cf6]">
                              Environmental Intelligence Platform
                            </span>
                          </h3>
                          <p className="text-[13px] sm:text-[14px] text-[#94a3b8] leading-[1.5] mb-5">
                            Building an advanced AI-powered platform combining IoT networks, predictive analytics, and geospatial intelligence for climate resilience.
                          </p>

                          {/* Status Indicator */}
                          <div className="mb-5 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] relative overflow-hidden group/status">
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-[12px] text-[#cdd6f4] flex items-center gap-1.5"><Activity size={14} className="text-[#f59e0b]" /> Status</span>
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-[#f59e0b] animate-ping" />
                                <span className="text-sm text-[#f59e0b] font-bold">Work in Progress</span>
                              </div>
                            </div>
                            <div className="w-full sm:w-[90%] h-[6px] bg-[#03040b] rounded-full overflow-hidden border border-white/5 relative mb-2">
                              {/* Conceptual Research Pulse */}
                              <motion.div
                                animate={{ opacity: [0.3, 0.6, 0.3], width: ['0%', '15%', '0%'] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="h-full bg-[#f59e0b] blur-[2px]"
                              />
                            </div>
                            <div className="flex justify-between text-[9px] font-bold tracking-wider text-[#64748b] uppercase w-full">
                              <span>Concept & Research Stage</span>
                              <span className="text-[#f59e0b]">0%</span>
                            </div>
                          </div>

                          {/* Feature Blocks */}
                          <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-6">
                            {[
                              { i: BarChart2, t: 'AI Analytics', c: '#f59e0b' },
                              { i: Cpu, t: 'Edge IoT', c: '#ef4444' },
                              { i: Map, t: 'Global Mapping', c: '#8b5cf6' }
                            ].map((Item, idx) => (
                              <div key={idx} className="flex flex-col items-center justify-center py-3 px-2 rounded-[14px] bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] transition-all">
                                <Item.i size={18} className="mb-1.5" style={{ color: Item.c, filter: `drop-shadow(0 0 8px ${Item.c}60)` }} />
                                <span className="text-[10px] font-bold text-[#e2e8f0] text-center uppercase tracking-wide leading-[1.1]">{Item.t}</span>
                              </div>
                            ))}
                          </div>

                          <button
                            className="relative w-full overflow-hidden flex items-center justify-center gap-2 py-3.5 sm:py-4 rounded-xl font-bold text-[14px] text-white/40 cursor-not-allowed border border-white/10 bg-white/[0.02]"
                            title="Project details will be available soon."
                          >
                            <span className="relative z-10 flex items-center gap-2">
                              <Shield size={16} />
                              <span>Coming Soon</span>
                            </span>
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Carousel Dots */}
                <div className="flex justify-center gap-3 mt-6">
                  {[0, 1].map((dot) => (
                    <button
                      key={dot}
                      onClick={() => setCurrentSlide(dot)}
                      className={`h-2 transition-all duration-300 rounded-full ${currentSlide === dot ? 'w-8 bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4]' : 'w-2 bg-white/20'
                        }`}
                    />
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Scroll Indicator */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="flex justify-center mt-6 lg:mt-24 pb-8 lg:pb-0">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-12 h-12 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-[#94a3b8] hover:text-[#3b82f6] hover:bg-white/[0.05] transition-all duration-300 cursor-pointer shadow-[0_0_15px_rgba(0,0,0,0.5)]"
              onClick={() => scrollTo('about')}
            >
              <ArrowDown size={20} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Render Modal */}
      <ProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Dynamic styles mapping for custom animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .shimmer-animation {
          animation: shimmer 2s infinite linear;
        }
      `}} />
    </>
  );
};

export default Home;
