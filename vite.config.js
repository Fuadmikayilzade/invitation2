import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    assetsInlineLimit: 10000000,
    chunkSizeWarningLimit: 5000,
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
})



