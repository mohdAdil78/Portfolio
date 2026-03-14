import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Sparkles } from 'lucide-react';

/* ─── Education data ───────────────────────────────────────────────── */
const EDUCATION = [
  {
    id: 1,
    degree: 'Bachelor of Engineering',
    shortDegree: 'B.E',
    branch: 'Information Science & Engineering',
    institution: "Alva's Institute of Engineering and Technology",
    period: 'July 2025',
    side: 'left',
    icon: '🎓',
    color: '#7C7CFF',
    glow: 'rgba(124,124,255,0.45)',
    status: 'Currently Pursuing',
  },
  {
    id: 2,
    degree: 'PUC (12th Standard)',
    shortDegree: 'PUC',
    branch: null,
    institution: 'Shamili PU College',
    period: 'July 2021',
    side: 'right',
    icon: '📚',
    color: '#38BDF8',
    glow: 'rgba(56,189,248,0.35)',
  },
  {
    id: 3,
    degree: 'SSLC (10th Standard)',
    shortDegree: 'SSLC',
    branch: null,
    institution: 'Mount Rosary School, Santhekatte',
    period: 'April 2019',
    side: 'left',
    icon: '🏫',
    color: '#A855F7',
    glow: 'rgba(168,85,247,0.35)',
  },
];

/* ─── Animated card ────────────────────────────────────────────────── */
const EduCard = ({ edu, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const isLeft = edu.side === 'left';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: index * 0.12 }}
      whileHover={{ scale: 1.025, y: -4 }}
      style={{
        /* clip keeps Framer x-enter from creating horizontal scroll */
        overflow: 'clip',
        borderRadius: '20px',
      }}
    >
      <div
        className="relative group h-full"
        style={{
          borderRadius: '20px',
          padding: '1.75rem',
          background: 'rgba(255,255,255,0.04)',
          backdropFilter: 'blur(22px)',
          WebkitBackdropFilter: 'blur(22px)',
          border: '1px solid rgba(255,255,255,0.09)',
          boxShadow: '0 4px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.07)',
          transition: 'border-color 0.35s, box-shadow 0.35s',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = edu.color + '70';
          e.currentTarget.style.boxShadow = `0 12px 48px ${edu.glow}, 0 8px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.12)`;
          e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.09)';
          e.currentTarget.style.boxShadow = '0 4px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.07)';
          e.currentTarget.style.transform = 'translateY(0) scale(1)';
        }}
      >
        {/* Floating Watermark Icon */}
        <div className="absolute top-2 right-4 text-7xl opacity-[0.03] select-none pointer-events-none group-hover:opacity-[0.06] transition-opacity duration-500">
          {edu.icon}
        </div>
        {/* Gradient shimmer in corner on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
          style={{
            borderRadius: '20px',
            background: `radial-gradient(ellipse at ${isLeft ? '90% 10%' : '10% 10%'}, ${edu.glow} 0%, transparent 65%)`,
          }}
        />

        {/* Date badge */}
        <div
          className="inline-flex items-center gap-1.5 mb-5"
          style={{
            padding: '5px 14px',
            borderRadius: '999px',
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '0.03em',
            background: edu.color + '18',
            border: `1px solid ${edu.color}44`,
            color: edu.color,
          }}
        >
          <Calendar size={11} />
          {edu.period}
          {edu.status && (
            <span className="flex items-center gap-1.5 ml-2 pl-2 border-l border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              {edu.status}
            </span>
          )}
        </div>

        {/* Degree row */}
        <div className="flex items-start gap-3 mb-3">
          <span
            className="flex-shrink-0 flex items-center justify-center text-2xl"
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '14px',
              background: edu.color + '18',
              border: `1px solid ${edu.color}33`,
              fontSize: '22px',
            }}
          >
            {edu.icon}
          </span>
          <div className="min-w-0">
            <h3
              className="font-bold leading-tight"
              style={{ fontSize: '17px', color: '#E5E7EB', marginBottom: '2px' }}
            >
              {edu.degree}
            </h3>
            {edu.shortDegree && (
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  background: `linear-gradient(135deg, ${edu.color}, #A855F7)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {edu.shortDegree}
              </span>
            )}
          </div>
        </div>

        {/* Branch */}
        {edu.branch && (
          <p
            className="mb-3 font-semibold"
            style={{
              fontSize: '14px',
              background: `linear-gradient(135deg, ${edu.color}, #38BDF8)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {edu.branch}
          </p>
        )}

        {/* Divider */}
        <div
          style={{
            height: '1px',
            background: 'rgba(255,255,255,0.07)',
            margin: '14px 0',
          }}
        />

        {/* Institution */}
        <div className="flex items-center gap-2">
          <MapPin size={13} style={{ color: edu.color, flexShrink: 0 }} />
          <span style={{ fontSize: '13px', color: '#94A3B8' }}>{edu.institution}</span>
        </div>
      </div>
    </motion.div>
  );
};

/* ─── Timeline node ────────────────────────────────────────────────── */
const TimelineNode = ({ edu, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.45, delay: index * 0.12 + 0.05 }}
      className="flex items-center justify-center flex-shrink-0"
      style={{ width: '48px', height: '48px', position: 'relative', zIndex: 10 }}
    >
      {/* Far outer slow pulse */}
      <motion.div
        animate={{ scale: [1, 2.2, 1], opacity: [0.25, 0, 0.25] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: index * 0.6 }}
        style={{
          position: 'absolute',
          width: '48px', height: '48px',
          borderRadius: '50%',
          background: edu.color + '40',
        }}
      />
      {/* Mid pulse ring */}
      <motion.div
        animate={{ scale: [1, 1.7, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: index * 0.4 + 0.3 }}
        style={{
          position: 'absolute',
          width: '30px', height: '30px',
          borderRadius: '50%',
          border: `1.5px solid ${edu.color}99`,
        }}
      />
      {/* Outer ring (static) */}
      <div style={{
        position: 'absolute',
        width: '26px', height: '26px',
        borderRadius: '50%',
        border: `1px solid ${edu.color}55`,
        background: 'transparent',
      }} />
      {/* Main glowing dot */}
      <div
        style={{
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          background: `linear-gradient(135deg, ${edu.color}, #A855F7)`,
          boxShadow: `0 0 0 3px #05070F, 0 0 16px ${edu.glow}, 0 0 36px ${edu.glow}, 0 0 60px ${edu.color}30`,
          zIndex: 10,
          position: 'relative',
        }}
      />
    </motion.div>
  );
};

/* ─── Desktop row: card | node | card ─────────────────────────────── */
const DesktopRow = ({ edu, index }) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '1fr 80px 1fr',
      alignItems: 'center',
      gap: '0 0',
      marginBottom: index < EDUCATION.length - 1 ? '2.5rem' : 0,
    }}
  >
    {/* Left cell */}
    <div style={{ paddingRight: '1.75rem' }}>
      {edu.side === 'left' && <EduCard edu={edu} index={index} />}
    </div>

    {/* Center: node */}
    <div className="flex justify-center" style={{ position: 'relative', zIndex: 3 }}>
      <TimelineNode edu={edu} index={index} />
    </div>

    {/* Right cell */}
    <div style={{ paddingLeft: '1.75rem' }}>
      {edu.side === 'right' && <EduCard edu={edu} index={index} />}
    </div>
  </div>
);

/* ─── Mobile row: left-dot + card ─────────────────────────────────── */
const MobileRow = ({ edu, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: index * 0.12 }}
      style={{
        display: 'flex',
        gap: '1rem',
        marginBottom: index < EDUCATION.length - 1 ? '1.5rem' : 0,
        overflow: 'clip',
      }}
    >
      {/* Left: dot + vertical line */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, paddingTop: '6px' }}>
        <div style={{ position: 'relative', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <motion.div
            animate={{ scale: [1, 1.6, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2.4, repeat: Infinity, delay: index * 0.5 }}
            style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: edu.color + '55' }}
          />
          <div style={{
            width: '12px', height: '12px', borderRadius: '50%',
            background: `linear-gradient(135deg, ${edu.color}, #A855F7)`,
            boxShadow: `0 0 10px ${edu.glow}`,
            border: '2px solid #05070F',
            zIndex: 1, position: 'relative',
          }} />
        </div>
        {index < EDUCATION.length - 1 && (
          <div style={{ flex: 1, width: '2px', minHeight: '24px', background: 'linear-gradient(to bottom, rgba(124,124,255,0.35), rgba(168,85,247,0.15))', marginTop: '4px' }} />
        )}
      </div>

      {/* Card */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <EduCard edu={edu} index={index} />
      </div>
    </motion.div>
  );
};

/* ─── Main Export ──────────────────────────────────────────────────── */
const EducationTab = () => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    style={{ width: '100%', overflowX: 'clip', paddingTop: '0.5rem' }}
  >
    {/* ── Section label ── */}
    <div className="flex items-center justify-center gap-3 mb-12">
      <Sparkles size={16} style={{ color: '#7C7CFF' }} />
      <span style={{
        fontSize: '12px',
        fontWeight: 700,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        background: 'linear-gradient(135deg,#7C7CFF,#38BDF8)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}>
        Academic Journey
      </span>
      <Sparkles size={16} style={{ color: '#38BDF8' }} />
    </div>

    {/* ══════════ DESKTOP (md+) ══════════ */}
    <div className="hidden md:block" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1rem', position: 'relative' }}>

      {/* Glowing center vertical line */}
      <div style={{
        position: 'absolute',
        left: 'calc(50% - 1px)',
        top: '18px',
        bottom: '18px',
        width: '2px',
        background: 'rgba(255,255,255,0.05)',
        borderRadius: '2px',
        zIndex: 1,
      }}>
        {/* Moving Glow Line */}
        <motion.div
          animate={{ top: ['0%', '100%'], opacity: [0, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          style={{
            position: 'absolute',
            left: 0,
            width: '100%',
            height: '150px',
            background: 'linear-gradient(to bottom, transparent, #7C7CFF, #38BDF8, transparent)',
            borderRadius: '2px',
          }}
        />
      </div>

      {EDUCATION.map((edu, i) => (
        <DesktopRow key={edu.id} edu={edu} index={i} />
      ))}
    </div>

    {/* ══════════ MOBILE (<md) ══════════ */}
    <div className="md:hidden" style={{ padding: '0 1rem' }}>
      {EDUCATION.map((edu, i) => (
        <MobileRow key={edu.id} edu={edu} index={i} />
      ))}
    </div>
  </motion.div>
);

export default EducationTab;
