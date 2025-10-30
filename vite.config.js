import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: If your repo name is different from 'sravya-portfolio',
// set base to '/<your-repo-name>/' for GitHub Pages project sites.
export default defineConfig({
  plugins: [react()],
  base: '/sravya-portfolio/'
})
