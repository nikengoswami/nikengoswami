'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import { useState } from 'react';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (you can integrate with a backend service)
    const mailtoLink = `mailto:nikengirgoswami01@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'nikengirgoswami01@gmail.com',
      href: 'mailto:nikengirgoswami01@gmail.com',
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '(+49) 01747660722',
      href: 'tel:+4901747660722',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Darmstadt, Germany',
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      label: 'GitHub',
      href: 'https://github.com/nikengoswami',
      color: 'hover:text-gray-400',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/niken-goswami-6bb231193',
      color: 'hover:text-blue-400',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyber-blue to-cyber-purple mx-auto mb-4"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              I&apos;m always open to discussing new opportunities, collaborations, or just having a chat about AI/ML and technology.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyber-blue to-cyber-purple flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <info.icon className="text-xl text-white" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-white hover:text-cyber-blue transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-white">{info.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Connect With Me
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-full bg-dark-card border-2 border-cyber-blue/50 flex items-center justify-center text-cyber-blue ${social.color} transition-all duration-300`}
                    >
                      <social.icon className="text-xl" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-card border border-cyber-blue/30 rounded-lg text-white focus:border-cyber-blue focus:outline-none transition-colors"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-card border border-cyber-blue/30 rounded-lg text-white focus:border-cyber-blue focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-card border border-cyber-blue/30 rounded-lg text-white focus:border-cyber-blue focus:outline-none transition-colors"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-dark-card border border-cyber-blue/30 rounded-lg text-white focus:border-cyber-blue focus:outline-none transition-colors resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-cyber-blue to-cyber-purple text-white font-semibold rounded-lg shadow-lg hover:shadow-cyber-blue/50 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FaPaperPlane />
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
