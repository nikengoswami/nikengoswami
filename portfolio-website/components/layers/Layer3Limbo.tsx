'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';

export default function Layer3Limbo() {
  const philosophyLines = [
    'Born in Nadiad, India. Scholarship recipient.',
    '8.14 CGPA. State merit. First in family to pursue CS.',
    'Crossed continents. Taiwan. Japan. Germany. Seeking knowledge.',
    'From university projects to enterprise systems serving thousands.',
    'From MERN stack to PyTorch transformers. Always learning.',
    'From 2D web interfaces to 3D point cloud intelligence.',
    'The mission: Build systems that create impact.',
    'Turn complex data into actionable insights.',
    'At the deepest level — curiosity drives everything.',
  ];

  // Generate particle positions for CSS
  const particles = useMemo(() => {
    return Array.from({ length: 150 }, (_, i) => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, scale: 2 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 2 }}
      className="min-h-screen relative overflow-hidden bg-black"
    >
      {/* CSS Particle System */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: '#d4af37',
              boxShadow: '0 0 10px #d4af37',
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Rotating wireframe effect */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
          <div className="w-64 h-64 border border-amber-900/20 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-amber-800/30 rounded-full" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 2 }}
          className="text-center mb-16"
        >
          <motion.h2
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="text-7xl md:text-9xl font-light text-stone-200 mb-6 tracking-widest"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            LIMBO
          </motion.h2>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-600/30 to-transparent mx-auto mb-6"></div>
          <motion.p
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="text-stone-600 text-xs tracking-widest uppercase"
          >
            Unconstructed Dream Space
          </motion.p>
        </motion.div>

        {/* Philosophy Text - Cycling */}
        <div className="max-w-3xl text-center mb-20 h-32 flex items-center justify-center">
          {philosophyLines.map((line, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 4,
                delay: index * 4,
                repeat: Infinity,
                repeatDelay: (philosophyLines.length - 1) * 4,
              }}
              className="absolute text-stone-500 text-lg md:text-xl font-light italic"
            >
              {line}
            </motion.p>
          ))}
        </div>

        {/* Core Achievements - Expanded */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mb-20"
        >
          {[
            { metric: '94.78%', label: 'Point Cloud Accuracy' },
            { metric: '99%', label: 'System Uptime' },
            { metric: '6%', label: 'Research Improvement' },
            { metric: '1000+', label: 'Users Served' },
            { metric: '3', label: 'Continents Explored' },
            { metric: '2', label: 'Scholarships Earned' },
            { metric: '1.46M', label: '3D Points Classified' },
            { metric: '8.14', label: 'CGPA Achievement' },
          ].map((achievement, index) => (
            <motion.div
              key={index}
              animate={{
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 3,
                delay: index * 0.3,
                repeat: Infinity,
              }}
              className="text-center p-4 border border-amber-900/20 bg-stone-900/10 backdrop-blur-sm"
            >
              <p className="text-amber-600/80 text-2xl font-light mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                {achievement.metric}
              </p>
              <p className="text-stone-600 text-xs uppercase tracking-wider">{achievement.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Technical Skills Summary */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 2 }}
          className="max-w-4xl mb-20"
        >
          <div className="border border-amber-900/20 bg-stone-900/10 backdrop-blur-sm p-8">
            <h3 className="text-xl font-light text-amber-600/70 mb-6 text-center tracking-wider" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Core Technical Arsenal
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-stone-500 text-sm">
              <div>
                <h4 className="text-amber-700/60 text-xs uppercase tracking-widest mb-2">AI & ML</h4>
                <p className="font-light leading-relaxed">PyTorch • TensorFlow • PointNet++ • Transformers • Computer Vision • 3D Deep Learning</p>
              </div>
              <div>
                <h4 className="text-amber-700/60 text-xs uppercase tracking-widest mb-2">Full-Stack</h4>
                <p className="font-light leading-relaxed">React • Node.js • TypeScript • PostgreSQL • MongoDB • Docker • Microservices</p>
              </div>
              <div>
                <h4 className="text-amber-700/60 text-xs uppercase tracking-widest mb-2">Systems</h4>
                <p className="font-light leading-relaxed">CUDA • ROS • Salesforce • CI/CD • Linux • AWS • Git • Agile</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Time indicator */}
        <motion.div
          animate={{
            opacity: [0.2, 0.5, 0.2],
            color: ['#d4af37', '#c9a961', '#8b7355', '#d4af37'],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="text-sm mb-12 font-mono tracking-wider"
        >
          TIME: ∞ | UNSTABLE DREAM STATE
        </motion.div>

        {/* Final message */}
        <motion.div
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="text-center space-y-4"
        >
          <p className="text-amber-700/50 text-sm">⚠ Deepest layer reached</p>
          <p className="text-stone-700 text-xs">Use KICK button to return to reality</p>
        </motion.div>
      </div>

      {/* Glitch effect */}
      <motion.div
        animate={{
          opacity: [0, 0.1, 0],
          x: [0, 3, -3, 0],
        }}
        transition={{ duration: 0.15, repeat: Infinity, repeatDelay: 5 }}
        className="absolute inset-0 pointer-events-none bg-amber-900/5"
      />
    </motion.section>
  );
}
