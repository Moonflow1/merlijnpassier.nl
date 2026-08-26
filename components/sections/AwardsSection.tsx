'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Section from '@/components/layout/Section';
import VideoPlayer from '@/components/ui/VideoPlayer';
import { AWARDS_IMAGE, PROJECTS } from '@/lib/constants';

export default function AwardsSection() {
  const castroProject = PROJECTS.find(p => p.id === 'tranen-castro');

  return (
    <Section id="awards" className="bg-gray-50 !p-0 lg:-mt-[175px]">
      <div className="w-full">
        {/* Title Section */}
        <div className="max-w-6xl mx-auto py-24 px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold uppercase tracking-wider text-center"
          >
            Awards
          </motion.h2>
        </div>

        {/* Castro's Tears Project */}
        {castroProject && (
          <div className="max-w-6xl mx-auto px-8 mb-24">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"
            >
              {/* Left Image - Golden Calf BW (hardcoded for Awards section) */}
              <div className="lg:order-1">
                <div className="relative w-full rounded-lg overflow-hidden">
                  <Image
                    src="/images/projects/Castro-Golden-Calf-BW.jpg"
                    alt={`${castroProject.title} - Golden Calf Award`}
                    width={800}
                    height={1200}
                    className="w-full h-auto object-contain"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="lg:order-2">
                <h3 className="text-3xl font-bold uppercase tracking-wider" style={{ marginBottom: '30px' }}>
                  {castroProject.title}
                </h3>
                <p className="text-sm uppercase tracking-wider opacity-60" style={{ marginBottom: '30px' }}>
                  2018 • {castroProject.type}
                </p>
                <p className="text-lg leading-relaxed" style={{ marginBottom: '30px' }}>
                  Castro's Tears won the Golden Calf for Best Documentary and the Golden Calf for Best Actor. The film won many awards on festivals world wide.
                </p>

                {castroProject.awards && castroProject.awards.length > 0 && (
                  <div className="space-y-2" style={{ transform: 'translateY(9px)' }}>
                    <h4 className="text-lg uppercase tracking-wider font-bold">
                      Awards & Recognition
                    </h4>
                    <ul className="space-y-1">
                      {castroProject.awards.map((award, i) => (
                        <li key={i} className="text-lg opacity-80 flex items-start">
                          <span className="mr-2">•</span>
                          <span>{award}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Right Image - Golden Calf Color */}
              <div className="lg:order-3">
                <div className="relative w-full rounded-lg overflow-hidden">
                  <Image
                    src={castroProject.imageSecondary!}
                    alt={`${castroProject.title} - Award 2`}
                    width={800}
                    height={1200}
                    className="w-full h-auto object-contain"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Bullet Time Laurels */}
        <div className="w-full bg-white relative" style={{ marginTop: '75px' }}>
          {/* Extra white space + Title */}
          <div className="max-w-6xl mx-auto px-8 pb-12 lg:pt-[97px]">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold uppercase tracking-wider text-center"
            >
              Bullet Time
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg leading-relaxed text-center mt-6 flex items-center justify-center gap-4"
              style={{ marginBottom: '1.5em' }}
            >
              <p>
                Dutch entry for the Academy Awards a.k.a. the Oscars in the categorie &quot;Short Animation&quot; 2018
              </p>
              <Image
                src="/images/awards/oscarlogo-1000x563.jpg"
                alt="Oscar Logo"
                width={80}
                height={45}
                className="object-contain"
                style={{ transform: 'translateY(-10px)' }}
              />
            </motion.div>
          </div>

          {/* Laurels Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full relative pb-12"
          >
            <Image
              src={AWARDS_IMAGE}
              alt="Award Laurels - Bullet Time"
              width={1920}
              height={1080}
              className="w-full h-auto"
              sizes="100vw"
              priority
            />
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
