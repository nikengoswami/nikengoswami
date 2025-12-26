'use client';

import { InceptionProvider } from '@/contexts/InceptionContext';
import InceptionLayerManager from '@/components/InceptionLayerManager';

export default function Home() {
  return (
    <InceptionProvider>
      <main className="relative min-h-screen">
        <InceptionLayerManager />
      </main>
    </InceptionProvider>
  );
}
