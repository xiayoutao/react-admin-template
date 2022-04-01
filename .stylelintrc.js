module.exports = {
	extends: [
		'stylelint-config-prettier',
		'stylelint-config-standard',
		'stylelint-config-rational-order',
		'stylelint-prettier/recommended'
	],
	plugins: [
		'stylelint-prettier',
		'stylelint-scss'
	],
	overrides: [
		{
			files: ['**/*.{html}'],
			customSyntax: 'postcss-html'
		},
		{
			files: ['**/*.{scss}'],
			customSyntax: 'postcss-scss'
		}
	],
	rules: {
		"indentation": 'tab',
		"unit-no-unknown": null,
		"color-function-notation": "legacy",
		'max-empty-lines': 1,
		'no-empty-source': null,
		'no-invalid-double-slash-comments': null,
		'selector-class-pattern': null,
		'function-no-unknown': null,
		'custom-property-no-missing-var-function': null,
		'font-family-no-missing-generic-family-keyword': null,
		'rule-empty-line-before': [
			'always',
			{
				ignore: ['after-comment', 'first-nested']
			}
		],
		'at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: ['mixin', 'include', 'extend', 'if', 'else']
			}
		],
		"scss/at-rule-no-unknown": true,
		'plugin/rational-order': [
			true,
			{
				'border-in-box-model': true,
				'empty-line-between-groups': false
			}
		],
	}
}