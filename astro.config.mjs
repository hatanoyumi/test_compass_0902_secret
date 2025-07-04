// @ts-check
import { defineConfig } from 'astro/config';

import relativeLinks from 'astro-relative-links';

// https://astro.build/config
export default defineConfig({
  site: 'https://test-compass-2.netlify.app/',

  // base: 'https://test-compass-2.netlify.app/',
  build: {
    format: 'preserve', // これを使うと、astro buildでファイル名が.astroファイルと同じになる
    assetsPrefix: 'https://test-compass-2.netlify.app/'
    // ↑画像の格納場所が異なるときなど、httpsからの絶対パスにする場合これで指定。と思ったけど画像のパス変わらんな！
    //　ファイルタイプごとに異なるドメインの場合（他のすべてのファイルのデフォルトとしてfallbackプロパティを最後につける）
    //  assetsPrefix: {
    //   'js': 'https://test-compass-2.netlify.app/js/',
    //   'mjs': 'https://test-compass-2.netlify.app/mjs/',
    //   'css': 'https://test-compass-2.netlify.app/css/',
    //   'fallback': 'https://test-compass-2.netlify.app/etc/'
    // }
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

  integrations: [relativeLinks()],
  compressHTML: false,
});