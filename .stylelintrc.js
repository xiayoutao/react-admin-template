module.exports = {
	extends: [
		// 'stylelint-config-prettier',
		// 'stylelint-config-standard',
		'stylelint-config-rational-order',
		// 'stylelint-prettier/recommended',
	],
	plugins: [
		// 'stylelint-prettier',
		'stylelint-scss',
		'stylelint-order',
	],
	ignoreFiles: ['**/*.js', '**/*.md'],
	customSyntax: "postcss-scss",
	overrides: [
		{
			files: ['**/*.{html}'],
			customSyntax: 'postcss-html'
		},
		{
			files: ['**/*.{scss}'],
			customSyntax: 'postcss-scss'
		},
		{
			files: ['**/*.{css}'],
			customSyntax: 'postcss-cssnext'
		}
	],
	rules: {
		"indentation": 'tab',
		"unit-no-unknown": [
      true,
      {
        "ignoreUnits": "/rpx/"
      }
    ],
		'max-empty-lines': 1,
		'number-max-precision': 4, // css属性值中小数点之后数字的最大位数
		'string-quotes': 'single',
		"color-function-notation": "legacy", // 很重要
		"scss/at-rule-no-unknown": null,
		'at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: ['function', 'mixin', 'include', 'extend', 'each', 'if', 'else']
			}
		],
		'declaration-colon-space-after': 'always-single-line',
		'declaration-colon-space-before': 'never',
		'order/order': [
      'dollar-variables', // 变量
      'custom-properties', // 自定义属性
      'at-rules', // 规则
      'declarations', // 声明
      'rules', // 规则
    ],
		'plugin/rational-order': [
			true,
			{
				'border-in-box-model': true,
				'empty-line-between-groups': false
			}
		],
	}
}