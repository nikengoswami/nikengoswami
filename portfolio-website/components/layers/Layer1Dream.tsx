'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useInception } from '@/contexts/InceptionContext';
import { ProjectCard, ProjectModal, ProjectData } from '@/components/ProjectModal';
import SpinningTotem from '@/components/SpinningTotem';

export default function Layer1Dream() {
  const { goDeeper } = useInception();
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  // Full project data with expandable details
  const projects: ProjectData[] = [
    {
      title: "MMS Point Cloud Classification",
      status: "Active",
      summary: "Hierarchical deep learning system for classifying Mobile Mapping System point clouds with 94.78% accuracy across 1.46M 3D points",
      details: [
        "Developed a custom PointNet++ architecture with hierarchical feature learning for 3D point cloud semantic segmentation",
        "Implemented multi-scale feature aggregation with set abstraction layers for improved spatial understanding",
        "Optimized CUDA kernels for real-time inference on large-scale point clouds (1.46M points per scene)",
        "Achieved state-of-the-art accuracy (94.78%) on Mobile Mapping System datasets, outperforming baseline models by 12%",
        "Built end-to-end pipeline: data preprocessing, augmentation, training, and deployment"
      ],
      technologies: ["PyTorch", "PointNet++", "CUDA", "Python", "NumPy", "Open3D", "3D Computer Vision"],
      achievements: [
        "94.78% classification accuracy on 8-class semantic segmentation",
        "Processed 1.46M 3D points with real-time inference capabilities",
        "12% improvement over traditional point cloud methods",
        "Published research internship project at NTUST, Taiwan"
      ],
      links: [
        { label: "GitHub Repository", url: "#" },
        { label: "Research Paper", url: "#" }
      ]
    },
    {
      title: "MambaVision Research",
      status: "Research",
      summary: "Enhanced visual feature extraction through 4 model variants, achieving 6% accuracy improvements in computer vision tasks",
      details: [
        "Researched and implemented MambaVision architecture variants exploring state-space models for vision tasks",
        "Developed 4 distinct model configurations with varying computational complexity and performance trade-offs",
        "Conducted comprehensive ablation studies on attention mechanisms and feature extraction strategies",
        "Achieved 6% accuracy improvement over baseline vision transformers on ImageNet classification",
        "Optimized model inference for production deployment while maintaining accuracy gains"
      ],
      technologies: ["PyTorch", "Transformers", "Vision AI", "Python", "TensorFlow", "Mamba Architecture", "Computer Vision"],
      achievements: [
        "6% accuracy improvement over baseline models",
        "4 novel architecture variants developed and evaluated",
        "Published research at NTUST Research Internship, Taiwan",
        "Contributed to advancing state-space models in computer vision"
      ],
      links: [
        { label: "Research Publication", url: "#" },
        { label: "Model Checkpoints", url: "#" }
      ]
    },
    {
      title: "LiDAR Semantic Segmentation",
      status: "Completed",
      summary: "Real-time semantic segmentation of LiDAR point clouds for autonomous systems with optimized inference",
      details: [
        "Built a custom U-Net inspired encoder-decoder architecture for 3D LiDAR semantic segmentation",
        "Integrated with ROS (Robot Operating System) for real-time autonomous navigation applications",
        "Implemented efficient voxelization and sparse convolution layers for high-speed processing",
        "Deployed on edge devices with TensorRT optimization for sub-100ms inference latency",
        "Validated in real-world robotics scenarios including obstacle detection and path planning"
      ],
      technologies: ["Deep Learning", "LiDAR", "ROS", "Python", "C++", "TensorRT", "Autonomous Systems"],
      achievements: [
        "Real-time inference at 15 FPS on embedded hardware",
        "Deployed in production robotics applications",
        "Sub-100ms latency for autonomous navigation",
        "Robust performance across diverse outdoor environments"
      ],
      links: [
        { label: "Demo Video", url: "#" },
        { label: "GitHub", url: "#" }
      ]
    },
    {
      title: "Full-Stack SaaS Platform",
      status: "Production",
      summary: "Enterprise-grade SaaS application with microservices architecture, serving thousands of active users",
      details: [
        "Architected and developed a multi-tenant SaaS platform using React, Node.js, and PostgreSQL",
        "Implemented microservices architecture with Docker containerization and Kubernetes orchestration",
        "Built CI/CD pipelines with automated testing, deployment, and monitoring",
        "Achieved 99.9% uptime with load balancing, auto-scaling, and fault-tolerant design",
        "Served 1000+ active users with sub-second response times and real-time data synchronization"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "Docker", "Kubernetes", "TypeScript", "REST APIs", "Redis"],
      achievements: [
        "99.9% system uptime in production",
        "Serving 1000+ active enterprise users",
        "Sub-second API response times at scale",
        "Built at Goodspeed as Software Development Engineer"
      ],
      links: [
        { label: "Live Platform", url: "#" },
        { label: "Case Study", url: "#" }
      ]
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

        {/* Current Projects - Clickable Cards with Modals */}
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
            >
              <ProjectCard
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={selectedProject !== null}
          onClose={() => setSelectedProject(null)}
        />

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
