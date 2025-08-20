import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Настройки точки входа и выходных файлов библиотеки
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      name: 'vibe-ui',
      // the proper extensions will be added
      fileName: 'vibe-ui',
    },
    // Настройки сборщика Rollup
    // Выносим react-зависимости из бандла
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React',
          'react-dom': 'ReactDom',
          'react/jsx-runtime': 'react/jsx-runtime'
        },
      },
    },
  },
})
