'use client';

import { AnimatePresence } from 'framer-motion';
import { useInception } from '@/contexts/InceptionContext';
import LayerEntry from '@/components/layers/LayerEntry';
import Layer0Reality from '@/components/layers/Layer0Reality';
import Layer1Dream from '@/components/layers/Layer1Dream';
import Layer2Dream from '@/components/layers/Layer2Dream';
import Layer3Limbo from '@/components/layers/Layer3Limbo';
import KickButton from '@/components/KickButton';
import InceptionAudio from '@/components/InceptionAudio';

export default function InceptionLayerManager() {
  const { currentLayer } = useInception();

  return (
    <>
      <AnimatePresence mode="wait">
        {currentLayer === 'entry' && <LayerEntry key="entry" />}
        {currentLayer === 'reality' && <Layer0Reality key="reality" />}
        {currentLayer === 'dream1' && <Layer1Dream key="dream1" />}
        {currentLayer === 'dream2' && <Layer2Dream key="dream2" />}
        {currentLayer === 'limbo' && <Layer3Limbo key="limbo" />}
      </AnimatePresence>

      <KickButton />
      <InceptionAudio />
    </>
  );
}
