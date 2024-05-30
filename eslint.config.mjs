import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {languageOptions: { globals: globals.browser }},
  {
    ignores: ["test/**/*.mjs"]
  },
  pluginJs.configs.recommended,
];