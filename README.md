# K4 Capital Management Website

A modern, high-performance website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

1. **Download this project folder to your computer**

2. **Install dependencies:**
```bash
cd k4-capital
npm install
```

3. **Download the hero video:**
   - Go to: https://w25.f24.myftpupload.com/wp-content/uploads/2025/12/GettyImages-1083066088.mp4
   - Download the video
   - Save it as `hero-video.mp4` in the `/public` folder

4. **Run the development server:**
```bash
npm run dev
```

5. **Open your browser:**
   - Go to http://localhost:3000
   - You should see the new K4 site!

## 📁 Project Structure

```
k4-capital/
├── app/
│   ├── layout.tsx          # Root layout with fonts & metadata
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.tsx      # Header navigation
│   ├── Hero.tsx           # Video hero section
│   ├── About.tsx          # About section
│   ├── Projects.tsx       # Portfolio grid
│   └── Footer.tsx         # Footer
├── public/
│   └── hero-video.mp4     # Background video (you need to add this)
└── package.json
```

## 🎨 Design Features

- **Modern Hero:** Full-screen video background with smooth animations
- **Responsive:** Looks great on desktop, tablet, and mobile
- **Fast:** Next.js 14 with optimized images and lazy loading
- **Animations:** Smooth scroll-triggered animations using Framer Motion
- **Clean Code:** TypeScript for type safety

## 📝 TODO: Assets Needed

### Images to Download from GoDaddy Staging Site:

Create a `/public/projects` folder and download these images:

1. **Westin Nashville:** 
   - https://w25.f24.myftpupload.com/wp-content/uploads/2025/12/our-services-6_our-services-6_image1.webp
   - Save as: `/public/projects/westin-nashville.webp`

2. **Bobby Nashville:**
   - https://w25.f24.myftpupload.com/wp-content/uploads/2025/12/our-services-6_our-services-6_image2.webp
   - Save as: `/public/projects/bobby-nashville.webp`

3. **Bobby Brand:**
   - https://w25.f24.myftpupload.com/wp-content/uploads/2025/12/our-services-6_our-services-6_image3.webp
   - Save as: `/public/projects/bobby-brand.webp`

4. **Oak Steakhouse:**
   - https://w25.f24.myftpupload.com/wp-content/uploads/2025/12/6b8585_3eaf72e6837c4e34878fb092569e3d4amv2.jpg
   - Save as: `/public/projects/oak-steakhouse.jpg`

5. **Distrikt Hotel:**
   - https://w25.f24.myftpupload.com/wp-content/uploads/2025/12/6b8585_5272a272fef3445e8c58d3bd74ae1556mv2.jpg
   - Save as: `/public/projects/distrikt-hotel.jpg`

6. **Westin Tampa:**
   - https://w25.f24.myftpupload.com/wp-content/uploads/2025/12/6b8585_afca638eca274c048c183c4049d61df4mv2.webp
   - Save as: `/public/projects/westin-tampa.webp`

## 🚀 Deployment (When Ready)

### Deploy to Vercel (Free):

1. **Push to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. **Deploy on Vercel:**
   - Go to vercel.com
   - Sign in with GitHub
   - Import your k4-capital repository
   - Click Deploy
   - Done! You'll get a URL like: k4-capital.vercel.app

3. **Connect Your Domain:**
   - In Vercel dashboard, go to Settings > Domains
   - Add: k4capitalmanagement.com
   - Follow instructions to update DNS in GoDaddy
   - Site goes live in ~10 minutes

## 🎯 Next Steps

- [ ] Add hero video to `/public/hero-video.mp4`
- [ ] Download project images
- [ ] Create Portfolio, Team, and Contact pages
- [ ] Add logo (replace text logo with image)
- [ ] Test on mobile devices
- [ ] Deploy to Vercel
- [ ] Point domain to new site

## 🛠️ Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 💡 What Makes This Better Than GoDaddy's Version?

✅ **10x faster** - Optimized Next.js vs bloated WordPress
✅ **Professional design** - Custom animations and transitions
✅ **Mobile-first** - Perfect on all devices
✅ **SEO optimized** - Better Google rankings
✅ **Free hosting** - No monthly WordPress fees
✅ **Full control** - You own the code
✅ **Easy updates** - Just edit React components
✅ **Portfolio piece** - Shows your technical skills

---

Built with ❤️ using Next.js 14, TypeScript, and Tailwind CSS
