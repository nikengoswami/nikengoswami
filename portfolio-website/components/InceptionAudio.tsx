'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInception } from '@/contexts/InceptionContext';

export default function InceptionAudio() {
  const [isMuted, setIsMuted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { currentLayer } = useInception();

  useEffect(() => {
    // Create audio element - Inception "Time" soundtrack by Hans Zimmer
    // Using a CDN-hosted version of the Inception Time track
    const audio = new Audio('https://cdn.pixabay.com/audio/2022/05/13/audio_1db50017c0.mp3');
    audio.loop = true;
    audio.volume = 0.3;
    audio.preload = 'auto';
    audioRef.current = audio;

    // Start at 2:02 mark once loaded
    const handleCanPlayThrough = () => {
      if (audioRef.current) {
        audioRef.current.currentTime = 122; // 2:02
      }
    };
    audio.addEventListener('canplaythrough', handleCanPlayThrough, { once: true });

    const handleCanPlay = () => {
      setIsLoaded(true);
    };

    audio.addEventListener('canplaythrough', handleCanPlay);
    audio.load();

    // Auto-enable on first click
    const handleFirstInteraction = () => {
      if (audioRef.current) {
        audioRef.current.play().then(() => {
          setIsMuted(false);
        }).catch((error) => {
          console.log('Autoplay prevented:', error);
          // User will need to click the button manually
        });
      }
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
    };

    document.addEventListener('click', handleFirstInteraction);
    document.addEventListener('touchstart', handleFirstInteraction);

    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
      audio.removeEventListener('canplaythrough', handleCanPlay);
      audio.removeEventListener('canplaythrough', handleCanPlayThrough);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {
          console.log('Audio playback failed');
        });
      }
    }
  }, [isMuted]);

  return (
    <div className="fixed bottom-8 left-8 z-50">
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={() => setIsMuted(!isMuted)}
        className="w-12 h-12 rounded-full bg-stone-900/50 border border-amber-700/30 backdrop-blur-md flex items-center justify-center hover:border-amber-600/50 transition-all duration-300 group"
      >
        <AnimatePresence mode="wait">
          {isMuted ? (
            <motion.svg
              key="muted"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="w-5 h-5 text-stone-600 group-hover:text-amber-600/70"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
            </motion.svg>
          ) : (
            <motion.svg
              key="playing"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="w-5 h-5 text-amber-600/70"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Ambient sound suggestion text */}
      {isMuted && (
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 3 }}
          className="absolute left-16 top-1/2 -translate-y-1/2 text-xs text-stone-600 whitespace-nowrap"
        >
          Enable sound for full experience
        </motion.p>
      )}
    </div>
  );
}
