'use client';

import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

interface DualThemeEntryProps {
  onSelectPath: (path: 'nomad' | 'corpo') => void;
}

export default function DualThemeEntry({ onSelectPath }: DualThemeEntryProps) {
  const [hoveredSide, setHoveredSide] = useState<'nomad' | 'corpo' | null>(null);

  const corpoHoverSound = useRef<HTMLAudioElement | null>(null);
  const nomadHoverSound = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    corpoHoverSound.current = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUKvm8LRjGwU7k9n0yoU2Byd+zPLaizsKCE+p5vK4ZB4FKXzM8tuNOQoZabzx6KFPDBBRqeXvuGIeAyV/zPPejjsKF2S56u+gTw0QUqzl8LhjHQMnf830zYc2CCF8zPPajj0KD1Kp5/K4ZBwFKHvM8tyNOQkZaLvx4p9PDBBSq+XyuWIdBTF6zPTdhzsIF2W56+ygTw0PU63l8LhlHgMpfsz23oY3CRlnuuvsoU8OEFSs5fG3ZBsDJH3M9t2HNgkcZ7rs7KNQDBNRq+bwtGIbBSd/y/PbjjwIGGW46u6gTwwRUKbl8rpoHwUofsv03Ik4Bg==');
    nomadHoverSound.current = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACAgoWFX2NndJesrYxgNTZfn9DWqWEcBkCa2fLBcyQFK4LN8deLNgkYabvr5p1NFAxPqOLwtmMcBjeR1/HLeiwGJHfI8N2PQQoUXrPp66hVFQlGnt/xvmwgBiuBzvHZiTcIG2m88OWbTgwPUKvl8bRjGwU7k9nyx4Q2Bid+zPHaizsKCE+p5fG4Yx4FKXzM8duNOQoZabvx6KFPDBBRqOTvuGIdAyV/y/PejjsKF2S56++gTg0QUqzl77hjHQQnf830zYc2CCF8y/PajjwKD1Kp5vG4Yx0FKHvL8tyNOQkZaLvx4p9PDBBSq+TyuWIdBTF6zPPdhzsIF2W56+ygTw0PU63k8LhlHgMpfsz13oY3CRlnuevsoU8OEFSs5PC3ZBsDJH3M9d2HNgkcZ7rs66NQDBNRq+bvtGIbBSd/y/Pbjj');

    return () => {
      if (corpoHoverSound.current) corpoHoverSound.current.pause();
      if (nomadHoverSound.current) nomadHoverSound.current.pause();
    };
  }, []);

  const handleHover = (side: 'nomad' | 'corpo') => {
    setHoveredSide(side);
    if (side === 'corpo' && corpoHoverSound.current) {
      corpoHoverSound.current.currentTime = 0;
      corpoHoverSound.current.volume = 0.2;
      corpoHoverSound.current.play().catch(() => {});
    } else if (side === 'nomad' && nomadHoverSound.current) {
      nomadHoverSound.current.currentTime = 0;
      nomadHoverSound.current.volume = 0.2;
      nomadHoverSound.current.play().catch(() => {});
    }
  };

  return (
    <div className="fixed inset-0 flex">
      {/* NOMAD - Left Side - Warm, Adventurous, Organic */}
      <motion.div
        className="relative cursor-pointer overflow-hidden"
        animate={{
          width: hoveredSide === 'nomad' ? '65%' : hoveredSide === 'corpo' ? '35%' : '50%',
        }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        onClick={() => onSelectPath('nomad')}
        onHoverStart={() => handleHover('nomad')}
        onHoverEnd={() => setHoveredSide(null)}
      >
        {/* Warm gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-orange-950 to-red-950" />

        {/* Animated map lines - like treasure map */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.path
              key={i}
              d={`M ${i * 300} 0 Q ${i * 300 + 150} ${200 + i * 100}, ${i * 300 + 300} ${i * 150}`}
              stroke="#d97706"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ duration: 2, delay: i * 0.2, ease: 'easeInOut' }}
            />
          ))}
        </svg>

        {/* Parchment texture overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZSkiIG9wYWNpdHk9IjAuMSIvPjwvc3ZnPg==')] opacity-30" />

        {/* Floating compass */}
        <motion.div
          className="absolute top-20 right-20"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        >
          <div className="w-32 h-32 rounded-full border-4 border-amber-600/40 flex items-center justify-center relative">
            <div className="text-6xl">🧭</div>
            <div className="absolute -top-8 text-amber-400/60 text-xs">N</div>
          </div>
        </motion.div>

        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center px-12 text-center">
          <motion.div
            animate={{
              scale: hoveredSide === 'nomad' ? 1.05 : 1,
              y: hoveredSide === 'nomad' ? -20 : 0,
            }}
            transition={{ duration: 0.5 }}
          >
            <motion.h2
              className="text-8xl font-black mb-6 tracking-tight text-amber-50"
              style={{
                textShadow: '0 4px 20px rgba(217, 119, 6, 0.5)',
                fontFamily: 'Space Grotesk, sans-serif'
              }}
            >
              NOMAD
            </motion.h2>
            <p className="text-2xl text-amber-100/70 font-light mb-8 max-w-md leading-relaxed italic">
              The Wanderer. Explorer of uncharted territories. Seeker of stories hidden in distant lands.
            </p>

            {/* Adventure icons */}
            <div className="flex gap-6 text-4xl justify-center opacity-70">
              <motion.span animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0 }}>⛰️</motion.span>
              <motion.span animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}>🌊</motion.span>
              <motion.span animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}>🌌</motion.span>
            </div>
          </motion.div>

          {/* Animated particles - embers */}
          {hoveredSide === 'nomad' && [...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-amber-400/60"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
              }}
              initial={{ opacity: 0, scale: 0, y: 0 }}
              animate={{
                opacity: [0, 0.8, 0],
                scale: [0, 1.5, 0],
                y: [0, -150],
              }}
              transition={{
                duration: 2,
                delay: i * 0.05,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            />
          ))}
        </div>

        {/* Bottom label */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-amber-200/40 text-sm tracking-[0.3em]"
          animate={{ opacity: hoveredSide === 'corpo' ? 0 : 1 }}
        >
          ENTER →
        </motion.div>
      </motion.div>

      {/* CORPO - Right Side - Cold, Technical, Minimal */}
      <motion.div
        className="relative cursor-pointer overflow-hidden"
        animate={{
          width: hoveredSide === 'corpo' ? '65%' : hoveredSide === 'nomad' ? '35%' : '50%',
        }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        onClick={() => onSelectPath('corpo')}
        onHoverStart={() => handleHover('corpo')}
        onHoverEnd={() => setHoveredSide(null)}
      >
        {/* Pure black background */}
        <div className="absolute inset-0 bg-black" />

        {/* Minimal grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }} />

        {/* Scanning line effect */}
        <motion.div
          className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={{ y: ['0%', '100%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />

        {/* Digital particles */}
        {hoveredSide === 'corpo' && [...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 1,
              delay: i * 0.02,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          />
        ))}

        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center px-12 text-center">
          <motion.div
            animate={{
              scale: hoveredSide === 'corpo' ? 1.05 : 1,
              y: hoveredSide === 'corpo' ? -20 : 0,
            }}
            transition={{ duration: 0.5 }}
          >
            <motion.h2
              className="text-8xl font-black mb-6 tracking-tighter text-white"
              style={{
                fontFamily: 'Space Grotesk, sans-serif'
              }}
            >
              CORPO
            </motion.h2>
            <p className="text-2xl text-white/50 font-light mb-8 max-w-md leading-relaxed">
              The Builder. Neural architectures. Point clouds. Systems that scale.
            </p>

            {/* Tech indicators */}
            <div className="flex gap-4 justify-center mono text-white/30 text-xs">
              <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity }}>
                [AI]
              </motion.div>
              <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}>
                [ML]
              </motion.div>
              <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }}>
                [3D]
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom label */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 text-sm tracking-[0.3em] mono"
          animate={{ opacity: hoveredSide === 'nomad' ? 0 : 1 }}
        >
          ACCESS →
        </motion.div>
      </motion.div>

      {/* Center divider */}
      <motion.div
        className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-white/20 to-transparent z-10"
        animate={{
          opacity: hoveredSide ? 0 : 1,
          x: hoveredSide === 'nomad' ? '15%' : hoveredSide === 'corpo' ? '-15%' : 0,
        }}
        transition={{ duration: 0.7 }}
      />
    </div>
  );
}
