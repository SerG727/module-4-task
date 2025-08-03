import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
import cucumber from 'eslint-plugin-cucumber';

export default defineConfig([
  {
    name: 'General',
    files: ['src/**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        browser: 'readonly',
        $: 'readonly',
        $$: 'readonly',
        expect: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-var': 'error',
    },
  },

  {
    name: 'Cucumber',
    basePath: './src/step-definitions',
    files: ['**/*.js'],
    plugins: { cucumber },
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      'cucumber/async-then': 2,
      'cucumber/expression-type': ['error', 'RegExp'],
      'cucumber/no-arrow-functions': 'off',
    },
  },
]);
