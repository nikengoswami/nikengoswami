#!/usr/bin/env python3
"""
Generate ambient audio tracks for the portfolio website.
CORPO: Dark, cyberpunk, synthetic ambient with low bass drones
NOMAD: Warm, organic, adventurous ambient with natural harmonics
"""

import numpy as np
import wave
import struct

def generate_ambient_track(filename, duration=30, sample_rate=44100, track_type='corpo'):
    """Generate an ambient audio track."""

    t = np.linspace(0, duration, int(sample_rate * duration))

    if track_type == 'corpo':
        # CORPO: Dark cyberpunk ambient - low frequency drones with digital artifacts
        # Deep bass drone
        bass = 0.3 * np.sin(2 * np.pi * 55 * t)  # A1 note
        bass += 0.2 * np.sin(2 * np.pi * 82.4 * t)  # E2 note

        # Subtle high frequency shimmer
        shimmer = 0.05 * np.sin(2 * np.pi * 1760 * t) * (1 + 0.5 * np.sin(2 * np.pi * 0.2 * t))

        # Add some noise for texture
        noise = 0.02 * np.random.randn(len(t))

        # Slow pulsing effect
        pulse = 1 + 0.3 * np.sin(2 * np.pi * 0.1 * t)

        audio = (bass + shimmer + noise) * pulse

    else:  # nomad
        # NOMAD: Warm organic ambient - natural harmonics and gentle movement
        # Warm fundamental
        fundamental = 0.25 * np.sin(2 * np.pi * 110 * t)  # A2 note

        # Harmonic series for warmth
        harmonic1 = 0.15 * np.sin(2 * np.pi * 220 * t)  # A3
        harmonic2 = 0.1 * np.sin(2 * np.pi * 330 * t)  # E4
        harmonic3 = 0.08 * np.sin(2 * np.pi * 440 * t)  # A4

        # Gentle movement
        movement = 1 + 0.2 * np.sin(2 * np.pi * 0.15 * t)

        # Very subtle noise for organic feel
        texture = 0.01 * np.random.randn(len(t))

        audio = (fundamental + harmonic1 + harmonic2 + harmonic3 + texture) * movement

    # Normalize to 16-bit range
    audio = np.int16(audio / np.max(np.abs(audio)) * 32767 * 0.7)

    # Write WAV file
    with wave.open(filename, 'w') as wav_file:
        wav_file.setnchannels(1)  # Mono
        wav_file.setsampwidth(2)  # 16-bit
        wav_file.setframerate(sample_rate)
        wav_file.writeframes(audio.tobytes())

    print(f"Generated {filename}")

if __name__ == '__main__':
    # Generate both tracks
    generate_ambient_track('public/corpo-ambient.mp3', duration=30, track_type='corpo')
    generate_ambient_track('public/nomad-ambient.mp3', duration=30, track_type='nomad')
    print("Audio generation complete!")
