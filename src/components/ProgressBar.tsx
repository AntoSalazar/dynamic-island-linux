import { motion } from 'framer-motion';
import { formatTime, calculateProgress } from '../utils/time';

interface ProgressBarProps {
  position: number;
  length: number;
}

export function ProgressBar({ position, length }: ProgressBarProps) {
  const progress = calculateProgress(position, length);
  const remaining = length - position;

  return (
    <div className="flex items-center gap-2.5">
      <span className="text-[11px] text-white/60 font-mono min-w-[38px] text-center">
        {formatTime(position)}
      </span>

      <div className="flex-1 h-5 flex items-center">
        <div className="w-full h-[3px] bg-white/20 rounded-sm overflow-hidden relative">
          <motion.div
            className="h-full bg-white rounded-sm"
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3, ease: 'linear' }}
          />
        </div>
      </div>

      <span className="text-[11px] text-white/60 font-mono min-w-[38px] text-center">
        -{formatTime(remaining)}
      </span>
    </div>
  );
}
