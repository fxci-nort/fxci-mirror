import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import * as path from 'path';

export default defineConfig({
  plugins: [react()],
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@shared': path.resolve(__dirname, './src/shared'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@app': path.resolve(__dirname, './src/app'),
    },
  },
});
