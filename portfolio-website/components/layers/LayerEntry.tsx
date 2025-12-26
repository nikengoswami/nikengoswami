'use client';

import { motion } from 'framer-motion';
import { useInception } from '@/contexts/InceptionContext';
import SpinningTotem from '@/components/SpinningTotem';

export default function LayerEntry() {
  const { goDeeper } = useInception();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 10, filter: 'blur(100px)' }}
      transition={{ duration: 2 }}
      className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden"
    >
      {/* Ethereal background particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-amber-600/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Radial gradient glow */}
      <div className="absolute inset-0 bg-radial-gradient from-amber-950/20 via-transparent to-black" />

      {/* Central content */}
      <div className="relative z-10 text-center px-4">
        {/* Name - Ultra dramatic */}
        <motion.h1
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-8xl md:text-9xl font-light tracking-widest text-stone-100 mb-20"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            textShadow: '0 0 60px rgba(212, 175, 55, 0.3)',
          }}
        >
          NIKEN
        </motion.h1>

        {/* Elegant divider line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="w-48 h-px bg-gradient-to-r from-transparent via-amber-600/50 to-transparent mx-auto mb-16"
        />

        {/* Spinning Totem */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 2 }}
          className="mb-16"
        >
          <SpinningTotem onClick={goDeeper} label="" />
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 2.5 }}
          className="space-y-4"
        >
          <motion.p
            animate={{
              opacity: [0.6, 1, 0.6],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-2xl md:text-3xl font-light text-amber-600/80 tracking-widest uppercase"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              letterSpacing: '0.15em',
            }}
          >
            Enter Niken&apos;s Dream
          </motion.p>

          <motion.p
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            className="text-xs text-stone-600 uppercase tracking-widest"
          >
            Click the totem to begin
          </motion.p>
        </motion.div>

        {/* Floating ambient text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.2, 0] }}
          transition={{ duration: 8, repeat: Infinity, delay: 3 }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 text-stone-700 text-xs italic tracking-wider"
        >
          A journey through layers of consciousness...
        </motion.p>
      </div>

      {/* Corner decorative elements */}
      <div className="absolute top-8 left-8 w-32 h-32 border-l border-t border-amber-900/20" />
      <div className="absolute top-8 right-8 w-32 h-32 border-r border-t border-amber-900/20" />
      <div className="absolute bottom-8 left-8 w-32 h-32 border-l border-b border-amber-900/20" />
      <div className="absolute bottom-8 right-8 w-32 h-32 border-r border-b border-amber-900/20" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black pointer-events-none" />
    </motion.div>
  );
}
