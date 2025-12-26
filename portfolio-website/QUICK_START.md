# Quick Start Guide

## Project Location
Your portfolio website is located at:
```
C:\Users\niken\portfolio-website
```

## Running the Website

### 1. Development Mode (for testing locally)
```bash
cd C:\Users\niken\portfolio-website
npm run dev
```
Then open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Production Build
```bash
cd C:\Users\niken\portfolio-website
npm run build
```

### 3. Preview Production Build Locally
```bash
npm start
```

## Next Steps

### 1. Add Your Resume
- Place your resume PDF file in the `public` folder
- Name it `resume.pdf`
- Location: `C:\Users\niken\portfolio-website\public\resume.pdf`

### 2. Add Your Profile Photo (Optional)
- Place your photo in the `public` folder (e.g., `profile.jpg`)
- Update `components/About.tsx` to use your image instead of the placeholder

### 3. Update Project Links
In `components/Projects.tsx`, replace the `#` placeholders with your actual GitHub repository URLs and live demo links.

### 4. Customize Content
Feel free to modify any text, colors, or content in the component files to match your preferences.

## Deployment Options

### Option 1: GitHub Pages
1. Create a new repository on GitHub
2. Push your code:
   ```bash
   cd C:\Users\niken\portfolio-website
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```
3. Build the site: `npm run build`
4. Deploy the `out` folder to GitHub Pages

### Option 2: Vercel (Recommended - Easiest)
1. Push your code to GitHub (see above)
2. Go to [vercel.com](https://vercel.com)
3. Sign in with GitHub
4. Click "New Project"
5. Import your repository
6. Vercel will automatically detect Next.js and deploy
7. Your site will be live in minutes!

### Option 3: Netlify
1. Build the site: `npm run build`
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
3. Drag and drop the `out` folder
4. Your site is live!

## File Structure Overview

```
portfolio-website/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Main page
├── components/            # React components
│   ├── Navbar.tsx         # Navigation
│   ├── Hero.tsx           # Hero section
│   ├── About.tsx          # About section
│   ├── Skills.tsx         # Skills section
│   ├── Projects.tsx       # Projects section
│   ├── Experience.tsx     # Timeline
│   ├── Achievements.tsx   # Achievements
│   ├── Contact.tsx        # Contact form
│   ├── Footer.tsx         # Footer
│   └── ParticleBackground.tsx  # Background animation
├── public/                # Static files
│   └── resume.pdf        # Add your resume here
└── out/                   # Build output (created after build)
```

## Tips

1. **Test locally first**: Always run `npm run dev` to see changes in real-time
2. **Build before deploying**: Run `npm run build` to catch any errors
3. **Mobile testing**: Test on your phone by accessing your local IP (shown when you run dev server)
4. **Hot reload**: Changes to component files will automatically refresh in dev mode

## Need Help?

Check the main README.md for detailed documentation.

## Common Commands Cheat Sheet

```bash
# Navigate to project
cd C:\Users\niken\portfolio-website

# Install dependencies (already done)
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run production build locally
npm start

# Check for errors
npm run lint
```

---

Your sci-fi portfolio is ready to impress! 🚀
