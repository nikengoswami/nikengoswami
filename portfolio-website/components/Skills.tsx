'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaPython,
  FaJava,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaDatabase,
} from 'react-icons/fa';
import {
  SiPytorch,
  SiTensorflow,
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiScikitlearn,
  SiNumpy,
  SiPandas,
  SiSalesforce,
} from 'react-icons/si';

interface Skill {
  name: string;
  level: number;
  icon: React.ElementType;
  color: string;
}

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = {
    'AI/ML': [
      { name: 'PyTorch', level: 95, icon: SiPytorch, color: '#EE4C2C' },
      { name: 'TensorFlow', level: 85, icon: SiTensorflow, color: '#FF6F00' },
      { name: 'Scikit-learn', level: 90, icon: SiScikitlearn, color: '#F7931E' },
      { name: 'NumPy', level: 95, icon: SiNumpy, color: '#013243' },
      { name: 'Pandas', level: 90, icon: SiPandas, color: '#150458' },
    ],
    'Programming': [
      { name: 'Python', level: 95, icon: FaPython, color: '#3776AB' },
      { name: 'JavaScript', level: 85, icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', level: 80, icon: SiTypescript, color: '#3178C6' },
      { name: 'Java', level: 85, icon: FaJava, color: '#007396' },
    ],
    'Development': [
      { name: 'React.js', level: 90, icon: FaReact, color: '#61DAFB' },
      { name: 'Node.js', level: 85, icon: FaNodeJs, color: '#339933' },
      { name: 'Express.js', level: 85, icon: SiExpress, color: '#000000' },
      { name: 'MongoDB', level: 80, icon: SiMongodb, color: '#47A248' },
      { name: 'Salesforce', level: 90, icon: SiSalesforce, color: '#00A1E0' },
    ],
    'Tools & Others': [
      { name: 'Git', level: 90, icon: FaGitAlt, color: '#F05032' },
      { name: 'Docker', level: 75, icon: FaDocker, color: '#2496ED' },
      { name: 'SQL', level: 85, icon: FaDatabase, color: '#4479A1' },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className="section-padding">
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
              Skills & Expertise
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyber-blue to-cyber-purple mx-auto"></div>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {Object.entries(skillCategories).map(([category, skills]) => (
              <motion.div
                key={category}
                variants={itemVariants}
                className="bg-dark-card/50 p-8 rounded-xl border border-cyber-blue/20 hover:border-cyber-blue/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-cyber-blue mb-6">
                  {category}
                </h3>
                <div className="space-y-6">
                  {skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-3">
                          <skill.icon
                            className="text-2xl"
                            style={{ color: skill.color }}
                          />
                          <span className="text-gray-300 font-medium">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-cyber-blue font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-dark-bg rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="h-full bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full"
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills Tags */}
          <motion.div
            variants={itemVariants}
            className="mt-12 text-center"
          >
            <h3 className="text-xl font-semibold text-gray-300 mb-6">
              Additional Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Computer Vision',
                'Point Cloud Processing',
                '3D Vision',
                'Transformers',
                'MambaVision',
                'PointNet++',
                'CUDA',
                'REST APIs',
                'GraphQL',
                'Apex',
                'LWC',
                'CPQ',
                'CLM',
                'CI/CD',
                'Agile',
              ].map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-dark-card border border-cyber-purple/30 rounded-full text-sm text-gray-300 hover:border-cyber-purple hover:text-cyber-purple transition-all duration-300"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
