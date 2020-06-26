const barConfig = {
	name: 'Utils',
	color: '#db9b3b'
};

module.exports = config => ({
	devtool: 'source-map',
	entry: {
		...config.entries.utils,
		...config.entries.mixins,
		...config.entries.directives
	},
	output: {
		path: config.path.resolve(__dirname, '../dist'),
		filename: '[name].js',
		libraryTarget: 'umd'
	},
	resolve: {
		extensions: ['.js', '.vue', '.json']
	},
	module: {
		rules: [
			{
				test: /\.(jsx?|babel|es6)$/,
				include: process.cwd(),
				exclude: config.jsexclude,
				loader: 'babel-loader',
				options: {
					envName: 'utils'
				}
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					compilerOptions: {
						preserveWhitespace: false
					}
				}
			}
		]
	},
	plugins: [new config.WebpackBar(barConfig), new config.VueLoaderPlugin()]
});
