import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Ensures relative asset paths work seamlessly on GitHub Pages
  server: {
    host: true, // Enables network access via your Laptop's Wi-Fi IP address
    port: 5173,
  },
})
