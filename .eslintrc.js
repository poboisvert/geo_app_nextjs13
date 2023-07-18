module.exports = {
    env: {
        es2021: true,
        browser: true,
        amd: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/triple-slash-reference': 'off',
        'spaced-comment': [
            'error',
            'always',
            {
                line: {
                    markers: ['/']
                }
            }
        ],
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/triple-slash-reference': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        'import/no-unresolved': 0,
        'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
        'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
        'class-methods-use-this': 'off',
        'import/no-extraneous-dependencies': 0,
        'import/no-named-as-default-member': 0,
        'import/prefer-default-export': 0,
        '@typescript-eslint/no-misused-promises': 0,
        '@typescript-eslint/no-floating-promises': 0,
        '@typescript-eslint/restrict-template-expressions': 0,
        '@next/next/no-html-link-for-pages': 0,
        '@typescript-eslint/strict-boolean-expressions': 0,
        '@typescript-eslint/restrict-plus-operands': 0,
        '@typescript-eslint/no-confusing-void-expression': 0,
        '@typescript-eslint/no-unused-vars': 0
    },
    extends: 'next/core-web-vitals',
    ignorePatterns: ['.next/*'] // <<< ignore all files in test folder
};
