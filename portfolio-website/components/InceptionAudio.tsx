'use client';

import { useEffect, useRef } from 'react';

export default function InceptionAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element
    const audio = new Audio('/inception-time.mp3');
    audio.loop = true;
    audio.volume = 0.5;
    audioRef.current = audio;

    // Expose global function for totem click
    (window as any).playInceptionAudio = () => {
      if (audioRef.current) {
        audioRef.current.currentTime = 122; // Start at 2:02
        audioRef.current.play()
          .then(() => console.log('✅ Audio playing from 2:02'))
          .catch((err) => console.error('❌ Audio failed:', err));
      }
    };

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
      }
      delete (window as any).playInceptionAudio;
    };
  }, []);

  return null; // No UI, only audio logic
}
