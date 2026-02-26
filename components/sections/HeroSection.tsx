'use client';

import { motion } from 'framer-motion';
import ParallaxImage from '@/components/ui/ParallaxImage';
import { SITE_CONFIG } from '@/lib/constants';

export default function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0 z-0">
        <ParallaxImage
          src="/images/hero/Merlijn suited.jpg"
          alt="Merlijn Passier"
          speed={0.3}
          className="h-[120%]"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Title and Subtitle - Top */}
      <div className="absolute top-24 left-0 right-0 z-10 text-center text-white px-8 sm:px-12 lg:px-16">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-wider mb-6"
        >
          {SITE_CONFIG.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl md:text-2xl lg:text-3xl uppercase tracking-widest"
        >
          {SITE_CONFIG.description}
        </motion.p>
      </div>

      {/* View Work Button - Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-24 left-0 right-0 z-10 text-center"
      >
        <a
          href="#projects"
          className="inline-block px-8 py-3 border-2 border-white text-white uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300"
        >
          View Work
        </a>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
        >
          <motion.div className="w-1 h-3 bg-white rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
}
