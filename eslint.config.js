import { defineConfig } from 'eslint-define-config'

export default defineConfig({
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-base', // Choose your preferred style guide
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json',
    extraFileExtensions: ['.vue'],
  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  rules: {
    'no-unused-vars': 'off', // Disable the base rule
    '@typescript-eslint/no-unused-vars': ['warn'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'vue/multi-word-component-names': 'off',
    // Add any additional rules here
  },
  settings: {
    'import/resolver': {
      typescript: {}, // Resolve TypeScript paths
    },
  },
})
