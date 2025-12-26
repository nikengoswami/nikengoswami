'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInception } from '@/contexts/InceptionContext';
import { FaArrowUp } from 'react-icons/fa';

export default function KickButton() {
  const { currentLayer, kick, isTransitioning } = useInception();

  // Only show if not in reality
  if (currentLayer === 'reality') return null;

  const layerNames = {
    dream1: 'Layer One',
    dream2: 'Layer Two',
    limbo: 'Limbo',
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={kick}
          disabled={isTransitioning}
          className={`
            group relative px-8 py-4 bg-stone-900/50 border border-amber-700/30
            backdrop-blur-md hover:border-amber-600/50
            transition-all duration-500 flex items-center gap-3
            ${isTransitioning ? 'opacity-50 cursor-not-allowed' : ''}
          `}
        >
          <FaArrowUp className="text-amber-600/70 text-lg" />
          <div className="text-left">
            <div className="text-xs text-stone-600 uppercase tracking-widest font-light">Kick</div>
            <div className="text-sm font-light text-stone-300">Return to Reality</div>
          </div>
        </motion.button>

        {/* Layer indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute -top-14 right-0 text-right"
        >
          <div className="text-xs text-stone-700 uppercase tracking-widest mb-1">Current Layer</div>
          <div className="text-lg font-light text-amber-600/70" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            {layerNames[currentLayer as keyof typeof layerNames] || 'Unknown'}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
