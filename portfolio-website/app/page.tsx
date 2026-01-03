'use client';

import { CyberpunkProvider, useCyberpunk } from '@/contexts/InceptionContext';
import DualThemeEntry from '@/components/DualThemeEntry';
import CorpoPath from '@/components/CorpoPath';
import NomadPath from '@/components/NomadPath';
import { AnimatePresence, motion } from 'framer-motion';

function PortfolioApp() {
  const { currentPath, setPath } = useCyberpunk();

  return (
    <AnimatePresence mode="wait">
      {currentPath === 'entry' && (
        <motion.div
          key="entry"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <DualThemeEntry onSelectPath={setPath} />
        </motion.div>
      )}

      {currentPath === 'corpo' && (
        <motion.div
          key="corpo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <CorpoPath />
        </motion.div>
      )}

      {currentPath === 'nomad' && (
        <motion.div
          key="nomad"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <NomadPath />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Home() {
  return (
    <CyberpunkProvider>
      <main className="relative min-h-screen bg-black">
        <PortfolioApp />
      </main>
    </CyberpunkProvider>
  );
}
