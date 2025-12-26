'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useInception } from '@/contexts/InceptionContext';
import SpinningTotem from '@/components/SpinningTotem';

export default function Layer1Dream() {
  const { goDeeper } = useInception();
  const router = useRouter();

  // Project preview data with slugs for routing
  const projects = [
    {
      title: "MMS Point Cloud Classification",
      status: "Active",
      summary: "Hierarchical deep learning system for classifying Mobile Mapping System point clouds with 94.78% accuracy across 1.46M 3D points",
      technologies: ["PyTorch", "PointNet++", "CUDA", "3D Vision"],
      slug: "mms-point-cloud"
    },
    {
      title: "MambaVision Research",
      status: "Research",
      summary: "Enhanced visual feature extraction through 4 model variants, achieving 6% accuracy improvements in computer vision tasks",
      technologies: ["Transformers", "Vision AI", "Research", "Python"],
      slug: "mambavision"
    },
    {
      title: "LiDAR Semantic Segmentation",
      status: "Completed",
      summary: "Real-time semantic segmentation of LiDAR point clouds for autonomous systems with optimized inference",
      technologies: ["Deep Learning", "LiDAR", "ROS"],
      slug: "lidar-segmentation"
    },
    {
      title: "Full-Stack SaaS Platform",
      status: "Production",
      summary: "Enterprise-grade SaaS application with microservices architecture, serving thousands of active users",
      technologies: ["React", "Node.js", "PostgreSQL", "Docker"],
      slug: "saas-platform"
    }
  ];

  const skills = [
    { name: 'AI/ML', color: '#d4af37', delay: 0 },
    { name: 'PyTorch', color: '#c9a961', delay: 0.1 },
    { name: 'React', color: '#8b7355', delay: 0.2 },
    { name: 'Node.js', color: '#d4af37', delay: 0.3 },
    { name: '3D Vision', color: '#c9a961', delay: 0.4 },
    { name: 'TypeScript', color: '#8b7355', delay: 0.5 },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.5 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen relative overflow-hidden bg-gradient-to-b from-neutral-900 via-stone-900 to-zinc-900"
    >
      {/* Floating skill orbs - CSS version */}
      <div className="absolute inset-0 opacity-30">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="absolute w-32 h-32 rounded-full blur-xl"
            style={{
              background: `radial-gradient(circle, ${skill.color}80, transparent)`,
              left: `${20 + (index % 3) * 30}%`,
              top: `${20 + Math.floor(index / 3) * 35}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + index,
              repeat: Infinity,
              delay: skill.delay,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-20">
        {/* Layer Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-7xl font-light text-stone-200 mb-6 tracking-wide" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Layer One
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-600/50 to-transparent mx-auto mb-6"></div>
          <p className="text-stone-500 text-sm tracking-widest uppercase">The Present</p>
        </motion.div>

        {/* Narrative Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
          className="text-stone-400 text-lg md:text-xl font-light text-center max-w-3xl mb-16 leading-relaxed"
        >
          Time moves slower here. This is where I build today—systems at the intersection of AI, 3D Vision, and Full-Stack engineering.
        </motion.p>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 1 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mb-16"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5 + index * 0.1 }}
              className="bg-stone-900/20 border border-amber-900/20 backdrop-blur-sm p-4 text-center hover:border-amber-700/40 transition-all duration-300"
            >
              <div
                className="w-2 h-2 rounded-full mx-auto mb-2"
                style={{ backgroundColor: skill.color, boxShadow: `0 0 10px ${skill.color}` }}
              />
              <p className="text-stone-300 text-sm font-light">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Current Projects - Clickable Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="grid md:grid-cols-2 gap-8 max-w-5xl mb-16"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7 + index * 0.15, duration: 0.6 }}
              whileHover={{ scale: 1.02, borderColor: 'rgba(212, 175, 55, 0.4)' }}
              whileTap={{ scale: 0.98 }}
              onClick={() => router.push(`/projects/${project.slug}`)}
              className="group bg-stone-900/30 border border-amber-900/20 backdrop-blur-sm p-8 hover:border-amber-700/40 transition-all duration-500 cursor-pointer relative overflow-hidden"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-900/0 via-amber-900/5 to-amber-900/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-light text-stone-200 group-hover:text-amber-600/80 transition-colors" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {project.title}
                  </h3>
                  <span className="text-xs text-amber-600/70 bg-amber-900/20 px-2 py-1 rounded">
                    {project.status}
                  </span>
                </div>

                <p className="text-stone-500 text-sm mb-4 leading-relaxed">
                  {project.summary}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="text-xs text-amber-700/60 border border-amber-900/30 px-3 py-1">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Click hint */}
                <motion.p
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-xs text-amber-700/40 italic"
                >
                  Click to explore →
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Current Roles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="flex flex-col md:flex-row gap-6 mb-16 text-stone-600 text-sm"
        >
          <span>SDE @ Goodspeed</span>
          <span className="hidden md:block text-amber-700/30">|</span>
          <span>Exchange Student @ Nagaoka University, Japan</span>
        </motion.div>

        {/* Time Dilation Indicator */}
        <motion.div
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="text-amber-700/50 text-xs mb-12 tracking-widest uppercase"
        >
          Time: 1×20 Slower
        </motion.div>

        {/* Spinning Totem - Descend Deeper */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.8, type: "spring" }}
        >
          <SpinningTotem
            onClick={goDeeper}
            label="Descend to Dream Layer Two"
          />
        </motion.div>
      </div>

      {/* Subtle vignette */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-radial from-transparent via-transparent to-black/30"></div>
    </motion.section>
  );
}
