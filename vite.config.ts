import { resolve as pathResolve } from 'path';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';

const resolve = (path: string) => pathResolve(__dirname, path);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  base: '/svelte-simple-mmo/',
  build: {
    rollupOptions: {
      // index for dev
      // 404 for gh-pages
      input: ['404.html', 'index.html'],
    },
  },
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': resolve('src'),
    },
  },
});
