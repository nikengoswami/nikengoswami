'use client';

import { motion } from 'framer-motion';

interface SpinningTotemProps {
  onClick: () => void;
  label?: string;
}

export default function SpinningTotem({ onClick, label = "Descend Deeper" }: SpinningTotemProps) {
  return (
    <div className="flex flex-col items-center gap-6">
      {/* Totem Container */}
      <motion.div
        className="relative cursor-pointer group"
        onClick={onClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 blur-xl opacity-50"
          animate={{
            background: [
              'radial-gradient(circle, #d4af37 0%, transparent 70%)',
              'radial-gradient(circle, #c9a961 0%, transparent 70%)',
              'radial-gradient(circle, #8b7355 0%, transparent 70%)',
              'radial-gradient(circle, #d4af37 0%, transparent 70%)',
            ],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        {/* Spinning Totem - Cobb's Top from Inception */}
        <motion.div
          className="relative w-20 h-20 flex items-center justify-center"
          animate={{ rotateZ: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        >
          {/* Spinning Top SVG - replica of Cobb's totem */}
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full drop-shadow-2xl"
            style={{ filter: 'drop-shadow(0 0 25px rgba(212, 175, 55, 0.7))' }}
          >
            <defs>
              <radialGradient id="topGradient" cx="30%" cy="30%">
                <stop offset="0%" stopColor="#f4e1a1" stopOpacity="0.9" />
                <stop offset="40%" stopColor="#d4af37" />
                <stop offset="80%" stopColor="#b8960f" />
                <stop offset="100%" stopColor="#8b7355" />
              </radialGradient>
              <radialGradient id="pointGradient" cx="30%" cy="30%">
                <stop offset="0%" stopColor="#e6d19a" />
                <stop offset="60%" stopColor="#c9a961" />
                <stop offset="100%" stopColor="#997a3d" />
              </radialGradient>
            </defs>

            {/* Top cone body */}
            <ellipse cx="50" cy="30" rx="35" ry="8" fill="url(#topGradient)" />
            <path
              d="M 15 30 L 50 70 L 85 30 Z"
              fill="url(#topGradient)"
              stroke="#8b7355"
              strokeWidth="0.5"
            />

            {/* Metallic ridges on cone */}
            <line x1="20" y1="35" x2="50" y2="68" stroke="#f4e1a1" strokeWidth="1" opacity="0.3" />
            <line x1="30" y1="32" x2="50" y2="65" stroke="#f4e1a1" strokeWidth="1" opacity="0.4" />
            <line x1="70" y1="32" x2="50" y2="65" stroke="#8b7355" strokeWidth="1" opacity="0.5" />
            <line x1="80" y1="35" x2="50" y2="68" stroke="#8b7355" strokeWidth="1" opacity="0.3" />

            {/* Top grip/handle */}
            <ellipse cx="50" cy="22" rx="8" ry="3" fill="#c9a961" />
            <rect x="47" y="15" width="6" height="7" fill="url(#pointGradient)" rx="2" />
            <ellipse cx="50" cy="15" rx="4" ry="2.5" fill="#d4af37" />

            {/* Bottom point */}
            <ellipse cx="50" cy="70" rx="6" ry="2.5" fill="#8b7355" />
            <path
              d="M 44 70 L 50 85 L 56 70 Z"
              fill="url(#pointGradient)"
              stroke="#8b7355"
              strokeWidth="0.5"
            />

            {/* Spinning highlights */}
            <path
              d="M 25 32 Q 35 45 40 55"
              stroke="#f4e1a1"
              strokeWidth="2"
              fill="none"
              opacity="0.5"
              strokeLinecap="round"
            />
            <path
              d="M 60 55 Q 65 45 75 32"
              stroke="#8b7355"
              strokeWidth="2"
              fill="none"
              opacity="0.6"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>

        {/* Spinning rings around totem */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          animate={{ rotate: -360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        >
          <div className="w-32 h-32 border border-amber-600/30 rounded-full" />
        </motion.div>

        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        >
          <div className="w-40 h-40 border border-amber-700/20 rounded-full" />
        </motion.div>
      </motion.div>

      {/* Label */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-stone-600 text-xs uppercase tracking-widest"
      >
        {label}
      </motion.p>

      {/* Pulsing hint */}
      <motion.p
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="text-amber-700/50 text-xs italic"
      >
        Click to descend
      </motion.p>
    </div>
  );
}
