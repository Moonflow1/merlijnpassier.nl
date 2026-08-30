'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

interface ParallaxImageProps {
  src: string;
  alt: string;
  speed?: number;
  className?: string;
  priority?: boolean;
  /**
   * 'cover' fills the box and crops the image.
   * 'contain' shows the whole image — nothing is cropped.
   */
  fit?: 'cover' | 'contain';
  sizes?: string;
}

export default function ParallaxImage({
  src,
  alt,
  speed = 0.5,
  className = '',
  priority = false,
  fit = 'cover',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isContain = fit === 'contain';

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // With 'cover' the image overflows its box, so it can travel a long way.
  // With 'contain' the image is never larger than its box, so any large drift
  // would push it out of view. The moving layer is inset by 2% top and bottom
  // (see the h-[94%] below) and the travel is kept inside that gap.
  const travel = isContain ? speed * 12 : speed * 100;
  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${travel}%`]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        style={{ y }}
        className={
          isContain
            ? 'absolute inset-x-0 top-[2%] h-[94%]'
            : 'relative w-full h-full'
        }
      >
        <Image
          src={src}
          alt={alt}
          fill
          className={isContain ? 'object-contain' : 'object-cover'}
          priority={priority}
          sizes={sizes}
        />
      </motion.div>
    </div>
  );
}
