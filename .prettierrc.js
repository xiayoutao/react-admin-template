module.exports = {
	printWidth: 80, // 一行的字符数，如果超过会进行换行，默认为80
	tabWidth: 2, // 一个tab代表几个空格数，默认为80
	useTabs: true, // 是否使用tab进行缩进，默认为false，表示用空格进行缩减
	semi: true, // 行位是否使用分号，默认为true
	singleQuote: true, // 字符串是否使用单引号，默认为false，使用双引号
	trailingComma: 'all', // 是否使用尾逗号，有三个可选值"<none|es5|all>"
	bracketSpacing: true, // 对象大括号直接是否有空格，默认为true，效果：{ foo: bar }
	// parser: 'babel', // 代码的解析引擎，默认为babylon，与babel相同。
	// arrowParens: 'avoid', // 箭头函数只有一个参数的时候可以忽略括号
	// proseWrap: 'preserve', // 换行方式 默认值。因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行
	endOfLine: 'auto', // 结尾是 \n \r \n\r auto
	// jsxSingleQuote: false, // 在jsx中使用单引号代替双引号
	// jsxBracketSameLine: true, // 在jsx中把'>' 是否单独放一行
	stylelintIntegration: true, // prettier使用stylelint的代码格式进行校验
	eslintIntegration: true, // prettier使用eslint的代码格式进行校验
	// tslintIntegration: true, // prettier使用tslint的代码格式进行校验
	// disableLanguages: ['vue'], // 不格式化vue文件，vue文件的格式化单独设置
	htmlWhitespaceSensitivity: 'ignore',
	ignorePath: '.prettierignore' // 不使用prettier格式化的文件填写在项目的.prettierignore文件中
	// requireConfig: false, // Require a 'prettierconfig' to format prettier
};
