# Merlijn Passier - Portfolio Website

A cinematic portfolio website for Dutch film director and producer Merlijn Passier, showcasing his career, films, awards, and production company Cutjongens.

## 🎬 Features

- **Full Color Design**: Modern, cinematic design with full-color images and videos
- **Parallax Scrolling Effects**: Cinematic depth using Framer Motion
- **Responsive Design**: Mobile-first, with the tuned desktop layout gated behind `lg:` breakpoints
- **Video Integration**: Embedded Vimeo showreels and trailers
- **Smooth Navigation**: Minimalist fixed navigation with the MP logo and smooth scrolling
- **Award Showcase**: Golden Calf, Oscar and Gouden TV-Beeld marks beside project titles, plus festival laurels
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
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Main page (composes the 8 sections)
│   ├── globals.css         # Global styles, Tailwind theme, desktop overlap rules
│   ├── favicon.ico         # MP film-strip infinity mark
│   └── icon.png            # Same mark, PNG
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx   # Fixed nav bar with logo + mobile menu
│   │   ├── Footer.tsx       # Site footer
│   │   └── Section.tsx      # Reusable section wrapper (accepts className + style)
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── BioSection.tsx
│   │   ├── AwardsSection.tsx
│   │   ├── TheNewSection.tsx
│   │   ├── CutjongensSection.tsx
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
    ├── logo.png            # Navigation logo
    └── images/             # All images organized by type
```

**Render order** (`app/page.tsx`): Hero → Projects → Bio → Awards → the_new → Cutjongens → Gallery → Contact.

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

The `PROJECTS` array holds nine entries, in render order:

| # | Title | Year | Type |
|---|-------|------|------|
| 1 | Castro's Tears | 1997 | Documentary – 55 min · Golden Calf (Best Documentary, Best Actor) + 2 festival awards |
| 2 | Bullet Time | 2017 | Animation – 5 min · Dutch Oscar entry 2018 |
| 3 | Icarus | 2017 | Drama – 50 min · Gouden TV-Beeld for Frank Lammers |
| 4 | Merlijn over de grens | 2014–2020 | Documentary series – 45 × 23 min |
| 5 | Merlijn in het spoor van Napoleon | 2021 | Documentary series – 15 × 23 min |
| 6 | Merlijn over de Atlantikwall | 2022 | Documentary series – 15 × 23 min |
| 7 | Merlijn en de Nachtbrakers | 2025–2026 | Documentary series – 18 × 23 min |
| 8 | De kamer van Brabant | 2011–2014 | Talkshow – 54 × 40 min |
| 9 | Olifantendoders | 2003–2008 | Documentary series – 52 × 25 min |

Castro's Tears, Bullet Time and Icarus each render an award thumbnail beside their title (Gouden Kalf, Oscar, Gouden TV-Beeld). These image paths are hardcoded in `ProjectsSection.tsx`, not in `constants.ts`.

### Section Layout

**Projects Section**:
- General showreel video
- "Selected Works" title
- The nine projects above, alternating two- and three-column layouts

**Awards Section**:
- Awards title
- Castro's Tears with Golden Calf award images (content hardcoded in `AwardsSection.tsx`, separate from the Projects entry)
- "Bullet Time" title
- Bullet Time festival laurels

**the_new Section**: standalone section between Awards and Cutjongens, driven by `THE_NEW_INFO` — tagline, intro, three subsections (What We Do / Our Toolkit / The Alternative) and a closing line.

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

The chrome is black-on-white; **images and video render in full colour** (the original grayscale filter was removed in v1.1.0). Theme tokens live in `app/globals.css`:

```css
:root {
  --background: #ffffff;    /* White */
  --foreground: #000000;    /* Black */
  --gray-custom: #e6e6e6;  /* Light gray — used for alternating section backgrounds */
  --hero-bg: #f7f8f3;      /* Sampled from the hero photo's own backdrop */
}
```

**The hero** (`section#hero`) shows its photograph in full via `object-contain` — nothing is cropped — on a backdrop set to `--hero-bg`, the exact white of the photo's own background. That makes the image edges invisible, so the photo appears to float on the page. Note that `--hero-bg` is applied through a plain `section#hero` rule in `globals.css`, not a Tailwind utility: `@theme inline` cannot resolve a colour that points at a `:root` variable, so `bg-hero` silently never generates.

If you ever swap the hero photograph, re-sample its background colour and update `--hero-bg` to match, or a visible rectangle will appear.

### Layout & Spacing

The website uses a centered, balanced layout:

```css
Max container width: 1600px (main)
Section vertical padding: 160px (set with !important on `section` in globals.css)
Section content: max-w-6xl / max-w-4xl, auto-centered
```

Every `section h2` gets automatic horizontal rules either side via `::before`/`::after`.

### ⚠️ Keep the CSS reset inside `@layer base`

`globals.css` starts with:

```css
@layer base {
  * { margin: 0; padding: 0; box-sizing: border-box; }
}
```

**That `@layer base` wrapper is load-bearing.** Tailwind v4 emits its utilities in `@layer utilities`, and unlayered CSS outranks any layered CSS regardless of specificity. If this reset is ever moved back out of the layer, every `p-*`, `m-*` and `space-y-*` class on the site silently computes to zero — which is exactly the state the project was in until v1.7.0.

Note that some rules in `globals.css` are unlayered **on purpose** — `section { padding: 160px 0 !important }` and `section > div { padding-left: 160px !important }`. To beat those from a component you still need an `!` prefix (`!p-0`, `!px-8`) or an inline style. This works because for `!important` declarations the layer order reverses: a layered `!important` utility outranks an unlayered one. `HeroSection.tsx` relies on this — don't strip its `!` prefixes.

### ⚠️ Hardcoded positioning

Fine layout tuning is done with hardcoded pixel offsets rather than a layout system. Two places control this:

1. **`app/globals.css`** — a single `@media (min-width: 1024px)` block applies negative top margins so sections overlap on desktop:
   `#bio -100px`, `#awards -50px`, `#cutjongens -145px`, `#gallery -190px`, `#contact -240px`.
2. **`ProjectsSection.tsx`** — an `isDesktop` state (`window.innerWidth >= 1024`, updated on resize) gates per-project `marginTop`/`marginBottom` nudges and the award-thumbnail `translate()` offsets. On mobile these all collapse to a flat 60px gap between projects.

**When editing:** anything positional must be either behind an `lg:` Tailwind prefix or behind the `isDesktop` check, otherwise it will break the mobile layout. Adding or reordering a project will usually mean re-tuning the offsets of its neighbours.

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
   - `/public/images/projects/` - Project images and award marks
   - `/public/images/gallery/` - Gallery photos
   - `/public/images/contact/` - Contact section images
   - `/public/images/awards/` - Award logos
   - `/public/images/laurels/` - Festival laurels
   - `/public/images/backgrounds/` - Background imagery
   - `/public/images/the_new/` - the_new section imagery

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
- **Desktop**: ≥ 1024px — the `lg:` breakpoint, and the threshold used by both the CSS overlap rules and the `isDesktop` check

## 🌐 Deployment

The repository lives at **[github.com/Moonflow1/merlijnpassier.nl](https://github.com/Moonflow1/merlijnpassier.nl)** — branch `main`.

See `DEPLOYMENT.md` for the full guide (Vercel, Netlify, AWS Amplify, self-hosted).

## 📄 License

© 2026 Merlijn Passier. All rights reserved.

## 📞 Support

For technical issues or questions:
- Email: info@cutjongens.nl

---

**Version**: 1.7.0 · **Docs last updated**: August 31, 2026 · See `CHANGELOG.md` for history and known issues.

**Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion**
