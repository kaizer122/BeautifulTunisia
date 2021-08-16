module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  plugins: ["react", "react-hooks", "@typescript-eslint", "prettier"],
  parserOptions: {
    project: "./tsconfig.json",
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    indent: ["error", 2, { SwitchCase: 1 }],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double", { avoidEscape: true }],
    semi: ["error", "always"],
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": "off",
    "react/display-name": "off",
    "react/prop-types": "off",
    "prettier/prettier": "error",
    "@typescript-eslint/no-unsafe-assignment": [1],
    "@typescript-eslint/no-unsafe-return": [1],
    "@typescript-eslint/no-unsafe-member-access": [1],
    "@typescript-eslint/no-unsafe-call": [1],
    "@typescript-eslint/explicit-module-boundary-types": [0],
  },

  settings: {
    react: {
      version: "detect",
    },
  },
};
