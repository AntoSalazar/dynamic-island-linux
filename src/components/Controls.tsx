import { motion } from 'framer-motion';
import { Play, Pause, SkipBack, SkipForward, Cast } from 'lucide-react';

interface ControlsProps {
  isPlaying: boolean;
  onPlayPause: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

const buttonVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};

export function Controls({ isPlaying, onPlayPause, onPrevious, onNext }: ControlsProps) {
  return (
    <div className="flex items-center justify-between mt-auto pb-0.5">
      <div className="flex items-center gap-3 flex-1 justify-center">
        <motion.button
          variants={buttonVariants}
          initial="rest"
          whileHover="hover"
          whileTap="tap"
          onClick={(e) => {
            e.stopPropagation();
            onPrevious();
          }}
          className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-colors hover:bg-white/10"
        >
          <SkipBack size={20} />
        </motion.button>

        <motion.button
          variants={buttonVariants}
          initial="rest"
          whileHover="hover"
          whileTap="tap"
          onClick={(e) => {
            e.stopPropagation();
            onPlayPause();
          }}
          className="w-12 h-12 rounded-full flex items-center justify-center text-white bg-white/15 hover:bg-white/25 transition-colors"
        >
          {isPlaying ? <Pause size={24} /> : <Play size={24} className="ml-0.5" />}
        </motion.button>

        <motion.button
          variants={buttonVariants}
          initial="rest"
          whileHover="hover"
          whileTap="tap"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-colors hover:bg-white/10"
        >
          <SkipForward size={20} />
        </motion.button>
      </div>

      <motion.button
        variants={buttonVariants}
        initial="rest"
        whileHover="hover"
        whileTap="tap"
        onClick={(e) => e.stopPropagation()}
        className="w-9 h-9 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-colors hover:bg-white/10 flex-shrink-0"
      >
        <Cast size={18} />
      </motion.button>
    </div>
  );
}
