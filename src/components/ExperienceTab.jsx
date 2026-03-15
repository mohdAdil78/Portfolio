import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, MapPin, Calendar, Sparkles, Code, Terminal, ChevronRight } from 'lucide-react';

/* ─── Experience data ───────────────────────────────────────────────── */
const EXPERIENCE = [
    {
        id: 1,
        role: 'Software Developer',
        type: 'Full-time',
        company: 'Avedis',
        location: 'Udupi, India',
        period: 'Jan 2026 - Present',
        description: 'Currently working as a Software Developer at Avedis, responsible for developing and maintaining the company’s website and applications. Building and managing server infrastructure, implementing scalable backend and frontend solutions, and writing efficient code to support web platforms and services.',
        icon: <Code size={24} color="#10B981" />,
        color: '#10B981', // Emerald
        glow: 'rgba(16,185,129,0.4)',
    },
    {
        id: 2,
        role: 'Web Developer Intern',
        type: 'Internship',
        company: 'Blue Bird Data Solutions (RR Builders)',
        location: 'Mangalore, India',
        period: 'Apr 2024 - May 2024',
        description: 'Developed a responsive real estate platform using Next.js, React.js, Tailwind CSS, and TypeScript. Implemented SEO-optimized dynamic pages, integrated chatbot, EMI calculator, and WhatsApp support, and managed API communication and email automation using Axios, Context API, and Nodemailer. Built a modular backend and stored property data using MongoDB.',
        icon: <Terminal size={24} color="#F59E0B" />,
        color: '#F59E0B', // Amber
        glow: 'rgba(245,158,11,0.4)',
    },
    {
        id: 3,
        role: 'GIS Intern',
        type: 'Internship',
        company: 'IEEE & IISc Collaboration',
        location: 'Mangalore, India',
        period: 'Oct 2023 - Dec 2023',
        description: 'Led a 4-member team to analyze the Shanthi Sagar catchment area using Sentinel and Landsat satellite imagery. Conducted land use, vegetation, and population analysis using QGIS, GRASS GIS, and Google Cloud Platform, generating thematic maps and insights for environmental planning and geospatial research.',
        icon: <Briefcase size={24} color="#0EA5E9" />,
        color: '#0EA5E9', // Sky
        glow: 'rgba(14,165,233,0.4)',
    },
];

/* ─── Modern List Card ──────────────────────────────────────────────── */
const ExpListCard = ({ exp, index }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-40px' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
            whileHover={{ scale: 1.01, x: 6 }}
            className="w-full relative group"
        >
            {/* Glowing left accent line */}
            <div
                className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-2xl z-20 group-hover:w-2 transition-all duration-300"
                style={{
                    background: exp.color,
                    boxShadow: `0 0 15px ${exp.glow}, 0 0 30px ${exp.glow}`
                }}
            />

            <div
                className="relative h-full flex flex-col md:flex-row gap-6 items-start md:items-center w-full"
                style={{
                  borderRadius: '16px',
                  padding: '2rem',
                  paddingLeft: '3rem',
                  background: 'rgba(255,255,255,0.03)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  boxShadow: '0 4px 30px rgba(0,0,0,0.2)',
                  transition: 'background 0.4s ease, border-color 0.4s ease',
                }}
                onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.borderColor = exp.color + '40';
                }}
                onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                }}
            >
                {/* Background ambient glow on hover */}
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-700"
                    style={{
                        borderRadius: '16px',
                        background: `radial-gradient(circle at 10% 50%, ${exp.glow} 0%, transparent 60%)`,
                    }}
                />

                {/* Left Side: Icon & Period */}
                <div className="flex flex-col items-start gap-4 min-w-[200px] z-10 shrink-0">
                    <div
                        className="flex items-center justify-center p-4 rounded-2xl"
                        style={{
                            background: `linear-gradient(135deg, ${exp.color}15, rgba(255,255,255,0.05))`,
                            border: `1px solid ${exp.color}30`,
                            boxShadow: `inset 0 1px 0 rgba(255,255,255,0.1), 0 8px 16px rgba(0,0,0,0.2)`
                        }}
                    >
                        {exp.icon}
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium text-text-secondary whitespace-nowrap">
                        <Calendar size={14} style={{ color: exp.color }} />
                        <span>{exp.period}</span>
                    </div>
                </div>

                {/* Right Side: Content */}
                <div className="flex-1 flex flex-col justify-center z-10 w-full">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                        <h3 className="text-xl md:text-2xl font-bold text-text-primary tracking-wide">
                            {exp.role}
                        </h3>
                        <span
                            className="px-3 py-1 text-xs font-bold rounded-full w-fit"
                            style={{
                                color: exp.color,
                                background: exp.color + '15',
                                border: `1px solid ${exp.color}30`
                            }}
                        >
                            {exp.type}
                        </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4">
                        <div className="flex items-center gap-1.5 text-sm font-semibold" style={{ color: '#E5E7EB' }}>
                            <Briefcase size={14} style={{ color: exp.color }} />
                            <span>{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-sm text-text-secondary">
                            <MapPin size={14} style={{ color: exp.color }} />
                            <span>{exp.location}</span>
                        </div>
                    </div>

                    <p className="text-text-secondary text-sm md:text-base leading-relaxed hidden md:block opacity-80 group-hover:opacity-100 transition-opacity">
                        {exp.description}
                    </p>

                    {/* Simple chevron indicator */}
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-2 hidden lg:block">
                        <ChevronRight size={24} style={{ color: exp.color }} />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

/* ─── Main Export ──────────────────────────────────────────────────── */
const ExperienceTab = () => (
    <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full pt-2"
    >
        {/* ── Section label ── */}
        <div className="flex items-center justify-center gap-3 mb-12">
            <Sparkles size={16} style={{ color: '#10B981' }} />
            <span style={{
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                background: 'linear-gradient(135deg,#10B981,#0EA5E9)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
            }}>
                Professional Journey
            </span>
            <Sparkles size={16} style={{ color: '#0EA5E9' }} />
        </div>

        {/* ══════════ LIST CONTAINER ══════════ */}
        <div className="max-w-4xl mx-auto flex flex-col gap-6 px-4">
            {EXPERIENCE.map((exp, i) => (
                <ExpListCard key={exp.id} exp={exp} index={i} />
            ))}
        </div>
    </motion.div>
);

export default ExperienceTab;
