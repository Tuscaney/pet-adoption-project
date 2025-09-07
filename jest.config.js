export default {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleFileExtensions: ["js", "jsx", "json"],
  transform: {
    "^.+\\.(js|jsx)$": ["babel-jest", { configFile: "./babel.config.js" }]
  },
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy"
  },
  // support both folders: __tests__ and tests
  testMatch: [
    "<rootDir>/src/__tests__/**/*.(test|spec).jsx",
    "<rootDir>/src/tests/**/*.(test|spec).jsx"
  ],
  testPathIgnorePatterns: ["/node_modules/", "/dist/"]
};

