'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { useCyberpunk } from '@/contexts/InceptionContext';

const journeys = [
  {
    location: "Berlin",
    country: "Germany",
    season: "Winter 2024",
    story: "The Silicon Allee. Where history bleeds into innovation. Cold mornings in coworking spaces, the weight of the Berlin Wall still felt in every divided street. Tech founders build on top of Cold War scars.",
    lesson: "Innovation is built on ruins",
    color: "#60a5fa",
    image: "🏛️",
  },
  {
    location: "Swiss Alps",
    country: "Switzerland",
    season: "Summer 2023",
    story: "Three days above the clouds. No signal. No screens. Just peaks cutting through morning fog like razors through silk. The mountains don't care about your deadlines.",
    lesson: "Silence teaches what noise never could",
    color: "#a78bfa",
    image: "⛰️",
  },
  {
    location: "Santorini",
    country: "Greece",
    season: "Autumn 2023",
    story: "White buildings clinging to cliffs like hope. Worked from a cafe where Socrates' ideas still float in the salt air. Ancient philosophy meets fiber optic cables.",
    lesson: "Some things should never be rushed",
    color: "#f472b6",
    image: "🌊",
  },
  {
    location: "Lofoten",
    country: "Norway",
    season: "Spring 2024",
    story: "Midnight sun and northern lights. Fjords so deep they swallow sound. Mountains so sharp they cut the sky. Stood there feeling microscopic. Stood there feeling infinite.",
    lesson: "We are smaller and larger than we think",
    color: "#34d399",
    image: "🌌",
  },
];

export default function NomadPath() {
  const { setPath } = useCyberpunk();
  const [activeJourney, setActiveJourney] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const headerY = useTransform(scrollYProgress, [0, 0.2], [0, -150]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div ref={containerRef} className="min-h-[300vh] bg-gradient-to-b from-slate-900 via-blue-950 to-purple-950 text-white relative overflow-hidden">
      {/* Atmospheric particles - REDUCED TO 30 */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => {
          const size = 1 + Math.random() * 2;
          return (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/30"
              style={{
                width: size,
                height: size,
                left: `${i * 3.3}%`,
                top: `${(i * 7) % 100}%`,
              }}
              animate={{
                y: [0, -80, 0],
                opacity: [0.1, 0.5, 0.1],
              }}
              transition={{
                duration: 8 + (i % 5),
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          );
        })}
      </div>

      {/* Back button */}
      <motion.button
        onClick={() => setPath('entry')}
        className="fixed top-8 left-8 z-50 px-5 py-2.5 border border-white/20 hover:border-white/40 bg-black/40 backdrop-blur-xl text-white/70 hover:text-white transition-all duration-300 text-sm tracking-wide"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileHover={{ x: -3 }}
      >
        ← BACK
      </motion.button>

      {/* Hero Section */}
      <motion.div
        style={{ y: headerY, opacity: headerOpacity }}
        className="sticky top-0 h-screen flex items-center justify-center px-8"
      >
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="mb-6 text-xs tracking-[0.5em] text-blue-300/50 uppercase">
              The Wanderer&apos;s Archive
            </div>

            <h1 className="text-9xl md:text-[200px] font-black mb-8 tracking-tighter leading-none bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
              NOMAD
            </h1>

            <p className="text-2xl md:text-3xl text-blue-100/60 font-light max-w-3xl mx-auto">
              Miles walked. Borders crossed. Patterns noticed in the spaces between destinations.
            </p>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mt-16 text-white/30 text-xs"
            >
              SCROLL ↓
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Journey Cards */}
      <div className="relative z-10 px-8 md:px-16 space-y-32 pb-32">
        {journeys.map((journey, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            onMouseEnter={() => setActiveJourney(i)}
            onMouseLeave={() => setActiveJourney(null)}
            className="max-w-5xl mx-auto"
          >
            <motion.div
              className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden"
              whileHover={{ scale: 1.02, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              {/* Glow effect */}
              <motion.div
                className="absolute -inset-2 rounded-2xl blur-xl opacity-0"
                style={{ backgroundColor: journey.color }}
                animate={{ opacity: activeJourney === i ? 0.2 : 0 }}
                transition={{ duration: 0.3 }}
              />

              {/* Top accent */}
              <div className="h-1" style={{ backgroundColor: journey.color }} />

              <div className="p-10 md:p-14">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="text-7xl mb-4">{journey.image}</div>
                    <h2 className="text-6xl md:text-7xl font-black mb-2" style={{ color: journey.color }}>
                      {journey.location}
                    </h2>
                    <div className="text-xl text-white/40">{journey.country}</div>
                  </div>
                  <div className="text-white/50 text-sm">{journey.season}</div>
                </div>

                {/* Story */}
                <p className="text-2xl text-white/70 leading-relaxed font-light mb-8">
                  {journey.story}
                </p>

                {/* Lesson */}
                <div
                  className="p-6 rounded-xl border border-white/10"
                  style={{ backgroundColor: `${journey.color}10` }}
                >
                  <div className="text-xs text-white/40 uppercase tracking-wider mb-1">What I Learned</div>
                  <p className="text-xl text-white/90 italic">{journey.lesson}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Final section */}
      <div className="relative z-10 px-8 py-32 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
            The Journey Continues
          </h3>
          <p className="text-xl text-white/50 leading-relaxed">
            This is the part that doesn&apos;t fit on a resume. The wandering, the wondering, the long train rides
            and longer conversations with strangers. The reminder that we&apos;re students first, specialists second.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
