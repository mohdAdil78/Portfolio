import React from 'react';
import { motion } from 'framer-motion';

const TechStackCard = ({ tech, index }) => {
  const getTechIcon = (techName) => {
    // Return appropriate icons/logos for each technology
    const icons = {
      // Languages
      'JavaScript': '🟨',
      'Python': '🐍',
      'Java': '☕',
      'C': '⚙️',
      'SQL': '🗃️',
      'TypeScript': '🔷',
      
      // Frontend
      'HTML5': '🌐',
      'CSS3': '🎨',
      'React.js': '⚛️',
      'Next.js': '▲',
      'Tailwind CSS': '🌊',
      'Bootstrap': '🅱️',
      
      // Backend & APIs
      'Node.js': '🟢',
      'REST APIs': '🔌',
      
      // Databases
      'MongoDB': '🍃',
      'MySQL': '🐬',
      
      // Cloud & Deployment
      'Google Cloud Platform (GCP)': '☁️',
      'Vercel': '▲',
      
      // Tools & Platforms
      'Git': '📦',
      'GitHub': '🐙',
      'Postman': '🚀',
      
      // Hardware / Embedded / GIS
      'Arduino': '🔌',
      'QGIS': '🗺️',
      'GRASS GIS': '🌿',
      'PCA': '📊'
    };
    
    return icons[techName] || '💻';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ 
        y: -8,
        scale: 1.05,
        boxShadow: '0 20px 40px rgba(124,124,255,0.2)'
      }}
      className="glass-card p-6 group cursor-pointer text-center"
    >
      {/* Tech Icon */}
      <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-accent-primary/10 to-glow-highlight/10 group-hover:scale-110 transition-transform duration-300">
        <div className="text-3xl filter drop-shadow-sm">
          {getTechIcon(tech)}
        </div>
      </div>

      {/* Tech Name */}
      <h3 className="text-sm font-medium text-text-primary group-hover:text-accent-primary transition-colors duration-300">
        {tech}
      </h3>
    </motion.div>
  );
};

export default TechStackCard;
