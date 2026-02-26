'use client';

import { motion } from 'framer-motion';
import Section from '@/components/layout/Section';
import ImageGallery from '@/components/ui/ImageGallery';
import { GALLERY_IMAGES } from '@/lib/constants';

export default function GallerySection() {
  return (
    <Section id="gallery" className="">
      <div className="max-w-6xl mx-auto" style={{ marginTop: '-370px' }}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold uppercase tracking-wider mb-4 text-center"
        >
          Behind the scenes
        </motion.h2>

        <ImageGallery images={GALLERY_IMAGES} />
      </div>
    </Section>
  );
}
