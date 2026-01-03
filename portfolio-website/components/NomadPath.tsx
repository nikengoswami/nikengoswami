'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const travels = [
  {
    title: "BERLIN CHRONICLES",
    location: "GERMANY",
    year: "2024",
    description: "Urban exploration through the heart of European tech",
    color: "var(--neon-yellow)",
  },
  {
    title: "ALPINE EXPEDITION",
    location: "SWITZERLAND",
    year: "2023",
    description: "High altitude adventures in the Swiss peaks",
    color: "var(--neon-cyan)",
  },
  {
    title: "MEDITERRANEAN DRIFT",
    location: "GREECE",
    year: "2023",
    description: "Island hopping through ancient civilizations",
    color: "var(--neon-magenta)",
  },
  {
    title: "NORDIC LIGHTS",
    location: "NORWAY",
    year: "2024",
    description: "Chasing auroras in the frozen north",
    color: "var(--neon-green)",
  },
];

export default function NomadPath() {
  const [hoveredTravel, setHoveredTravel] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0014] via-[#1a0033] to-[#0a0014] relative overflow-x-hidden">
      {/* Cyberpunk grid background */}
      <div className="fixed inset-0 cyber-grid" />
      <div className="scan-lines fixed inset-0" />

      {/* Wandering particles */}
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed w-1 h-1 rounded-full bg-[var(--neon-yellow)]"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 200 - 100],
            y: [0, Math.random() * 200 - 100],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1
            className="text-7xl md:text-9xl font-black mb-4"
            style={{
              fontFamily: 'Orbitron',
              color: 'var(--neon-yellow)',
              textShadow: '0 0 20px var(--neon-yellow), 0 0 40px var(--neon-yellow)',
            }}
          >
            NOMAD LOGS
          </h1>
          <div className="flex items-center justify-center gap-4 text-lg md:text-xl tracking-[0.3em] text-white/60">
            <span className="w-12 h-[2px] bg-gradient-to-r from-transparent to-[var(--neon-yellow)]" />
            <span>WANDERER // EXPLORER // FREE SPIRIT</span>
            <span className="w-12 h-[2px] bg-gradient-to-l from-transparent to-[var(--neon-yellow)]" />
          </div>
        </motion.div>

        {/* Journey Philosophy */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20 relative"
        >
          <div className="border-2 border-[var(--neon-yellow)] p-8 md:p-12 backdrop-blur-md bg-[#0a0014]/50">
            <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-[var(--neon-yellow)]" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-[var(--neon-yellow)]" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-[var(--neon-yellow)]" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-[var(--neon-yellow)]" />

            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{
                background: 'linear-gradient(135deg, var(--neon-yellow), var(--neon-green))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              THE WANDERER&apos;S CREED
            </h2>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light">
              Life is not measured in destinations but in the roads traveled.
              Every city is a new chapter, every mountain a new challenge, every stranger a potential friend.
              The nomad&apos;s path is one of <span className="text-[var(--neon-yellow)]">perpetual discovery</span>,
              where comfort zones are left behind and <span className="text-[var(--neon-green)]">experiences</span> become
              the true currency of existence.
            </p>
          </div>
        </motion.div>

        {/* Travel Stories Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-10 text-center"
            style={{
              background: 'linear-gradient(135deg, var(--neon-yellow), var(--neon-green), var(--neon-cyan))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            JOURNEY ARCHIVES
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {travels.map((travel, i) => (
              <motion.div
                key={travel.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                onHoverStart={() => setHoveredTravel(i)}
                onHoverEnd={() => setHoveredTravel(null)}
                className="relative cursor-pointer group"
              >
                <div
                  className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                  style={{ background: travel.color }}
                />

                <div
                  className="relative border-2 p-8 md:p-10 backdrop-blur-sm bg-[#0a0014]/50 group-hover:bg-[#0a0014]/70 transition-all duration-300 min-h-[300px] flex flex-col"
                  style={{
                    borderColor: hoveredTravel === i ? travel.color : 'rgba(255, 255, 0, 0.3)',
                    boxShadow: hoveredTravel === i ? `0 0 30px ${travel.color}` : 'none',
                  }}
                >
                  {/* Corner brackets */}
                  <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4" style={{ borderColor: travel.color }} />
                  <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4" style={{ borderColor: travel.color }} />
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4" style={{ borderColor: travel.color }} />
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4" style={{ borderColor: travel.color }} />

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <motion.div
                        className="px-3 py-1 border text-xs font-mono"
                        style={{ borderColor: travel.color, color: travel.color }}
                        animate={{
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {travel.year}
                      </motion.div>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: travel.color }}>
                      {travel.title}
                    </h3>

                    <p className="text-xl text-white/60 tracking-wider mb-4 font-light">
                      {travel.location}
                    </p>

                    <p className="text-base text-white/70 leading-relaxed">
                      {travel.description}
                    </p>
                  </div>

                  {/* Journey status bars */}
                  <div className="mt-6 space-y-2">
                    {[1, 2, 3].map((bar) => (
                      <motion.div
                        key={bar}
                        className="h-0.5"
                        style={{
                          background: `linear-gradient(90deg, ${travel.color}, transparent)`,
                          boxShadow: hoveredTravel === i ? `0 0 8px ${travel.color}` : 'none',
                        }}
                        animate={{
                          width: hoveredTravel === i ? '100%' : `${40 + bar * 20}%`,
                          opacity: hoveredTravel === i ? [0.4, 0.8, 0.4] : 0.2,
                        }}
                        transition={{
                          width: { duration: 0.4 },
                          opacity: { duration: 1.5, repeat: Infinity, delay: bar * 0.2 },
                        }}
                      />
                    ))}
                  </div>

                  <p className="mt-6 text-xs text-white/40 group-hover:text-white/60 transition-colors font-mono">
                    &gt; FULL STORY COMING SOON...
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Travel Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'COUNTRIES', value: '12+', color: 'var(--neon-yellow)' },
            { label: 'CITIES', value: '50+', color: 'var(--neon-green)' },
            { label: 'KILOMETERS', value: '25K+', color: 'var(--neon-cyan)' },
            { label: 'ADVENTURES', value: '∞', color: 'var(--neon-magenta)' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
              className="border border-white/20 p-6 backdrop-blur-sm bg-[#0a0014]/30 text-center hover:border-[var(--neon-yellow)] transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl font-black mb-2" style={{ color: stat.color }}>
                {stat.value}
              </div>
              <div className="text-sm tracking-wider text-white/60">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 1.5 }}
          className="mt-20 text-center text-white/40 text-sm tracking-[0.2em] font-mono"
        >
          NOMAD STATUS: WANDERING // GPS: EVERYWHERE // DESTINATION: UNKNOWN
        </motion.div>
      </div>
    </div>
  );
}
