import { defineConfig } from 'vite';
import { globSync } from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import postcssSortMediaQueries from 'postcss-sort-media-queries';

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/project-group-7-main/' : '/', // ИМЯ РЕПО!
  root: 'src',

  build: {
    sourcemap: true,
    rollupOptions: {
      input: globSync('./src/*.html'),
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) return 'vendor';
        },
        entryFileNames: (chunkInfo) =>
          chunkInfo.name === 'commonHelpers' ? 'commonHelpers.js' : '[name].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.html')) {
            return '[name][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
    outDir: '../dist',
    emptyOutDir: true,
  },

  plugins: [
    injectHTML(),
    FullReload(['./src/**/*.html']),
  ],

  css: {
    postcss: {
      plugins: [postcssSortMediaQueries({ sort: 'mobile-first' })],
    },
  },

  define: {
    [command === 'serve' ? 'global' : '_global']: {},
  },
}));
