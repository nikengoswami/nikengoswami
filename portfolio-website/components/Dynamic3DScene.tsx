'use client';

import dynamic from 'next/dynamic';
import { ReactNode } from 'react';

const Dynamic3DScene = dynamic(
  () => Promise.resolve(({ children }: { children: ReactNode }) => <>{children}</>),
  { ssr: false }
);

export default Dynamic3DScene;
