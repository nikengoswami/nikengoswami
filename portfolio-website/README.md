# Niken Goswami - Portfolio Website

A stunning sci-fi themed portfolio website showcasing AI/ML expertise, projects, and professional experience. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

![Portfolio Preview](https://img.shields.io/badge/Next.js-15.1.5-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)

## Features

- **Sci-Fi Themed Design**: Cyberpunk-inspired dark theme with neon accents
- **Animated Particle Background**: Interactive neural network visualization
- **Responsive Layout**: Mobile-first design that works on all devices
- **Smooth Animations**: Powered by Framer Motion for fluid transitions
- **Interactive Components**: Hover effects, scroll animations, and smooth navigation
- **Optimized Performance**: Static site generation for fast loading times

## Sections

1. **Hero** - Eye-catching introduction with animated background
2. **About** - Personal bio and quick stats
3. **Skills** - Technical skills with animated progress bars
4. **Projects** - Featured projects with metrics and links
5. **Experience** - Interactive timeline of work and education
6. **Achievements** - Highlights and accomplishments
7. **Contact** - Contact form and social links

## Tech Stack

- **Framework**: Next.js 15.1.5 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Deployment**: Static export for GitHub Pages/Vercel/Netlify

## Getting Started

### Prerequisites

- Node.js 18+ and npm installed on your machine

### Installation

1. Clone the repository:
```bash
git clone https://github.com/nikengoswami/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Update Personal Information

Edit the content in the following files:
- `components/Hero.tsx` - Name, title, tagline
- `components/About.tsx` - Bio and personal details
- `components/Skills.tsx` - Skills and technologies
- `components/Projects.tsx` - Project details and links
- `components/Experience.tsx` - Work and education timeline
- `components/Contact.tsx` - Contact information

### Add Your Resume

Place your resume PDF in the `public` folder:
```
public/
  └── resume.pdf
```

### Add Profile Photo

Replace the placeholder in `components/About.tsx` with your image:
```tsx
// Replace this section with your image
<img src="/profile.jpg" alt="Niken Goswami" className="w-full h-full object-cover rounded-2xl" />
```

Place your image in the `public` folder.

### Update Colors

Modify the color scheme in `tailwind.config.ts`:
```typescript
colors: {
  'cyber-blue': '#00f0ff',    // Change these hex values
  'cyber-purple': '#b026ff',
  'cyber-pink': '#ff006e',
  'dark-bg': '#0a0a0f',
  'dark-card': '#1a1a2e',
}
```

## Deployment

### Deploy to GitHub Pages

1. Update `next.config.ts` with your repository name if needed:
```typescript
basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
```

2. Build the static site:
```bash
npm run build
```

3. The static files will be in the `out` folder. Deploy this folder to GitHub Pages.

4. Enable GitHub Pages in your repository settings:
   - Settings → Pages → Source: Deploy from a branch
   - Branch: Choose your deployment branch (usually `gh-pages` or `main`)
   - Folder: Choose `/out` or root depending on your setup

### Deploy to Vercel

1. Push your code to GitHub

2. Go to [Vercel](https://vercel.com) and import your repository

3. Vercel will auto-detect Next.js and deploy automatically

4. Your site will be live at `your-project.vercel.app`

### Deploy to Netlify

1. Build the static site:
```bash
npm run build
```

2. Drag and drop the `out` folder to [Netlify Drop](https://app.netlify.com/drop)

Or connect your GitHub repository for automatic deployments.

## Build Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Project Structure

```
portfolio-website/
├── app/
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Main page
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Skills.tsx          # Skills section
│   ├── Projects.tsx        # Projects section
│   ├── Experience.tsx      # Experience timeline
│   ├── Achievements.tsx    # Achievements section
│   ├── Contact.tsx         # Contact section
│   ├── Footer.tsx          # Footer
│   └── ParticleBackground.tsx  # Animated background
├── public/
│   └── resume.pdf          # Your resume (add this)
├── tailwind.config.ts      # Tailwind configuration
├── next.config.ts          # Next.js configuration
└── package.json
```

## Performance Optimization

- Static site generation for optimal loading speed
- Image optimization with Next.js Image component (when images are added)
- Code splitting and lazy loading
- Minified CSS and JavaScript in production build

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Contact

**Niken Goswami**
- Email: nikengirgoswami01@gmail.com
- LinkedIn: [linkedin.com/in/niken-goswami-6bb231193](https://linkedin.com/in/niken-goswami-6bb231193)
- GitHub: [github.com/nikengoswami](https://github.com/nikengoswami)

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
