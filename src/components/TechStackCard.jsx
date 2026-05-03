import React from 'react';
import { motion } from 'framer-motion';

const TechStackCard = ({ tech, index }) => {
  const getTechDetails = (techName) => {
    const details = {
      // Languages
      'JavaScript': { icon: '🟨', color: '#F7DF1E', glow: 'rgba(247, 223, 30, 0.3)' },
      'Python': { icon: '🐍', color: '#3776AB', glow: 'rgba(55, 118, 171, 0.3)' },
      'Java': { icon: '☕', color: '#007396', glow: 'rgba(0, 115, 150, 0.3)' },
      'C': { icon: '⚙️', color: '#A8B9CC', glow: 'rgba(168, 185, 204, 0.3)' },
      'SQL': { icon: '🗃️', color: '#336791', glow: 'rgba(51, 103, 145, 0.3)' },
      'TypeScript': { icon: '🔷', color: '#3178C6', glow: 'rgba(49, 120, 198, 0.3)' },

      // Frontend
      'HTML5': { icon: '🌐', color: '#E34F26', glow: 'rgba(227, 79, 38, 0.3)' },
      'CSS3': { icon: '🎨', color: '#1572B6', glow: 'rgba(21, 114, 182, 0.3)' },
      'React.js': { icon: '⚛️', color: '#61DAFB', glow: 'rgba(97, 218, 251, 0.3)' },
      'Next.js': { icon: '▲', color: '#FFFFFF', glow: 'rgba(255, 255, 255, 0.2)' },
      'Tailwind CSS': { icon: '🌊', color: '#06B6D4', glow: 'rgba(6, 182, 212, 0.3)' },
      'Bootstrap': { icon: '🅱️', color: '#7952B3', glow: 'rgba(121, 82, 179, 0.3)' },

      // Backend & APIs
      'Node.js': { icon: '🟢', color: '#339933', glow: 'rgba(51, 153, 51, 0.3)' },
      'REST APIs': { icon: '🔌', color: '#FF6C37', glow: 'rgba(255, 108, 55, 0.3)' },

      // Databases
      'MongoDB': { icon: '🍃', color: '#47A248', glow: 'rgba(71, 162, 72, 0.3)' },
      'MySQL': { icon: '🐬', color: '#4479A1', glow: 'rgba(68, 121, 161, 0.3)' },

      // Cloud & Deployment
      'Google Cloud Platform (GCP)': { icon: '☁️', color: '#4285F4', glow: 'rgba(66, 133, 244, 0.3)' },
      'Vercel': { icon: '▲', color: '#FFFFFF', glow: 'rgba(255, 255, 255, 0.2)' },

      // Tools & Platforms
      'Git': { icon: '📦', color: '#F05032', glow: 'rgba(240, 80, 50, 0.3)' },
      'GitHub': { icon: '🐙', color: '#FFFFFF', glow: 'rgba(255, 255, 255, 0.2)' },
      'Postman': { icon: '🚀', color: '#FF6C37', glow: 'rgba(255, 108, 55, 0.3)' },

      // Hardware / Embedded / GIS
      'Arduino': { icon: '♾️', color: '#00979D', glow: 'rgba(0, 151, 157, 0.3)' },
      'QGIS': { icon: '🗺️', color: '#589632', glow: 'rgba(88, 150, 50, 0.3)' },
      'GRASS GIS': { icon: '🌿', color: '#008000', glow: 'rgba(0, 128, 0, 0.3)' },
      'PCA': { icon: '📊', color: '#FFCC00', glow: 'rgba(255, 204, 0, 0.3)' },

      // AI & Agentic Tools
      'Antigravity': { icon: '🌌', color: '#7C7CFF', glow: 'rgba(124, 124, 255, 0.3)' },
      'Claude': { icon: '🧠', color: '#D97757', glow: 'rgba(217, 119, 87, 0.3)' },
      'Google AI Studio': { icon: '✨', color: '#4285F4', glow: 'rgba(66, 133, 244, 0.3)' },
      'Cursor': { icon: '🖱️', color: '#FFFFFF', glow: 'rgba(255, 255, 255, 0.3)' },
      'Windsurf': { icon: '🏄‍♂️', color: '#00E5FF', glow: 'rgba(0, 229, 255, 0.3)' },
      'Firebase': { icon: '🔥', color: '#FFCA28', glow: 'rgba(255, 202, 40, 0.3)' },
      'OpenAI': { icon: '🤖', color: '#10A37F', glow: 'rgba(16, 163, 127, 0.3)' },
      'DeepSeek': { icon: '🐳', color: '#0055FF', glow: 'rgba(0, 85, 255, 0.3)' },
      'Hugging Face': { icon: '🤗', color: '#FFD21E', glow: 'rgba(255, 210, 30, 0.3)' },
      'LangChain': { icon: '🦜', color: '#1C3C3C', glow: 'rgba(28, 60, 60, 0.3)' },
      'GitHub Copilot': { icon: '✈️', color: '#FAFBFC', glow: 'rgba(250, 251, 252, 0.3)' }
    };

    return details[techName] || { icon: '💻', color: '#7C7CFF', glow: 'rgba(124, 124, 255, 0.3)' };
  };

  const { icon, color, glow } = getTechDetails(tech);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.03, 0.3) }}
      whileHover={{
        y: -6,
        transition: { duration: 0.25, ease: [0.34, 1.56, 0.64, 1] }
      }}
      className="relative group p-[1px] rounded-2xl transition-all duration-300"
    >
      {/* Dynamic Border Glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-20 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
        style={{ background: `linear-gradient(135deg, ${color}33, ${color}00)` }}
      />

      {/* Inner Card */}
      <div className="relative bg-[#0A0D1A]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 h-full flex flex-col items-center justify-center group-hover:border-white/20 transition-all duration-300">

        {/* Glow Effect behind icon */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"
          style={{ backgroundColor: color }}
        />

        {/* Tech Icon Container */}
        <div
          className="relative flex items-center justify-center w-14 h-14 mb-4 rounded-xl transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6"
          style={{
            background: `rgba(255, 255, 255, 0.03)`,
            boxShadow: `inset 0 0 10px rgba(255, 255, 255, 0.05)`
          }}
        >
          <div
            className="text-3xl filter drop-shadow-[0_0_8px_rgba(0,0,0,0.5)] group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.3)]"
          >
            {icon}
          </div>
        </div>

        {/* Tech Name */}
        <h3
          className="text-[13px] font-bold tracking-wide uppercase transition-all duration-300"
          style={{ color: '#E5E7EB' }}
        >
          {tech}
        </h3>

        {/* Animated underline */}
        <div
          className="w-0 h-[2px] mt-2 rounded-full transition-all duration-300 group-hover:w-1/2"
          style={{ backgroundColor: color }}
        />
      </div>
    </motion.div>
  );
};

export default TechStackCard;
