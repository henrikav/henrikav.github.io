import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import {defineConfig, globalIgnores} from "eslint/config";
import eslintPluginPrettierRecommended from "eslint-config-prettier";

export default defineConfig([
  globalIgnores([
    "build/*",
  ]),
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], languageOptions: { globals: globals.browser } },
  {
    rules: {
      "semi": "error",
      "prefer-const": "error",
    },
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslintPluginPrettierRecommended
]);
