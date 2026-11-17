'use client';

import { motion } from 'framer-motion';
import ParallaxImage from '@/components/ui/ParallaxImage';
import { SITE_CONFIG } from '@/lib/constants';

/**
 * NOTE ON THE `!` PREFIXES
 * globals.css contains an unlayered `* { margin: 0; padding: 0 }` reset.
 * Unlayered CSS outranks Tailwind's layered utilities, so a plain `pt-24`
 * or `mb-2` here computes to 0. Every spacing utility in this file must be
 * `!` prefixed to survive. The section background colour is set in
 * globals.css under `section#hero` for the same reason.
 */
export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-screen overflow-hidden flex flex-col !items-stretch !p-0"
    >
      {/* Title and Subtitle — .hero-top clears the fixed bar, whatever its
          current height is (see --nav-height in globals.css). */}
      <div className="hero-top relative z-10 shrink-0 !px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wider !mb-2"
        >
          {SITE_CONFIG.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xs md:text-base lg:text-lg uppercase tracking-widest opacity-60"
        >
          {SITE_CONFIG.description}
        </motion.p>
      </div>

      {/* Photograph — shown in full, never cropped. The section backdrop matches
          the photo's own white, so its edges dissolve into the page. */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.3 }}
        className="relative z-0 flex-1 min-h-0"
      >
        <ParallaxImage
          src="/images/hero/Merlijn suited.jpg"
          alt="Merlijn Passier, gespiegeld met filmcamera"
          speed={0.3}
          fit="contain"
          sizes="100vw"
          className="h-full"
          priority
        />
      </motion.div>

      {/* View Work + Scroll Indicator */}
      <div className="relative z-10 shrink-0 flex flex-col items-center gap-4 !pb-8">
        <motion.a
          href="#projects"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="inline-block !px-8 !py-3 border-2 border-black text-black uppercase tracking-wider hover:bg-black hover:text-white transition-all duration-300"
        >
          View Work
        </motion.a>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="hidden sm:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-black/40 rounded-full flex justify-center"
          >
            <motion.div className="w-1 h-3 bg-black/40 rounded-full !mt-2" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
