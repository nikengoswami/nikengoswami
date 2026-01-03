'use client';

import { useEffect, useRef } from 'react';
import { useCyberpunk } from '@/contexts/InceptionContext';

export default function CyberpunkAudio() {
  const nomadAudioRef = useRef<HTMLAudioElement>(null);
  const corpoAudioRef = useRef<HTMLAudioElement>(null);
  const { audioTrack } = useCyberpunk();

  useEffect(() => {
    // Stop all audio when track changes
    if (nomadAudioRef.current) {
      nomadAudioRef.current.pause();
      nomadAudioRef.current.currentTime = 0;
    }
    if (corpoAudioRef.current) {
      corpoAudioRef.current.pause();
      corpoAudioRef.current.currentTime = 0;
    }

    // Play the selected track
    if (audioTrack === 'nomad' && nomadAudioRef.current) {
      nomadAudioRef.current.play().catch((err) => {
        console.error('❌ Nomad audio playback failed:', err);
      });
    } else if (audioTrack === 'corpo' && corpoAudioRef.current) {
      corpoAudioRef.current.play().catch((err) => {
        console.error('❌ Corpo audio playback failed:', err);
      });
    }
  }, [audioTrack]);

  return (
    <>
      {/* Nomad track - Walter Mitty soundtrack */}
      <audio
        ref={nomadAudioRef}
        src="/nomad-soundtrack.mp3"
        loop
        preload="auto"
        style={{ display: 'none' }}
      />

      {/* Corpo track - Cyberpunk 2077 OST */}
      <audio
        ref={corpoAudioRef}
        src="/corpo-soundtrack.mp3"
        loop
        preload="auto"
        style={{ display: 'none' }}
      />
    </>
  );
}
