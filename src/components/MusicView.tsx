import React from 'react';
import { motion } from 'framer-motion';
import { TrackInfo } from '../types';
import { Visualizer } from './Visualizer';
import { ProgressBar } from './ProgressBar';
import { Controls } from './Controls';

interface MusicViewProps {
  track: TrackInfo;
  position: number;
  isVisible: boolean;
  onPlayPause: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

const MusicViewComponent = ({
  track,
  position,
  onPlayPause,
  onPrevious,
  onNext,
}: MusicViewProps) => {
  return (
    <motion.div
      className="w-full h-full flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1]
      }}
    >
      <div className="w-full flex flex-col gap-6">
        {/* Top Row: Album Art + Track Info + Visualizer */}
        <div className="flex items-center gap-5">
          <img
            src={track.artUrl}
            alt={track.album}
            className="w-[50px] h-[50px] rounded-lg object-cover bg-gradient-to-br from-[#667eea] to-[#764ba2] flex-shrink-0"
          />

          <div className="flex-1 min-w-0 flex flex-col gap-1">
            <div className="text-[15px] font-semibold text-white truncate leading-tight">
              {track.title}
            </div>
            <div className="text-[13px] text-white/70 truncate leading-tight">
              {track.artist}
            </div>
          </div>

          <Visualizer isPlaying={track.playing} />
        </div>

        {/* Middle Row: Progress Bar */}
        <ProgressBar position={position} length={track.length} />

        {/* Bottom Row: Controls */}
        <Controls
          isPlaying={track.playing}
          onPlayPause={onPlayPause}
          onPrevious={onPrevious}
          onNext={onNext}
        />
      </div>
    </motion.div>
  );
};

export const MusicView = React.memo(MusicViewComponent);
