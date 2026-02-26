'use client';

import { motion } from 'framer-motion';
import Section from '@/components/layout/Section';
import { BIO_CONTENT } from '@/lib/constants';

export default function BioSection() {
  return (
    <Section id="bio" className="">
      <div className="max-w-4xl mx-auto lg:-mt-[219px]">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold uppercase tracking-wider text-center"
        >
          About
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-8 text-lg leading-relaxed mt-16"
        >
          {BIO_CONTENT.biography.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-gray-800">
              {paragraph}
            </p>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
