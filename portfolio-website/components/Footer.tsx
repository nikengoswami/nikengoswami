'use client';

import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: FaGithub,
      href: 'https://github.com/nikengoswami',
      label: 'GitHub',
    },
    {
      icon: FaLinkedin,
      href: 'https://linkedin.com/in/niken-goswami-6bb231193',
      label: 'LinkedIn',
    },
    {
      icon: FaEnvelope,
      href: 'mailto:nikengirgoswami01@gmail.com',
      label: 'Email',
    },
  ];

  return (
    <footer className="bg-dark-card/50 border-t border-cyber-blue/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-bold gradient-text mb-4 cursor-pointer inline-block"
              onClick={scrollToTop}
            >
              Niken Goswami
            </motion.div>
            <p className="text-gray-400 text-sm">
              AI/ML Engineer & Full-Stack Developer
              <br />
              Turning 3D data into insights
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-gray-400 hover:text-cyber-blue transition-colors text-sm"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-dark-bg border border-cyber-blue/30 flex items-center justify-center text-cyber-blue hover:border-cyber-blue hover:bg-cyber-blue/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="text-lg" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cyber-blue/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} Niken Goswami. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center gap-2">
            Built with <FaHeart className="text-cyber-pink" /> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
