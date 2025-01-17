import type { Config } from 'jest';

const config: Config = {
  displayName: "Application Integration Test",
  preset: 'ts-jest',
  testEnvironment: 'node',
  clearMocks: true,
  coverageProvider: 'v8',
  moduleFileExtensions: ['ts', 'js'],
  testMatch: ['**/*.spec.ts'],
  setupFilesAfterEnv: ["./jest.setup.ts"],
  forceExit: true, // Force Jest to exit after tests

  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/**.ts"
  ],
  coverageReporters: [
    "lcov",
    "text-summary"
  ],
  "coveragePathIgnorePatterns": [
    "/node_modules/",
    "(.test)\\.(ts|tsx|js)$",
    "/distribution/.*\\.(ts|js)$"
  ]
};

export default config;
