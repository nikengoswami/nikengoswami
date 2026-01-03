# 🎵 Audio Setup Instructions

## Required Soundtrack Files

Your cyberpunk portfolio requires two audio tracks to be placed in the `public/` directory:

### 1. CORPO Path Soundtrack
- **File name:** `corpo-soundtrack.mp3`
- **Location:** `public/corpo-soundtrack.mp3`
- **Recommended:** Cyberpunk 2077 OST - "The Rebel Path" or "Never Fade Away"
- **Sources:**
  - YouTube: Search "Cyberpunk 2077 The Rebel Path" or "Cyberpunk 2077 Never Fade Away"
  - Spotify: Cyberpunk 2077 Original Soundtrack
  - Download using a YouTube to MP3 converter (for personal use only)

### 2. NOMAD Path Soundtrack
- **File name:** `nomad-soundtrack.mp3`
- **Location:** `public/nomad-soundtrack.mp3`
- **Recommended:** "Time & Life" from The Secret Life of Walter Mitty soundtrack
- **Current alternative:** You already have `inception-time.mp3` which could be used
- **Sources:**
  - YouTube: Search "Walter Mitty Time and Life"
  - Spotify: The Secret Life of Walter Mitty (Original Score)
  - Or simply rename/copy your existing `inception-time.mp3` to `nomad-soundtrack.mp3`

## Quick Setup

```bash
# Navigate to portfolio-website directory
cd portfolio-website/public

# Option 1: Use your existing Hans Zimmer track for NOMAD
cp inception-time.mp3 nomad-soundtrack.mp3

# Option 2: Download the tracks from YouTube/Spotify and place them as:
# - corpo-soundtrack.mp3 (Cyberpunk 2077 OST)
# - nomad-soundtrack.mp3 (Walter Mitty soundtrack)
```

## Important Notes

- Audio files should be in MP3 format for best browser compatibility
- Recommended bitrate: 128-192 kbps (balance between quality and file size)
- The audio will loop automatically when playing
- CORPO track plays when you select the CORPO path
- NOMAD track plays when you select the NOMAD path

## Copyright Notice

Ensure you have the rights to use these audio files for your portfolio. For personal, non-commercial portfolios, this is generally acceptable under fair use, but always verify based on your use case.
