'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

interface TimelineItem {
  type: 'work' | 'education';
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  achievements?: string[];
}

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timeline: TimelineItem[] = [
    {
      type: 'work',
      title: 'Software Development Engineer',
      company: 'Goodspeed',
      location: 'Remote',
      period: 'Dec 2025 - Present',
      description: [
        'Building scalable software solutions for enterprise clients',
        'Working with modern tech stack and agile methodologies',
      ],
    },
    {
      type: 'education',
      title: 'Exchange Student',
      company: 'Nagaoka University of Technology',
      location: 'Nagaoka, Japan',
      period: 'Oct 2025 - Sep 2026',
      description: [
        'Exchange program focusing on advanced AI/ML research',
        'Collaborating on cutting-edge deep learning projects',
      ],
    },
    {
      type: 'work',
      title: 'Research Intern',
      company: 'National Taiwan University of Science and Technology (NTUST)',
      location: 'Taipei, Taiwan',
      period: 'Apr 2025 - Jul 2025',
      description: [
        'Enhanced MambaVision transformer models achieving 6% accuracy improvements',
        'Developed 4 model variants for visual feature extraction',
        'Published research findings on state-of-the-art vision transformers',
      ],
      achievements: ['6% accuracy improvement', '4 model variants developed'],
    },
    {
      type: 'education',
      title: 'Master of Science - Data Science & Engineering',
      company: 'Technical University of Darmstadt',
      location: 'Darmstadt, Germany',
      period: 'Oct 2024 - Sep 2027',
      description: [
        'Specializing in AI/ML with focus on computer vision and deep learning',
        'Advanced coursework in neural networks, 3D vision, and data analytics',
      ],
    },
    {
      type: 'work',
      title: 'Associate Software Engineer',
      company: 'Conga',
      location: 'Ahmedabad, India',
      period: 'Jan 2023 - May 2024',
      description: [
        'Managed 6 Salesforce instances with 99% uptime across CPQ and CLM modules',
        'Developed custom Apex classes and Lightning Web Components',
        'Implemented automated workflows reducing manual processes by 30%',
      ],
      achievements: ['99% uptime', '30% process automation', '6 instances managed'],
    },
    {
      type: 'work',
      title: 'Software Engineer',
      company: 'Computer Society of India (CSI)',
      location: 'Nadiad, India',
      period: 'Jul 2021 - Jan 2023',
      description: [
        'Developed full-stack web applications using MERN stack',
        'Contributed to university placement portal managing 1000+ student profiles',
        'Implemented RESTful APIs with sub-300ms response times',
      ],
      achievements: ['1000+ profiles managed', '<300ms API response'],
    },
    {
      type: 'education',
      title: 'Bachelor of Technology - Computer Engineering',
      company: 'Dharmsinh Desai University',
      location: 'Nadiad, India',
      period: 'Aug 2019 - May 2023',
      description: [
        'Graduated with 8.14/10 CGPA',
        'Awarded Mukhyamantri Yuva Swavalamban Yojana scholarship',
        'Completed multiple AI/ML and full-stack development projects',
      ],
      achievements: ['8.14/10 CGPA', 'State scholarship recipient'],
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" className="section-padding">
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
              Experience & Education
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyber-blue to-cyber-purple mx-auto"></div>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyber-blue via-cyber-purple to-cyber-pink"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex items-start ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Icon */}
                  <div
                    className={`absolute left-8 md:left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center z-10 ${
                      item.type === 'work'
                        ? 'bg-gradient-to-r from-cyber-blue to-cyber-purple'
                        : 'bg-gradient-to-r from-cyber-purple to-cyber-pink'
                    }`}
                  >
                    {item.type === 'work' ? (
                      <FaBriefcase className="text-2xl text-white" />
                    ) : (
                      <FaGraduationCap className="text-2xl text-white" />
                    )}
                  </div>

                  {/* Content */}
                  <div
                    className={`ml-24 md:ml-0 md:w-5/12 ${
                      index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-dark-card/80 border border-cyber-blue/30 rounded-xl p-6 hover:border-cyber-blue/60 hover:shadow-lg hover:shadow-cyber-blue/20 transition-all duration-300"
                    >
                      <div className="mb-2">
                        <span className="text-cyber-blue text-sm font-semibold">
                          {item.period}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {item.title}
                      </h3>
                      <h4 className="text-lg text-cyber-purple font-semibold mb-1">
                        {item.company}
                      </h4>
                      <p className="text-gray-400 text-sm mb-4">{item.location}</p>
                      <ul className="space-y-2 mb-4">
                        {item.description.map((desc, i) => (
                          <li key={i} className="text-gray-300 text-sm flex items-start">
                            <span className="text-cyber-blue mr-2">▹</span>
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>
                      {item.achievements && (
                        <div className="flex flex-wrap gap-2">
                          {item.achievements.map((achievement, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-cyber-blue/10 border border-cyber-blue/30 rounded-full text-xs text-cyber-blue"
                            >
                              {achievement}
                            </span>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
