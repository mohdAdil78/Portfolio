import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/mohdAdil78', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/mohammed-adil-288888249/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/_.m.adil._/', label: 'Instagram' },
    { icon: Mail, href: 'mailto:mohdadil9cse@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="relative w-full overflow-hidden glass border-t border-glass-border mt-20 backdrop-blur-nebula">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-accent-primary/5 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col items-center md:items-start text-center md:text-left w-full"
          >
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#a855f7] via-[#6366f1] to-[#22d3ee] mb-4">
              Mohammed Adil
            </h3>
            <p className="text-text-secondary mb-6 max-w-sm">
              Engineering Graduate & Full-Stack Developer
              <br /><br />
              Passionate about AI, IoT systems, Data Science, and building secure, high-performance applications.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -4 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-[#94a3b8] hover:text-white hover:bg-[#3b82f6]/10 hover:border-[#3b82f6]/30 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center md:items-start text-center md:text-left w-full"
          >
            <h4 className="text-lg font-semibold text-text-primary mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-text-muted hover:text-[#3b82f6] transition-all duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center md:items-start text-center md:text-left w-full"
          >
            <h4 className="text-lg font-semibold text-text-primary mb-4">Get In Touch</h4>
            <div className="space-y-2 text-text-secondary">
              <p>Ready to bring your ideas to life?</p>
              <p>Let's create something amazing together.</p>
              <a
                href="mailto:mohdadil9cse@gmail.com"
                className="text-[#3b82f6] hover:text-[#06b6d4] transition-all duration-300 font-medium"
              >
                mohdadil9cse@gmail.com
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="border-t border-glass-border mt-8 pt-8 text-center"
        >
          <p className="text-text-muted flex items-center justify-center gap-2">
            Made with <Heart className="text-red-500" size={16} /> by a passionate developer
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
