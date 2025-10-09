import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // ESM files (.mjs and explicitly ESM) should be parsed as modules
  {
    files: ["**/*.mjs", "**/*-esm.js", "**/esm/**"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { sourceType: "module", globals: { ...globals.node, ...globals.browser } }
  },
  // Treat plain .js files as CommonJS by default
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs", globals: { ...globals.node, ...globals.browser } } },
  // Enable Jest globals for test files
  { files: ["test/**", "**/*.test.js", "**/*.spec.js"], languageOptions: { globals: { ...globals.jest } } },
]);
