module.exports = {
  overrides: [
    {
      files: ["*.jsx", "*.js"],
      env: {
        browser: true,
        es2021: true,
        node: true,
      },
      extends: [
        "plugin:react/recommended",
        "airbnb",
        "plugin:prettier/recommended",
      ],
      rules: {
        "prettier/prettier": ["error"],
        "import/no-extraneous-dependencies": "off",
      },
    },
    {
      files: ["src/*.tsx", "src/*.ts"],
      env: {
        browser: true,
        es2021: true,
        node: true,
      },
      extends: [
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "airbnb",
        "airbnb-typescript",
        "plugin:prettier/recommended",
      ],
      plugins: ["prettier"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "./tsconfig.json",
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
      },
      rules: {
        "prettier/prettier": ["error"],
        "import/newline-after-import": "warn",
        "@typescript-eslint/no-unused-vars": "warn",
        "@typescript-eslint/default-param-last": "off",
        "react/self-closing-comp": "warn",
        "react/jsx-no-bind": "off",
        "no-param-reassign": ["error", { props: false }],
        "@typescript-eslint/no-use-before-define": "off",
        "react/function-component-definition": [
          "error",
          {
            namedComponents: "arrow-function",
          },
        ],
        "react/react-in-jsx-scope": "off",
      },
    },
  ],
};
