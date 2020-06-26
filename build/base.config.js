module.exports = config => ({
	mode: config.env,
	resolve: {
		alias: config.alias,
		modules: ['node_modules']
	},
	externals: config.externals,
	performance: {
		hints: false
	},
	stats: 'errors-only',
	optimization: {
		minimize: config.isProd,
		mangleWasmImports: true
	}
});
