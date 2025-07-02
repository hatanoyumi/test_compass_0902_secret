// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
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
