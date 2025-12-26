'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export interface ProjectData {
  title: string;
  status: string;
  summary: string;
  details: string[];
  technologies: string[];
  achievements: string[];
  links?: { label: string; url: string }[];
}

interface ProjectModalProps {
  project: ProjectData | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-gradient-to-b from-stone-900 via-neutral-900 to-zinc-900 border border-amber-900/30 max-w-3xl w-full max-h-[90vh] overflow-y-auto pointer-events-auto rounded-sm shadow-2xl">
              {/* Header */}
              <div className="sticky top-0 bg-stone-900/95 backdrop-blur-md border-b border-amber-900/20 p-6 flex items-start justify-between">
                <div>
                  <h2
                    className="text-3xl font-light text-stone-100 mb-2"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {project.title}
                  </h2>
                  <span className="text-xs text-amber-600/70 bg-amber-900/20 px-3 py-1 rounded-full">
                    {project.status}
                  </span>
                </div>
                <button
                  onClick={onClose}
                  className="text-stone-600 hover:text-amber-600/70 transition-colors text-2xl font-light"
                >
                  ×
                </button>
              </div>

              {/* Content */}
              <div className="p-8 space-y-8">
                {/* Summary */}
                <div>
                  <p className="text-stone-400 text-lg font-light leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                {/* Divider */}
                <div className="w-24 h-px bg-gradient-to-r from-amber-700/30 via-amber-600/50 to-transparent" />

                {/* Details */}
                <div>
                  <h3
                    className="text-xl font-light text-amber-600/70 mb-4 tracking-wide"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    Technical Details
                  </h3>
                  <ul className="space-y-3">
                    {project.details.map((detail, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3 text-stone-500 text-sm"
                      >
                        <span className="text-amber-700/60 mt-1">▸</span>
                        <span className="font-light leading-relaxed">{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h3
                    className="text-xl font-light text-amber-600/70 mb-4 tracking-wide"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        className="text-xs text-amber-700/60 border border-amber-900/30 bg-amber-900/10 px-3 py-1.5"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h3
                    className="text-xl font-light text-amber-600/70 mb-4 tracking-wide"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    Key Achievements
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {project.achievements.map((achievement, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-stone-900/30 border border-amber-900/20 p-4"
                      >
                        <p className="text-stone-400 text-sm font-light">{achievement}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Links */}
                {project.links && project.links.length > 0 && (
                  <div>
                    <h3
                      className="text-xl font-light text-amber-600/70 mb-4 tracking-wide"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      Links
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {project.links.map((link, index) => (
                        <a
                          key={index}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-stone-400 hover:text-amber-600/70 border border-stone-700 hover:border-amber-700/40 px-4 py-2 transition-all duration-300"
                        >
                          {link.label} →
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// Project card component with click handler
export function ProjectCard({ project, onClick }: { project: Partial<ProjectData>; onClick: () => void }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, borderColor: 'rgba(212, 175, 55, 0.4)' }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
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

        <p className="text-stone-500 text-sm mb-3 leading-relaxed">
          {project.summary}
        </p>

        {project.details && (
          <p className="text-stone-600 text-xs mb-4 italic">
            {project.details.slice(0, 3).map((detail, i) => (
              <span key={i}>
                • {detail}
                <br />
              </span>
            ))}
          </p>
        )}

        {project.technologies && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 4).map((tech, i) => (
              <span key={i} className="text-xs text-amber-700/60 border border-amber-900/30 px-3 py-1">
                {tech}
              </span>
            ))}
          </div>
        )}

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
  );
}
