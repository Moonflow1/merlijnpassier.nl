# Merlijn Passier - Portfolio Website

A cinematic portfolio website for Dutch film director and producer Merlijn Passier, showcasing his career, films, awards, and production company Cutjongens.

## 🎬 Features

- **Full Color Design**: Modern, cinematic design with full-color images and videos
- **Parallax Scrolling Effects**: Cinematic depth using Framer Motion
- **Responsive Design**: Fully responsive across all devices
- **Video Integration**: Embedded Vimeo showreels and trailers
- **Smooth Navigation**: Minimalist fixed navigation with smooth scrolling
- **Award Showcase**: Display of Golden Calf and festival laurels
- **Gallery Section**: Behind-the-scenes photography
- **Easy Content Updates**: Centralized content in `lib/constants.ts`

## 🛠️ Technology Stack

- **Framework**: Next.js 16.1.6 with App Router
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Video Player**: Native Vimeo iframe embeds
- **Language**: TypeScript
- **Image Optimization**: Next.js Image component

## 📁 Project Structure

```
merlijn-portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles & Tailwind config
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx   # Fixed navigation bar
│   │   ├── Footer.tsx       # Site footer
│   │   └── Section.tsx      # Reusable section wrapper
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── BioSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── AwardsSection.tsx
│   │   ├── CutjongensSection.tsx
│   │   ├── PresenterSection.tsx
│   │   ├── GallerySection.tsx
│   │   └── ContactSection.tsx
│   └── ui/
│       ├── VideoPlayer.tsx      # Vimeo embed wrapper
│       ├── ParallaxImage.tsx    # Image with parallax
│       └── ImageGallery.tsx     # Gallery grid
├── lib/
│   └── constants.ts         # Content data (EDIT HERE)
├── types/
│   └── index.ts            # TypeScript definitions
└── public/
    └── images/             # All images organized by type
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd merlijn-portfolio
```

2. Install dependencies (already done):
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## ✏️ Updating Content

All content is centralized in `lib/constants.ts` for easy updates. You can modify:

- **Biography**: Update `BIO_CONTENT` object
- **Projects**: Add/edit entries in `PROJECTS` array
- **Videos**: Change URLs in `SHOWREELS` object
- **Gallery Images**: Modify `GALLERY_IMAGES` array
- **Contact Info**: Update `CONTACT_INFO` object

### Current Projects

The website includes the following projects:
1. **Castro's Tears** (1997) - Documentary about a Dutch communist traveling to Cuba - Featured in both Awards and Projects sections
2. **Bullet Time** (2016) - Experimental short film with dual trailers and festival laurels
3. **Icarus** (2019) - Film about ambition
4. **Merlijn over de grens** (2020) - TV Series
5. **Merlijn en de Nachtbrakers** (2021) - TV Program - www.merlijnendenachtbrakers.nl
6. **AI & Media-innovatie voor NPO, Nieuwsuur en Beeld & Geluid** (2024) - Media innovation projects
7. **De kamer van Brabant** (2024) - Documentary series about Brabant
8. **Olifantendokers** (2019) - Documentary

### Section Layout

**Awards Section**:
- Awards title
- Castro's Tears (2018) with Golden Calf award images
- Bullet Time title
- Bullet Time festival laurels

**Projects Section**:
- Showreel video
- Selected Works title
- All 8 projects listed above

**Example - Adding a new project:**

```typescript
{
  id: "new-project",
  title: "Nieuwe Film Titel",
  year: 2026,
  type: "Documentaire",
  image: "/images/projects/new-film.jpg",
  trailer: "https://vimeo.com/XXXXXXX",
  description: "Film beschrijving...",
  awards: ["Award 1", "Award 2"]
}
```

## 🎨 Customizing Design

### Colors

Monochrome theme is defined in `app/globals.css`:

```css
:root {
  --foreground: #000000;    /* Black */
  --background: #ffffff;    /* White */
  --gray-custom: #e6e6e6;  /* Light gray */
}
```

### Layout & Spacing

The website uses a centered, balanced layout:

```css
Desktop (1024px+): 120px padding left & right
Tablet (768-1023px): 80px padding left & right
Mobile (<768px): 24px padding left & right

Max container width: 1600px
Section vertical padding: 128px (py-32)
```

### Typography

Using Futura font stack with fallbacks:

```css
--font-futura: 'Futura', 'Century Gothic', 'AppleGothic', sans-serif;
```

To add the actual Futura font files, place them in `public/fonts/` and update `app/layout.tsx`.

### Parallax Speed

Adjust parallax intensity in components:

```typescript
<ParallaxImage speed={0.3} />  // 0.3 = slow, 0.8 = fast
```

### Video Embeds

Videos use native Vimeo iframe embeds:
- Automatically extracts video ID from Vimeo URLs
- Responsive 16:9 aspect ratio
- Clean player interface (no byline, portrait, or title)

## 📸 Adding Images

1. Place new images in appropriate folders:
   - `/public/images/hero/` - Hero section images
   - `/public/images/projects/` - Project images
   - `/public/images/gallery/` - Gallery photos
   - `/public/images/contact/` - Contact page images

2. Reference them in `lib/constants.ts`:
```typescript
image: "/images/projects/your-image.jpg"
```

## 🎥 Adding Videos

Update video URLs in `lib/constants.ts`:

```typescript
export const PROJECTS = [
  {
    // ... other fields
    trailer: "https://vimeo.com/YOUR_VIDEO_ID",
  }
];
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌐 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

The site can be deployed to any platform supporting Next.js:
- Netlify
- AWS Amplify
- Digital Ocean
- Self-hosted with Node.js

## 📄 License

© 2026 Merlijn Passier. All rights reserved.

## 📞 Support

For technical issues or questions:
- Email: info@cutjongens.nl

---

**Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion**
