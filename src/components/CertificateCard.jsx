import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CertificateModal from './CertificateModal';

const CertificateCard = ({ certificate, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        y: -8,
        scale: 1.02,
        boxShadow: '0 20px 40px rgba(124,124,255,0.2)'
      }}
      onClick={openModal}
      className="glass-card group cursor-pointer overflow-hidden"
    >
      {/* Certificate Image Container */}
      <div className="relative overflow-hidden rounded-xl mb-4 aspect-[3/2] bg-gradient-to-br from-accent-primary/10 to-glow-highlight/10">
        {/* Certificate Image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Certificate Icon/Placeholder */}
            <div className="text-center">
              <div className="text-6xl md:text-7xl mb-2 opacity-60 group-hover:scale-110 transition-transform duration-500">
                {certificate.icon || '🏆'}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-space-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
            </div>
          </div>
        </div>
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-accent-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Subtle Glow Effect */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent-primary/5 to-glow-highlight/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Certificate Title */}
      <h3 className="text-lg font-bold text-text-primary mb-3 group-hover:text-accent-primary transition-colors duration-500 text-center">
        {certificate.title}
      </h3>
      
      {/* Skills Section */}
      <div className="flex flex-wrap gap-1.5 justify-center">
        {certificate.skills?.map((skill, skillIndex) => (
          <span
            key={skillIndex}
            className="px-2.5 py-1 text-xs font-medium rounded-full bg-accent-primary/10 text-accent-secondary border border-accent-primary/20 hover:bg-accent-primary/20 hover:border-accent-primary/30 transition-all duration-300"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Optional: Click to view hint */}
      <div className="mt-3 text-center">
        <span className="text-xs text-text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Click to view full certificate
        </span>
      </div>

      {/* Certificate Modal */}
      <CertificateModal 
        certificate={certificate} 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </motion.div>
  );
};

export default CertificateCard;
