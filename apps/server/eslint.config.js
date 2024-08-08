import defaultConfig from '@packages/refactorer/eslint.config.js';

export default [
  ...defaultConfig,
  {
    languageOptions: {
      parserOptions: {
        project: ['tsconfig.json', 'prettier.config.js'],
      },
    },
  },
];
