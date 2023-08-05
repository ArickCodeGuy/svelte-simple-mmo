module.exports = {
  trailingComma: 'es5',
  tabWidth: 2,
  printWidth: 80,
  semi: true,
  singleQuote: true,
  svelteIndentScriptAndStyle: false,
  plugins: ["prettier-plugin-svelte"],
  overrides: [{ "files": "*.svelte", "options": { "parser": "svelte" } }],
  verbatimModuleSyntax: true,
};
