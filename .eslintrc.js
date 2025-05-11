module.exports = {
  "extends": ["next/core-web-vitals", "prettier"],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
      "project": "tsconfig.json"
  },
  "ignorePatterns": [".eslintrc", "dist/**", "build/**", "node_modules/**", "docker/**", "coverage/**", ".next/**"],
  "rules":{
    "max-len": [2, { "code": 300, "ignoreStrings": true, "ignoreTemplateLiterals": true, "ignoreUrls": true }],
    "no-console":  "off",
    "no-debugger": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off", 
    "@typescript-eslint/require-await":"off",
    "@typescript-eslint/no-unused-vars": "off",
    "react/display-name": "off",
    "react-hooks/rules-of-hooks": "off"
  }
}