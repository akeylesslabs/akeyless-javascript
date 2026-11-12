// src/ is regenerated on every release, so only rules that indicate broken
// output are enabled. Packages can't be imported here because CI runs eslint
// through npx without adding it to package.json (which the generator owns).
const readonly = (names) => Object.fromEntries(names.map((n) => [n, 'readonly']));

export default [
  {
    files: ['src/**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: readonly([
        'Blob',
        'Buffer',
        'File',
        'FormData',
        'URLSearchParams',
        'clearTimeout',
        'console',
        'module',
        'process',
        'require',
        'setTimeout',
        'window',
      ]),
    },
    linterOptions: {
      reportUnusedDisableDirectives: 'off',
    },
    rules: {
      'no-const-assign': 'error',
      'no-dupe-class-members': 'error',
      'no-dupe-keys': 'error',
      'no-import-assign': 'error',
      'no-undef': 'error',
      'no-unreachable': 'error',
    },
  },
];
