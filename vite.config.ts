import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  // Add this 'base' property
  base: '/besthuman-portal-sandbox/',
  plugins: [react()],
})