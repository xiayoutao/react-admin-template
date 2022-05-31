module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
		es6: true,
	},
	extends: [
		"react-app",
		"react-app/jest",
		"eslint:recommended",
	],
	plugins: ['prettier'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 6,
		sourceType: "module",
	},
	rules: {
		'prettier/prettier': 1,
		'no-unused-vars': 1,
		"import/no-anonymous-default-export": 0
	},
};
