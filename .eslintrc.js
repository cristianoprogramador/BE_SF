module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/consistent-type-definitions": [2, "type"],
    "@typescript-eslint/consistent-type-imports": [
      2,
      { fixStyle: "separate-type-imports" },
    ],
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-misused-promises": [2, { checksVoidReturn: false }],
  },
};
