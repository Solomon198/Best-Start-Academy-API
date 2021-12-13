module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    commonjs: true
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "airbnb-base",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["tsconfig.json", "tsconfig.dev.json"],
    sourceType: "module",
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: [
    "/lib/**/*", // Ignore built files.
    "/__tests__/**/*", // Ignore built files.
    "/api-doc"

  ],
  plugins: [
    "@typescript-eslint",
    "import",
  ],
  rules: {
    quotes: ["warn", "double"],
    "import/no-unresolved": "off",
    "import/extensions": "off"
  },
};
