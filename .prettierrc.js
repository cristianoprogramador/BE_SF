/** @type {import("@trivago/prettier-plugin-sort-imports").PrettierConfig} */

const prettierConfig = {
  // "prettier/prettier": [
  //   "error",
  //   {
  //     "endOfLine": "auto"
  //   }
  // ],
  printWidth: 80,
  tabWidth: 2,
  semi: true,
  doubleQuote: true,
  trailingComma: "es5",
  bracketSpacing: true,
  importOrder: [
    '<THIRD_PARTY_MODULES>',
    '^@/assets/(.*)$',
    '^@/components/(.*)$',
    '^@/constants/(.*)$',
    '^@/styles/(.*)$',
    '^@/types/(.*)$',
    '^@/(.*)$',
    '^[./]',
  ],
  importOrderCaseInsensitive: true,
  importOrderSeparation: true,
}

module.exports = prettierConfig;