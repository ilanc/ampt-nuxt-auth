// initially from: https://github.com/microsoft/TypeScript-Node-Starter/blob/master/.eslintrc
// articles:
//  - https://code.visualstudio.com/api/advanced-topics/tslint-eslint-migration
//  - https://eslint.org/docs/user-guide/configuring
//  - https://thomlom.dev/setup-eslint-prettier-react/
//  - https://egghead.io/lessons/eslint-avoid-common-javascript-errors-with-eslint
//  - https://www.freecodecamp.org/news/integrating-prettier-with-eslint-and-stylelint-99e74fede33f/

module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
    mocha: true,
  },
  extends: ["eslint:recommended"], // "plugin:prettier/recommended"?
  parserOptions: {
    ecmaVersion: "latest", // https://eslint.org/docs/latest/user-guide/configuring/language-options
    sourceType: "module", // https://github.com/AtomLinter/linter-eslint/issues/462
  },
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
  },
  globals: {
    log: "readonly",
  },
};
