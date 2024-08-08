import defaultConfig from '@packages/refactorer/eslint.config.js';

export default [
  ...defaultConfig,
  {
    languageOptions: {
      parserOptions: {
        project: [
          'tsconfig.json',
          'tsconfig.node.json',
          'tsconfig.app.json',
          'prettier.config.js',
        ],
      },
    },
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'react/jsx-curly-brace-presence': [
        'warn',
        { props: 'never', children: 'never' },
      ],
      'react/function-component-definition': [
        'warn',
        { namedComponents: 'arrow-function' },
      ],
      'react/self-closing-comp': ['error', { component: true, html: true }],
    },
  },
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
