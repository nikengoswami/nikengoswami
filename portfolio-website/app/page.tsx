'use client';

import { CyberpunkProvider, useCyberpunk } from '@/contexts/InceptionContext';
import CyberpunkEntry from '@/components/CyberpunkEntry';
import CorpoPath from '@/components/CorpoPath';
import NomadPath from '@/components/NomadPath';
import CyberpunkAudio from '@/components/InceptionAudio';
import { AnimatePresence, motion } from 'framer-motion';

function CyberpunkApp() {
  const { currentPath, setPath } = useCyberpunk();

  return (
    <>
      <CyberpunkAudio />
      <AnimatePresence mode="wait">
        {currentPath === 'entry' && (
          <motion.div
            key="entry"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.5, filter: 'blur(20px)' }}
            transition={{ duration: 1.2 }}
          >
            <CyberpunkEntry onSelectPath={setPath} />
          </motion.div>
        )}

        {currentPath === 'corpo' && (
          <motion.div
            key="corpo"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
          >
            <CorpoPath />
          </motion.div>
        )}

        {currentPath === 'nomad' && (
          <motion.div
            key="nomad"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.8 }}
          >
            <NomadPath />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function Home() {
  return (
    <CyberpunkProvider>
      <main className="relative min-h-screen">
        <CyberpunkApp />
      </main>
    </CyberpunkProvider>
  );
}
