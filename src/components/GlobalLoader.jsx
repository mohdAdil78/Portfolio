import React from 'react';
import { motion } from 'framer-motion';

const GlobalLoader = () => {
  return (
    <div className="fixed inset-0 z-[999] bg-space-primary flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        <div className="relative w-16 h-16">
          <motion.div
            className="absolute inset-0 rounded-full border-t-2 border-accent-primary"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute inset-2 rounded-full border-r-2 border-accent-secondary"
            animate={{ rotate: -360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute inset-4 rounded-full border-b-2 border-glow-highlight"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          />
        </div>
        <motion.div
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
          className="text-white text-sm font-medium tracking-widest uppercase flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
          Loading Assets...
        </motion.div>
      </div>
    </div>
  );
};

export default GlobalLoader;
