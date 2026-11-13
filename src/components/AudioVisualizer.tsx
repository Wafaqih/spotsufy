import React from 'react';
import { motion } from 'motion/react';

interface AudioVisualizerProps {
  isPlaying: boolean;
  barCount?: number;
  height?: number;
  className?: string;
}

export const AudioVisualizer: React.FC<AudioVisualizerProps> = ({
  isPlaying,
  barCount = 6,
  height = 14,
  className = '',
}) => {
  const bars = Array.from({ length: barCount });

  return (
    <div
      className={`inline-flex items-end gap-[2px] ${className}`}
      style={{ height: `${height}px` }}
      aria-hidden="true"
    >
      {bars.map((_, idx) => {
        const minH = Math.max(3, Math.round(height * 0.25));
        const peakH = Math.max(minH + 2, Math.round(height * (0.65 + ((idx % 3) * 0.15))));
        const midH = Math.max(minH + 1, Math.round(height * (0.4 + ((idx % 2) * 0.2))));

        return (
          <motion.span
            key={idx}
            className="w-[3px] rounded-full bg-[#1DB954] origin-bottom"
            animate={
              isPlaying
                ? {
                    height: [minH, peakH, midH, height, minH],
                  }
                : { height: minH }
            }
            transition={
              isPlaying
                ? {
                    duration: 0.75 + (idx % 4) * 0.15,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: idx * 0.08,
                  }
                : { duration: 0.2 }
            }
          />
        );
      })}
    </div>
  );
};
