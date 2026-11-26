'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Section from '@/components/layout/Section';
import { CONTACT_INFO } from '@/lib/constants';

export default function ContactSection() {
  return (
    <Section id="contact">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold uppercase tracking-wider mb-16 text-center"
        >
          Get in Touch
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:order-1"
          >
            <div className="relative w-full rounded-lg overflow-hidden">
              <Image
                src={CONTACT_INFO.images[0]}
                alt="Merlijn Passier 1"
                width={800}
                height={1200}
                className="w-full h-auto object-contain"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8 lg:order-2"
          >
            <div>
              <p className="text-lg mb-6 opacity-80">
                For inquiries about film projects, collaborations, or speaking
                engagements, please reach out via email.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-sm uppercase tracking-wider opacity-60 mb-2">
                  Email
                </h4>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-xl font-bold hover:opacity-70 transition-opacity"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>

            {/* 177px drops the button level with the foot of the photographs
                beside it. There is nothing beside it in one column, so on a
                phone that was a hole; there it keeps an ordinary distance. */}
            <div className="!mt-12 lg:!mt-[177px]" style={{ textAlign: 'center' }}>
              <motion.a
                href={`mailto:${CONTACT_INFO.email}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-3 bg-black text-white uppercase tracking-wider hover:bg-gray-800 transition-colors"
              >
                Send Email
              </motion.a>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:order-3"
          >
            {/* 68% is a desktop measure: it makes this photograph end level
                with the taller one on the left. In one column it only pushed
                the picture off centre, so below lg it runs full width like
                the other. */}
            <div className="relative w-full rounded-lg overflow-hidden lg:w-[68%]">
              <Image
                src={CONTACT_INFO.images[1]}
                alt="Merlijn Passier 2"
                width={800}
                height={1200}
                className="w-full h-auto object-contain"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
