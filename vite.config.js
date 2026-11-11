import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  build: isSsrBuild
    ? {}
    : {
        rollupOptions: {
          output: {
            // Split rarely-changing vendor code (React) into its own chunk so it
            // stays cached across app deploys. Leaflet is already lazy-split via LazyMap.
            manualChunks: {
              vendor: ['react', 'react-dom'],
            },
          },
        },
      },
}));
