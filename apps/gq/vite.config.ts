/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { TanStackRouterVite } from '@tanstack/router-vite-plugin';
import path from 'path';
import appRoot from 'app-root-path';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/gq',

  server: {
    port: 4200,
    host: 'localhost',
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },

  plugins: [react(), nxViteTsPaths(), TanStackRouterVite()],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

  resolve: {
    alias: [
      {
        find: /^@gq\/styles\//, //for correct working alias in scss modules
        replacement: `${path.resolve(
          appRoot.path,
          'libs',
          'shared',
          'styles'
        )}/`,
      },
    ],
  },

  build: {
    outDir: '../../dist/apps/gq',
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },

  test: {
    globals: true,
    cache: {
      dir: '../../node_modules/.vitest',
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],

    reporters: ['default'],
    coverage: {
      reportsDirectory: '../../coverage/apps/gq',
      provider: 'v8',
    },
  },
});
