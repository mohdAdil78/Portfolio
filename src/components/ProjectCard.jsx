import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, Layers, Brain, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project, index }) => {
  const [imgError, setImgError] = useState(false);

  const hasDetails = Boolean(project.subtitle);
  const hasDemo = project.demoLink && project.demoLink !== '#';
  const hasCode = project.githubLink && project.githubLink !== '#';

  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: index * 0.09, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -6, scale: 1.015 }}
      className="group relative flex flex-col rounded-[22px] overflow-hidden cursor-default"
      style={{
        background: 'rgba(255,255,255,0.04)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        border: '1px solid rgba(255,255,255,0.10)',
        boxShadow: '0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.07)',
      }}
      onHoverStart={e => {
        e.currentTarget.style.borderColor = 'rgba(168,85,247,0.50)';
        e.currentTarget.style.boxShadow = '0 8px 48px rgba(0,0,0,0.5), 0 0 40px rgba(168,85,247,0.25), inset 0 1px 0 rgba(255,255,255,0.15)';
      }}
      onHoverEnd={e => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)';
        e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.07)';
      }}
    >
      {/* ── Thumbnail ─────────────────────────────────────────── */}
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/9' }}>
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
          style={{ background: 'radial-gradient(ellipse at center, rgba(124,124,255,0.12) 0%, transparent 70%)' }} />
        {!imgError ? (
          <img src={project.image} alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            onError={() => setImgError(true)} />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-3"
            style={{ background: 'linear-gradient(135deg, rgba(124,124,255,0.1) 0%, rgba(168,85,247,0.08) 100%)' }}>
            <Layers size={40} className="text-accent-primary/50" />
            <span className="text-text-muted text-xs font-medium uppercase tracking-widest">Preview</span>
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none z-10"
          style={{ background: 'linear-gradient(to top, rgba(5,7,15,0.85) 0%, transparent 100%)' }} />
        {project.technologies.length > 4 && (
          <div className="absolute top-3 right-3 z-20 px-2.5 py-1 rounded-full text-[10px] font-semibold text-text-secondary"
            style={{ background: 'rgba(5,7,15,0.7)', border: '1px solid rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)' }}>
            +{project.technologies.length - 4} more
          </div>
        )}
        {project.badge && (
          <div className="absolute top-3 left-3 z-20 px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 transition-transform duration-300 group-hover:scale-105"
            style={{ 
              background: 'linear-gradient(135deg, rgba(168,85,247,0.9) 0%, rgba(56,189,248,0.9) 100%)', 
              color: 'white',
              boxShadow: '0 4px 12px rgba(168,85,247,0.5)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
            {project.badge.toLowerCase().includes('ai') ? <Brain size={14} /> : <Sparkles size={14} />}
            {project.badge}
          </div>
        )}
      </div>

      {/* Animated Gradient Border */}
      <div className="absolute inset-0 rounded-[22px] pointer-events-none z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
           style={{
             background: 'linear-gradient(45deg, #a855f7, #38bdf8, #a855f7)',
             backgroundSize: '200% 200%',
             animation: 'gradientFlow 3s ease infinite',
             WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
             WebkitMaskComposite: 'xor',
             maskComposite: 'exclude',
             padding: '1px'
           }} 
      />

      {/* ── Card Body ─────────────────────────────────────────── */}
      <div className="flex flex-col flex-1 px-6 pt-5 pb-6 gap-4">

        {/* Title + description */}
        <div>
          <h3 className="text-base font-bold text-text-primary leading-snug mb-1.5 group-hover:text-accent-primary transition-colors duration-300 line-clamp-2">
            {project.title}
          </h3>
          <p className="text-text-muted text-sm leading-relaxed line-clamp-2">{project.description}</p>
        </div>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech, i) => (
            <span key={i} className="px-2.5 py-0.5 text-[11px] font-semibold rounded-full"
              style={{ background: 'rgba(56,189,248,0.07)', border: '1px solid rgba(56,189,248,0.18)', color: 'rgba(56,189,248,0.85)' }}>
              {tech}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)' }} />

        {/* Buttons */}
        <div className="flex flex-wrap gap-2 sm:flex-nowrap items-center">

          {/* Primary — View Details */}
          {hasDetails && (
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="flex-1 sm:flex-none">
              <Link to={`/project/${project.id}`} onClick={e => e.stopPropagation()}
                className="relative flex items-center justify-center gap-1.5 px-4 py-2.5 text-white text-sm font-semibold rounded-xl overflow-hidden w-full sm:w-auto group/btn"
                style={{ background: 'linear-gradient(135deg,#7C7CFF 0%,#38BDF8 100%)' }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 22px rgba(124,124,255,0.55)'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; }}>
                <span className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.12) 50%, transparent 100%)' }} />
                <ArrowRight size={14} className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-0.5 flex-shrink-0" />
                <span className="relative z-10">View Details</span>
              </Link>
            </motion.div>
          )}

          {/* Ghost — Demo */}
          {hasDemo && (
            <motion.a href={project.demoLink} target="_blank" rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
              className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.14)', color: 'rgba(229,231,235,0.85)' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(124,124,255,0.10)'; e.currentTarget.style.borderColor = 'rgba(124,124,255,0.45)'; e.currentTarget.style.color = '#7C7CFF'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)'; e.currentTarget.style.color = 'rgba(229,231,235,0.85)'; }}>
              <ExternalLink size={14} className="flex-shrink-0" />
              <span>Demo</span>
            </motion.a>
          )}

          {/* Icon-only — Code */}
          {hasCode && (
            <motion.a href={project.githubLink} target="_blank" rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              whileHover={{ scale: 1.1, rotate: 5, boxShadow: '0 0 20px rgba(168,85,247,0.4)' }} whileTap={{ scale: 0.93 }} title="Source Code"
              className="flex items-center justify-center rounded-xl transition-all duration-300 flex-shrink-0"
              style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.14)', color: 'rgba(148,163,184,0.8)' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(168,85,247,0.12)'; e.currentTarget.style.borderColor = 'rgba(168,85,247,0.4)'; e.currentTarget.style.color = '#A855F7'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)'; e.currentTarget.style.color = 'rgba(148,163,184,0.8)'; }}>
              <Github size={16} />
            </motion.a>
          )}
        </div>
      </div>

      {/* Left accent bar on hover */}
      <motion.div className="absolute left-0 top-8 bottom-8 w-[3px] rounded-r-full pointer-events-none"
        initial={{ opacity: 0, scaleY: 0 }} whileHover={{ opacity: 1, scaleY: 1 }}
        transition={{ duration: 0.3 }}
        style={{ background: 'linear-gradient(180deg,#7C7CFF,#A855F7)', transformOrigin: 'top' }} />
    </motion.div>
  );
};

export default ProjectCard;
