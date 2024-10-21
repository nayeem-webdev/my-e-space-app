import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5420,  // Change the port to 3000 or any other available port
  },
})
