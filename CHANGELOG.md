# Changelog

All notable changes to the Merlijn Passier Portfolio Website.

## [1.7.0] - 2026-08-31

### Fixed
- **The `* { margin: 0; padding: 0 }` reset now sits inside `@layer base`.** It was unlayered, and unlayered CSS outranks Tailwind's layered utilities, so every `p-*`, `m-*` and `space-y-*` class on the site computed to zero. They all work now. This was the root cause of the hardcoded-offset architecture — inline styles and `!important` were the only things that had any effect.
- **Footer was collapsed to 20px** and clipping its own copyright line, because its `pt-12 pb-3` was inert. It now renders at its intended height.
- **Footer was not full width.** `body` is a column flex container with `align-items: center`, so the footer shrank to its content. Added `w-full`. This was always broken but invisible while the footer was 20px tall.
- **Mobile hamburger icon rendered as one thick bar** instead of three, because its `space-y-1.5` was inert. Fixed by the reset change.
- **Icarus's title and year were completely hidden** behind Bullet Time's video. Bullet Time's videos extend to the bottom edge of their row, and Icarus was pulled up into them by `marginTop: -100px` plus Bullet Time's `marginBottom: -30px`. Both are now `0`. Pre-existing — present identically before this release.
- **Castro's Tears award list was clipped on its left edge** by Bullet Time's raised video. Caused by the content column's `marginLeft: -95px` reaching into the video's column; removed.
- Award marks beside the Castro's Tears / Bullet Time / Icarus titles no longer rely on `translate(-110px / -100px / -320px)` to claw themselves back from the far right. The title block is now `flex: 0 1 auto` so the mark simply follows the title, and only a `translateY(-15px)` optical nudge remains.

### Removed
- Stale per-component negative margins that duplicated the overlap rules in `globals.css`: `lg:-mt-[350px]` (Footer, Cutjongens), `lg:-mt-[750px]` (Contact), `lg:-mt-[370px]` (Gallery), `lg:-mt-[219px]` (Bio), `lg:-mt-[175px]` (Awards), `lg:-mb-16` (the_new). All were inert; had they been left in place they would have stacked on top of the `globals.css` values once the reset was fixed. **`globals.css` is now the single source of truth for section overlaps.**

### Verification
Measured before and after at 1600×1000 and 390×844. Section offsets are unchanged (`-100 / -50 / -145 / -190 / -240` on desktop); the growth below is spacing that was always intended but never applied:

| Section | Desktop | Mobile |
|---|---|---|
| projects | +208px | +155px |
| awards | +451px | +299px |
| the_new | +48px | +48px |
| bio | – | +64px |
| contact | – | +40px |
| footer | +60px | +80px |
| **page total** | **12660 → 13427** | **19491 → 20178** |

Automated sweep over the whole page at both viewports reports zero text/media overlaps and no horizontal overflow. `tsc` clean, `npm run build` succeeds.

## [1.6.0] - 2026-08-30

### Changed
- **Hero now shows the entire photograph.** It was previously `object-cover`, which cropped roughly 12% of the height on desktop and about two thirds of the width on mobile — the mirror frame and the foreground figure were being cut off entirely on phones. The photo is now `object-contain` and never cropped.
- The hero backdrop is set to `--hero-bg: #f7f8f3`, measured from the photograph's own white, so the image edges dissolve into the page instead of reading as a rectangle.
- Hero restructured from absolutely-positioned overlays into a flex column: title band, photo (`flex-1`), then the View Work button and scroll indicator. Nothing overlaps at any viewport size.
- Hero text switched from white to black, and the `bg-black/30` darkening overlay was removed — it existed only to make white text legible over the photo. This matches the black-on-white system used by the rest of the site.
- Hero title scaled down (`lg:text-8xl` → `lg:text-6xl`) to give the photograph more vertical room.
- Scroll indicator hidden below the `sm` breakpoint, where there is no room for it.

### Added
- `fit` prop on `ParallaxImage` (`'cover' | 'contain'`, default `'cover'`). Under `contain` the moving layer is inset and the parallax travel is clamped so the image can never drift out of frame.
- `sizes` prop on `ParallaxImage`. The hero now requests `100vw` instead of the old default of `33vw`, which was under-requesting resolution for a full-width image.

### Fixed
- **Removed a 3px black border on the top and left edges of `Merlijn suited.jpg`** — a scan/export artifact in the source file. It had always been there but was hidden by the old crop, and appeared as a hard line once the full photo was shown. The image is now 1402 × 1297 (was 1405 × 1300) and 345 KB (was 647 KB).
- Hero title no longer sits underneath the fixed navigation bar.

## [1.5.1] - 2026-08-30

### Removed
- **`PresenterSection.tsx`** — dead code. The component had not been rendered since v1.1.0, when its content moved into the Projects section, and its data source `PRESENTER_WORK.shows` was an empty array.
- **`PRESENTER_WORK` constant and its `Show` interface** from `lib/constants.ts` (orphaned by the above)
- **`PresenterShow` interface** from `types/index.ts` (unused)
- **`react-player` dependency** — unused since v1.0.0, when video playback moved to native Vimeo iframes. Removes 54 transitive packages.
- Unused imports: `CONTACT_INFO` in `Footer.tsx`, `VideoPlayer` in `AwardsSection.tsx`

### Notes
- No rendered output changes — everything removed was already unreachable.
- Verified with `tsc --noEmit` (clean), `npm run lint` (0 warnings) and `npm run build` (succeeds).
- Two pre-existing `react/no-unescaped-entities` lint errors remain in `AwardsSection.tsx:58` and `ProjectsSection.tsx:31` (unescaped apostrophes in "Castro's Tears"). They do not block the build and were left untouched.

## [1.5.0] - 2026-08-26

### Added
- **Award thumbnails beside project titles** in the Projects section:
  - Gouden Kalf next to Castro's Tears (`Gouden_Kalf_website.jpg`, 63px)
  - Oscar next to Bullet Time (`Oscar.jpg`, 40px)
  - Gouden TV-Beeld next to Icarus (`TV-Beeld-2017.jpg`, 30px)
  - Title and thumbnail share a flex row; on desktop the thumbnail is pulled left with a `translate()` transform, on mobile it sits inline at reduced size

### Changed
- **Desktop section overlaps moved to `globals.css`**: negative margins for `#bio` (-100px), `#awards` (-50px), `#cutjongens` (-145px), `#gallery` (-190px) and `#contact` (-240px) now live in one `@media (min-width: 1024px)` block instead of being spread across components
- `section#the_new`: `min-height: auto`, `padding-bottom: 110px`
- Cutjongens section offset changed from -200px to -350px (desktop only); showreel top margin 70px → 95px
- Cutjongens `www.cutjongens.nl` link now bold
- Bullet Time laurels: title no longer offset 100px to the right (now centred); laurels block gained a 75px top margin
- Project `type` strings simplified — "1 x 55 minutes" → "55 minutes" (Castro's Tears, Bullet Time, Icarus)

### Fixed
- Castro's Tears Golden Calf years corrected from 2018 to **1997** (Best Documentary and Best Actor)
- Mobile overlap regressions: the new `globals.css` overlap rules were initially unscoped and applied on phones too; they are now inside the desktop media query

## [1.4.0] - 2026-02-26

### Added
- **Custom logo & favicon**: film-strip infinity mark with MP initials, shipped as `app/favicon.ico`, `app/icon.png` and `public/logo.png` (transparent background)
- Logo image in the navigation header, replacing the "Merlijn Passier" text wordmark (h-10 mobile / h-12 desktop, `priority` loaded)
- `isDesktop` viewport check in `ProjectsSection` (`window.innerWidth >= 1024` with a resize listener) used to gate all hardcoded pixel positioning

### Changed
- Navigation logo spacing: inline `marginLeft: 50px` replaced with `lg:ml-12`
- Per-section negative margins converted from inline `style` to `lg:` Tailwind classes so they only apply on desktop — Footer (-350px), Awards (-175px), Bio (-219px), Contact (-750px), Gallery (-370px), Cutjongens, the_new

### Fixed
- **Mobile text cutoff**: Castro's Tears content no longer shifted `-95px` left off-screen on phones; its 71% image width is desktop-only
- **Mobile section overlaps**: per-project `marginTop`/`marginBottom` nudges (Bullet Time -237px, Icarus -100px, and others) now apply only on desktop; mobile falls back to a flat 60px gap between projects
- Nachtbrakers stacked images no longer carry an 86px top margin on mobile

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

- [x] ~~Move the CSS reset into @layer base so Tailwind spacing works~~ (done in 1.7.0)
- [ ] Replace the remaining per-project pixel offsets with a proper layout system
- [x] ~~Remove dead `PresenterSection` and unused `react-player` dependency~~ (done in 1.5.1)
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

## Known Issues

- ~~**Tailwind margin and padding utilities do not work anywhere on this site.**~~ **Fixed in 1.7.0** — the `* { margin: 0; padding: 0 }` reset now lives in `@layer base`, so utilities win as they should. Keep it there: moving it back out would silently zero every `p-*`, `m-*` and `space-y-*` class on the site again.

  The `!` prefixes in `HeroSection.tsx` are **still required** — don't strip them. `globals.css` also contains deliberate unlayered `!important` rules (`section { padding: 160px 0 !important }`, `section > div { padding-left: 160px !important }`). For `!important` declarations the cascade-layer order reverses, so a *layered* `!important` utility beats an *unlayered* one: `!px-8` computes to 32px, while a plain `px-8` would lose and inherit the global 160px.

- **Layout still relies on hardcoded pixel offsets.** Sections and individual projects are positioned with negative margins tuned by eye (see `ProjectsSection.tsx` and the desktop media query in `globals.css`). Adding or reordering a project will likely require re-tuning its neighbours. 1.7.0 removed the worst of these — the duplicated section margins and the three `translate(-Npx)` award-mark offsets — but the per-project `marginTop`/`marginBottom` values remain.

  Two known structural oddities, both pre-existing and cosmetic: Bullet Time's two videos overlap Castro's Tears' video vertically (both are black, so it reads as one block), and the second contact photo is left-aligned rather than centred on mobile.
- **Two lint errors**: unescaped apostrophes in `AwardsSection.tsx:58` and `ProjectsSection.tsx:31`. Cosmetic — the build is unaffected.
- **`types/index.ts` holds two unused interfaces**, `NavigationItem` and `Project`. The `Project` interface actually in use is the one declared in `lib/constants.ts`; the duplicate here is stale.

---

**Last Update**: August 31, 2026
