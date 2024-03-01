import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

/** @type {import('jest').Config} */
const config = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  collectCoverage: true,
  coverageReporters: ['lcov', 'json', 'html', 'text', 'text-summary'],
  collectCoverageFrom: ['<rootDir>/**/*.ts', '<rootDir>/**/*.tsx'],
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/coverage/',
    '<rootDir>/jest.setup.js',
    '<rootDir>/jest.config.mjs',
    '<rootDir>/tailwind.config.ts',
    '/pages/',
  ],
};

export default createJestConfig(config);
