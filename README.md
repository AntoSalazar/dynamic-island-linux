# Dynamic Island for Linux

A macOS-inspired Dynamic Island implementation for Linux Mint Cinnamon using Electron, React, and Framer Motion.

## Features

- **Clean, Professional Design**: Modern UI with buttery smooth spring-physics animations
- **Spotify Integration**: Shows currently playing track via MPRIS D-Bus
- **Always Visible**: Persistent pill-shaped bar at top of screen
- **Smart Expansion**: Expands with smooth animations to show music controls and information
- **Native Linux Integration**: Uses D-Bus for system-level communication
- **Generous Spacing**: Apple-inspired breathing room and professional layout

## Screenshots

The Dynamic Island has three states:

1. **Compact**: Small pill shape when idle
2. **Music Player**: Expands to show album art, track info, and controls
3. **Notifications**: Displays system notifications

## Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Linux with D-Bus support
- Spotify or any MPRIS-compatible media player

### Setup

```bash
cd dynamic-island-linux
npm install
```

### Run

```bash
# Development mode (with DevTools)
npm run dev

# Production mode
npm start
```

## Configuration

### Auto-start on Login

Create a desktop entry file:

```bash
cat > ~/.config/autostart/dynamic-island.desktop <<EOF
[Desktop Entry]
Type=Application
Name=Dynamic Island
Exec=/usr/bin/node /path/to/dynamic-island-linux/main.js
Hidden=false
NoDisplay=false
X-GNOME-Autostart-enabled=true
EOF
```

Replace `/path/to/dynamic-island-linux/` with the actual path.

## How It Works

### Architecture

- **Main Process** (`main.cjs`): Creates the frameless, transparent window and handles D-Bus communication
- **React App** (`src/`): Modern component-based UI with TypeScript
  - `DynamicIsland.tsx`: Main container with state management
  - `MusicView.tsx`: Expanded music player view
  - `CompactView.tsx`: Collapsed pill state
  - `Expandable.tsx`: Smooth spring animation system
- **Preload Script** (`preload.cjs`): Secure bridge between main and renderer processes

### Spotify Integration

The app uses **MPRIS D-Bus** interface to communicate with Spotify and other media players. This is a native Linux protocol that requires no additional configuration.

Supported media players:
- Spotify
- VLC
- Rhythmbox
- Any MPRIS2-compatible player

### Key Technologies

- **Electron**: Cross-platform desktop app framework
- **React 19**: Modern component-based UI library
- **TypeScript**: Type-safe development
- **Vite**: Fast build tool and dev server
- **Framer Motion**: Smooth spring-physics animations
- **Tailwind CSS v4**: Utility-first styling with @import syntax
- **D-Bus**: Inter-process communication for Linux
- **MPRIS**: Media Player Remote Interfacing Specification

## Customization

### Positioning

Edit `main.cjs` to change position:

```javascript
const x = Math.floor((width - ISLAND_WIDTH) / 2);  // Center
const y = 10;  // Top margin
```

### Dimensions

Adjust in `src/utils/constants.ts`:

```typescript
export const DIMENSIONS = {
  [IslandState.COMPACT]: { width: 170, height: 44 },
  [IslandState.MUSIC]: { width: 380, height: 200 },
};
```

### Animation Physics

Edit `src/components/ui/expandable.tsx` to customize spring behavior:

```typescript
const springConfig = { stiffness: 200, damping: 20, bounce: 0.2 };
```

### Colors & Styling

Edit component files in `src/components/` using Tailwind CSS classes:

- Background: `bg-black`, `bg-gradient-to-br`
- Spacing: `px-12 py-10`, `gap-6`
- Border radius, shadows, etc.

## Roadmap

- [x] Smooth spring-physics animations
- [x] React + TypeScript architecture
- [x] Media player controls (play/pause/next/prev via D-Bus)
- [ ] Full notification system integration
- [ ] Multiple notification queue
- [ ] Calendar/timer integration
- [ ] System monitoring (CPU, RAM, battery)
- [ ] Customizable themes
- [ ] Settings panel
- [ ] Multi-monitor support

## Known Issues

- Notification integration not yet implemented
- No multi-monitor support yet
- Requires MPRIS-compatible media player

## Contributing

Feel free to submit issues and enhancement requests!

## License

MIT
