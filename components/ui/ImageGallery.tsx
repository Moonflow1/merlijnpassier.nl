'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { GalleryImage } from '@/types';

interface ImageGalleryProps {
  images: GalleryImage[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="relative aspect-[4/3] overflow-hidden rounded-lg group cursor-pointer"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover  transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        </motion.div>
      ))}
    </div>
  );
}
