'use client';

import { motion } from 'framer-motion';
import { useInception } from '@/contexts/InceptionContext';
import SpinningTotem from '@/components/SpinningTotem';

export default function Layer2Dream() {
  const { goDeeper } = useInception();

  const timeline = [
    {
      year: '2025',
      role: 'Software Development Engineer',
      company: 'Goodspeed',
      achievement: 'Building enterprise SaaS infrastructure',
      details: 'Full-stack development with React, Node.js, and PostgreSQL. Microservices architecture design.',
      type: 'work'
    },
    {
      year: '2025',
      role: 'Exchange Student',
      company: 'Nagaoka University, Japan',
      achievement: 'Cross-cultural tech education',
      details: 'Focusing on AI systems and international collaboration in computer science research.',
      type: 'education'
    },
    {
      year: '2025',
      role: 'Research Intern',
      company: 'NTUST, Taiwan',
      achievement: '6% model accuracy improvement',
      details: 'MambaVision transformer research. Published findings on visual feature extraction optimization.',
      type: 'work'
    },
    {
      year: '2024',
      role: 'MSc Computer Science',
      company: 'TU Darmstadt, Germany',
      achievement: 'Elite technical university',
      details: 'Specializing in AI, Computer Vision, and 3D Data Processing. Focus on deep learning architectures.',
      type: 'education'
    },
    {
      year: '2023-24',
      role: 'Associate Software Engineer',
      company: 'Conga (Salesforce)',
      achievement: '99% uptime across 6 production instances',
      details: 'Enterprise application development, Salesforce integration, full-stack JavaScript, managed 1000+ user deployments.',
      type: 'work'
    },
    {
      year: '2021-23',
      role: 'Software Engineer',
      company: 'Cyber Security International',
      achievement: 'Managed 1000+ security profiles',
      details: 'MERN stack development, cybersecurity systems, profile management dashboard, automated testing.',
      type: 'work'
    },
    {
      year: '2021',
      role: 'Full Stack Intern',
      company: 'Maruti Suzuki India',
      achievement: 'Production deployment',
      details: 'Developed internal tools using React and Express. First exposure to enterprise-scale systems.',
      type: 'work'
    },
    {
      year: '2019-23',
      role: 'BTech Computer Engineering',
      company: 'DDU, India',
      achievement: '8.14 CGPA • State Scholarship Recipient',
      details: 'Foundation in algorithms, data structures, and systems programming. Led multiple student projects.',
      type: 'education'
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, rotateY: 180 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen relative overflow-hidden bg-gradient-to-b from-zinc-900 via-neutral-900 to-stone-900"
    >
      {/* Subtle moving particles */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-20 bg-gradient-to-b from-transparent via-amber-600 to-transparent"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-${Math.random() * 100}px`,
            }}
            animate={{
              y: ['0vh', '100vh'],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-20">
        {/* Layer Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl md:text-7xl font-light text-stone-200 mb-6 tracking-wide" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Layer Two
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-600/50 to-transparent mx-auto mb-6"></div>
          <p className="text-stone-500 text-sm tracking-widest uppercase">The Journey</p>
        </motion.div>

        {/* Narrative */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.5 }}
          className="text-stone-400 text-lg md:text-xl font-light text-center max-w-3xl mb-20 leading-relaxed"
        >
          Years compressed into moments. Each experience, each line of code, building the engineer.
        </motion.p>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="max-w-4xl w-full space-y-12 mb-20"
        >
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 + index * 0.15, duration: 0.6, ease: "easeOut" }}
              className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center gap-8`}
            >
              {/* Year */}
              <div className="w-24 text-right" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                <span className="text-2xl font-light text-amber-600/70">{item.year}</span>
              </div>

              {/* Line connector */}
              <div className="w-px h-20 bg-gradient-to-b from-amber-700/30 via-amber-600/50 to-amber-700/30"></div>

              {/* Content */}
              <div className="flex-1 bg-stone-900/20 border border-amber-900/20 backdrop-blur-sm p-6 hover:border-amber-700/40 transition-all duration-500 group">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-light text-stone-200 group-hover:text-amber-600/80 transition-colors" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {item.role}
                  </h3>
                  <span className={`text-xs px-3 py-1 rounded-full ${item.type === 'work' ? 'bg-amber-900/20 text-amber-600/70' : 'bg-stone-800/40 text-stone-500'}`}>
                    {item.type}
                  </span>
                </div>
                <p className="text-stone-500 text-sm mb-2 font-medium">{item.company}</p>
                {item.achievement && (
                  <p className="text-amber-700/60 text-xs italic mb-2">{item.achievement}</p>
                )}
                {item.details && (
                  <p className="text-stone-600 text-xs leading-relaxed">{item.details}</p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Time Dilation */}
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="text-amber-700/40 text-xs mb-12 tracking-widest uppercase"
        >
          Time: 1×400 Slower
        </motion.div>

        {/* Spinning Totem - Descend to Limbo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.5, duration: 0.8, type: "spring", stiffness: 100 }}
          className="mb-6"
        >
          <SpinningTotem
            onClick={goDeeper}
            label="Descend to Limbo"
          />
        </motion.div>

        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-amber-700/50 text-xs tracking-wider"
        >
          ⚠ Warning: Approaching unstable dream state
        </motion.p>
      </div>
    </motion.section>
  );
}
