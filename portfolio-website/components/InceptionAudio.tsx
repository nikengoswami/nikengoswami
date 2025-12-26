'use client';

import { useEffect, useRef } from 'react';

export default function InceptionAudio() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Expose global function
    (window as any).playInceptionAudio = () => {
      const audio = audioRef.current;
      if (!audio) {
        console.error('❌ Audio element not found');
        return;
      }

      console.log('🎵 Playing audio...');

      // Set to 2:02
      audio.currentTime = 122;

      // Play
      audio.play()
        .then(() => {
          console.log('✅ Audio playing from 2:02');
        })
        .catch((err) => {
          console.error('❌ Play failed:', err);
        });
    };

    return () => {
      delete (window as any).playInceptionAudio;
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      src="/inception-time.mp3"
      loop
      preload="auto"
      style={{ display: 'none' }}
    />
  );
}
