'use client';

import { motion } from 'framer-motion';

interface VideoPlayerProps {
  url: string;
  title?: string;
}

export default function VideoPlayer({ url, title }: VideoPlayerProps) {
  // Extract Vimeo video ID from URL
  const getVimeoId = (url: string) => {
    const match = url.match(/vimeo\.com\/(\d+)/);
    return match ? match[1] : null;
  };

  const vimeoId = getVimeoId(url);

  if (!vimeoId) {
    return <div>Invalid Vimeo URL</div>;
  }

  return (
    <div className="relative group">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="video-container rounded-lg overflow-hidden bg-black"
      >
        <iframe
          src={`https://player.vimeo.com/video/${vimeoId}?byline=0&portrait=0&title=0`}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        />
      </motion.div>

      {title && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm uppercase tracking-wider text-center"
          style={{ marginTop: '30px' }}
        >
          {title}
        </motion.p>
      )}
    </div>
  );
}
