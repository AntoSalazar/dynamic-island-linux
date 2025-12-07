import { motion } from 'framer-motion';

interface VisualizerProps {
  isPlaying: boolean;
  barCount?: number;
}

export function Visualizer({ isPlaying, barCount = 5 }: VisualizerProps) {
  const heights = [12, 20, 16, 22, 14];

  return (
    <div className="flex items-center gap-[3px] h-[50px] py-3">
      {Array.from({ length: barCount }).map((_, i) => (
        <motion.div
          key={i}
          className="w-[3px] bg-white/60 rounded-sm"
          animate={
            isPlaying
              ? {
                  height: [heights[i], heights[i] * 1.4, heights[i]],
                  opacity: [0.6, 1, 0.6],
                }
              : { height: 8, opacity: 0.3 }
          }
          transition={{
            duration: 0.8,
            repeat: isPlaying ? Infinity : 0,
            ease: 'easeInOut',
            delay: i * 0.1,
          }}
        />
      ))}
    </div>
  );
}
