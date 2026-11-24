'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Section from '@/components/layout/Section';
import VideoPlayer from '@/components/ui/VideoPlayer';
import { PROJECTS, SHOWREELS } from '@/lib/constants';

export default function ProjectsSection() {
  const [isDesktop, setIsDesktop] = useState(false);

  /**
   * Must be the same 1024px that Tailwind's lg: uses, and must be asked the
   * same way. window.innerWidth includes the scrollbar while a media query
   * does not, so the two disagreed by a scrollbar's width around the
   * breakpoint; and a resize listener can miss a viewport change that the
   * media query still catches, which left the grid on three columns while
   * this flag said one -- a layout neither branch is written for.
   */
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);
  return (
    <Section id="projects">
      <div className="w-full mx-auto">
        {/* Showreel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full flex flex-col items-center"
          style={{ marginBottom: '120px' }}
        >
          <h3 className="text-2xl font-bold uppercase tracking-wider text-center">
            Director's Showreel
          </h3>
          <div className="max-w-4xl w-full px-8 mt-12">
            <VideoPlayer url={SHOWREELS.general} />
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold uppercase tracking-wider text-center"
          style={{ marginBottom: '50px' }}
        >
          Selected Works
        </motion.h2>

        {/* Projects Grid */}
        <div style={{ marginTop: '0px' }}>
          {PROJECTS.map((project, index) => {
            // Force nachtbrakers to stay in two-column layout even with imageSecondary
            const isThreeColumn = project.id === 'nachtbrakers' ? false : (project.trailerSecondary || (project.image && project.trailer) || project.imageSecondary);

            return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={isThreeColumn ? (project.id === 'kamer-van-brabant' ? "grid grid-cols-1 lg:grid-cols-[0.825fr_1fr_1.5fr] gap-4 lg:gap-8 items-start" : (project.id === 'tranen-castro' ? "grid grid-cols-1 lg:grid-cols-[0.722fr_1fr_1.28fr] gap-4 lg:gap-8 items-start" : "grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 items-start")) : (project.id === 'olifantendoders' ? "grid grid-cols-1 lg:grid-cols-[1.44fr_1fr] gap-12 items-start" : "grid grid-cols-1 lg:grid-cols-2 gap-12 items-start")}
              style={isDesktop ? {
                marginBottom: project.id === 'olifantendoders' ? '-60px' : (index < PROJECTS.length - 1 ? '120px' : '0'),
                paddingTop: index === 0 ? '100px' : '0',
                // Bullet Time needs no offset of its own any more: its frames
                // hug their films, so the 120px below Castro governs this gap
                // exactly as it does for every other project.
                marginTop: project.id === 'bullet-time' ? '0' : (project.id === 'icarus' ? '0' : (project.id === 'nachtbrakers' ? '-10px' : (project.id === 'kamer-van-brabant' ? '-10px' : (project.id === 'olifantendoders' ? '-20px' : '0'))))
              } : {
                marginBottom: index < PROJECTS.length - 1 ? '60px' : '0'
              }}
            >
              {/* Left Media (Video 1 or Image).
                  Castro's poster and its video frame share this +21.5px, which
                  puts both top edges level with the letters of the year line
                  (195.2 against the poster box's 189.7, measured from the font
                  metrics rather than guessed off a screenshot). The text column
                  stays at -60px and starts higher, as it did before.
                On one column the DOM order would put this media above the
                project title; the order-* classes below keep the title and
                its text first and group both media underneath it. From lg
                up the three columns take over again. */}
              {isThreeColumn && (
                <div className="order-2 lg:order-1" style={isDesktop ? (project.id === 'bullet-time' ? { marginTop: '4px' } : (project.id === 'kamer-van-brabant' ? { marginTop: '7px' } : (project.id === 'tranen-castro' ? { marginTop: '21.5px' } : {}))) : {}}>
                  {project.image ? (
                    // Always show image on left if available.
                    // Castro's poster used to sit at width:71% inside a third
                    // of the row, leaving 117px of dead space beside it. Its
                    // column is 0.711fr now, so the poster fills it at the same
                    // size and that 117px went to the video instead.
                    <div className="relative w-full rounded-lg overflow-hidden">
                      <Image
                        src={project.image}
                        alt={`${project.title} - ${project.imageSecondary ? 'Award 1' : ''}`}
                        width={800}
                        height={1200}
                        className="w-full h-auto object-contain"
                        sizes="(max-width: 1024px) 100vw, 33vw"
                      />
                    </div>
                  ) : project.trailerSecondary && project.trailer ? (
                    // If no image, show first video with custom sizing
                    project.id === 'bullet-time' ? (
                      // 16:9, the film's own ratio. This was 177% on desktop,
                      // which left 242px of empty frame above the film and
                      // 247px below it (measured at 1634). Invisible, but it
                      // pushed the next project hundreds of pixels down and
                      // made every gap measurement off this frame meaningless.
                      <div style={{ paddingBottom: '56.25%', position: 'relative', height: 0, overflow: 'hidden', borderRadius: '0.5rem' }}>
                        <iframe
                          src={`https://player.vimeo.com/video/${project.trailer.match(/vimeo\.com\/(\d+)/)?.[1]}?byline=0&portrait=0&title=0`}
                          frameBorder="0"
                          allow="autoplay; fullscreen; picture-in-picture"
                          allowFullScreen
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                          }}
                        />
                      </div>
                    ) : (
                      <VideoPlayer url={project.trailer} />
                    )
                  ) : null}
                </div>
              )}

              {/* Content */}
              <div className={isThreeColumn ? 'order-1 lg:order-2' : (index % 2 === 0 ? 'lg:order-1' : 'lg:order-2')} style={isDesktop && project.id === 'tranen-castro' ? { marginTop: '-60px' } : {}}>
                {(project.id === 'tranen-castro' || project.id === 'bullet-time' || project.id === 'icarus') ? (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: isDesktop ? '0px' : '30px' }}>
                    {/* shrink-to-fit so the award mark sits directly after the
                        title instead of being pushed right and dragged back */}
                    <div style={{ flex: '0 1 auto', minWidth: 0 }}>
                      <h3 className="text-3xl font-bold uppercase tracking-wider" style={{ marginBottom: '30px' }}>
                        {project.title}
                      </h3>
                      <p className="text-sm uppercase tracking-wider opacity-60">
                        {project.year} • {project.type}
                      </p>
                    </div>
                    <div style={{ flex: '0 0 auto' }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.id === 'tranen-castro' ? '/images/projects/Gouden_Kalf_website.jpg' : project.id === 'bullet-time' ? '/images/projects/Oscar.jpg' : '/images/projects/TV-Beeld-2017.jpg'}
                        alt={project.id === 'tranen-castro' ? 'Gouden Kalf award' : project.id === 'bullet-time' ? 'Oscar award' : 'Gouden TV-Beeld award'}
                        style={{
                          width: project.id === 'tranen-castro' ? '63px' : project.id === 'bullet-time' ? '40px' : '30px',
                          height: 'auto',
                          objectFit: 'contain',
                          display: 'block',
                          // These three are JPEGs with a hard white rectangle
                          // around the statuette. Multiplying against the page
                          // drops the white out and leaves the award standing
                          // on the background colour, whatever it is.
                          mixBlendMode: 'multiply',
                          // lift slightly so the mark reads as centred on the title
                          // rather than on the title-plus-year block
                          transform: isDesktop ? 'translateY(-15px)' : undefined,
                        }}
                      />
                    </div>
                  </div>
                ) : (
                  <>
                    <h3 className="text-3xl font-bold uppercase tracking-wider" style={{ marginBottom: '30px' }}>
                      {project.title}
                    </h3>
                    <p className="text-sm uppercase tracking-wider opacity-60" style={{ marginBottom: '30px' }}>
                      {project.year} • {project.type}
                    </p>
                  </>
                )}
                <p className="text-lg leading-relaxed" style={{ marginBottom: '30px' }}>
                  {project.description}
                </p>

                {/* Its own paragraph, so the blank line that the description's
                    30px bottom margin already makes separates the two. */}
                {project.link && (
                  <p className="text-lg leading-relaxed" style={{ marginBottom: '30px' }}>
                    <a
                      href={project.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-2 hover:opacity-60 transition-opacity"
                    >
                      {project.link.label}
                    </a>
                  </p>
                )}

                {project.awards && project.awards.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-lg uppercase tracking-wider font-bold">
                      Awards & Recognition
                    </h4>
                    <ul className="space-y-1">
                      {project.awards.map((award, i) => (
                        <li key={i} className="opacity-80 flex items-start" style={{ fontSize: '17px' }}>
                          <span className="mr-2">•</span>
                          <span>{award}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Right Media (Video 2 or single media) */}
              <div className={isThreeColumn ? 'order-3 lg:order-3' : (index % 2 === 0 ? 'lg:order-2' : 'lg:order-1')} style={isDesktop ? (project.id === 'bullet-time' ? { marginTop: '0px' } : (project.id === 'tranen-castro' ? { marginTop: '21.5px' } : (project.id === 'icarus' ? { marginTop: '5px' } : (project.id === 'merlijn-over-de-grens' ? { marginTop: '8px' } : (project.id === 'merlijn-napoleon' ? { marginTop: '7px' } : (project.id === 'merlijn-atlantikwall' ? { marginTop: '7px' } : (project.id === 'nachtbrakers' ? { marginTop: '5px' } : (project.id === 'kamer-van-brabant' ? { marginTop: '10px' } : (project.id === 'ai-media-innovation' ? { marginTop: '150px' } : (project.id === 'olifantendoders' ? { marginTop: '5px' } : {})))))))))) : {}}>
                {isThreeColumn ? (
                  // Three column: show trailerSecondary, imageSecondary, or trailer
                  project.trailerSecondary ? (
                    <div style={{ height: 'auto' }}>
                      <div style={{
                        // Each frame takes its film's own ratio, except
                        // Castro's on desktop: 79.75% of its column makes the
                        // frame exactly as tall as the poster beside it, so
                        // their top and bottom edges line up.
                        paddingBottom: isDesktop && project.id === 'tranen-castro' ? '79.75%' : '56.25%',
                        position: 'relative',
                        height: 0,
                        overflow: 'hidden',
                        borderRadius: '0.5rem'
                      }}>
                        <iframe
                          src={`https://player.vimeo.com/video/${project.trailerSecondary.match(/vimeo\.com\/(\d+)/)?.[1]}?byline=0&portrait=0&title=0`}
                          frameBorder="0"
                          allow="autoplay; fullscreen; picture-in-picture"
                          allowFullScreen
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                          }}
                        />
                      </div>
                    </div>
                  ) : project.imageSecondary ? (
                    <div className="relative w-full rounded-lg overflow-hidden">
                      <Image
                        src={project.imageSecondary}
                        alt={`${project.title} - Award 2`}
                        width={800}
                        height={1200}
                        className="w-full h-auto object-contain"
                        sizes="(max-width: 1024px) 100vw, 33vw"
                      />
                    </div>
                  ) : project.trailer ? (
                    <VideoPlayer url={project.trailer} />
                  ) : null
                ) : (
                  // Two column: show trailer or image
                  project.id === 'nachtbrakers' && project.imageSecondary && project.image ? (
                    // Stacked images for Nachtbrakers
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', marginTop: isDesktop ? '86px' : '0' }}>
                      <div className="relative w-full rounded-lg overflow-hidden" style={{ width: '50%' }}>
                        <Image
                          src={project.imageSecondary}
                          alt={`${project.title} - Banner`}
                          width={346}
                          height={194}
                          className="w-full h-auto object-contain"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      </div>
                      <div className="relative w-full rounded-lg overflow-hidden" style={{ width: '50%' }}>
                        <Image
                          src={project.image}
                          alt={`${project.title} - Thumbnail`}
                          width={346}
                          height={194}
                          className="w-full h-auto object-contain"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      </div>
                    </div>
                  ) : project.trailer ? (
                    <VideoPlayer url={project.trailer} />
                  ) : project.image ? (
                    <div className="relative aspect-video rounded-lg overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover "
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  ) : null
                )}
              </div>
            </motion.div>
          );
          })}
        </div>
      </div>
    </Section>
  );
}
