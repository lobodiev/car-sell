import globals from 'globals';
import standard from '@eslint/js';
import standardTypes from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintReact from 'eslint-plugin-react';
import eslintReactHooks from 'eslint-plugin-react-hooks';
import eslintReactRefresh from 'eslint-plugin-react-refresh';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
  standard.configs.recommended,
  ...standardTypes.configs.recommended,
  {
    plugins: {
      '@typescript-eslint': standardTypes.plugin,
      react: eslintReact,
      'react-hooks': eslintReactHooks,
      'react-refresh': eslintReactRefresh,
      prettier: prettierPlugin,
    },
  },
  {
    ignores: ['dist', 'build', 'node_modules', 'coverage', 'eslint.config.js'],
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    rules: {
      ...prettierPlugin.configs.recommended.rules,
      ...eslintConfigPrettier.rules,
      'prefer-const': 'error',
      'max-lines': ['warn', { max: 124 }],
      'max-params': ['error', 3],
    },
  },
];
