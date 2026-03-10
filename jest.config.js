export default {
  testEnvironment: "node",
  moduleNameMapper: {
    '^@zentrix/postgres-query-builder$': '<rootDir>/packages/postgres-query-builder/dist/index.js',
    '^@zentrix/postgres-query-builder/(.*)$': '<rootDir>/packages/postgres-query-builder/dist/$1',
    '^(\\.{1,2}/.*)\\.js$': '$1'
  },
  transformIgnorePatterns: [
    "/node_modules/(?!(@zentrix)/)"
  ],
  testMatch: ["**/dist/**/tests/**/unit/**/*.test.[jt]s"],
  modulePathIgnorePatterns: ["<rootDir>/packages/zentrix/src/"]
};
