import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: true,
  },
  build: {
    outDir: 'build',
    emptyOutDir: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    clearMocks: true,
    include: ['src/**/*.test.{js,jsx,ts,tsx}'],
    coverage: {
      provider: 'v8',
      include: ['src/**/*.{js,jsx,ts,tsx}'],
      exclude: [
        'src/**/*.test.{js,jsx,ts,tsx}',
        'src/setupTests.ts',
        'src/test-utils/**',
        'src/index.tsx',
        'src/**/index.ts',
        'src/**/*.types.ts',
        'src/**/*.d.ts',
        'src/**/*.styles.ts',
        'src/**/*State.ts',
        'src/reportWebVitals.ts',
      ],
      reporter: ['cobertura', 'html', 'lcov', 'text-summary', 'text'],
      thresholds: {
        statements: 100,
        branches: 100,
        lines: 100,
        functions: 100,
      },
    },
  },
});
