'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Section from '@/components/layout/Section';
import VideoPlayer from '@/components/ui/VideoPlayer';
import { CUTJONGENS_INFO } from '@/lib/constants';

export default function CutjongensSection() {
  return (
    <Section id="cutjongens" className="lg:-mt-[350px]">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold uppercase tracking-wider text-center mb-16"
        >
          {CUTJONGENS_INFO.name}
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 items-start mb-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative w-full rounded-lg overflow-hidden"
          >
            <Image
              src={CUTJONGENS_INFO.image}
              alt="Cutjongens team"
              width={1200}
              height={800}
              className="w-full h-auto object-contain"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed">
              {CUTJONGENS_INFO.description.split('www.cutjongens.nl')[0]}
              <a
                href="https://www.cutjongens.nl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black underline font-bold hover:opacity-70 transition-opacity"
              >
                www.cutjongens.nl
              </a>
            </p>
          </motion.div>
        </div>

        {/* Showreel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-8 lg:mt-[120px]" style={{ marginTop: '95px' }}
        >
          <h3 className="text-2xl font-bold uppercase tracking-wider mb-8 text-center">
            Cutjongens Showreel
          </h3>
          <VideoPlayer url={CUTJONGENS_INFO.showreel} />
        </motion.div>
      </div>
    </Section>
  );
}
