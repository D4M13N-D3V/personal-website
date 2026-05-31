const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Path to the Next.js app so next/jest can load next.config.js and .env files
  dir: './'
})

/** @type {import('jest').Config} */
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/index.ts'
  ]
}

module.exports = createJestConfig(customJestConfig)
