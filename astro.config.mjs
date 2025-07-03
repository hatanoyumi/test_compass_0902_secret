// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://test-compass-2.netlify.app/',
  // base: '/astro/test_compass_0902_secret/',
  build: {
    format: 'preserve'
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "./src/styles/_variables.scss" as *;
          @use "./src/styles/_mixin.scss" as *;
          `,
        }
      }
    },
    build: {
      rollupOptions: {
        output: {
          assetFileNames: "[ext]/[name][extname]",// cssの名前をわかりやすく
        },
      },
    },
  },
});
