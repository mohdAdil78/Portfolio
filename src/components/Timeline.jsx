import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, MapPin, Calendar } from 'lucide-react';

const TimelineItem = ({ item, index, isLeft }) => {
  const isEducation = item.type === 'education';
  const Icon = isEducation ? GraduationCap : Briefcase;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className={`relative flex items-center mb-12 last:mb-0 ${
        isLeft ? 'lg:flex-row-reverse' : 'lg:flex-row'
      } flex-col-reverse`}
    >
      {/* Timeline Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-accent-primary/20 via-accent-primary/40 to-accent-secondary/20 lg:block hidden" />
      
      {/* Date Badge */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="relative z-10 flex-shrink-0 mx-6 lg:mx-0 mb-6 lg:mb-0"
      >
        <div className={`relative ${isLeft ? 'lg:mr-8' : 'lg:ml-8'}`}>
          {/* Glow Ring */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full blur-xl opacity-50 animate-pulse" />
          
          {/* Badge */}
          <div className="relative glass border-2 border-accent-primary/30 rounded-full p-4 flex items-center justify-center group hover:border-accent-primary/60 transition-all duration-300">
            <div className="text-center">
              <Icon size={24} className="text-accent-primary mx-auto mb-1 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-xs font-bold text-text-primary whitespace-nowrap">
                {item.period}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Content Card */}
      <motion.div
        whileHover={{ 
          scale: 1.02,
          boxShadow: '0 0 30px rgba(124,124,255,0.3)'
        }}
        className={`glass-card cursor-pointer group ${
          isLeft ? 'lg:mr-auto lg:text-right' : 'lg:ml-auto lg:text-left'
        } text-center w-full lg:w-5/12`}
      >
        <div className="p-6">
          {/* Card Header */}
          <div className="mb-4">
            <h3 className={`text-xl font-bold text-text-primary mb-2 group-hover:text-accent-primary transition-colors duration-300 ${
              isLeft ? 'lg:text-right' : 'lg:text-left'
            }`}>
              {item.title}
            </h3>
            <p className={`text-accent-secondary font-medium mb-1 ${
              isLeft ? 'lg:text-right' : 'lg:text-left'
            }`}>
              {item.subtitle}
            </p>
            {item.location && (
              <div className={`flex items-center justify-center gap-1 text-text-muted text-sm ${
                isLeft ? 'lg:justify-end' : 'lg:justify-start'
              }`}>
                <MapPin size={14} />
                <span>{item.location}</span>
              </div>
            )}
          </div>

          {/* Card Content */}
          <div className="space-y-2">
            {item.mode && (
              <div className="flex items-center justify-center gap-2">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  item.mode === 'Online' 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                    : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                }`}>
                  {item.mode}
                </span>
              </div>
            )}
            
            {item.cgpa && (
              <div className="text-text-muted text-sm">
                <span className="font-medium text-accent-secondary">CGPA:</span> {item.cgpa}
              </div>
            )}
            
            {item.description && (
              <p className="text-text-secondary text-sm leading-relaxed">
                {item.description}
              </p>
            )}
          </div>

          {/* Hover Effect Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl" />
        </div>
      </motion.div>
    </motion.div>
  );
};

const Timeline = ({ items }) => {
  return (
    <div className="relative">
      {/* Timeline Container */}
      <div className="relative">
        {items.map((item, index) => (
          <TimelineItem 
            key={item.id} 
            item={item} 
            index={index}
            isLeft={index % 2 === 0}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
