const barConfig = {
	name: 'Components',
	color: '#16cd97'
};

module.exports = config => ({
	devtool: 'source-map',
	entry: {
		...config.entries.components
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
				loader: 'babel-loader'
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
