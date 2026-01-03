'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface CyberpunkEntryProps {
  onSelectPath: (path: 'nomad' | 'corpo') => void;
}

export default function CyberpunkEntry({ onSelectPath }: CyberpunkEntryProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredPath, setHoveredPath] = useState<'nomad' | 'corpo' | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-[#0a0014] via-[#1a0033] to-[#0a0014] overflow-hidden">
      {/* Cyberpunk grid background */}
      <div className="absolute inset-0 cyber-grid" />

      {/* Scan lines */}
      <div className="scan-lines absolute inset-0" />

      {/* Data stream particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[2px] h-20 bg-gradient-to-b from-transparent via-[var(--neon-cyan)] to-transparent"
          style={{
            left: `${Math.random() * 100}%`,
            opacity: 0.3,
          }}
          animate={{
            y: ['0vh', '100vh'],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: 'linear',
          }}
        />
      ))}

      {/* Glowing orbs with parallax */}
      <motion.div
        className="absolute top-20 left-20 w-96 h-96 rounded-full bg-[var(--neon-cyan)] opacity-10 blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          x: mousePos.x * 2,
          y: mousePos.y * 2,
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-[var(--neon-magenta)] opacity-10 blur-[120px]"
        animate={{
          scale: [1.2, 1, 1.2],
          x: mousePos.x * -2,
          y: mousePos.y * -2,
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        {/* Title with glitch effect */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center mb-16"
        >
          <h1
            className="text-8xl md:text-[12rem] font-black mb-4 neon-text"
            style={{ fontFamily: 'Orbitron, monospace' }}
            data-text="NIKEN"
          >
            NIKEN
          </h1>
          <motion.div
            className="text-2xl md:text-3xl tracking-[0.3em] gradient-text font-medium"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            CHOOSE YOUR PATH
          </motion.div>
        </motion.div>

        {/* Path selection cards */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl w-full">
          {/* NOMAD Card */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            onHoverStart={() => setHoveredPath('nomad')}
            onHoverEnd={() => setHoveredPath(null)}
            onClick={() => onSelectPath('nomad')}
            className="relative group cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--neon-yellow)] to-[var(--neon-green)] opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300" />

            <div className="relative border-2 border-[var(--neon-yellow)] p-12 backdrop-blur-sm bg-[#0a0014]/50 hover:bg-[#0a0014]/70 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(255,255,0,0.5)]">
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-[var(--neon-yellow)]" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-[var(--neon-yellow)]" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-[var(--neon-yellow)]" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-[var(--neon-yellow)]" />

              <motion.div
                animate={{
                  scale: hoveredPath === 'nomad' ? 1.05 : 1,
                }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <h2 className="text-6xl md:text-7xl font-black mb-6 text-[var(--neon-yellow)] drop-shadow-[0_0_20px_rgba(255,255,0,0.8)]">
                  NOMAD
                </h2>
                <p className="text-xl md:text-2xl text-white/80 font-light tracking-wide leading-relaxed">
                  THE WANDERER&apos;S JOURNEY
                </p>
                <p className="text-base md:text-lg text-white/60 mt-4 font-light">
                  Travel stories, adventures, and the open road
                </p>

                {/* Animated bars */}
                <div className="mt-8 space-y-2">
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      className="h-1 bg-gradient-to-r from-[var(--neon-yellow)] to-transparent"
                      animate={{
                        width: hoveredPath === 'nomad' ? '100%' : '60%',
                        opacity: hoveredPath === 'nomad' ? [0.5, 1, 0.5] : 0.3,
                      }}
                      transition={{
                        width: { duration: 0.3 },
                        opacity: { duration: 1, repeat: Infinity },
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* CORPO Card */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            onHoverStart={() => setHoveredPath('corpo')}
            onHoverEnd={() => setHoveredPath(null)}
            onClick={() => onSelectPath('corpo')}
            className="relative group cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--neon-cyan)] to-[var(--neon-magenta)] opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300" />

            <div className="relative border-2 border-[var(--neon-cyan)] p-12 backdrop-blur-sm bg-[#0a0014]/50 hover:bg-[#0a0014]/70 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(0,240,255,0.5)]">
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-[var(--neon-cyan)]" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-[var(--neon-cyan)]" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-[var(--neon-cyan)]" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-[var(--neon-cyan)]" />

              <motion.div
                animate={{
                  scale: hoveredPath === 'corpo' ? 1.05 : 1,
                }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <h2 className="text-6xl md:text-7xl font-black mb-6 text-[var(--neon-cyan)] drop-shadow-[0_0_20px_rgba(0,240,255,0.8)]">
                  CORPO
                </h2>
                <p className="text-xl md:text-2xl text-white/80 font-light tracking-wide leading-relaxed">
                  THE PROFESSIONAL NETWORK
                </p>
                <p className="text-base md:text-lg text-white/60 mt-4 font-light">
                  Projects, skills, and achievements
                </p>

                {/* Animated bars */}
                <div className="mt-8 space-y-2">
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      className="h-1 bg-gradient-to-r from-[var(--neon-cyan)] to-transparent"
                      animate={{
                        width: hoveredPath === 'corpo' ? '100%' : '60%',
                        opacity: hoveredPath === 'corpo' ? [0.5, 1, 0.5] : 0.3,
                      }}
                      transition={{
                        width: { duration: 0.3 },
                        opacity: { duration: 1, repeat: Infinity },
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Footer text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 text-center text-white/40 text-sm tracking-[0.2em]"
        >
          NEURAL INTERFACE ACTIVE // BIOMETRIC ID CONFIRMED
        </motion.div>
      </div>
    </div>
  );
}
