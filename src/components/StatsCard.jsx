import React from 'react';
import { motion } from 'framer-motion';

const StatsCard = ({ stat, index, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      onClick={onClick}
      className={`glass-card text-center group ${onClick ? 'cursor-pointer hover:shadow-glow-primary' : ''
        }`}
    >
      <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
        {stat.icon}
      </div>
      <div className="text-3xl font-bold gradient-text mb-1">
        {stat.value}
      </div>
      <div className="text-gray-400 text-sm">
        {stat.label}
      </div>
    </motion.div>
  );
};

export default StatsCard;
