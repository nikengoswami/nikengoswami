'use client';

import { motion } from 'framer-motion';
import { FaDownload, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden section-padding"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-cyber-blue/10 rounded-full blur-3xl top-20 -left-20 animate-float"></div>
        <div className="absolute w-96 h-96 bg-cyber-purple/10 rounded-full blur-3xl bottom-20 -right-20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="text-cyber-blue text-lg md:text-xl font-mono">
              Hi, I&apos;m
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 gradient-text"
          >
            Niken Goswami
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-300 mb-4"
          >
            Creative Technologist
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto"
          >
            MSc @ TU Darmstadt | SDE @ Goodspeed
            <br />
            <span className="text-cyber-blue">Building at the intersection of AI, 3D Vision & Full-Stack</span>
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex justify-center space-x-6 mb-12"
          >
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              href="https://github.com/nikengoswami"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-400 hover:text-cyber-blue transition-colors"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: -5 }}
              href="https://linkedin.com/in/niken-goswami-6bb231193"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-400 hover:text-cyber-blue transition-colors"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              href="mailto:nikengirgoswami01@gmail.com"
              className="text-3xl text-gray-400 hover:text-cyber-blue transition-colors"
            >
              <FaEnvelope />
            </motion.a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#projects')}
              className="px-8 py-4 bg-gradient-to-r from-cyber-blue to-cyber-purple text-white font-semibold rounded-lg shadow-lg hover:shadow-cyber-blue/50 transition-all duration-300"
            >
              View Projects
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf"
              download
              className="px-8 py-4 border-2 border-cyber-blue text-cyber-blue font-semibold rounded-lg hover:bg-cyber-blue/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <FaDownload />
              Download Resume
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#contact')}
              className="px-8 py-4 border-2 border-cyber-purple text-cyber-purple font-semibold rounded-lg hover:bg-cyber-purple/10 transition-all duration-300"
            >
              Contact Me
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-cyber-blue rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-3 bg-cyber-blue rounded-full mt-2"
              ></motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
