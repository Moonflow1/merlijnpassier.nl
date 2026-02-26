'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Section from '@/components/layout/Section';
import VideoPlayer from '@/components/ui/VideoPlayer';
import { PROJECTS, SHOWREELS } from '@/lib/constants';

export default function ProjectsSection() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);
  return (
    <Section id="projects" className="bg-gray-50">
      <div className="w-full mx-auto">
        {/* Showreel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 w-full flex flex-col items-center"
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
              className={isThreeColumn ? (project.id === 'kamer-van-brabant' ? "grid grid-cols-1 lg:grid-cols-[0.825fr_1fr_1.5fr] gap-8 items-start" : "grid grid-cols-1 lg:grid-cols-3 gap-8 items-start") : (project.id === 'olifantendoders' ? "grid grid-cols-1 lg:grid-cols-[1.44fr_1fr] gap-12 items-start" : "grid grid-cols-1 lg:grid-cols-2 gap-12 items-start")}
              style={isDesktop ? {
                marginBottom: project.id === 'bullet-time' ? '-30px' : (project.id === 'olifantendoders' ? '-60px' : (index < PROJECTS.length - 1 ? '120px' : '0')),
                paddingTop: index === 0 ? '100px' : '0',
                marginTop: project.id === 'bullet-time' ? '-85px' : (project.id === 'icarus' ? '-100px' : (project.id === 'nachtbrakers' ? '-10px' : (project.id === 'kamer-van-brabant' ? '-10px' : (project.id === 'olifantendoders' ? '-20px' : '0'))))
              } : {
                marginBottom: index < PROJECTS.length - 1 ? '60px' : '0'
              }}
            >
              {/* Left Media (Video 1 or Image) */}
              {isThreeColumn && (
                <div className="lg:order-1" style={isDesktop ? (project.id === 'bullet-time' ? { marginTop: '-237px' } : (project.id === 'kamer-van-brabant' ? { marginTop: '7px' } : (project.id === 'tranen-castro' ? { marginTop: '-53px' } : {}))) : {}}>
                  {project.image ? (
                    // Always show image on left if available
                    <div className="relative w-full rounded-lg overflow-hidden" style={isDesktop && project.id === 'tranen-castro' ? { width: '71%' } : {}}>
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
                      <div style={{ paddingBottom: '177%', position: 'relative', height: 0, overflow: 'hidden', borderRadius: '0.5rem' }}>
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
              <div className={isThreeColumn ? 'lg:order-2' : (index % 2 === 0 ? 'lg:order-1' : 'lg:order-2')} style={isDesktop && project.id === 'tranen-castro' ? { marginTop: '-60px', marginLeft: '-95px' } : {}}>
                <h3 className="text-3xl font-bold uppercase tracking-wider" style={{ marginBottom: '30px' }}>
                  {project.title}
                </h3>
                <p className="text-sm uppercase tracking-wider opacity-60" style={{ marginBottom: '30px' }}>
                  {project.year} • {project.type}
                </p>
                <p className="text-lg leading-relaxed" style={{ marginBottom: '30px' }}>
                  {project.description}
                </p>

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
              <div className={isThreeColumn ? 'lg:order-3' : (index % 2 === 0 ? 'lg:order-2' : 'lg:order-1')} style={isDesktop ? (project.id === 'bullet-time' ? { marginTop: '-237px' } : (project.id === 'tranen-castro' ? { marginTop: '-60px' } : (project.id === 'icarus' ? { marginTop: '5px' } : (project.id === 'merlijn-over-de-grens' ? { marginTop: '8px' } : (project.id === 'merlijn-napoleon' ? { marginTop: '7px' } : (project.id === 'merlijn-atlantikwall' ? { marginTop: '7px' } : (project.id === 'nachtbrakers' ? { marginTop: '5px' } : (project.id === 'kamer-van-brabant' ? { marginTop: '10px' } : (project.id === 'ai-media-innovation' ? { marginTop: '150px' } : (project.id === 'olifantendoders' ? { marginTop: '5px' } : {})))))))))}>
                {isThreeColumn ? (
                  // Three column: show trailerSecondary, imageSecondary, or trailer
                  project.trailerSecondary ? (
                    <div style={{ height: 'auto' }}>
                      <div style={{
                        paddingBottom: project.id === 'bullet-time' ? '177%' : (project.id === 'tranen-castro' ? '125%' : '56.25%'),
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
