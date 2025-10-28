import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: 'detect' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      // Base recommended
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,

      // 🔽 Non-strict custom relaxations
      'react/prop-types': 'off', // Matikan kewajiban prop-types
      'react/react-in-jsx-scope': 'off', // React 17+ tidak butuh import React
      'react/display-name': 'off', // Tidak wajib memberi displayName di components
      'no-unused-vars': 'warn', // Hanya warning, bukan error
      'no-console': 'off', // Boleh console.log
      'react/jsx-key': 'warn', // kasih warning aja
      'react/no-unescaped-entities': 'off', // biar bisa pakai tanda kutip di JSX
      'react/jsx-no-target-blank': 'off', // matikan warning target _blank
      'react-refresh/only-export-components': ['off'], // boleh export bebas
    },
  },
]
