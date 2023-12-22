import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Path from 'Path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      '@assets' : Path.resolve(__dirname, './src/assets')
    }
  },
  plugins: [react()],
})
