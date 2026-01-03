'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';
import { useCyberpunk } from '@/contexts/InceptionContext';

const projects = [
  {
    title: "MMS Point Cloud Classification",
    category: "Neural Networks",
    year: "2024",
    tech: ["PyTorch", "PointNet++", "3D CNN"],
    description: "Deep learning classification system for mobile mapping point clouds. Trained on 2M+ annotated points.",
    impact: "94.2% accuracy on urban infrastructure detection",
  },
  {
    title: "MambaVision Transformer",
    category: "Computer Vision",
    year: "2024",
    tech: ["Vision Transformers", "State Space Models", "CUDA"],
    description: "Implemented state-of-the-art vision model architecture with selective state space mechanisms.",
    impact: "15% faster inference than traditional ViT",
  },
  {
    title: "LiDAR Segmentation Pipeline",
    category: "3D Analysis",
    year: "2023",
    tech: ["Open3D", "RangeNet++", "TensorFlow"],
    description: "Real-time semantic segmentation for autonomous driving applications using range images.",
    impact: "Processing 100k points/frame at 20Hz",
  },
  {
    title: "SaaS Platform Architecture",
    category: "Full-Stack",
    year: "2023",
    tech: ["Next.js", "PostgreSQL", "Redis", "Docker"],
    description: "Scalable multi-tenant platform with real-time analytics and API gateway.",
    impact: "Handling 50k+ daily active users",
  },
];

const expertise = [
  { area: "Neural Networks", depth: 95 },
  { area: "Computer Vision", depth: 92 },
  { area: "Point Cloud AI", depth: 98 },
  { area: "Deep Learning", depth: 94 },
  { area: "Python/PyTorch", depth: 96 },
  { area: "System Design", depth: 90 },
];

export default function CorpoPath() {
  const { setPath } = useCyberpunk();
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const headerY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white relative">
      {/* Subtle grid background */}
      <div className="fixed inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
        backgroundSize: '100px 100px',
      }} />

      {/* Back button */}
      <motion.button
        onClick={() => setPath('entry')}
        className="fixed top-8 left-8 z-50 px-5 py-2.5 border border-white/10 hover:border-white/30 bg-black/60 backdrop-blur-md text-white/60 hover:text-white/90 transition-all duration-500 text-sm tracking-wide"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ x: -3 }}
      >
        ← BACK
      </motion.button>

      {/* Header Section */}
      <motion.div
        style={{ opacity: headerOpacity, y: headerY }}
        className="relative z-10 px-8 md:px-16 pt-32 pb-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-4 text-sm tracking-[0.3em] text-white/30 uppercase">
            Technical Portfolio
          </div>
          <h1 className="text-7xl md:text-8xl font-bold mb-8 tracking-tighter">
            CORPO
          </h1>
          <p className="text-xl md:text-2xl text-white/50 max-w-3xl font-light leading-relaxed">
            Neural architectures. Point clouds. Systems that learn from data and scale under pressure.
          </p>
        </motion.div>

        {/* Expertise bars */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 grid md:grid-cols-2 gap-8 max-w-4xl"
        >
          {expertise.map((skill, i) => (
            <motion.div
              key={skill.area}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex justify-between mb-2 text-sm">
                <span className="text-white/70">{skill.area}</span>
                <span className="text-white/40 mono">{skill.depth}%</span>
              </div>
              <div className="h-[1px] bg-white/10 relative overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-white/30"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.depth}%` }}
                  transition={{ duration: 1.5, delay: 0.8 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Projects Grid */}
      <div className="relative z-10 px-8 md:px-16 pb-32">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold mb-3 tracking-tight">Selected Work</h2>
          <div className="w-16 h-[1px] bg-white/20" />
        </motion.div>

        <div className="space-y-1 max-w-6xl">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setSelectedProject(i)}
              onMouseLeave={() => setSelectedProject(null)}
              className="group relative"
            >
              {/* Project row */}
              <div className="border-t border-white/5 hover:border-white/20 transition-all duration-700 py-8 cursor-pointer">
                <div className="grid md:grid-cols-12 gap-8 items-start">
                  {/* Title & Category */}
                  <div className="md:col-span-5">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-xs mono text-white/30">0{i + 1}</span>
                      <h3 className="text-2xl md:text-3xl font-semibold tracking-tight group-hover:text-white/90 transition-colors duration-500">
                        {project.title}
                      </h3>
                    </div>
                    <div className="text-sm text-white/40 tracking-wide">{project.category} • {project.year}</div>
                  </div>

                  {/* Description */}
                  <div className="md:col-span-4">
                    <p className="text-white/50 leading-relaxed font-light">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech & Impact */}
                  <div className="md:col-span-3">
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs mono text-white/40 border border-white/10 px-2 py-1"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-sm text-white/60 italic">
                      {project.impact}
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover effect line */}
              <motion.div
                className="absolute bottom-0 left-0 h-[1px] bg-white/40"
                initial={{ width: 0 }}
                animate={{ width: selectedProject === i ? '100%' : 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              />
            </motion.div>
          ))}
        </div>

        {/* Footer Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-32 max-w-2xl"
        >
          <div className="border-t border-white/10 pt-8">
            <p className="text-white/40 text-sm leading-relaxed font-light">
              Currently focused on neural network architectures for 3D perception.
              Master's in AI/ML at TU Darmstadt. Previously built systems at scale.
              Interested in the intersection of deep learning and geometric understanding.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
