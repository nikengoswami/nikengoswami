'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const projects = [
  {
    title: "MMS POINT CLOUD",
    subtitle: "NEURAL NET CLASSIFICATION",
    slug: "mms-point-cloud",
    status: "ACTIVE",
    color: "var(--neon-cyan)",
  },
  {
    title: "MAMBAVISION",
    subtitle: "VISION TRANSFORMER",
    slug: "mambavision",
    status: "DEPLOYED",
    color: "var(--neon-magenta)",
  },
  {
    title: "LIDAR SEGMENTATION",
    subtitle: "3D POINT ANALYSIS",
    slug: "lidar-segmentation",
    status: "PRODUCTION",
    color: "var(--neon-yellow)",
  },
  {
    title: "SAAS PLATFORM",
    subtitle: "FULL-STACK SYSTEM",
    slug: "saas-platform",
    status: "LIVE",
    color: "var(--neon-green)",
  },
];

const skills = [
  { name: "NEURAL NETWORKS", level: 95, color: "#00f0ff" },
  { name: "COMPUTER VISION", level: 92, color: "#ff00ff" },
  { name: "POINT CLOUD AI", level: 98, color: "#ffff00" },
  { name: "DEEP LEARNING", level: 94, color: "#39ff14" },
  { name: "PYTHON/PYTORCH", level: 96, color: "#ff006e" },
  { name: "NEXT.JS/REACT", level: 90, color: "#00f0ff" },
];

export default function CorpoPath() {
  const router = useRouter();
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0014] via-[#1a0033] to-[#0a0014] relative overflow-x-hidden">
      {/* Cyberpunk grid background */}
      <div className="fixed inset-0 cyber-grid" />
      <div className="scan-lines fixed inset-0" />

      {/* Animated data streams */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed w-[1px] h-16 bg-gradient-to-b from-transparent via-[var(--neon-cyan)] to-transparent opacity-20"
          style={{
            left: `${(i * 5) % 100}%`,
          }}
          animate={{
            y: ['0vh', '100vh'],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
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
          <h1 className="text-7xl md:text-9xl font-black neon-text mb-4" style={{ fontFamily: 'Orbitron' }}>
            CORPO NET
          </h1>
          <div className="flex items-center justify-center gap-4 text-lg md:text-xl tracking-[0.3em] text-white/60">
            <span className="w-12 h-[2px] bg-gradient-to-r from-transparent to-[var(--neon-cyan)]" />
            <span>NIKEN GOSWAMI // AI ENGINEER</span>
            <span className="w-12 h-[2px] bg-gradient-to-l from-transparent to-[var(--neon-cyan)]" />
          </div>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20 relative"
        >
          <div className="border-2 border-[var(--neon-cyan)] p-8 md:p-12 backdrop-blur-md bg-[#0a0014]/50">
            <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-[var(--neon-cyan)]" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-[var(--neon-cyan)]" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-[var(--neon-cyan)]" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-[var(--neon-cyan)]" />

            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">SYSTEM PROFILE</h2>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light">
              Master&apos;s in Computer Science at <span className="text-[var(--neon-cyan)]">TU Darmstadt</span>.
              Specialized in <span className="text-[var(--neon-magenta)]">Deep Learning</span>,
              <span className="text-[var(--neon-yellow)]"> Point Cloud Processing</span>, and
              <span className="text-[var(--neon-green)]"> 3D Computer Vision</span>.
              Building next-gen AI systems that transform raw data into actionable intelligence.
            </p>
          </div>
        </motion.div>

        {/* Skills Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center gradient-text">NEURAL CAPABILITIES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                className="relative"
              >
                <div className="border border-[var(--neon-cyan)]/30 p-6 backdrop-blur-sm bg-[#0a0014]/30 hover:border-[var(--neon-cyan)] transition-all duration-300">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-lg font-semibold tracking-wider" style={{ color: skill.color }}>
                      {skill.name}
                    </span>
                    <span className="text-white/60 font-mono">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-white/10 relative overflow-hidden">
                    <motion.div
                      className="h-full absolute left-0 top-0"
                      style={{
                        background: `linear-gradient(90deg, ${skill.color}, transparent)`,
                        boxShadow: `0 0 10px ${skill.color}`,
                      }}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: 0.7 + i * 0.1 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center gradient-text">ACTIVE PROJECTS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 + i * 0.1 }}
                onHoverStart={() => setHoveredProject(i)}
                onHoverEnd={() => setHoveredProject(null)}
                onClick={() => router.push(`/projects/${project.slug}`)}
                className="relative cursor-pointer group"
              >
                <div
                  className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                  style={{ background: project.color }}
                />

                <div
                  className="relative border-2 p-8 backdrop-blur-sm bg-[#0a0014]/50 group-hover:bg-[#0a0014]/70 transition-all duration-300"
                  style={{
                    borderColor: hoveredProject === i ? project.color : 'rgba(0, 240, 255, 0.3)',
                    boxShadow: hoveredProject === i ? `0 0 30px ${project.color}` : 'none',
                  }}
                >
                  {/* Corner brackets */}
                  <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4" style={{ borderColor: project.color }} />
                  <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4" style={{ borderColor: project.color }} />
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4" style={{ borderColor: project.color }} />
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4" style={{ borderColor: project.color }} />

                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: project.color }}>
                        {project.title}
                      </h3>
                      <p className="text-white/60 tracking-wide">{project.subtitle}</p>
                    </div>
                    <motion.div
                      className="px-3 py-1 border text-xs font-mono"
                      style={{ borderColor: project.color, color: project.color }}
                      animate={{
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {project.status}
                    </motion.div>
                  </div>

                  {/* Animated progress bar */}
                  <div className="mt-6 space-y-2">
                    {[1, 2].map((bar) => (
                      <motion.div
                        key={bar}
                        className="h-1"
                        style={{
                          background: `linear-gradient(90deg, ${project.color}, transparent)`,
                          boxShadow: hoveredProject === i ? `0 0 10px ${project.color}` : 'none',
                        }}
                        animate={{
                          width: hoveredProject === i ? '100%' : '60%',
                          opacity: hoveredProject === i ? [0.5, 1, 0.5] : 0.3,
                        }}
                        transition={{
                          width: { duration: 0.3 },
                          opacity: { duration: 1.5, repeat: Infinity },
                        }}
                      />
                    ))}
                  </div>

                  <p className="mt-6 text-sm text-white/40 group-hover:text-white/60 transition-colors">
                    CLICK TO ACCESS FILE &gt;&gt;&gt;
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer Status */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 1.5 }}
          className="mt-20 text-center text-white/40 text-sm tracking-[0.2em] font-mono"
        >
          SYSTEM STATUS: ONLINE // NEURAL LINK STABLE // ACCESS LEVEL: AUTHORIZED
        </motion.div>
      </div>
    </div>
  );
}
