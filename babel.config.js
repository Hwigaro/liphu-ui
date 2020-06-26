const isProd = process.env.NODE_ENV === 'production';

module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				loose: true,
				modules: false,
				targets: {
					browsers: ['> 1%', 'last 4 versions', 'not ie <= 8']
				}
			}
		],
		[
			'minify',
			{
				removeConsole: isProd,
				removeDebugger: isProd,
				keepFnName: true,
				builtIns: false
			}
		]
	],
	plugins: [
		'@babel/plugin-transform-spread',
		'@babel/plugin-syntax-dynamic-import',
		'@babel/plugin-transform-runtime',
		'transform-vue-jsx'
	],
	env: {
		utils: {
			presets: [
				[
					'@babel/preset-env',
					{
						loose: true,
						modules: 'commonjs',
						targets: {
							browsers: ['> 1%', 'last 4 versions', 'not ie <= 8']
						}
					}
				]
			]
		},
		test: {
			plugins: ['istanbul']
		}
	}
};
