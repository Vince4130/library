import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: globals.node } },

  // Personnalisation des règles ici 👇
  {
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double"],
      "no-console": ["warn"],
      "no-debugger": ["error"],
      "no-var": ["error"],
      "prefer-const": ["error"],
      camelcase: ["error"],
      eqeqeq: ["error", "always"],
      curly: ["error", "all"],
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "no-unused-private-class-members": ["warn"],
    },
  },
]);
