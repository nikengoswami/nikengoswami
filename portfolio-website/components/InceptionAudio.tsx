'use client';

import { useEffect, useRef } from 'react';

export default function InceptionAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element with timestamp to prevent caching
    const audio = new Audio(`/inception-time.mp3?v=${Date.now()}`);
    audio.loop = true;
    audio.volume = 0.6;
    audio.preload = 'auto';
    audioRef.current = audio;

    console.log('🎵 Audio initialized: /inception-time.mp3');

    // Expose global function for totem click
    (window as any).playInceptionAudio = () => {
      console.log('🎵 playInceptionAudio called');
      if (audioRef.current) {
        // Force reload to ensure fresh audio
        audioRef.current.load();
        audioRef.current.currentTime = 122; // Start at 2:02 (122 seconds)

        audioRef.current.play()
          .then(() => {
            console.log('✅ SUCCESS: Hans Zimmer "Time" playing from 2:02');
            console.log('📍 Current time:', audioRef.current?.currentTime);
            console.log('🔊 Volume:', audioRef.current?.volume);
          })
          .catch((err) => {
            console.error('❌ AUDIO PLAY FAILED:', err);
            console.error('Error details:', err.message, err.name);
          });
      } else {
        console.error('❌ audioRef.current is null');
      }
    };

    // Log when audio is ready
    audio.addEventListener('canplaythrough', () => {
      console.log('✅ Audio ready to play');
    });

    audio.addEventListener('error', (e) => {
      console.error('❌ Audio loading error:', e);
    });

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
