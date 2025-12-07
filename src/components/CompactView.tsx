import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrackInfo } from '../types';
import { CompactEqualizer } from './CompactEqualizer';

interface CompactViewProps {
  track: TrackInfo | null;
  isVisible: boolean;
}

const CompactViewComponent = ({ track, isVisible }: CompactViewProps) => {
  return (
    <motion.div
      className="w-full h-full flex items-center justify-center relative"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1]
      }}
    >
      <AnimatePresence mode="wait">
        {!track ? (
          <motion.div
            key="idle"
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="flex items-center justify-center"
          >
            <div
              className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-purple-500 to-pink-500"
              style={{
                boxShadow: '0 0 12px rgba(168, 85, 247, 0.6)',
              }}
            />
          </motion.div>
        ) : (
          <motion.div
            key="music"
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="flex items-center gap-2.5 px-3"
          >
            {track.artUrl && (
              <img
                src={track.artUrl}
                alt="Album art"
                className="w-8 h-8 rounded-md object-cover shadow-md"
                style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
              />
            )}
            <CompactEqualizer isPlaying={track.playing} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const CompactView = React.memo(CompactViewComponent);
