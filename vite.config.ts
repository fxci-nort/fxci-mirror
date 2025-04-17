import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import * as path from 'path';

export default defineConfig({
  plugins: [react()],
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
  css: {
    devSourcemap: true,
    postcss: {
      plugins: [
        {
          postcssPlugin: 'internal:disable-url-rewrite',
          Declaration(decl) {
            if (decl.prop === 'background-image' || decl.prop === 'background') {
              decl.value = decl.value.replace(
                /url\((['"])([^'"]+)(['"])\)/g,
                (_, quote1, path, quote2) => {
                  const newPath = path.startsWith('/') ? '.' + path : path;
                  return `url(${quote1}${newPath}${quote2})`;
                }
              );
            }
          },
        },
      ],
    },
  },
  build: {
    assetsInlineLimit: 0, // Disable inlining assets as base64
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[ext]', // Preserve original asset paths
      },
    },
  },
});
