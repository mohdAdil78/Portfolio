import React from 'react';
import { motion } from 'framer-motion';
import { Download, Briefcase, Award, GraduationCap, Eye } from 'lucide-react';
import StatsCard from '../components/StatsCard';

const About = () => {
  const stats = [
    { icon: <Briefcase className="text-accent-primary" />, value: '25+', label: 'Total Projects' },
    { icon: <Award className="text-accent-secondary" />, value: '10+', label: 'Certificates' },
    { icon: <GraduationCap className="text-glow-highlight" />, value: '5+', label: 'Qualifications' },
  ];

  const navigateToCertificates = () => {
    sessionStorage.setItem('portfolioTab', 'certificates');
    const el = document.getElementById('portfolio');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navigateToProjects = () => {
    sessionStorage.setItem('portfolioTab', 'projects');
    const el = document.getElementById('portfolio');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navigateToEducation = () => {
    sessionStorage.setItem('portfolioTab', 'education');
    const el = document.getElementById('portfolio');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="about"
      style={{ minHeight: '100vh', overflowX: 'clip' }}
      className="py-20 relative space-section pt-28"
    >
      <div className="absolute top-10 right-10 w-64 h-64 bg-accent-secondary/10 rounded-full blur-2xl drifting-element" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-glow-highlight/10 rounded-full blur-2xl drifting-element" style={{ animationDelay: '10s' }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">About <span className="gradient-text">Me</span></h2>
          <div className="w-24 h-1 bg-gradient-nebula mx-auto rounded-full shadow-glow-primary" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Profile Image */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            <div className="relative w-64 h-64 mx-auto lg:mx-0 group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/30 to-glow-highlight/30 rounded-full blur-xl animate-glow group-hover:from-accent-primary/40 group-hover:to-glow-highlight/40 transition-all duration-300" />
              <div className="relative w-full h-full rounded-full overflow-hidden glass border-4 border-accent-primary/30 group-hover:border-accent-primary/50 transition-all duration-300 group-hover:scale-105">
                <img
                  src="/profile.jpg"
                  alt="Mohammed Adil - Profile Photo"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full bg-gradient-to-br from-accent-primary/20 to-glow-highlight/20 flex items-center justify-center" style={{ display: 'none' }}>
                  <div className="text-8xl">👨‍💻</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - About Content */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-text-primary mb-4">Passionate Frontend Developer</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                I'm a creative frontend developer with a passion for building beautiful, functional, and user-centered digital experiences. With expertise in modern JavaScript frameworks and a keen eye for design, I transform ideas into elegant web solutions.
              </p>
              <p className="text-text-secondary leading-relaxed mb-4">
                My journey in web development started with curiosity and evolved into a career focused on creating impactful applications. I specialize in React ecosystem and stay updated with the latest industry trends and best practices.
              </p>
              <p className="text-text-secondary leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>

            {/* CV Buttons */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="flex flex-col sm:flex-row gap-4">
              <a href="/cv.pdf" download="Mohammed_Adil_CV.pdf" className="btn-primary flex items-center justify-center gap-2 group relative overflow-hidden transition-all duration-300 hover:shadow-glow-primary" aria-label="Download CV as PDF">
                <Download size={20} className="group-hover:scale-110 transition-transform duration-300" />
                <span className="font-medium">Download CV</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </a>
              <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center justify-center gap-2 group relative overflow-hidden transition-all duration-300 hover:shadow-glow-secondary" aria-label="View CV in new tab">
                <Eye size={20} className="group-hover:scale-110 transition-transform duration-300" />
                <span className="font-medium">View CV</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-primary/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <StatsCard
                key={index}
                stat={stat}
                index={index}
                onClick={
                  stat.label === 'Total Projects'
                    ? navigateToProjects
                    : stat.label === 'Certificates'
                      ? navigateToCertificates
                      : stat.label === 'Qualifications'
                        ? navigateToEducation
                        : undefined
                }
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
