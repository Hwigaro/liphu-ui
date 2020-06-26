const webpackConfig = require('../build/webpack.config')({ modules: 'test' });

module.exports = function(config) {
	config.set({
		browsers: ['ChromeHeadless'],
		frameworks: ['mocha', 'sinon-chai'],
		reporters: ['mocha', 'coverage'],
		files: [
			{
				pattern: 'images/*.{jpg,png}',
				watched: false,
				included: false,
				served: true,
				nocache: false
			},
			{
				pattern: 'fonts/*.{ttf,woff}',
				watched: false,
				included: false,
				served: true,
				nocache: false
			},
			'setup.js'
		],
		preprocessors: {
			'setup.js': ['webpack', 'sourcemap']
		},
		webpack: webpackConfig,
		webpackMiddleware: {
			noInfo: true,
			stats: 'errors-only',
			resolve: {
				alias: webpackConfig[0].resolve.alias
			}
		},
		coverageReporter: {
			dir: './coverage',
			reporters: [
				{ type: 'html', subdir: '.' },
				{ type: 'text-summary' },
				{ type: 'lcov', subdir: '.' }
			]
		},
		mochaReporter: {
			colors: {
				success: 'green',
				info: 'cyan',
				warning: 'yellow',
				error: 'red'
			}
		},
		client: {
			mocha: {
				timeout: 4000
			}
		},
		proxies: {
			'/images/': '/base/images/',
			'/fonts/': '/base/fonts/'
		}
	});
};
