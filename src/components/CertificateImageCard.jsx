import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ImageLightbox from './ImageLightbox';

const CertificateImageCard = ({ certificate, index }) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const openLightbox = () => setIsLightboxOpen(true);
  const closeLightbox = () => setIsLightboxOpen(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.45, delay: Math.min(index * 0.08, 0.4) }}
        whileHover={{ 
          y: -8,
          scale: 1.02,
          boxShadow: '0 20px 40px rgba(124,124,255,0.2)'
        }}
        onClick={openLightbox}
        className="glass-card group cursor-pointer overflow-hidden"
      >
        {/* Certificate Image Container */}
        <div className="relative overflow-hidden rounded-xl mb-4 aspect-[3/2] bg-gradient-to-br from-accent-primary/10 to-glow-highlight/10">
          {/* Actual Certificate Image */}
          <img
            src={certificate.imageUrl}
            alt={certificate.title}
            className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-space-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
          
          {/* Click hint */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="bg-glass-bg/90 backdrop-blur-sm px-4 py-2 rounded-full border border-glass-border">
              <span className="text-text-primary text-sm font-medium">Click to view full size</span>
            </div>
          </div>
        </div>

        {/* Certificate Title */}
        <h3 className="text-lg font-bold text-text-primary mb-3 group-hover:text-accent-primary transition-colors duration-500 text-center">
          {certificate.title}
        </h3>

        {/* Skills Section */}
        {certificate.skills && (
          <div className="flex flex-wrap gap-1.5 justify-center">
            {certificate.skills.map((skill, skillIndex) => (
              <span
                key={skillIndex}
                className="px-2.5 py-1 text-xs font-medium rounded-full bg-accent-primary/10 text-accent-secondary border border-accent-primary/20"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </motion.div>

      {/* Image Lightbox */}
      <ImageLightbox 
        imageUrl={certificate.imageUrl}
        isOpen={isLightboxOpen} 
        onClose={closeLightbox} 
      />
    </>
  );
};

export default CertificateImageCard;
