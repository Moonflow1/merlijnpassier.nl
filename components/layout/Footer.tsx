'use client';

import { motion } from 'framer-motion';
import { CONTACT_INFO } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-12 pb-3 lg:-mt-[350px]">
      <div className="max-w-6xl mx-auto px-16 sm:px-20 lg:px-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center text-sm opacity-50"
        >
          <p>&copy; {new Date().getFullYear()} Merlijn Passier. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
