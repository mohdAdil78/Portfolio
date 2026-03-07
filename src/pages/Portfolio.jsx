import React, { useState, useEffect } from 'react';

import { motion } from 'framer-motion';

import ProjectCard from '../components/ProjectCard';

import EducationTab from '../components/EducationTab';

import CertificateImageCard from '../components/CertificateImageCard';

import TechStackCard from '../components/TechStackCard';



const Portfolio = () => {

  const [activeTab, setActiveTab] = useState('projects');

  const tabs = [
    { id: 'projects', label: 'Projects' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'education', label: 'Education' },
    { id: 'techstack', label: 'Tech Stack' },
  ];

  useEffect(() => {
    const savedTab = sessionStorage.getItem('portfolioTab');
    if (savedTab && tabs.find(tab => tab.id === savedTab)) {
      setActiveTab(savedTab);
      sessionStorage.removeItem('portfolioTab'); // Clear after use
    }
  }, []);



  const projects = [

    {

      id: 1,

      title: 'Autonomous Rover System using Arduino',

      subtitle: 'Robotics • Embedded Systems • C/C++',

      description: 'Designed and implemented an autonomous mobile rover platform based on the Arduino microcontroller, capable of real-time obstacle detection and navigation.',

      technologies: ['Arduino Uno', 'HC-SR04 Ultrasonic Sensor', 'L298N Motor Driver', 'DC Gear Motors', 'Embedded C', 'Arduino IDE', 'Robotics Control'],

      demoLink: '#',

      githubLink: '#',

      image: '/projects/autonomous-rover.png'

    },

    {

      id: 2,

      title: 'Automated FTIR Spectral Analysis System',

      subtitle: 'Spectroscopy • Data Analysis • Python',

      description: 'Developed an automated system for FTIR (Fourier Transform Infrared) spectroscopy data analysis to detect functional groups and identify spectral features such as peaks and minima.',

      technologies: ['Python', 'NumPy', 'SciPy', 'Pandas', 'Matplotlib', 'PCA', 'HTML', 'CSS', 'JavaScript'],

      demoLink: '#',

      githubLink: '#',

      image: '/projects/ftir-analysis.png'

    },

    {

      id: 3,

      title: 'Shanthi Sagar Catchment GIS Analysis',

      subtitle: 'GIS • Remote Sensing • Machine Learning',

      description: 'Performed a geospatial analysis of the Shanthi Sagar Lake catchment area using GIS and remote sensing to study land use patterns. Processed Sentinel-2 imagery in Google Earth Engine for LULC classification using a Random Forest classifier.',

      technologies: ['QGIS', 'Google Earth Engine', 'JavaScript', 'Sentinel-2', 'Remote Sensing', 'Random Forest'],

      demoLink: '#',

      githubLink: '#',

      image: '/projects/gis-catchment.png'

    },

    {

      id: 4,

      title: 'Automatic Solar Tracking System',

      subtitle: 'Embedded Systems • Renewable Energy • Arduino',

      description: 'Designed and developed a dual-axis solar tracking system that automatically aligns a solar panel with the sun to maximize energy output using LDR sensors and servo motors controlled by Arduino Uno.',

      technologies: ['Arduino Uno', 'LDR Sensors', 'Servo Motors', 'Embedded Programming', 'Solar Panel', 'Resistor Network', 'Breadboard Circuit Design'],

      demoLink: '#',

      githubLink: '#',

      image: '/projects/solar-tracker.png'

    },

    {

      id: 5,

      title: 'Python Keylogging & Monitoring Demonstration',

      subtitle: 'Cybersecurity Research • Python Automation • System Monitoring',

      description: 'Developed a Python-based monitoring tool for educational cybersecurity research, demonstrating how keystroke logging and screen capture mechanisms function at the system level. The project includes structured log storage, periodic screenshot capture, and automated email-based reporting for analysis purposes. It also supports compilation into a standalone executable for controlled testing environments.\n\nBuilt using Python with modular architecture, environment-based configuration, and file handling mechanisms, the project highlights understanding of system monitoring concepts, data logging, automation, and secure configuration management.',

      technologies: ['Python', 'SMTP', 'OS Module', 'PyAutoGUI', 'File Handling', 'Environment Variables'],

      demoLink: '#',

      githubLink: '#',

      image: '/projects/keylogger.png'

    },

    {

      id: 7,

      title: 'Enterprise Sales Analytics Platform',

      subtitle: 'Business Intelligence • Machine Learning • Analytics',

      description: 'End-to-end BI solution with ML forecasting, real-time anomaly detection, and an Excel-style data interface for enterprise sales intelligence.',

      technologies: ['Python', 'Streamlit', 'Scikit-Learn', 'Plotly', 'Pandas', 'Machine Learning'],

      demoLink: 'https://demo-sales-analytics.com',

      githubLink: 'https://github.com/username/sales-analytics-platform',

      image: '/projects/analytics-platform.png'

    }

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



  const education = [

    {

      title: 'Computer Science Degree',

      description: 'Bachelor of Science in Computer Science with focus on Software Engineering.',

      techStack: ['Algorithms', 'Data Structures', 'Software Design'],

      liveUrl: '#',

      githubUrl: '#',

      icon: '🎓'

    },

    {

      title: 'Web Development Bootcamp',

      description: 'Intensive bootcamp covering modern web development technologies and practices.',

      techStack: ['HTML/CSS', 'JavaScript', 'React', 'Node.js'],

      liveUrl: '#',

      githubUrl: '#',

      icon: '💻'

    }

  ];



  const techStack = [

    // Languages

    'JavaScript',

    'Python',

    'Java',

    'C',

    'SQL',

    'TypeScript',



    // Frontend

    'HTML5',

    'CSS3',

    'React.js',

    'Next.js',

    'Tailwind CSS',

    'Bootstrap',



    // Backend & APIs

    'Node.js',

    'REST APIs',



    // Databases

    'MongoDB',

    'MySQL',



    // Cloud & Deployment

    'Google Cloud Platform (GCP)',

    'Vercel',



    // Tools & Platforms

    'Git',

    'GitHub',

    'Postman',



    // Hardware / Embedded / GIS

    'Arduino',

    'QGIS',

    'GRASS GIS',

    'PCA'

  ];



  const renderContent = () => {

    switch (activeTab) {

      case 'projects':

        return (

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {projects.map((project, index) => (

              <ProjectCard key={index} project={project} index={index} />

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

      case 'education':

        return <EducationTab />;

      case 'techstack':

        return (

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">

            {techStack.map((tech, index) => (

              <TechStackCard key={index} tech={tech} index={index} />

            ))}

          </div>

        );

      default:

        return (

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {projects.map((project, index) => (

              <ProjectCard key={index} project={project} index={index} />

            ))}

          </div>

        );

    }

  };



  return (

    <section id="portfolio" className="py-20 relative space-section">

      <div className="absolute top-20 left-20 w-72 h-72 bg-glow-highlight/10 rounded-full blur-2xl floating-element" />

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-accent-secondary/10 rounded-full blur-2xl floating-element" style={{ animationDelay: '3s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}

        <motion.div

          initial={{ opacity: 0, y: 30 }}

          whileInView={{ opacity: 1, y: 0 }}

          viewport={{ once: true }}

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

          initial={{ opacity: 0, y: 20 }}

          whileInView={{ opacity: 1, y: 0 }}

          viewport={{ once: true }}

          className="flex flex-wrap justify-center gap-2 mb-12"

        >

          {tabs.map((tab) => (

            <button

              key={tab.id}

              data-tab={tab.id}

              onClick={() => setActiveTab(tab.id)}

              className={`px-6 py-3 rounded-xl font-medium transition-all duration-500 ${activeTab === tab.id

                ? 'bg-accent-primary/20 text-accent-primary border border-accent-primary/30 shadow-glow-primary'

                : 'glass text-text-secondary hover:bg-glass-bg hover:text-text-primary'

                }`}

            >

              {tab.label}

            </button>

          ))}

        </motion.div>



        {/* Content Area */}

        <motion.div

          initial={{ opacity: 0, y: 20 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.5 }}

          className="w-full"

        >

          {renderContent()}

        </motion.div>

      </div>

    </section>

  );

};



export default Portfolio;

