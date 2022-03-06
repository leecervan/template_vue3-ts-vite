module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:vue/essential', 'airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  globals: {
    defineProps: true,
    defineEmits: true,
    defineExpose: true,
  },
  rules: {
    'prettier/prettier': 'error',

    // import/extensions
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],

    /* off */
    'vue/no-multiple-template-root': 'off',
    'vue/multi-word-component-names': 'off',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
          ['@components', '.src/components'],
          ['@views', './src/views'],
          ['@assets', '.src/assets'],
          ['@utils', '.src/utils'],
        ],
      },
    },
  },
}
