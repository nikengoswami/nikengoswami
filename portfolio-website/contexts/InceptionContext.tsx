'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

export type CyberPath = 'entry' | 'nomad' | 'corpo';

interface CyberpunkContextType {
  currentPath: CyberPath;
  setPath: (path: CyberPath) => void;
  isTransitioning: boolean;
  audioTrack: 'nomad' | 'corpo' | null;
  setAudioTrack: (track: 'nomad' | 'corpo' | null) => void;
}

const CyberpunkContext = createContext<CyberpunkContextType | undefined>(undefined);

export function CyberpunkProvider({ children }: { children: ReactNode }) {
  const [currentPath, setCurrentPath] = useState<CyberPath>('entry');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [audioTrack, setAudioTrack] = useState<'nomad' | 'corpo' | null>(null);

  const setPath = (path: CyberPath) => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    // Set appropriate audio track
    if (path === 'nomad') {
      setAudioTrack('nomad');
    } else if (path === 'corpo') {
      setAudioTrack('corpo');
    }

    setTimeout(() => {
      setCurrentPath(path);
      setIsTransitioning(false);
    }, 1200);
  };

  return (
    <CyberpunkContext.Provider value={{ currentPath, setPath, isTransitioning, audioTrack, setAudioTrack }}>
      {children}
    </CyberpunkContext.Provider>
  );
}

export function useCyberpunk() {
  const context = useContext(CyberpunkContext);
  if (!context) {
    throw new Error('useCyberpunk must be used within CyberpunkProvider');
  }
  return context;
}
