import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import process from 'process';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {
      API_URL: process.env.API_URL,
    },
  },
  build: {
    rollupOptions: {
      input: 'index.html',
    },
  },
});
