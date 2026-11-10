import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Relative base so the build works on GitHub Pages project URLs
  base: './',
  plugins: [react()],
  server: {
    allowedHosts: ['.ngrok-free.dev', '.ngrok.io'],
  },
})
