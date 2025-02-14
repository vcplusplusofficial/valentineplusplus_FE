import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  preview: {
    host: true, // or '0.0.0.0' if preferred
    port: 3000, // adjust if needed
    allowedHosts: ['valentinefe-9yfv5.ondigitalocean.app']
  }
})
