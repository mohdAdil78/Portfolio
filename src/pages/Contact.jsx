import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail, Send, Loader, CheckCircle, AlertCircle } from 'lucide-react';

// Reusable SocialCard Component
const SocialCard = ({ social, index }) => {
  const isEmail = social.title === 'Email';

  return (
    <motion.a
      href={social.href}
      target={isEmail ? '_self' : '_blank'}
      rel={isEmail ? '' : 'noopener noreferrer'}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ scale: 1.02, y: -3 }}
      className="glass-card group cursor-pointer block"
      aria-label={`Visit ${social.title} profile`}
    >
      <div className="flex items-center space-x-4">
        <div className={`p-3 rounded-lg bg-gradient-to-br ${social.color} group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
          <social.icon size={24} className="text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-lg font-semibold text-text-primary group-hover:text-accent-primary transition-colors duration-500 truncate">
            {social.title}
          </h4>
          <p className="text-text-muted text-sm truncate">
            {social.description}
          </p>
        </div>
        <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg
            className="w-5 h-5 text-accent-primary"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </div>
      </div>
    </motion.a>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [fieldErrors, setFieldErrors] = useState({});

  const socialCards = [
    {
      icon: Linkedin,
      title: 'LinkedIn',
      description: "Let's connect professionally",
      href: 'https://www.linkedin.com/in/mohammed-adil-288888249/',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Instagram,
      title: 'Instagram',
      description: 'Follow my journey',
      href: 'https://www.instagram.com/_.m.adil._/',
      color: 'from-pink-500 to-purple-600'
    },
    {
      icon: Github,
      title: 'GitHub',
      description: 'Check out my code',
      href: 'https://github.com/mohdAdil78',
      color: 'from-gray-600 to-gray-800'
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'Send me a message',
      href: 'mailto:mohdadil9cse@gmail.com',
      color: 'from-accent-primary to-accent-secondary'
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (fieldErrors[name]) {
      setFieldErrors(prev => ({ ...prev, [name]: '' }));
    }
    if (error) setError(null);
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name || formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters long';
    }
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please provide a valid email address';
    }
    if (!formData.message || formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long';
    }
    if (formData.message && formData.message.length > 2000) {
      errors.message = 'Message must be less than 2000 characters';
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setError('Please fix the errors below');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
        signal: controller.signal
      });

      clearTimeout(timeoutId);
      const data = await response.json();

      if (!response.ok) {
        if (data.errors && Array.isArray(data.errors)) {
          setFieldErrors(
            data.errors.reduce((acc, err) => {
              const field = err.toLowerCase().includes('name') ? 'name'
                : err.toLowerCase().includes('email') ? 'email'
                  : 'message';
              acc[field] = err;
              return acc;
            }, {})
          );
        }
        throw new Error(data.message || 'Failed to send message');
      }

      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setFieldErrors({});
      setTimeout(() => setIsSubmitted(false), 5000);

    } catch (err) {
      console.error('Form submission error:', err);
      let errorMessage = 'Failed to send message. Please try again later.';

      if (err.name === 'AbortError') {
        errorMessage = 'Request timed out. Please try again.';
      } else if (err.message && (err.message.includes('Failed to fetch') || err.message.includes('NetworkError') || err.message.includes('ERR_CONNECTION_REFUSED'))) {
        errorMessage = 'The contact service is currently unavailable. Please reach me directly at mohdadil9cse@gmail.com';
      } else if (err.message) {
        errorMessage = err.message;
      }

      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.name && formData.email && formData.message && Object.keys(fieldErrors).length === 0;

  return (
    <section id="contact" className="py-20 relative space-section pt-28 min-h-screen w-full overflow-hidden flex flex-col justify-center">
      <div className="absolute top-10 right-10 w-80 h-80 bg-accent-primary/10 rounded-full blur-3xl drifting-element pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-glow-highlight/10 rounded-full blur-3xl drifting-element pointer-events-none" style={{ animationDelay: '15s' }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Contact <span className="gradient-text">Me</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto mb-8">
            Have a project in mind or want to collaborate? I'd love to hear from you.
            Send me a message and let's create something amazing together.
          </p>
          <div className="w-24 h-1 bg-gradient-nebula mx-auto rounded-full shadow-glow-primary" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
          {/* Left - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="w-full flex flex-col"
          >
            <div className="glass-card">
              <h3 className="text-2xl font-bold text-text-primary mb-6">Send a Message</h3>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300 flex items-center gap-3"
                >
                  <CheckCircle size={20} className="flex-shrink-0" />
                  <div>
                    <p className="font-medium">Message sent successfully!</p>
                    <p className="text-sm opacity-90">I'll get back to you soon.</p>
                  </div>
                </motion.div>
              )}

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-300 flex items-center gap-3"
                >
                  <AlertCircle size={20} className="flex-shrink-0" />
                  <div>
                    <p className="font-medium">Error</p>
                    <p className="text-sm opacity-90">{error}</p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 glass border rounded-xl text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed bg-transparent ${fieldErrors.name
                      ? 'border-red-500/50 focus:border-red-500/50 focus:ring-red-500/20'
                      : 'border-glass-border focus:border-accent-primary/50 focus:ring-accent-primary/20'
                      }`}
                    placeholder="John Doe"
                  />
                  {fieldErrors.name && (
                    <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                      <AlertCircle size={14} />
                      {fieldErrors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 glass border rounded-xl text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed bg-transparent ${fieldErrors.email
                      ? 'border-red-500/50 focus:border-red-500/50 focus:ring-red-500/20'
                      : 'border-glass-border focus:border-accent-primary/50 focus:ring-accent-primary/20'
                      }`}
                    placeholder="mohdadil9cse@gmail.com"
                  />
                  {fieldErrors.email && (
                    <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                      <AlertCircle size={14} />
                      {fieldErrors.email}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    rows={5}
                    maxLength={2000}
                    className={`w-full px-4 py-3 glass border rounded-xl text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 transition-all duration-500 resize-none disabled:opacity-50 disabled:cursor-not-allowed bg-transparent ${fieldErrors.message
                      ? 'border-red-500/50 focus:border-red-500/50 focus:ring-red-500/20'
                      : 'border-glass-border focus:border-accent-primary/50 focus:ring-accent-primary/20'
                      }`}
                    placeholder="Tell me about your project..."
                  />
                  <div className="flex justify-between items-center mt-1">
                    {fieldErrors.message && (
                      <p className="text-sm text-red-400 flex items-center gap-1">
                        <AlertCircle size={14} />
                        {fieldErrors.message}
                      </p>
                    )}
                    <p className="text-xs text-text-muted ml-auto">
                      {formData.message.length}/2000 characters
                    </p>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 relative overflow-hidden transition-all duration-300"
                >
                  {isSubmitting ? (
                    <>
                      <Loader className="animate-spin" size={20} />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                  {isSubmitting && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Right - Social Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6 w-full flex flex-col"
          >
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-6">Connect With Me</h3>
              <p className="text-text-secondary mb-8">
                You can also reach me through these platforms. I'm always open to discussing new opportunities and interesting projects.
              </p>
            </div>

            <div className="space-y-4">
              {socialCards.map((social, index) => (
                <SocialCard key={social.title} social={social} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
