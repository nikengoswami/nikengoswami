'use client';

import { motion } from 'framer-motion';
import { useInception } from '@/contexts/InceptionContext';
import SpinningTotem from '@/components/SpinningTotem';

export default function Layer0Reality() {
  const { goDeeper } = useInception();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 5, filter: 'blur(50px)' }}
      transition={{ duration: 1.5 }}
      className="relative min-h-screen bg-gradient-to-b from-zinc-900 via-stone-900 to-neutral-900 flex items-center justify-center overflow-hidden"
    >
      {/* Dreamy fog effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute w-96 h-96 bg-amber-900/20 rounded-full blur-3xl top-1/4 left-1/4 animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute w-96 h-96 bg-yellow-900/10 rounded-full blur-3xl bottom-1/4 right-1/4 animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
      </div>

      {/* Subtle grain texture overlay */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]"></div>

      {/* Central Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Name - Inception style */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-7xl md:text-9xl font-light tracking-wide text-stone-100 mb-8"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          NIKEN GOSWAMI
        </motion.h1>

        {/* Elegant divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="w-32 h-px bg-gradient-to-r from-transparent via-amber-600/50 to-transparent mx-auto mb-8"
        ></motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl md:text-3xl font-light text-stone-400 mb-6 tracking-widest uppercase"
          style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '0.15em' }}
        >
          Creative Technologist
        </motion.h2>

        {/* One-liner */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="text-base md:text-lg text-stone-500 mb-16 font-light"
        >
          Building at the intersection of AI, 3D Vision & Full-Stack
        </motion.p>

        {/* Stats - subtle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex justify-center gap-12 mb-20 text-xs md:text-sm text-stone-600 font-light tracking-wider"
        >
          <span>MSc STUDENT</span>
          <span className="text-amber-700/50">•</span>
          <span>3+ YEARS</span>
          <span className="text-amber-700/50">•</span>
          <span>5+ PROJECTS</span>
        </motion.div>

        {/* Hook Text - dreamy */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.8 }}
          className="mb-16"
        >
          <p className="text-stone-400 text-lg md:text-xl font-light mb-3 italic">
            But that&apos;s just the surface.
          </p>
          <p className="text-amber-600/80 text-xl md:text-2xl font-light tracking-wide">
            Want to know the real story?
          </p>
        </motion.div>

        {/* Spinning Totem - Enter the Dream */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2.1, type: "spring", stiffness: 100 }}
        >
          <SpinningTotem
            onClick={goDeeper}
            label="Enter the Dream"
          />
        </motion.div>
      </div>

      {/* Subtle bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-900 to-transparent"></div>
    </motion.div>
  );
}
