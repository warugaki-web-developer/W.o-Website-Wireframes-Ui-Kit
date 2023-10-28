/** @type {import("@types/eslint").Linter.Config} */

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  rules: {},
  extends: [],
  overrides: [
    {
      files: ['*.js', '*.mjs', '*.cjs'],
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      extends: ['airbnb-base', 'prettier'],
      rules: {
        // 'no-restricted-syntax': 0,
        'import/prefer-default-export': 'off',
      },
    },
    {
      files: ['*.ts', '*.mts', '*.cts'],
      plugins: [
        //
        '@typescript-eslint',
      ],

      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['./tsconfig.json'],
        ecmaVersion: 'latest',
        sourceType: 'module',
      },

      extends: [
        'airbnb-base',
        'airbnb-typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:@typescript-eslint/strict',
        'prettier',
      ],

      rules: {
        '@typescript-eslint/no-unused-vars': [
          'error',
          { argsIgnorePattern: '^_', destructuredArrayIgnorePattern: '^_' },
        ],
      },
    },
    {
      files: ['*.astro'],
      extends: [
        //
        'airbnb-base',
        'plugin:astro/recommended',
        'prettier',
      ],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
        // The script of Astro components uses ESM.
        sourceType: 'module',
      },
      rules: {
        'import/prefer-default-export': 'off',
      },
    },
    {
      files: ['*.jsx'],
      extends: [
        //
        'airbnb',
        'airbnb/hooks',
        'plugin:react/jsx-runtime',
        'prettier',
      ],
      plugins: [],
      rules: {
        'react/function-component-definition': [
          2,
          {
            namedComponents: 'arrow-function',
            unnamedComponents: 'arrow-function',
          },
        ],
      },
    },
    {
      files: ['*.tsx'],
      extends: [
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:react/jsx-runtime',
        'plugin:@typescript-eslint/strict',
        'prettier',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['./tsconfig.json'], // Specify it only for TypeScript files
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      plugins: [
        //
        '@typescript-eslint',
      ],
      rules: {},
    },
  ],
};
