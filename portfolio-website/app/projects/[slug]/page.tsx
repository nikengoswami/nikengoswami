'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ProjectData } from '@/components/ProjectModal';

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
      <div className="min-h-screen bg-black flex items-center justify-center">
        <p className="text-stone-500">Project not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-900 via-neutral-900 to-zinc-900">
      {/* Back button */}
      <div className="fixed top-8 left-8 z-50">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => router.back()}
          className="px-6 py-3 bg-stone-900/50 border border-amber-700/30 text-stone-300 text-sm font-light backdrop-blur-md hover:border-amber-600/50 transition-all duration-300"
        >
          ← Back to Portfolio
        </motion.button>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-start justify-between mb-6">
            <h1
              className="text-5xl md:text-6xl font-light text-stone-100"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {project.title}
            </h1>
            <span className="text-xs text-amber-600/70 bg-amber-900/20 px-3 py-1.5 rounded-full">
              {project.status}
            </span>
          </div>
          <div className="w-32 h-px bg-gradient-to-r from-amber-700/30 via-amber-600/50 to-transparent mb-8" />
          <p className="text-stone-400 text-xl font-light leading-relaxed">
            {project.summary}
          </p>
        </motion.div>

        {/* Technical Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2
            className="text-3xl font-light text-amber-600/70 mb-6 tracking-wide"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Technical Details
          </h2>
          <ul className="space-y-4">
            {project.details.map((detail, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex items-start gap-4 text-stone-500 text-base"
              >
                <span className="text-amber-700/60 mt-1.5 text-xl">▸</span>
                <span className="font-light leading-relaxed">{detail}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <h2
            className="text-3xl font-light text-amber-600/70 mb-6 tracking-wide"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.05 }}
                className="text-sm text-amber-700/60 border border-amber-900/30 bg-amber-900/10 px-4 py-2"
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
          className="mb-12"
        >
          <h2
            className="text-3xl font-light text-amber-600/70 mb-6 tracking-wide"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Key Achievements
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="bg-stone-900/30 border border-amber-900/20 p-6"
              >
                <p className="text-stone-400 text-base font-light leading-relaxed">{achievement}</p>
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
            <h2
              className="text-3xl font-light text-amber-600/70 mb-6 tracking-wide"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Links
            </h2>
            <div className="flex flex-wrap gap-4">
              {project.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-stone-400 hover:text-amber-600/70 border border-stone-700 hover:border-amber-700/40 px-6 py-3 transition-all duration-300"
                >
                  {link.label} →
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
