module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-base', // Replace with your preferred style guide if necessary
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
    'no-unused-vars': 'off', // Disable base rule
    '@typescript-eslint/no-unused-vars': ['warn'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'vue/multi-word-component-names': 'off', // Allows single-word component names
    // Additional custom rules can be added here
  },
  settings: {
    'import/resolver': {
      typescript: {}, // Resolves TypeScript paths
    },
  },
}
