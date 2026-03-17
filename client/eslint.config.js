import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,jsx}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser } },
  pluginReact.configs.flat.recommended,
  {
  "extends": [
    "airbnb",
    "plugin:react/jsx-runtime" // This disables the "React in scope" rule for you
  ],
  "rules": {
    "react/react-in-jsx-scope": "off" // Or explicitly turn it off here
  }
}

]);
