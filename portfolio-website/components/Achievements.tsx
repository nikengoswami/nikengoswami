'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaTrophy, FaAward, FaChartLine, FaServer } from 'react-icons/fa';

export default function Achievements() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    {
      icon: FaTrophy,
      title: 'NTUST_OIA_TEEP Scholarship',
      description: 'Awarded prestigious scholarship for research internship at National Taiwan University of Science and Technology',
      year: '2024',
      color: 'from-cyber-blue to-cyan-400',
    },
    {
      icon: FaAward,
      title: 'State Scholarship Recipient',
      description: 'Mukhyamantri Yuva Swavalamban Yojana Award for academic excellence throughout undergraduate studies',
      year: '2019-2023',
      color: 'from-cyber-purple to-purple-400',
    },
    {
      icon: FaChartLine,
      title: 'Point Cloud Excellence',
      description: '94.78% accuracy on MMS point cloud classification, exceeding target of 88-90% by significant margin',
      year: '2025',
      color: 'from-cyber-pink to-pink-400',
    },
    {
      icon: FaServer,
      title: 'Enterprise Reliability',
      description: 'Maintained 99% uptime managing 6 Salesforce production instances serving thousands of users',
      year: '2023-2024',
      color: 'from-cyan-400 to-blue-400',
    },
  ];

  const stats = [
    { value: '94.78%', label: 'Point Cloud Accuracy' },
    { value: '99%', label: 'System Uptime' },
    { value: '6%', label: 'Model Improvement' },
    { value: '1000+', label: 'Users Impacted' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="achievements" className="section-padding bg-dark-card/30">
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
              Achievements & Highlights
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyber-blue to-cyber-purple mx-auto"></div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-dark-bg/50 rounded-xl border border-cyber-blue/30 hover:border-cyber-blue/60 transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                className="relative group"
              >
                <div className="bg-dark-bg/80 border border-cyber-blue/30 rounded-xl p-6 hover:border-cyber-blue/60 transition-all duration-300 h-full">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <achievement.icon className="text-2xl text-white" />
                  </div>

                  {/* Content */}
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white">
                      {achievement.title}
                    </h3>
                    <span className="text-cyber-blue text-sm font-semibold">
                      {achievement.year}
                    </span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {achievement.description}
                  </p>

                  {/* Glow Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300 pointer-events-none`}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
