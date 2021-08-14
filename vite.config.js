import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import { viteCommonjs } from '@originjs/vite-plugin-commonjs'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    //viteCommonjs({
    //  include: ['howler']
    //})
  ],
  server: {
    fs: {
      allow: ['./','./src/assets/cards/']
    } 
  }
})