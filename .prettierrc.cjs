module.exports = {
  printWidth: 120,
  endOfLine: "lf",
  useTabs: false,
  tabWidth: 2,
  semi: true,
  singleQuote: false,

  // js/ts
  proseWrap: "never",
  trailingComma: "es5",
  bracketSpacing: true,
  arrowParens: "always",

  overrides: [
    {
      files: "*.md",
      options: {
        printWidth: 300,
      },
    },
    {
      files: "*.html",
      options: {
        // https://github.com/prettier/prettier/issues/5377#issuecomment-749023410
        // https://github.com/prettier/prettier-vscode/issues/646
        htmlWhitespaceSensitivity: "ignore", // css|strict|ignore
      },
    },
  ],
};
