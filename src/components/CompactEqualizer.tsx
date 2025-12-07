import { motion } from 'framer-motion';

interface CompactEqualizerProps {
  isPlaying: boolean;
}

export function CompactEqualizer({ isPlaying }: CompactEqualizerProps) {
  const heights = [10, 16, 12];

  return (
    <div className="flex items-center gap-[2.5px] h-5">
      {heights.map((height, i) => (
        <motion.div
          key={i}
          className="w-[3px] bg-white/80 rounded-sm"
          animate={
            isPlaying
              ? {
                  height: [height * 0.6, height * 1.2, height * 0.6],
                  opacity: [0.6, 1, 0.6],
                }
              : { height: 4, opacity: 0.4 }
          }
          transition={{
            duration: 0.6,
            repeat: isPlaying ? Infinity : 0,
            ease: 'easeInOut',
            delay: i * 0.15,
          }}
        />
      ))}
    </div>
  );
}
