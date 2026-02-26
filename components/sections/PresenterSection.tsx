'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Section from '@/components/layout/Section';
import { PRESENTER_WORK } from '@/lib/constants';

export default function PresenterSection() {
  return (
    <Section id="presenter" className="bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold uppercase tracking-wider mb-4 text-center"
        >
          Television Presenter
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-lg opacity-70 mb-16"
        >
          Hosting & Presenting Work
        </motion.p>

        <div className="space-y-16">
          {PRESENTER_WORK.shows.map((show, index) => (
            <motion.div
              key={show.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              {/* Image */}
              <div className={index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}>
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src={show.image || show.thumbnail || '/placeholder.jpg'}
                    alt={show.title}
                    fill
                    className="object-cover "
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}>
                <h3 className="text-3xl font-bold uppercase tracking-wider mb-4">
                  {show.title}
                </h3>
                <p className="text-lg leading-relaxed opacity-80">
                  {show.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center max-w-3xl mx-auto"
        >
          <p className="text-lg opacity-80 leading-relaxed">
            Beyond filmmaking, Merlijn Passier has established himself as an
            engaging television presenter, bringing his storytelling expertise
            and charismatic presence to various programs exploring Dutch culture,
            history, and nightlife.
          </p>
        </motion.div>
      </div>
    </Section>
  );
}
