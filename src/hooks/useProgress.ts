import { useEffect, useState } from 'react';
import { TrackInfo } from '../types';
import { PROGRESS_UPDATE_INTERVAL } from '../utils/constants';

export function useProgress(track: TrackInfo | null) {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    if (!track) {
      setPosition(0);
      return;
    }

    setPosition(track.position);

    if (!track.playing) return;

    const interval = setInterval(() => {
      setPosition((prev) => prev + PROGRESS_UPDATE_INTERVAL * 1000);
    }, PROGRESS_UPDATE_INTERVAL);

    return () => clearInterval(interval);
  }, [track]);

  return position;
}
