/*import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/
  /*.glb'],
})
*/
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
  server: {
    host: '0.0.0.0',  // Ensures Vite binds to the correct interface
    port: process.env.PORT || 4173,  // Use Render's PORT environment variable or fallback to 4173
  },
});
