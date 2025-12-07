export interface TrackInfo {
  title: string;
  artist: string;
  album: string;
  artUrl: string;
  playing: boolean;
  position: number; // microseconds
  length: number; // microseconds
}

export interface NotificationInfo {
  title: string;
  body: string;
}

export enum IslandState {
  COMPACT = 'compact',
  MUSIC = 'music',
  NOTIFICATION = 'notification',
}

export interface IslandDimensions {
  width: number;
  height: number;
}

export interface ElectronAPI {
  expandIsland: (width: number, height: number) => void;
  onMusicUpdate: (callback: (track: TrackInfo) => void) => void;
  onNotification: (callback: (notification: NotificationInfo) => void) => void;
  mediaPlayPause: () => Promise<void>;
  mediaNext: () => Promise<void>;
  mediaPrevious: () => Promise<void>;
}

declare global {
  interface Window {
    electronAPI: ElectronAPI;
  }
}
