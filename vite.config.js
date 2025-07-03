import { defineConfig } from 'vite';

// Vite のビルド設定を定義
export default defineConfig({
  build: {
    minify: false, // JSの圧縮を無効化（納品データとして可読性を保つため）
    outDir: 'dist/assets/js', // ビルド後の出力先（Astroのビルド後に読み込むJS用）
    target: 'es2020', // ES2020 以降の構文を利用可能に設定
    terserOptions: {
      mangle: false, // 変数名の変更（難読化）を無効にする
    },
    rollupOptions: {
      input: 'src/scripts/main.js', // エントリーポイント（メインのJSファイル）
      output: {
        chunkFileNames: '[name].js', // 動的に分割されたファイルの命名ルール
        entryFileNames: '[name].js', // エントリーファイルの命名ルール
        assetFileNames: '[name].[ext]', // アセット（CSSや画像）の命名ルール
      }
    },
    emptyOutDir: false, // ビルド時に既存のJSファイルを削除しない
  },
  publicDir: false // publicフォルダの内容をビルド対象から除外
});
