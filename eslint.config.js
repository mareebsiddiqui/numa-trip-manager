import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-plugin-prettier';

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: ['dist', 'node_modules', 'coverage'], // ✅ Ignoring unnecessary directories
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier, // ✅ Add Prettier plugin
    },
    linterOptions: {
      reportUnusedDisableDirectives: true, // ✅ Report if eslint-disable comments are unused
    },
    rules: {
      ...reactHooks.configs.recommended.rules, // ✅ Import React Hooks recommended rules
      'prettier/prettier': 'error', // ✅ Enforce Prettier formatting
      'react-hooks/rules-of-hooks': 'error', // ✅ Enforce Hooks rules
      'react-hooks/exhaustive-deps': 'warn', // ✅ Warn on missing dependencies
      'react/prop-types': 'off', // ✅ TypeScript handles prop-types
      '@typescript-eslint/explicit-function-return-type': 'off', // Optional to turn on
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // ✅ Ignore args starting with _
      '@typescript-eslint/no-explicit-any': 'warn', // ✅ Discourage `any` type
      '@typescript-eslint/no-empty-function': 'off', // ✅ Allow empty functions
      '@typescript-eslint/no-inferrable-types': 'off', // ✅ Allow inferred types
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
  },
);
