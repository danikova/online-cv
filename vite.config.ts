import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';

export default defineConfig({
  base: '/online-cv/',
  plugins: [react(), viteTsconfigPaths(), svgrPlugin()],
  server: {
    open: '/online-cv/',
    port: 3000,
    strictPort: true,
  },
  build: {
    outDir: 'build',
    sourcemap: false,
  },
});
