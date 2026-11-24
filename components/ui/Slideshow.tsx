'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { GalleryImage } from '@/types';

interface SlideshowProps {
  images: GalleryImage[];
  /** Milliseconds each photograph stays on screen. */
  interval?: number;
}

export default function Slideshow({ images, interval = 5000 }: SlideshowProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const count = images.length;

  const go = useCallback(
    (delta: number) => setIndex(i => (i + delta + count) % count),
    [count]
  );

  // Only run while the band is actually on screen. A slideshow advancing in a
  // section nobody is looking at burns battery and arrives at a random photo.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible || paused || count < 2) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = window.setInterval(() => go(1), interval);
    return () => window.clearInterval(id);
  }, [visible, paused, count, interval, go]);

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      go(-1);
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      go(1);
    }
  };

  // Touch: a horizontal drag of more than 40px counts as a swipe.
  const touchStart = useRef<number | null>(null);

  if (count === 0) return null;

  return (
    <div
      ref={containerRef}
      role="group"
      aria-roledescription="carousel"
      aria-label="Behind the scenes slideshow"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={e => {
        touchStart.current = e.touches[0].clientX;
      }}
      onTouchEnd={e => {
        if (touchStart.current === null) return;
        const delta = e.changedTouches[0].clientX - touchStart.current;
        if (Math.abs(delta) > 40) go(delta < 0 ? 1 : -1);
        touchStart.current = null;
      }}
      className="group relative w-full aspect-video overflow-hidden rounded-lg bg-black select-none"
    >
      {images.map((image, i) => (
        <div
          key={image.src}
          aria-hidden={i !== index}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{ opacity: i === index ? 1 : 0 }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1100px"
            priority={i === 0}
            loading={i === 0 ? undefined : 'lazy'}
          />
        </div>
      ))}

      {/* Controls. They sit above the photograph, so each one carries its own
          scrim: a white arrow over a white studio wall is invisible. */}
      <button
        type="button"
        onClick={() => go(-1)}
        aria-label="Previous photo"
        className="absolute left-3 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-black/35 text-white text-xl leading-none backdrop-blur-sm opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity hover:bg-black/60"
      >
        ‹
      </button>
      <button
        type="button"
        onClick={() => go(1)}
        aria-label="Next photo"
        className="absolute right-3 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-black/35 text-white text-xl leading-none backdrop-blur-sm opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity hover:bg-black/60"
      >
        ›
      </button>

      <div
        aria-live="polite"
        className="absolute bottom-3 right-4 rounded-full bg-black/40 px-3 py-1 text-xs tracking-widest text-white backdrop-blur-sm tabular-nums"
      >
        {String(index + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
      </div>

      <div className="absolute bottom-0 left-0 h-[3px] w-full bg-white/20">
        <div
          className="h-full bg-white transition-[width] duration-500 ease-out"
          style={{ width: `${((index + 1) / count) * 100}%` }}
        />
      </div>
    </div>
  );
}
