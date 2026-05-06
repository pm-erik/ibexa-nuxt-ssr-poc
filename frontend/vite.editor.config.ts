import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'node:url'

export default defineConfig(({ mode }) => {
  const isDev = mode === 'development'

  return {
    plugins: [vue()],
    publicDir: false,
    // `vite build --mode development --watch` is still a "build" command, so
    // @vitejs/plugin-vue defaults __VUE_PROD_DEVTOOLS__ to false. Force it on
    // for the dev workflow so the vue devtools can attach inside the iframe.
    // Prod builds (yarn build:editor) leave the flag at its default (false).
    define: isDev ? { __VUE_PROD_DEVTOOLS__: 'true' } : {},
    build: {
      outDir: fileURLToPath(new URL('../public/build/editor', import.meta.url)),
      emptyOutDir: true,
      cssCodeSplit: false,
      manifest: true,
      sourcemap: isDev,
      rolldownOptions: {
        input: fileURLToPath(new URL('./entries/editor.ts', import.meta.url)),
        output: {
          entryFileNames: 'main.js',
          chunkFileNames: 'chunks/[name].js',
          assetFileNames: 'main.[ext]',
        },
      },
    },
    resolve: {
      alias: {
        '~': fileURLToPath(new URL('./app', import.meta.url)),
      },
    },
  }
})
