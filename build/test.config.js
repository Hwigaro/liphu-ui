const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const barConfig = {
	name: 'Tests',
	color: '#3748ac',
	fancy: true,
	profile: true
};

module.exports = (config, theme) => ({
	stats: 'errors-only',
	optimization: {
		runtimeChunk: 'single'
	},
	resolve: {
		extensions: ['.js', '.vue', '.json', '.scss', '.css']
	},
	externals: config.vue,
	module: {
		rules: [
			{
				test: /\.(jsx?|babel|es6)$/,
				include: process.cwd(),
				exclude: config.jsexclude,
				use: {
					loader: 'babel-loader',
					options: {
						envName: 'test'
					}
				}
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					compilerOptions: {
						whitespace: 'condense'
					}
				}
			},
			...theme.module.rules
		]
	},
	plugins: [
		new config.VueLoaderPlugin(),
		new config.WebpackBar(barConfig),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[hash:7].css',
			chunkFilename: 'css/[id].[hash:7].css'
		}),
		new FriendlyErrorsPlugin()
	]
});
