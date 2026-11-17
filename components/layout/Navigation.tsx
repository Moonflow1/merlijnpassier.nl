'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { SITE_CONFIG } from '@/lib/constants';

/**
 * Every navigation item is always on screen — there is no hamburger at any
 * width. Below 1100px the row cannot hold the logo and all seven labels side
 * by side, so the menu drops to its own line under the logo and wraps as far
 * as it needs to. That makes the bar taller on narrow screens, which is why
 * its measured height is published as --nav-height: the hero reads it to know
 * how much room to leave, and section scroll-margin uses it for anchor jumps.
 */
export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = SITE_CONFIG.navigation.map(item =>
        document.querySelector(item.href)
      );

      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i] as HTMLElement;
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(SITE_CONFIG.navigation[i].href);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Publish the bar's real height, so nothing has to assume it is 80px.
  useEffect(() => {
    const el = navRef.current;
    if (!el) return;

    const publish = () => {
      document.documentElement.style.setProperty(
        '--nav-height',
        `${Math.round(el.getBoundingClientRect().height)}px`
      );
    };

    publish();
    const observer = new ResizeObserver(publish);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      ref={navRef}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div>
        {/* One row below 1100px (logo, then the menu underneath); a
            1fr-auto-1fr grid above it, so the menu sits on the page's centre
            axis — the same axis the hero title is centred on. */}
        <div className="grid grid-cols-1 items-center gap-y-2 min-h-20 py-3 min-[1100px]:grid-cols-[1fr_auto_1fr]">
          {/* Logo */}
          <motion.a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="justify-self-start hover:opacity-70 transition-opacity"
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src="/logo.png"
              alt="Merlijn Passier Logo"
              width={180}
              height={80}
              className="h-10 md:h-12 w-auto"
              priority
            />
          </motion.a>

          {/* Navigation items — full width on their own line below 1100px,
              centred in the middle grid column above it. */}
          <div
            className="
              flex flex-wrap items-center
              w-full justify-start gap-x-4 gap-y-1
              min-[1100px]:w-auto min-[1100px]:col-start-2
              min-[1100px]:justify-center min-[1100px]:gap-8
            "
          >
            {SITE_CONFIG.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`uppercase tracking-wide transition-all hover:opacity-100 whitespace-nowrap text-[11px] sm:text-xs min-[1100px]:text-sm min-[1100px]:px-2 ${
                  activeSection === item.href
                    ? 'opacity-100 font-bold'
                    : 'opacity-60'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
