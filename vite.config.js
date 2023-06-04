import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // catch: false,
  // resolve: {
  //   alias: {
  //     // eslint-disable-next-line no-undef
  //     "@": "./src/",
  //   }
  // },
  server: {
    port: 3000,
    host: 'localhost',
  }

})
