import globals from 'globals';
import standard from '@eslint/js';
import standardTypes from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintReact from 'eslint-plugin-react';
import eslintReactHooks from 'eslint-plugin-react-hooks';
import eslintReactRefresh from 'eslint-plugin-react-refresh';
import prettierPlugin from 'eslint-plugin-prettier';

export default standardTypes.config(
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
      parserOptions: {
        project: ['tsconfig.json', 'tsconfig.node.json', 'tsconfig.app.json', 'prettier.config.js'],
      },
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      ...prettierPlugin.configs.recommended.rules,
      ...eslintConfigPrettier.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'prefer-const': 'error',
      'react/jsx-curly-brace-presence': [
        'warn',
        { props: 'never', children: 'never' },
      ],
      'react/function-component-definition': [
        'warn',
        { namedComponents: 'arrow-function' },
      ],
      'react/self-closing-comp': ['error', { component: true, html: true }],
      'max-lines': ['warn', { max: 124 }],
      'max-params': ['error', 3],
    },
  },
  {
    settings: {
      react: {
        version: 'detect'
      }
    }
  }
);
