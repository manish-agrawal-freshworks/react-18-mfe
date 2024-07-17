import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  build: { manifest: true },
  outDir: 'dist',
  assets: {
    // Explicitly specify the location of the manifest.json file
    // Adjust the path according to your project structure
    // Assuming manifest.json is in the root directory
    publicDir: './',
    // Set the destination directory where the manifest.json should be copied
    // Adjust the path according to your project structure
    // Assuming it should be in the dist folder
    dst: './dist',
  },
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
        svgoConfig: {
          plugins: ['preset-default'],
        },
      },
    }),
  ],
  resolve: { alias: { src: resolve('src/') } },
});
