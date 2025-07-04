// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://test-compass-2.netlify.app/',
  // base: 'https://test-compass-2.netlify.app/',
  build: {
    format: 'preserve', // これを使うと、astro buildでファイル名がわかりやすくなる
    assetsPrefix: 'https://test-compass-2.netlify.app/' // 画像の格納場所が異なるときなど、相対パスではなく絶対パスにする場合これで指定（jsとimgを分ける方法もある）
    //　ファイルタイプごとに異なるドメインの場合（他のすべてのファイルのデフォルトとしてfallbackプロパティを最後につける）
    //  assetsPrefix: {
    //   'js': 'https://js.cdn.example.com',
    //   'mjs': 'https://js.cdn.example.com',
    //   'css': 'https://css.cdn.example.com',
    //   'fallback': 'https://cdn.example.com'
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
});
