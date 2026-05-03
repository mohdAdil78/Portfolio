import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft, ExternalLink, Github, Brain, Activity, Table2,
  BarChart2, Target, Database, Zap, Cloud, Code2, CheckCircle2,
  Sparkles, TrendingUp, ChevronRight, Cpu, Shield
} from 'lucide-react';
import { projectsData } from '../data/projectsData';

/* ─── Animation variants ──────────────────────────────────────────────────── */
const fadeUp = { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } };
const fadeLeft = { hidden: { opacity: 0, x: -28 }, visible: { opacity: 1, x: 0 } };
const fadeRight = { hidden: { opacity: 0, x: 28 }, visible: { opacity: 1, x: 0 } };
const scaleIn = { hidden: { opacity: 0, scale: 0.88 }, visible: { opacity: 1, scale: 1 } };
const stagger = { visible: { transition: { staggerChildren: 0.10 } } };
const ease = [0.25, 0.46, 0.45, 0.94];

/* ─── Scroll-reveal wrapper ──────────────────────────────────────────────── */
const Reveal = ({ children, variant = fadeUp, delay = 0, className = '' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref} className={className}
      initial="hidden" animate={inView ? 'visible' : 'hidden'}
      variants={variant} transition={{ duration: 0.6, ease, delay }}>
      {children}
    </motion.div>
  );
};

/* ─── Feature icon map ────────────────────────────────────────────────────── */
const FeatureIcon = ({ name }) => {
  const icons = { Brain: <Brain size={24} />, Activity: <Activity size={24} />, Table: <Table2 size={24} />, BarChart2: <BarChart2 size={24} /> };
  return icons[name] ?? <Sparkles size={24} />;
};

/* ─── KPI cards config ───────────────────────────────────────────────────── */
const KPIS = [
  { key: 'accuracy', label: 'Forecast Accuracy', Icon: Target, color: '#7C7CFF', bg: 'rgba(124,124,255,0.08)', glow: 'rgba(124,124,255,0.22)' },
  { key: 'data', label: 'Data Processed', Icon: Database, color: '#A855F7', bg: 'rgba(168,85,247,0.08)', glow: 'rgba(168,85,247,0.22)' },
  { key: 'speed', label: 'Refresh Speed', Icon: Zap, color: '#38BDF8', bg: 'rgba(56,189,248,0.08)', glow: 'rgba(56,189,248,0.22)' },
  { key: 'deployment', label: 'Deployment', Icon: Cloud, color: '#34D399', bg: 'rgba(52,211,153,0.08)', glow: 'rgba(52,211,153,0.22)' },
];

/* ─── Glass card ─────────────────────────────────────────────────────────── */
const Glass = ({ children, className = '', glow = false, style = {} }) => (
  <div className={`rounded-2xl ${className}`} style={{
    background: 'rgba(255,255,255,0.04)',
    backdropFilter: 'blur(18px)',
    WebkitBackdropFilter: 'blur(18px)',
    border: '1px solid rgba(255,255,255,0.10)',
    boxShadow: glow ? '0 0 40px rgba(124,124,255,0.14), inset 0 1px 0 rgba(255,255,255,0.08)' : 'inset 0 1px 0 rgba(255,255,255,0.07)',
    ...style,
  }}>
    {children}
  </div>
);

/* ════════════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
════════════════════════════════════════════════════════════════════════════ */
const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find(p => p.id === parseInt(id));

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [id]);

  /* ── 404 ─────────────────────────────────────────────────────────────── */
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#05070F' }}>
        <Glass className="text-center p-14 max-w-sm mx-4">
          <div className="text-6xl mb-5">🔍</div>
          <h1 className="text-2xl font-bold text-text-primary mb-3">Project Not Found</h1>
          <p className="text-text-secondary text-sm mb-7">The project you're looking for doesn't exist.</p>
          <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 text-white rounded-xl font-semibold text-sm transition-all duration-300"
            style={{ background: 'linear-gradient(135deg,#7C7CFF,#38BDF8)' }}>
            <ArrowLeft size={16} /> Back to Portfolio
          </Link>
        </Glass>
      </div>
    );
  }

  const hasRichFeatures = Array.isArray(project.features) && project.features.length > 0 && typeof project.features[0] === 'object';

  /* Split longDescription into two paragraphs */
  const desc = project.longDescription || '';
  const mid = desc.indexOf('. ', Math.floor(desc.length * 0.45));
  const para1 = mid > 0 ? desc.slice(0, mid + 1).trim() : desc;
  const para2 = mid > 0 ? desc.slice(mid + 1).trim() : '';

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}
      className="min-h-screen relative" style={{ backgroundColor: '#05070F' }}>

      {/* ── Ambient background ───────────────────────────────────────────── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div className="absolute -top-40 left-[15%] w-[700px] h-[700px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(124,124,255,0.09) 0%, transparent 65%)', filter: 'blur(70px)' }} />
        <div className="absolute top-[45%] -right-40 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.07) 0%, transparent 65%)', filter: 'blur(70px)' }} />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.05) 0%, transparent 65%)', filter: 'blur(70px)' }} />
        <div className="absolute inset-0 opacity-[0.15]"
          style={{ backgroundImage: 'linear-gradient(rgba(124,124,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(124,124,255,0.07) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          STICKY NAV BAR
      ══════════════════════════════════════════════════════════════════════ */}
      <header className="sticky top-0" style={{
        zIndex: 100,
        background: 'rgba(5,7,15,0.88)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderBottom: '1px solid rgba(255,255,255,0.09)',
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-3">
          {/* Back button — always visible, clearly styled */}
          <motion.button
            onClick={() => navigate(-1)}
            whileHover={{ scale: 1.04, x: -2 }} whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold group flex-shrink-0"
            style={{ background: 'rgba(124,124,255,0.12)', border: '1px solid rgba(124,124,255,0.32)', color: '#7C7CFF' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(124,124,255,0.22)'; e.currentTarget.style.boxShadow = '0 0 16px rgba(124,124,255,0.35)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(124,124,255,0.12)'; e.currentTarget.style.boxShadow = 'none'; }}
          >
            <ArrowLeft size={16} className="transition-transform duration-200 group-hover:-translate-x-0.5" />
            <span>Back</span>
          </motion.button>

          {/* Breadcrumb */}
          <div className="hidden sm:flex items-center gap-2 text-sm min-w-0">
            <span className="text-text-muted flex-shrink-0">Portfolio</span>
            <ChevronRight size={13} className="text-text-muted/50 flex-shrink-0" />
            <span className="text-text-secondary font-medium truncate">{project.title}</span>
          </div>

          {/* Header CTAs */}
          <div className="flex gap-2 flex-shrink-0">
            {project.demoLink && project.demoLink !== "#" && (
              <motion.a href={project.demoLink} target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[13px] font-semibold text-white"
                style={{ background: 'linear-gradient(135deg,#7C7CFF,#38BDF8)' }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 16px rgba(124,124,255,0.5)'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; }}>
                <ExternalLink size={13} /><span className="hidden sm:inline">Demo</span>
              </motion.a>
            )}
            <motion.a href={project.githubLink} target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[13px] font-semibold text-text-secondary transition-all duration-200"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(124,124,255,0.4)'; e.currentTarget.style.color = '#7C7CFF'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = ''; }}>
              <Github size={13} /><span className="hidden sm:inline">Code</span>
            </motion.a>
          </div>
        </div>
      </header>

      {/* ══════════════════════════════════════════════════════════════════════
          1️⃣  HERO SECTION
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24" style={{ zIndex: 1 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Left — copy */}
            <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-6">

              {/* Subtitle badge */}
              <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase"
                  style={{ background: 'rgba(124,124,255,0.09)', border: '1px solid rgba(124,124,255,0.28)', color: '#7C7CFF' }}>
                  <Sparkles size={11} />
                  {project.subtitle || 'Featured Project'}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1 variants={fadeUp} transition={{ duration: 0.65 }}
                className="text-3xl sm:text-4xl xl:text-5xl font-extrabold leading-[1.15] tracking-tight text-text-primary">
                {project.title.split(' ').slice(0, -1).join(' ')}{' '}
                <span style={{ backgroundImage: 'linear-gradient(135deg,#7C7CFF 0%,#38BDF8 55%,#A855F7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  {project.title.split(' ').slice(-1)[0]}
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p variants={fadeUp} transition={{ duration: 0.55, delay: 0.05 }}
                className="text-text-secondary text-[15px] leading-relaxed max-w-lg">
                {project.description}
              </motion.p>

              {/* CTA buttons */}
              <motion.div variants={fadeUp} transition={{ duration: 0.5, delay: 0.1 }} className="flex flex-wrap gap-3">
                {project.demoLink && project.demoLink !== "#" && (
                  <motion.a href={project.demoLink} target="_blank" rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-6 py-3 text-white rounded-xl font-bold text-sm transition-all duration-300"
                    style={{ background: 'linear-gradient(135deg,#7C7CFF,#38BDF8)' }}
                    onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 32px rgba(124,124,255,0.6)'; }}
                    onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; }}>
                    <ExternalLink size={17} /> View Live Demo
                  </motion.a>
                )}
                <motion.a href={project.githubLink} target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 text-text-primary rounded-xl font-bold text-sm transition-all duration-300"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.14)' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(124,124,255,0.5)'; e.currentTarget.style.boxShadow = '0 0 18px rgba(124,124,255,0.22)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)'; e.currentTarget.style.boxShadow = 'none'; }}>
                  <Github size={17} /> View Code
                </motion.a>
              </motion.div>

              {/* Inline KPI mini-row */}
              {project.metrics && (
                <motion.div variants={stagger} className="flex flex-wrap gap-5 pt-1">
                  {KPIS.slice(0, 3).map(({ key, label, Icon, color }) => (
                    <motion.div key={key} variants={fadeUp} transition={{ duration: 0.4 }} className="flex items-center gap-2">
                      <Icon size={14} style={{ color }} />
                      <span className="text-text-muted text-xs">{label}:</span>
                      <span className="font-bold text-sm" style={{ color }}>{project.metrics[key]}</span>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </motion.div>

            {/* Right — dashboard preview */}
            <motion.div
              initial={{ opacity: 0, x: 48, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.85, ease, delay: 0.15 }}
              className="relative">

              {/* Outer glow */}
              <div className="absolute -inset-4 rounded-[30px] opacity-60 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(124,124,255,0.18) 0%, rgba(168,85,247,0.08) 60%, transparent 100%)', filter: 'blur(18px)' }} />

              {/* Browser chrome frame */}
              <div className="relative rounded-[22px] overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(124,124,255,0.25)', boxShadow: '0 8px 64px rgba(0,0,0,0.6)' }}>
                <div className="flex items-center gap-1.5 px-4 py-2.5"
                  style={{ background: 'rgba(0,0,0,0.35)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(255,90,90,0.7)' }} />
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(255,184,0,0.7)' }} />
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(0,200,81,0.7)' }} />
                  <div className="ml-3 flex-1 h-4 rounded" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.08)' }} />
                </div>
                <img src={project.image} alt={`${project.title} dashboard preview`}
                  loading="lazy"
                  className="w-full object-cover block" style={{ maxHeight: '340px' }}
                  onError={e => { e.target.style.display = 'none'; e.target.nextSibling?.classList.remove('hidden'); }} />
                <div className="hidden h-52 flex items-center justify-center" style={{ background: 'rgba(124,124,255,0.06)' }}>
                  <BarChart2 size={56} style={{ color: 'rgba(124,124,255,0.3)' }} />
                </div>
                {/* Bottom fade */}
                <div className="absolute bottom-0 left-0 right-0 h-14 pointer-events-none"
                  style={{ background: 'linear-gradient(to top, rgba(5,7,15,0.6) 0%, transparent 100%)' }} />
              </div>

              {/* Floating chips */}
              <motion.div animate={{ y: [0, -9, 0] }} transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
                className="absolute -top-5 -right-4 rounded-xl px-3.5 py-2"
                style={{ background: 'rgba(5,7,15,0.88)', border: '1px solid rgba(124,124,255,0.38)', backdropFilter: 'blur(12px)', boxShadow: '0 0 20px rgba(124,124,255,0.32)' }}>
                <div className="flex items-center gap-2 text-[13px] font-bold" style={{ color: '#7C7CFF' }}>
                  <TrendingUp size={13} /> 92% Accuracy
                </div>
              </motion.div>
              <motion.div animate={{ y: [0, 9, 0] }} transition={{ repeat: Infinity, duration: 5.5, ease: 'easeInOut', delay: 1.2 }}
                className="absolute -bottom-5 -left-4 rounded-xl px-3.5 py-2"
                style={{ background: 'rgba(5,7,15,0.88)', border: '1px solid rgba(56,189,248,0.38)', backdropFilter: 'blur(12px)', boxShadow: '0 0 20px rgba(56,189,248,0.28)' }}>
                <div className="flex items-center gap-2 text-[13px] font-bold" style={{ color: '#38BDF8' }}>
                  <Zap size={13} /> Real-time
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          BODY — all remaining sections
      ══════════════════════════════════════════════════════════════════════ */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-14" style={{ zIndex: 1 }}>

        {/* ── 2️⃣  PROJECT OVERVIEW CARD ──────────────────────────────────── */}
        <Reveal>
          <Glass glow className="p-8 sm:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(124,124,255,0.14)', border: '1px solid rgba(124,124,255,0.22)' }}>
                <Code2 size={18} style={{ color: '#7C7CFF' }} />
              </div>
              <h2 className="text-lg font-bold text-text-primary">Summary</h2>
            </div>
            <div className="space-y-4">
              <p className="text-text-secondary text-[15px] leading-relaxed">{para1}</p>
              {para2 && <p className="text-text-secondary text-[15px] leading-relaxed">{para2}</p>}
            </div>
            {project.skills && (
              <div className="mt-6 pt-5 flex flex-wrap gap-2.5" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                {project.skills.map((s, i) => (
                  <span key={i} className="px-3 py-1 rounded-lg text-[12px] font-semibold"
                    style={{ background: 'rgba(56,189,248,0.08)', border: '1px solid rgba(56,189,248,0.22)', color: '#38BDF8' }}>
                    {s}
                  </span>
                ))}
              </div>
            )}
          </Glass>
        </Reveal>

        {/* ── 3️⃣  FEATURES & CAPABILITIES GRID ──────────────────────────── */}
        {hasRichFeatures && (
          <div>
            <Reveal>
              <div className="mb-7">
                <h2 className="text-xl font-bold text-text-primary mb-2">Features &amp; Capabilities</h2>
                <div className="w-12 h-0.5 rounded-full" style={{ background: 'linear-gradient(90deg,#7C7CFF,#38BDF8)' }} />
              </div>
            </Reveal>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
              variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {project.features.map((feat, i) => (
                <motion.div key={i} variants={fadeUp} transition={{ duration: 0.55 }}
                  className="group/card rounded-2xl p-6 cursor-default transition-all duration-300"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)' }}
                  whileHover={{ scale: 1.02, borderColor: 'rgba(124,124,255,0.35)', boxShadow: '0 0 28px rgba(124,124,255,0.15), inset 0 1px 0 rgba(255,255,255,0.08)' }}>
                  <div className="mb-5 w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 group-hover/card:scale-110"
                    style={{ background: 'rgba(124,124,255,0.11)', border: '1px solid rgba(124,124,255,0.22)', color: '#7C7CFF' }}>
                    <FeatureIcon name={feat.icon} />
                  </div>
                  <h3 className="text-[15px] font-bold text-text-primary mb-2 group-hover/card:text-accent-primary transition-colors duration-300">
                    {feat.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">{feat.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}

        {/* ── 4️⃣ + 5️⃣ + 6️⃣  TECH / SKILLS / METRICS two-col ─────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left 2 cols */}
          <div className="lg:col-span-2 space-y-7">

            {/* 4️⃣ Tech Stack */}
            <Reveal>
              <Glass className="p-7">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: 'rgba(56,189,248,0.11)', border: '1px solid rgba(56,189,248,0.22)' }}>
                    <Cpu size={16} style={{ color: '#38BDF8' }} />
                  </div>
                  <h2 className="text-base font-bold text-text-primary">Tech Stack</h2>
                </div>
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}
                  variants={stagger} className="flex flex-wrap gap-2.5">
                  {project.technologies.map((tech, i) => (
                    <motion.span key={i} variants={scaleIn} transition={{ duration: 0.4 }}
                      whileHover={{ scale: 1.08 }}
                      className="px-4 py-1.5 rounded-full text-sm font-semibold cursor-default transition-all duration-300"
                      style={{ background: 'rgba(56,189,248,0.07)', border: '1px solid rgba(56,189,248,0.20)', color: 'rgba(56,189,248,0.90)' }}
                      onMouseEnter={e => { e.currentTarget.style.background = 'rgba(56,189,248,0.15)'; e.currentTarget.style.borderColor = 'rgba(56,189,248,0.45)'; e.currentTarget.style.boxShadow = '0 0 14px rgba(56,189,248,0.3)'; }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'rgba(56,189,248,0.07)'; e.currentTarget.style.borderColor = 'rgba(56,189,248,0.20)'; e.currentTarget.style.boxShadow = 'none'; }}>
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </Glass>
            </Reveal>

            {/* 6️⃣ Key Skills */}
            {project.skills && (
              <Reveal delay={0.06}>
                <Glass className="p-7">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ background: 'rgba(168,85,247,0.11)', border: '1px solid rgba(168,85,247,0.22)' }}>
                      <Shield size={16} style={{ color: '#A855F7' }} />
                    </div>
                    <h2 className="text-base font-bold text-text-primary">Key Skills</h2>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {project.skills.map((skill, i) => (
                      <motion.div key={i}
                        initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        transition={{ delay: i * 0.07, duration: 0.4 }}
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold cursor-default transition-all duration-300"
                        style={{ background: 'rgba(168,85,247,0.07)', border: '1px solid rgba(168,85,247,0.20)', color: '#A855F7' }}
                        onMouseEnter={e => { e.currentTarget.style.background = 'rgba(168,85,247,0.14)'; e.currentTarget.style.borderColor = 'rgba(168,85,247,0.42)'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = 'rgba(168,85,247,0.07)'; e.currentTarget.style.borderColor = 'rgba(168,85,247,0.20)'; }}>
                        <CheckCircle2 size={13} className="flex-shrink-0" />
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </Glass>
              </Reveal>
            )}
          </div>

          {/* 5️⃣ KPI Metrics sidebar */}
          {project.metrics && (
            <Reveal delay={0.1} className="lg:col-span-1">
              <div className="rounded-2xl p-6 sticky top-20" style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.09)',
                backdropFilter: 'blur(18px)',
                WebkitBackdropFilter: 'blur(18px)',
              }}>
                <div className="flex items-center gap-2.5 mb-6">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: 'rgba(124,124,255,0.11)', border: '1px solid rgba(124,124,255,0.22)' }}>
                    <TrendingUp size={16} style={{ color: '#7C7CFF' }} />
                  </div>
                  <h2 className="text-base font-bold text-text-primary">Highlights</h2>
                </div>
                <div className="space-y-3.5">
                  {KPIS.map(({ key, label, Icon, color, bg, glow }, i) => (
                    <motion.div key={key}
                      initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                      transition={{ delay: i * 0.08, duration: 0.5 }}
                      whileHover={{ scale: 1.03, x: -3 }}
                      className="rounded-xl p-4 cursor-default transition-all duration-300"
                      style={{ background: bg, border: '1px solid rgba(255,255,255,0.08)' }}
                      onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 0 20px ${glow}`; e.currentTarget.style.borderColor = `${color}40`; }}
                      onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}>
                      <div className="flex items-center gap-2 mb-1.5">
                        <Icon size={14} style={{ color }} />
                        <span className="text-[10px] font-semibold text-text-muted uppercase tracking-[0.1em]">{label}</span>
                      </div>
                      <div className="text-2xl font-extrabold" style={{ color }}>{project.metrics[key]}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Reveal>
          )}
        </div>

        {/* ── 7️⃣  BOTTOM CTA ───────────────────────────────────────────────── */}
        <Reveal>
          <div className="relative rounded-2xl p-10 sm:p-14 text-center overflow-hidden"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(124,124,255,0.20)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.07)' }}>
            {/* Pulsing radial glow */}
            <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] pointer-events-none rounded-full"
              animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.85, 0.4] }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
              style={{ background: 'radial-gradient(ellipse, rgba(124,124,255,0.13) 0%, transparent 70%)' }} />
            <div className="relative">
              <span className="text-4xl">🚀</span>
              <h2 className="text-xl font-bold text-text-primary mt-4 mb-2">Ready to explore?</h2>
              <p className="text-text-muted text-sm mb-8 max-w-sm mx-auto">See the platform in action or dive into the source code.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                {project.demoLink && project.demoLink !== "#" && (
                  <motion.a href={project.demoLink} target="_blank" rel="noopener noreferrer"
                    whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }}
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-[15px] text-white transition-all duration-300"
                    style={{ background: 'linear-gradient(135deg,#7C7CFF,#38BDF8)' }}
                    onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 40px rgba(124,124,255,0.6)'; }}
                    onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; }}>
                    <ExternalLink size={18} /> View Live Demo
                  </motion.a>
                )}
                <motion.a href={project.githubLink} target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-[15px] text-text-primary transition-all duration-300"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.14)' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(124,124,255,0.48)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(124,124,255,0.22)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)'; e.currentTarget.style.boxShadow = 'none'; }}>
                  <Github size={18} /> View Code
                </motion.a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Footer */}
      <footer className="relative text-center py-5 text-text-muted text-[13px]"
        style={{ zIndex: 1, borderTop: '1px solid rgba(255,255,255,0.06)', background: 'rgba(5,7,15,0.5)' }}>
        <button onClick={() => navigate(-1)}
          className="hover:text-accent-primary transition-colors duration-200 inline-flex items-center gap-1.5">
          <ArrowLeft size={13} /> Back to Portfolio
        </button>
      </footer>
    </motion.div>
  );
};

export default ProjectDetails;
