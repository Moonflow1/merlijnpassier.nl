'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    // w-full is required: body is a column flex container with align-items:center,
    // so without it the footer shrinks to its content instead of spanning the page.
    <footer className="w-full bg-black text-white pt-12 pb-3">
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
