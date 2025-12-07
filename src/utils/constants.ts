import { IslandDimensions, IslandState } from '../types';

export const DIMENSIONS: Record<IslandState, IslandDimensions> = {
  [IslandState.COMPACT]: { width: 170, height: 44 },
  [IslandState.MUSIC]: { width: 380, height: 200 },
  [IslandState.NOTIFICATION]: { width: 350, height: 80 },
};

export const ANIMATION_DURATION = 0.5;
export const AUTO_COLLAPSE_DELAY = 3000;
export const PROGRESS_UPDATE_INTERVAL = 1000;
