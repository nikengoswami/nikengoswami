'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

export type DreamLayer = 'entry' | 'reality' | 'dream1' | 'dream2' | 'limbo';

interface InceptionContextType {
  currentLayer: DreamLayer;
  goDeeper: () => void;
  kick: () => void;
  setLayer: (layer: DreamLayer) => void;
  isTransitioning: boolean;
}

const InceptionContext = createContext<InceptionContextType | undefined>(undefined);

export function InceptionProvider({ children }: { children: ReactNode }) {
  const [currentLayer, setCurrentLayer] = useState<DreamLayer>('entry');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const layers: DreamLayer[] = ['entry', 'reality', 'dream1', 'dream2', 'limbo'];

  const goDeeper = () => {
    if (isTransitioning) return;

    const currentIndex = layers.indexOf(currentLayer);
    if (currentIndex < layers.length - 1) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentLayer(layers[currentIndex + 1]);
        setIsTransitioning(false);
      }, 1500); // Transition duration
    }
  };

  const kick = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentLayer('reality');
      setIsTransitioning(false);
    }, 2000); // Kick transition is longer
  };

  const setLayer = (layer: DreamLayer) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentLayer(layer);
      setIsTransitioning(false);
    }, 1500);
  };

  return (
    <InceptionContext.Provider value={{ currentLayer, goDeeper, kick, setLayer, isTransitioning }}>
      {children}
    </InceptionContext.Provider>
  );
}

export function useInception() {
  const context = useContext(InceptionContext);
  if (!context) {
    throw new Error('useInception must be used within InceptionProvider');
  }
  return context;
}
