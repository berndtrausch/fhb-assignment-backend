import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {languageOptions: { globals: globals.browser }},
  {
    ignores: ["test/**/*.mjs", "node_modules/**"],
  },
  pluginJs.configs.recommended,
];