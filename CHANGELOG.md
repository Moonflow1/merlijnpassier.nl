# Changelog

All notable changes to the Merlijn Passier Portfolio Website.

## [1.3.0] - 2026-02-25

### Added
- **the_new Section**: New standalone section between Awards and Cutjongens
  - Navigation item added to main menu
  - Dedicated section component (TheNewSection.tsx)
  - Complete content rewrite: "Media, Reimagined"
  - Founded by Merlijn Passier and Jolien van de Griendt
  - Three subsections: What We Do, Our Toolkit, The Alternative
  - Full-width text layout (image removed)
- Section component now accepts style prop for inline styling

### Changed
- **the_new Content**:
  - Tagline: "Media, Reimagined."
  - Comprehensive description of innovation powerhouse and production house
  - Focus on AI, XR (VR/AR), interactive gaming, and immersive tech
  - Closing line: "The old world is watching. the_new is creating."
  - Removed from Projects section, now standalone section
- **Layout & Spacing**:
  - Cutjongens section moved 200px upward (marginTop: -200px)
  - Custom CSS for the_new section: h3 margin-bottom and p margin-top set to 3px
  - Minimal spacing between subsection titles and body text
- **Awards Section - Bullet Time**:
  - Title font size increased to match main section headers (text-4xl md:text-5xl)
  - Title positioned 100px to the right (marginLeft: 100px)

### Technical
- THE_NEW_INFO constant created in lib/constants.ts with structured content
- Section component enhanced to accept optional style prop
- Global CSS updated with specific rules for section#the_new spacing
- ai-media-innovation project removed from PROJECTS array

## [1.2.1] - 2026-02-24

### Added
- Oscar logo added next to Bullet Time description text in Awards section
- Two additional awards for Castro's Tears:
  - Fourth International Festival of Film Schools in Mexico 1997 - Best Fiction Video Award
  - DocumentArt Film Festival Neubrandenburg 1998 - Eerste Prijs voor de Beste Film: "Latüchtpreis des Kulturministeriums"
- Descriptive text for Bullet Time: "Dutch entry for the Academy Awards a.k.a. the Oscars in the categorie 'Short Animation' 2018"

### Changed
- **Awards Section**:
  - Bullet Time title and laurels section spacing reduced (paddingTop from 192px to 97px)
  - Awards & Recognition title and list items font size increased to text-lg for better readability
  - Awards & Recognition block positioned 9px lower with transform
  - Extra whitespace added below Oscar logo text (1.5em margin)
- **Projects Section**:
  - Olifantendokers image positioned 60px lower for better visual alignment
- **Oscar Logo**:
  - Resized to 80x45px (from original 1000x563px)
  - Positioned 10px higher relative to text baseline
  - Placed after "2018" at end of description line

### Technical
- Added Oscar logo image to /public/images/awards/ directory
- Used CSS transforms (translateY) for precise vertical positioning
- Maintained responsive design principles

## [1.2.0] - 2026-02-10

### Added
- Castro's Tears block duplicated in Awards section (above laurels)
- "Bullet Time" title added above laurels image
- Custom video sizing for Castro's Tears trailer (125% aspect ratio for portrait orientation)
- Separate content for top and bottom Castro's Tears blocks

### Changed
- **Awards Section**: Now displays Castro's Tears project with Golden Calf images before Bullet Time laurels
- **Projects Section Castro's Tears**:
  - Year changed from 2018 to 1997
  - Left image: Movie poster instead of Golden Calf BW
  - Right image: Replaced with video trailer (Vimeo 364925571)
  - Description updated to story about Fidel Castro documentary
  - Content moved up 60px for better alignment with poster
- **Selected Works title**: Moved below Showreel video (was at top)
- Removed subtitle "Film Director & Documentary Filmmaker"
- Laurels section background changed from gray to white
- Added extra spacing above Bullet Time title (pt-48)
- Updated showreel to new Vimeo clip (486722681)

### Technical
- Added conditional rendering in ProjectsSection for different Castro blocks
- Hardcoded Awards section Castro data to maintain separate content
- Custom inline video player for Castro with portrait aspect ratio
- Prioritized image display in left column of three-column layouts

## [1.1.0] - 2026-02-10

### Added
- **Castro's Tears** project with dual Golden Calf award images (B&W and color)
- **AI & Media-innovatie** project with futuristic tech visualization
- **De kamer van Brabant** documentary series project
- **Olifantendoders** documentary project
- Three-column layout support for projects with multiple media items
- imageSecondary field to Project interface for dual image displays

### Changed
- **Design overhaul**: Removed monochrome filter, all images now display in full color
- Updated general showreel to new Vimeo clip (486722681)
- Moved "Olifantendoders" from Presenter section to Projects section
- Moved "AI & Media-innovatie" from Presenter section to Projects section
- Repositioned hero title and subtitle (top-24, 96px from top)
- Awards title positioned 95px from left edge
- Awards section: Changed from full-screen black background to natural image sizing with gray background
- Reduced spacing below Olifantendoders project (-60px margin)
- Empty Presenter section (all content moved to Projects)
- Updated project titles and descriptions in Dutch

### Fixed
- Removed black/gray bars above and below Awards laurels image
- Improved Awards section layout with proper image aspect ratio

### Technical
- Enhanced ProjectsSection to detect and render three-column layouts
- Added conditional styling for last project (Olifantendoders)
- Improved image handling with natural sizing instead of forced aspect ratios

## [1.0.0] - 2026-02-10

### Added
- Complete portfolio website with 8 sections
- Hero section with parallax background
- Projects showcase with video embeds
- Biography section
- Awards display
- Cutjongens company section
- TV Presenter section
- Photo gallery
- Contact section
- Responsive navigation with mobile menu
- Monochrome design system
- Framer Motion animations

### Fixed
- Video player now uses native Vimeo iframe embeds instead of React Player
- Layout balance and centering issues
- Navigation word spacing
- Symmetrical padding on all sections
- Responsive padding system across all breakpoints

### Changed
- Increased vertical spacing throughout (py-24 → py-32)
- Enhanced horizontal padding (desktop: 120px, tablet: 80px, mobile: 24px)
- Updated project list with correct films
- Improved spacing between elements (gap-12, space-y-32)
- Changed some content to Dutch language
- Optimized container widths for better balance

### Technical
- Next.js 16.1.6 with App Router
- Tailwind CSS v4
- Framer Motion for animations
- TypeScript for type safety
- Native Vimeo iframe embeds
- Optimized image loading with Next.js Image

### Content
- Castro's Tears (2018) - Golden Calf winner (Best Documentary & Best Actor)
- Bullet Time (2016) - Dual trailers
- Icarus (2019)
- Merlijn over de grens (2020)
- Merlijn en de Nachtbrakers (2021)
- AI & Media-innovatie voor NPO, Nieuwsuur en Beeld & Geluid (2024)
- De kamer van Brabant (2024)
- Olifantendoders (2019)
- General showreel (Vimeo: 486722681)
- Cutjongens showreel (Vimeo: 917081302)

### Performance
- Lazy loading for images
- Code splitting
- Font optimization
- Zero runtime CSS (Tailwind)
- Responsive image optimization

---

## Future Enhancements (Planned)

- [ ] Add actual Futura font files
- [ ] Implement contact form with backend
- [ ] Add CMS integration (Sanity/Contentful)
- [ ] Add Google Analytics
- [ ] Add more projects as completed
- [ ] Add blog section
- [ ] Optimize for Core Web Vitals
- [ ] Add dark mode toggle
- [ ] Implement i18n (EN/NL)

---

**Maintained by**: Claude Code Assistant
**Last Update**: February 10, 2026
