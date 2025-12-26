'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaUniversity, FaBriefcase, FaGraduationCap } from 'react-icons/fa';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    <section id="about" className="section-padding bg-dark-card/30">
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
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyber-blue to-cyber-purple mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo Placeholder */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-2xl blur-xl opacity-50"></div>
                <div className="relative aspect-square bg-dark-card rounded-2xl border-2 border-cyber-blue/50 flex items-center justify-center overflow-hidden">
                  {/* Placeholder for profile image */}
                  <div className="w-full h-full bg-gradient-to-br from-cyber-blue/20 to-cyber-purple/20 flex items-center justify-center">
                    <span className="text-6xl font-bold text-cyber-blue/50">NG</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bio Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I&apos;m a Master&apos;s student at <span className="text-cyber-blue font-semibold">TU Darmstadt</span> pursuing
                Data Science & Engineering, with a deep passion for artificial intelligence and 3D computer vision.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                Currently on exchange at <span className="text-cyber-purple font-semibold">Nagaoka University of Technology</span> in
                Japan, I&apos;m expanding my expertise in deep learning and cutting-edge AI research.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                My journey includes impactful roles as a <span className="text-cyber-blue font-semibold">Research Intern at NTUST</span> (Taiwan),
                where I worked on transformer-based vision models, and as an <span className="text-cyber-purple font-semibold">Associate
                Software Engineer at Conga</span>, where I honed my Salesforce and full-stack development skills.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                I&apos;m passionate about turning complex 3D data into actionable insights, building robust AI systems, and
                creating software that makes a real impact.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center p-4 bg-dark-bg/50 rounded-lg border border-cyber-blue/30">
                  <FaGraduationCap className="text-3xl text-cyber-blue mx-auto mb-2" />
                  <p className="text-2xl font-bold text-white">MSc</p>
                  <p className="text-sm text-gray-400">Student</p>
                </div>
                <div className="text-center p-4 bg-dark-bg/50 rounded-lg border border-cyber-purple/30">
                  <FaBriefcase className="text-3xl text-cyber-purple mx-auto mb-2" />
                  <p className="text-2xl font-bold text-white">3+</p>
                  <p className="text-sm text-gray-400">Years Exp</p>
                </div>
                <div className="text-center p-4 bg-dark-bg/50 rounded-lg border border-cyber-pink/30">
                  <FaUniversity className="text-3xl text-cyber-pink mx-auto mb-2" />
                  <p className="text-2xl font-bold text-white">5+</p>
                  <p className="text-sm text-gray-400">Projects</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
