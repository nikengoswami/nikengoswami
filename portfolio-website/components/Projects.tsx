'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaStar } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  tech: string[];
  metrics?: string[];
  github?: string;
  live?: string;
  featured?: boolean;
}

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects: Project[] = [
    {
      title: 'MMS Point Cloud Classification',
      description:
        'Achieved 94.78% accuracy classifying 1.46M 3D points from Mobile Mapping System data using hierarchical deep learning with PointNet++. Implemented advanced data preprocessing and augmentation techniques.',
      tech: ['PyTorch', 'PointNet++', 'CUDA', 'Python', 'NumPy'],
      metrics: ['94.78% Accuracy', '87.51% IoU', '1.46M Points', '5 Classes'],
      github: '#',
      featured: true,
    },
    {
      title: 'MambaVision Transformers Research',
      description:
        'Enhanced visual feature extraction with 4 model variants during research internship at NTUST, achieving 6% accuracy improvements. Explored state-of-the-art transformer architectures for computer vision tasks.',
      tech: ['PyTorch', 'Transformers', 'Computer Vision', 'Python'],
      metrics: ['6% Improvement', '4 Model Variants', 'Research Paper'],
      github: '#',
      featured: true,
    },
    {
      title: 'University Placement Portal',
      description:
        'Full-stack MERN application managing 1000+ student profiles with 40% data throughput improvement. Implemented secure authentication, real-time updates, and comprehensive admin dashboard.',
      tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT'],
      metrics: ['1000+ Profiles', '40% Faster', 'Real-time Updates'],
      github: '#',
      live: '#',
    },
    {
      title: 'Everything Real Estate Platform',
      description:
        'Comprehensive real estate platform with 200+ property listings and sub-300ms API response times. Features include advanced search, filters, user authentication, and property management.',
      tech: ['MERN Stack', 'REST API', 'Docker', 'Redis', 'AWS'],
      metrics: ['200+ Listings', '<300ms Response', 'Docker Deploy'],
      github: '#',
      live: '#',
    },
    {
      title: 'Heart Failure Predictor',
      description:
        'Compared 5 ML algorithms for heart disease prediction, achieving 80.2% accuracy. Performed comprehensive data analysis, feature engineering, and model optimization with cross-validation.',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Seaborn'],
      metrics: ['80.2% Accuracy', '5 Algorithms', 'Cross-Validated'],
      github: '#',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="section-padding bg-dark-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyber-blue to-cyber-purple mx-auto mb-4"></div>
            <p className="text-gray-400 text-lg">
              Showcasing impactful work in AI/ML and full-stack development
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className={`relative bg-dark-bg/50 rounded-xl border ${
                  project.featured
                    ? 'border-cyber-blue/50 shadow-lg shadow-cyber-blue/20'
                    : 'border-cyber-purple/30'
                } p-6 hover:border-cyber-blue transition-all duration-300 group`}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-cyber-blue to-cyber-purple px-4 py-1 rounded-full flex items-center gap-2 shadow-lg">
                    <FaStar className="text-yellow-300" />
                    <span className="text-sm font-semibold">Featured</span>
                  </div>
                )}

                {/* Project Content */}
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyber-blue transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  {project.metrics && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.metrics.map((metric, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-cyber-blue/10 border border-cyber-blue/30 rounded-full text-xs text-cyber-blue font-semibold"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-dark-card border border-cyber-purple/30 rounded-md text-xs text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-auto">
                  {project.github && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-dark-card border border-cyber-blue/50 rounded-lg text-cyber-blue hover:bg-cyber-blue/10 transition-all duration-300"
                    >
                      <FaGithub />
                      <span className="text-sm">Code</span>
                    </motion.a>
                  )}
                  {project.live && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-dark-card border border-cyber-purple/50 rounded-lg text-cyber-purple hover:bg-cyber-purple/10 transition-all duration-300"
                    >
                      <FaExternalLinkAlt />
                      <span className="text-sm">Live</span>
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
