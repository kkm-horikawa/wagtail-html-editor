import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'WagtailHtmlEditor',
      fileName: 'wagtail-html-editor',
      formats: ['es', 'iife'],
    },
    outDir: resolve(__dirname, '../src/wagtail_html_editor/static/wagtail_html_editor/js'),
    emptyOutDir: true,
    sourcemap: true,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') {
            return '../css/wagtail-html-editor.css'
          }
          return assetInfo.name ?? ''
        },
      },
    },
  },
})
