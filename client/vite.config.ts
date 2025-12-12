import { resolve } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'WagtailHtmlEditor',
      fileName: (format) =>
        `js/wagtail-html-editor.${format === 'es' ? 'js' : 'iife.js'}`,
      formats: ['es', 'iife'],
    },
    outDir: resolve(
      __dirname,
      '../src/wagtail_html_editor/static/wagtail_html_editor',
    ),
    emptyOutDir: false,
    sourcemap: true,
    minify: 'terser',
    terserOptions: {
      mangle: {
        // Avoid using $ as it conflicts with jQuery in Wagtail admin
        reserved: ['$', 'jQuery'],
        keep_classnames: true,
      },
    },
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) {
            return 'css/wagtail-html-editor.css'
          }
          return assetInfo.name ?? ''
        },
      },
    },
  },
})
