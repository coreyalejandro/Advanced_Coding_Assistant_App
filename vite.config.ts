
  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react-swc';
  import { resolve } from 'path';
  import { fileURLToPath, URL } from 'node:url';

  export default defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        '@': resolve(fileURLToPath(new URL('./src', import.meta.url))),
      },
    },
    build: {
      target: 'esnext',
      outDir: 'dist',
    },
    server: {
      port: 3000,
      open: true,
    },
  });