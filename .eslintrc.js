module.exports = {
  // ...other ESLint configuration...

  overrides: [
    {
      files: ['*.tsx'], // Adjust this pattern to match your TypeScript files.
      rules: {
        // Ignore unused variables and allow empty dependency arrays in useEffect.
        'react-hooks/exhaustive-deps': 'off',
        '@typescript-eslint/no-unused-vars': 'off',

        // Add more specific rules to ignore here if needed.
      },
    },
  ],
}
