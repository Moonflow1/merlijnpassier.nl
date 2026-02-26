'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  fullHeight?: boolean;
  background?: string;
  style?: React.CSSProperties;
}

export default function Section({
  id,
  children,
  className = '',
  fullHeight = false,
  background = 'bg-white',
  style,
}: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8 }}
      className={`${fullHeight ? 'min-h-screen' : 'min-h-[50vh]'} ${background} ${className}`}
      style={style}
    >
      {children}
    </motion.section>
  );
}
