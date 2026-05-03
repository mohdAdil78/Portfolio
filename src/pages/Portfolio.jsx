import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import EducationTab from '../components/EducationTab';
import ExperienceTab from '../components/ExperienceTab';
import CertificateImageCard from '../components/CertificateImageCard';
import TechStackCard from '../components/TechStackCard';
import { projectsData as projects } from '../data/projectsData';

const tabs = [
  { id: 'projects', label: 'Projects' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'techstack', label: 'Tech Stack' },
];

const certificates = [
  {
    title: 'Google Cloud – Managing Cloud Infrastructure with Terraform',
    imageUrl: '/certificates/Certificate-1.jpg',
    skills: ['Terraform', 'Infrastructure as Code (IaC)', 'Google Cloud Platform (GCP)', 'Cloud Automation', 'DevOps Basics']
  },
  {
    title: 'Cisco – Computer Hardware Basics',
    imageUrl: '/certificates/Certificate-2.jpg',
    skills: ['Computer Hardware', 'System Components', 'Hardware Troubleshooting', 'Networking Basics', 'IT Support Fundamentals']
  },
  {
    title: 'ServiceNow – Welcome to ServiceNow',
    imageUrl: '/certificates/Certificate-3.jpg',
    skills: ['ServiceNow Platform', 'IT Service Management (ITSM)', 'Incident Management', 'Workflow Automation', 'SaaS Applications']
  },
  {
    title: 'Infosys – Python Foundation Certification',
    imageUrl: '/certificates/Certificate-4.jpg',
    skills: ['Python Programming', 'Object-Oriented Programming', 'Data Structures Basics', 'Logical Problem Solving', 'Scripting']
  },
  {
    title: 'IEEE / AIET – Satellite Image Processing Workshop',
    imageUrl: '/certificates/Certificate-5.jpg',
    skills: ['Satellite Image Processing', 'Remote Sensing', 'GIS Fundamentals', 'Image Analysis', 'Geospatial Data']
  },
  {
    title: 'Talent Insight Solutions – Employability Skill Training',
    imageUrl: '/certificates/Certificate-6.jpg',
    skills: ['Professional Communication', 'Interview Skills', 'Teamwork', 'Time Management', 'Workplace Readiness']
  },
  {
    title: 'Pantech Solutions – AI Master Class',
    imageUrl: '/certificates/Certificate-7.jpg',
    skills: ['Artificial Intelligence', 'Machine Learning Basics', 'Python for AI', 'Data Analysis', 'Model Training Concepts']
  },
  {
    title: 'IJARIIE – Research Paper Publication',
    imageUrl: '/certificates/Certificate-8.jpg',
    skills: ['Research Methodology', 'Technical Writing', 'Data Analysis', 'Signal Processing', 'Analytical Thinking']
  },
  {
    title: 'MyGov / ISRO – Chandrayaan-3 Mahaquiz',
    imageUrl: '/certificates/Certificate-9.jpg',
    skills: ['Space Science Awareness', 'ISRO Missions Knowledge', 'Scientific Aptitude', 'General Science', 'National-Level Participation']
  }
];

const techStackCategories = [
  { title: 'Languages',         techs: ['JavaScript', 'Python', 'Java', 'C', 'SQL', 'TypeScript'] },
  { title: 'Frontend',          techs: ['HTML5', 'CSS3', 'React.js', 'Next.js', 'Tailwind CSS', 'Bootstrap'] },
  { title: 'Backend & APIs',    techs: ['Node.js', 'REST APIs'] },
  { title: 'Databases',         techs: ['MongoDB', 'MySQL'] },
  { title: 'Cloud & Tools',     techs: ['Google Cloud Platform (GCP)', 'Vercel', 'Git', 'GitHub', 'Postman'] },
  { title: 'Embedded & GIS',    techs: ['Arduino', 'QGIS', 'GRASS GIS', 'PCA'] },
  { title: 'AI & Dev Tools',    techs: ['Antigravity', 'Claude', 'Google AI Studio', 'Cursor', 'Windsurf', 'Firebase', 'OpenAI', 'DeepSeek', 'Hugging Face', 'LangChain', 'GitHub Copilot'] },
];

const tabVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.25, 1, 0.5, 1] } },
  exit:    { opacity: 0, y: -8, transition: { duration: 0.2,  ease: 'easeIn' } },
};

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('projects');

  useEffect(() => {
    const savedTab = sessionStorage.getItem('portfolioTab');
    if (savedTab && tabs.find(tab => tab.id === savedTab)) {
      setActiveTab(savedTab);
      sessionStorage.removeItem('portfolioTab');
    }
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'projects':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        );

      case 'certificates':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((certificate, index) => (
              <CertificateImageCard key={index} certificate={certificate} index={index} />
            ))}
          </div>
        );

      case 'experience':
        return <ExperienceTab />;

      case 'education':
        return <EducationTab />;

      case 'techstack':
        return (
          <div className="space-y-16">
            {techStackCategories.map((category, catIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: catIndex * 0.06 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <h3 className="text-xl font-bold text-white whitespace-nowrap">
                    <span className="text-accent-primary mr-2">{'//'}</span>
                    {category.title}
                  </h3>
                  <div className="h-[1px] w-full bg-gradient-to-r from-white/10 to-transparent" />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                  {category.techs.map((tech, index) => (
                    <TechStackCard key={tech} tech={tech} index={index} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        );

      default:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        );
    }
  };

  return (
    <section id="portfolio" className="py-20 relative space-section">
      <div className="absolute top-20 left-20 w-72 h-72 bg-glow-highlight/10 rounded-full blur-2xl floating-element pointer-events-none" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-accent-secondary/10 rounded-full blur-2xl floating-element pointer-events-none" style={{ animationDelay: '3s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: [0.25, 1, 0.5, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Portfolio <span className="gradient-text">Showcase</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto mb-8">
            Explore my latest projects, certifications, educational background, and technical skills.
            Each project represents a unique challenge and learning opportunity.
          </p>
          <div className="w-24 h-1 bg-gradient-nebula mx-auto rounded-full shadow-glow-primary" />
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              data-tab={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-accent-primary/20 text-accent-primary border border-accent-primary/30 shadow-glow-primary'
                  : 'glass text-text-secondary hover:bg-glass-bg hover:text-text-primary'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Content Area with smooth AnimatePresence transition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={tabVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full"
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Portfolio;
