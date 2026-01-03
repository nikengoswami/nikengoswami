'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

interface ProjectData {
  title: string;
  status: string;
  summary: string;
  details: string[];
  technologies: string[];
  achievements: string[];
  links: { label: string; url: string }[];
}

const projectsData: Record<string, ProjectData> = {
  'mms-point-cloud': {
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
  'mambavision': {
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
  'lidar-segmentation': {
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
  'saas-platform': {
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
};

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const router = useRouter();
  const [project, setProject] = React.useState<ProjectData | null>(null);

  React.useEffect(() => {
    params.then(({ slug }) => {
      setProject(projectsData[slug] || null);
    });
  }, [params]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0a0014] flex items-center justify-center">
        <p className="text-white/40 neon-text">PROJECT NOT FOUND</p>
      </div>
    );
  }

  const projectColors: Record<string, string> = {
    'mms-point-cloud': 'var(--neon-cyan)',
    'mambavision': 'var(--neon-magenta)',
    'lidar-segmentation': 'var(--neon-yellow)',
    'saas-platform': 'var(--neon-green)',
  };

  const color = projectColors[Object.keys(projectsData).find(key => projectsData[key].title === project.title) || ''] || 'var(--neon-cyan)';

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0014] via-[#1a0033] to-[#0a0014] relative overflow-x-hidden">
      {/* Cyberpunk grid */}
      <div className="fixed inset-0 cyber-grid" />
      <div className="scan-lines fixed inset-0" />

      {/* Back button */}
      <div className="fixed top-8 left-8 z-50">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => router.back()}
          className="px-6 py-3 border-2 border-[var(--neon-cyan)] text-[var(--neon-cyan)] text-sm font-semibold backdrop-blur-md hover:bg-[var(--neon-cyan)] hover:text-black transition-all duration-300 tracking-wider"
          style={{ boxShadow: '0 0 20px rgba(0, 240, 255, 0.3)' }}
        >
          &lt; BACK TO CORPO
        </motion.button>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="flex items-start justify-between mb-8 flex-wrap gap-4">
            <h1
              className="text-5xl md:text-7xl font-black tracking-wider"
              style={{ fontFamily: 'Orbitron', color, textShadow: `0 0 30px ${color}` }}
            >
              {project.title.toUpperCase()}
            </h1>
            <motion.span
              className="px-4 py-2 border-2 text-sm font-mono font-bold"
              style={{ borderColor: color, color }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              [{project.status.toUpperCase()}]
            </motion.span>
          </div>
          <div className="h-1 bg-gradient-to-r from-transparent via-[var(--neon-cyan)] to-transparent mb-8 opacity-50" />
          <p className="text-white/80 text-xl md:text-2xl leading-relaxed font-light">
            {project.summary}
          </p>
        </motion.div>

        {/* Technical Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text" style={{ fontFamily: 'Orbitron' }}>
            TECHNICAL SPECS
          </h2>
          <div className="border-2 border-white/10 p-8 backdrop-blur-sm bg-[#0a0014]/50">
            <ul className="space-y-5">
              {project.details.map((detail, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4 text-white/70 text-base md:text-lg group"
                >
                  <span className="text-2xl group-hover:scale-125 transition-transform" style={{ color }}>■</span>
                  <span className="leading-relaxed">{detail}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text" style={{ fontFamily: 'Orbitron' }}>
            TECH STACK
          </h2>
          <div className="flex flex-wrap gap-4">
            {project.technologies.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.05 }}
                className="text-sm md:text-base border-2 px-5 py-3 font-semibold tracking-wide hover:scale-110 transition-transform cursor-default"
                style={{
                  borderColor: color,
                  color,
                  boxShadow: `0 0 15px ${color}40`,
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Key Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text" style={{ fontFamily: 'Orbitron' }}>
            ACHIEVEMENTS
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="border-2 border-white/20 p-6 backdrop-blur-sm bg-[#0a0014]/30 hover:border-[var(--neon-cyan)] transition-all duration-300"
                style={{
                  boxShadow: '0 0 20px rgba(0, 240, 255, 0.1)',
                }}
              >
                <p className="text-white/80 text-base leading-relaxed">{achievement}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Links */}
        {project.links && project.links.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text" style={{ fontFamily: 'Orbitron' }}>
              EXTERNAL LINKS
            </h2>
            <div className="flex flex-wrap gap-6">
              {project.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base border-2 px-8 py-4 transition-all duration-300 font-semibold tracking-wide hover:scale-105"
                  style={{
                    borderColor: color,
                    color,
                    boxShadow: `0 0 20px ${color}40`,
                  }}
                >
                  {link.label.toUpperCase()} &gt;&gt;
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
