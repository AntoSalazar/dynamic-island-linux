import { useEffect, useState, useCallback } from 'react';
import { TrackInfo } from '../types';

export function useMusicPlayer() {
  const [currentTrack, setCurrentTrack] = useState<TrackInfo | null>(null);

  useEffect(() => {
    if (!window.electronAPI) return;

    window.electronAPI.onMusicUpdate((track) => {
      console.log('🎵 Track update:', track);
      setCurrentTrack(track);
    });
  }, []);

  const playPause = useCallback(async () => {
    await window.electronAPI.mediaPlayPause();
  }, []);

  const next = useCallback(async () => {
    await window.electronAPI.mediaNext();
  }, []);

  const previous = useCallback(async () => {
    await window.electronAPI.mediaPrevious();
  }, []);

  return {
    currentTrack,
    playPause,
    next,
    previous,
  };
}
