module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  clearMocks: true,
  testMatch: ['<rootDir>/src/**/*.test.{js,jsx,ts,tsx}'],
  transform: {
    '^.+\\.(t|j)sx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png|jpg|jpeg|webp|avif)$':
      '<rootDir>/test/fileMock.js',
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/index.tsx',
    '!src/**/index.ts',
    '!src/**/*.types.ts',
    '!src/**/*.d.ts',
    '!src/**/*.styles.ts',
    '!src/react-app-env.d.ts',
    '!src/reportWebVitals.ts',
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/src/.*/index\\.ts$',
    '\\.?types\\.ts$',
    '\\.?d\\.ts$',
  ],
  coverageReporters: ['cobertura', 'html', 'lcov', 'text-summary', 'text'],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      lines: 100,
      functions: 100,
    },
  },
};
