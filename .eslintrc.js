module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['plugin:react/recommended'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true, // JSX를 파싱할 수 있습니다.
		},
		ecmaVersion: 12, // Modern ECMAScript를 파싱할 수 있습니다.
		sourceType: 'module', // import, export를 사용할 수 있습니다.
	},
	plugins: ['react', '@typescript-eslint', 'prettier'],
	rules: {
		// ESLint 규칙을 지정합니다. extends에서 지정된 규칙을 덮어 쓸수도 있습니다.
		'react/react-in-jsx-scope': 'off',
		'react/prop-types': 'off',
		'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }], // should add ".ts" if typescript project
	},
}
