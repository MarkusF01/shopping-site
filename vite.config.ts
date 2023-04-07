import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/shopping-site",
  build: {
    outDir: './dist',
    emptyOutDir: true,
    
    rollupOptions: {
      output: {
        assetFileNames: (asset) => {
          if (asset.name?.substring(asset.name.length - 4) == ".jpg") {
            return "images/src/[name][extname]";
          }            
          return "assets/[name].[hash][extname]";
        }
      },
    },
  },
})
