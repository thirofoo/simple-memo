import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  root: './src',
  server: {
    // open: true,
    host: '0.0.0.0',
  },
  build: {
    outDir: '../dist',
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname,"src"),
    }
  },
  plugins: [react()],
})