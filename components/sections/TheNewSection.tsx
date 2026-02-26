'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Section from '@/components/layout/Section';
import { THE_NEW_INFO } from '@/lib/constants';

export default function TheNewSection() {
  return (
    <Section id="the_new" className="bg-gray-50 -mb-16">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold uppercase tracking-wider text-center mb-4"
        >
          {THE_NEW_INFO.name}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl text-center mb-16 font-light"
        >
          {THE_NEW_INFO.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
            {/* Intro */}
            {THE_NEW_INFO.intro.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}

            {/* Sections */}
            {THE_NEW_INFO.sections.map((section, index) => (
              <div key={index}>
                <h3 className="text-xl font-bold uppercase tracking-wider" style={{ marginBottom: '5px' }}>
                  {section.title}
                </h3>
                <p className="text-lg leading-relaxed" style={{ marginTop: '5px' }}>
                  {section.content}
                </p>
              </div>
            ))}

            {/* Closing */}
            <p className="text-lg leading-relaxed font-semibold italic">
              {THE_NEW_INFO.closing}
            </p>
        </motion.div>

        {/* Workshop Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 max-w-5xl mx-auto"
        >
          <Image
            src="/images/the_new/Merlijn-Jolien-workshop-v2.png"
            alt="Merlijn Passier and Jolien van de Griendt presenting workshop"
            width={1920}
            height={540}
            className="w-full h-auto rounded-lg"
            sizes="100vw"
          />
        </motion.div>
      </div>
    </Section>
  );
}
