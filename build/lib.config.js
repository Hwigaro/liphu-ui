const barConfig = {
	name: 'Liphu',
	color: '#3b79db'
};

module.exports = config => ({
	devtool: 'source-map',
	entry: {
		'liphu-ui': ['./src/index.js']
	},
	output: {
		path: config.path.resolve(__dirname, '../dist'),
		filename: 'liphu-ui.min.js',
		library: 'liphu-ui',
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
						whitespace: 'condense'
					}
				}
			}
		]
	},
	plugins: [new config.WebpackBar(barConfig), new config.VueLoaderPlugin()]
});
