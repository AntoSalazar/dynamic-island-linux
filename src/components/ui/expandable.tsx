import React, { ReactNode, useEffect } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
} from 'framer-motion';
import useMeasure from 'react-use-measure';

const springConfig = { stiffness: 200, damping: 20, bounce: 0.2 };

interface ExpandableProps {
  children: ReactNode;
  isExpanded: boolean;
  collapsedSize: { width: number; height: number };
  expandedSize: { width: number; height: number };
  className?: string;
  onClick?: () => void;
  borderRadius?: { collapsed: string; expanded: string };
}

export const Expandable = React.forwardRef<HTMLDivElement, ExpandableProps>(
  (
    {
      children,
      isExpanded,
      collapsedSize,
      expandedSize,
      className = '',
      onClick,
      borderRadius,
    },
    ref
  ) => {
    const [measureRef, { width, height }] = useMeasure();
    const animatedWidth = useMotionValue(collapsedSize.width);
    const animatedHeight = useMotionValue(collapsedSize.height);
    const smoothWidth = useSpring(animatedWidth, springConfig);
    const smoothHeight = useSpring(animatedHeight, springConfig);
    const smoothBorderRadius = useSpring(22, springConfig);

    useEffect(() => {
      if (isExpanded) {
        animatedWidth.set(expandedSize.width);
        animatedHeight.set(expandedSize.height);
        smoothBorderRadius.set(24);
      } else {
        animatedWidth.set(collapsedSize.width);
        animatedHeight.set(collapsedSize.height);
        smoothBorderRadius.set(22);
      }
    }, [isExpanded, collapsedSize, expandedSize, animatedWidth, animatedHeight, smoothBorderRadius]);

    // Sync with Electron window
    useEffect(() => {
      if (isExpanded) {
        window.electronAPI?.expandIsland(expandedSize.width, expandedSize.height);
      } else {
        window.electronAPI?.expandIsland(collapsedSize.width, collapsedSize.height);
      }
    }, [isExpanded, collapsedSize, expandedSize]);

    return (
      <motion.div
        ref={ref}
        className={className}
        style={{
          width: smoothWidth,
          height: smoothHeight,
          borderRadius: smoothBorderRadius,
          padding: isExpanded ? '16px' : '0px',
        }}
        onClick={onClick}
      >
        <div ref={measureRef} className="w-full h-full">
          {children}
        </div>
      </motion.div>
    );
  }
);

Expandable.displayName = 'Expandable';
