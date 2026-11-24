'use client';

import { motion } from 'framer-motion';
import Section from '@/components/layout/Section';
import ImageGallery from '@/components/ui/ImageGallery';
import Slideshow from '@/components/ui/Slideshow';
import { GALLERY_IMAGES, SLIDESHOW_IMAGES } from '@/lib/constants';

export default function GallerySection() {
  return (
    <Section id="gallery" className="">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold uppercase tracking-wider mb-4 text-center"
        >
          Behind the scenes
        </motion.h2>

        <ImageGallery images={GALLERY_IMAGES} />

        {/* The slideshow sits in the same column and at the same 24px gutter
            as the rows of the grid above it, so it reads as one more row of
            the same block rather than a new section. */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6"
        >
          <Slideshow images={SLIDESHOW_IMAGES} />
        </motion.div>
      </div>
    </Section>
  );
}
