module.exports = {
    verbose: true,
    clearMocks: false,
    reporters: ['default', 'jest-junit'],

    collectCoverage: true,
    collectCoverageFrom: ["lib/**/*.(ts|tsx)", "!**/node_modules/**"],
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'lcov'],



    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    moduleDirectories: ['node_modules'],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": '<rootDir>test/__mocks__/file-mock.js',
        "\\.(css|less|sass|scss)$": '<rootDir>test/__mocks__/object-mock.js'
    },
    // 所有的测试文件在哪里
    testMatch: ['<rootDir>/**/__tests__/**/*.unit.(js|jsx|ts|tsx)'],
    tranform: {
        "^.+unit\\.(js|jsx)$": "babel-jest",
        '^.+unit\\.(ts|tsx)$': 'ts-jest',
    },
    setupFilesAfterEnv: ['<rootDir>test/setupTests.js']

}