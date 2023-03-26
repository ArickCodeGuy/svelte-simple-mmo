import { resolve as pathResolve } from 'path';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

const resolve = (path: string) => pathResolve(__dirname, path);

export default defineConfig({
  plugins: [sveltekit()],
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}'],
  },
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '~': resolve('src'),
    },
  },
});
