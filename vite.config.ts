import { defineConfig } from 'vite'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// Polyfill __dirname for ESM (required for path.resolve in Vite config)
const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  base: '/Lasith-Bandara-Web/', // Fixes asset paths for GitHub Pages subdir
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },
})
