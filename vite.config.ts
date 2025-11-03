import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  // CORRECTED: This line tells Vite the correct sub-path for your project on GitHub Pages.
  base: '/besthuman-portal-sandbox/',
  plugins: [react()],
})