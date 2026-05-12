import { defineConfig } from 'vite';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  appType: 'mpa',
  publicDir: 'public',
  build: {
    target: 'es2022',
    rollupOptions: {
      input: {
        landing: resolve(__dirname, 'Landing.html'),
        brandbook: resolve(__dirname, 'Brandbook.html'),
      },
    },
  },
});
