'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface MatureEntryProps {
  onSelectPath: (path: 'nomad' | 'corpo') => void;
}

export default function MatureEntry({ onSelectPath }: MatureEntryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-black relative overflow-hidden">
      {/* Grain overlay for texture */}
      <div className="grain-overlay" />

      {/* Minimal grid structure */}
      <div className="fixed inset-0 grid-lines opacity-20" />

      {/* Subtle gradient vignette */}
      <div className="fixed inset-0 bg-gradient-radial from-transparent via-transparent to-black opacity-60" />

      {/* Parallax background elements */}
      <motion.div
        className="fixed top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px]"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)',
          x: mousePosition.x * 0.5,
          y: mousePosition.y * 0.5,
        }}
      />

      <motion.div
        className="fixed bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-[120px]"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 70%)',
          x: mousePosition.x * -0.3,
          y: mousePosition.y * -0.3,
        }}
      />

      {/* Main content */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6"
      >
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24"
        >
          <h1 className="text-[120px] md:text-[180px] font-bold mb-6 tracking-tighter leading-none">
            NIKEN
          </h1>
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-12 bg-white opacity-20" />
            <p className="text-sm md:text-base tracking-[0.3em] text-white/40 uppercase font-light">
              AI Engineer & Explorer
            </p>
            <div className="h-[1px] w-12 bg-white opacity-20" />
          </div>
        </motion.div>

        {/* Path selection */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl w-full">
          {/* NOMAD Path */}
          <motion.button
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => onSelectPath('nomad')}
            className="group relative p-12 border border-white/10 hover:border-white/20 transition-all duration-700 bg-black/40 backdrop-blur-sm overflow-hidden"
          >
            {/* Hover gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-8">
                <span className="text-xs tracking-[0.3em] text-white/30 uppercase">01</span>
                <motion.div
                  className="w-2 h-2 bg-white rounded-full opacity-30"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </div>

              <h2 className="text-5xl md:text-6xl font-semibold mb-4 tracking-tight">
                NOMAD
              </h2>
              <p className="text-white/50 text-lg leading-relaxed font-light">
                The journey. Stories from distant places, lessons from the road, perspectives gained through movement.
              </p>

              <div className="mt-8 flex items-center gap-3 text-sm text-white/30 group-hover:text-white/50 transition-colors duration-500">
                <span>Enter</span>
                <motion.div
                  className="w-6 h-[1px] bg-white/30"
                  animate={{
                    width: ['24px', '40px', '24px'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </div>
            </div>
          </motion.button>

          {/* CORPO Path */}
          <motion.button
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => onSelectPath('corpo')}
            className="group relative p-12 border border-white/10 hover:border-white/20 transition-all duration-700 bg-black/40 backdrop-blur-sm overflow-hidden"
          >
            {/* Hover gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-8">
                <span className="text-xs tracking-[0.3em] text-white/30 uppercase">02</span>
                <motion.div
                  className="w-2 h-2 bg-white rounded-full opacity-30"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.5,
                  }}
                />
              </div>

              <h2 className="text-5xl md:text-6xl font-semibold mb-4 tracking-tight">
                CORPO
              </h2>
              <p className="text-white/50 text-lg leading-relaxed font-light">
                The work. Neural networks, point clouds, systems that learn. Technical depth meets real-world impact.
              </p>

              <div className="mt-8 flex items-center gap-3 text-sm text-white/30 group-hover:text-white/50 transition-colors duration-500">
                <span>Enter</span>
                <motion.div
                  className="w-6 h-[1px] bg-white/30"
                  animate={{
                    width: ['24px', '40px', '24px'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.3,
                  }}
                />
              </div>
            </div>
          </motion.button>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="absolute bottom-8 text-center text-xs tracking-[0.3em] text-white/20 uppercase"
        >
          TU Darmstadt • Master&apos;s in AI/ML
        </motion.div>
      </motion.div>
    </div>
  );
}
