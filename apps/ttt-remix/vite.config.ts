/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  cacheDir: '../../node_modules/.vite/ttt-remix',

  plugins: [
    react(),
    viteTsConfigPaths({
      root: '../../',
    }),
  ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [
  //    viteTsConfigPaths({
  //      root: '../../',
  //    }),
  //  ],
  // },

  test: {
    setupFiles: ['./test-setup.ts'],
    globals: true,
    cache: {
      dir: '../../node_modules/.vitest',
    },
    environment: 'jsdom',
    include: ['./app/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
});
