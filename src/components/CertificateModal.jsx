import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const CertificateModal = ({ certificate, isOpen, onClose }) => {
  // Handle ESC key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset'; // Restore scroll
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose} // Close on backdrop click
    >
      {/* Dark blurred backdrop */}
      <div className="absolute inset-0 bg-space-primary/90 backdrop-blur-md" />
      
      {/* Modal content */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="relative glass rounded-2xl p-6 max-w-6xl w-full max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking modal content
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full glass border border-glass-border hover:bg-glass-bg hover:border-accent-primary/50 transition-all duration-300 group"
          aria-label="Close certificate preview"
        >
          <X 
            size={20} 
            className="text-text-muted group-hover:text-text-primary transition-colors duration-300" 
          />
        </button>

        {/* Certificate title */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-text-primary mb-2">
            {certificate.title}
          </h3>
          <div className="w-16 h-1 bg-gradient-nebula mx-auto rounded-full" />
        </div>

        {/* Certificate image container */}
        <div className="relative w-full flex items-center justify-center">
          <div className="relative w-full h-auto max-h-[70vh] flex items-center justify-center">
            {/* Certificate placeholder/image */}
            <div className="relative w-full h-auto aspect-[3/2] max-w-4xl mx-auto">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 to-glow-highlight/10 rounded-xl" />
              
              {/* Certificate content */}
              <div className="relative w-full h-full flex flex-col items-center justify-center rounded-xl glass border border-glass-border p-8">
                {/* Large certificate icon */}
                <div className="text-8xl md:text-9xl mb-6 opacity-80">
                  {certificate.icon || '🏆'}
                </div>
                
                {/* Certificate title in modal */}
                <h4 className="text-xl md:text-2xl font-bold text-text-primary mb-4 text-center">
                  {certificate.title}
                </h4>
                
                {/* Skills in modal */}
                <div className="flex flex-wrap gap-2 justify-center max-w-2xl">
                  {certificate.skills?.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1.5 text-sm font-medium rounded-full bg-accent-primary/20 text-accent-secondary border border-accent-primary/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                {/* Certificate details */}
                <div className="mt-6 text-center">
                  <p className="text-text-muted text-sm">
                    Certificate of Achievement
                  </p>
                  <p className="text-text-secondary text-xs mt-1">
                    Skills demonstrated in {certificate.skills?.length || 0} key areas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="mt-6 flex justify-center gap-4">
          <div className="text-xs text-text-muted">
            Press ESC or click outside to close
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CertificateModal;
