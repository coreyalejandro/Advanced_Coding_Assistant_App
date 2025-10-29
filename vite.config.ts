
  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react-swc';
  import { resolve } from 'path';

  export default defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
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