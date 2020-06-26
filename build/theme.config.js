const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Exclude = require('./utils/exclude');
const barConfig = {
	name: 'Theme',
	color: '#673ab7'
};

module.exports = config => ({
	entry: {
		...config.entries.css,
		'css/liphu-ui': './src/assets/scss/liphu-ui.scss',
		'css/utilities': './src/assets/scss/helpers/_utilities.scss'
	},
	output: {
		path: config.path.resolve(__dirname, '../dist')
	},
	resolve: {
		extensions: ['.scss', '.css']
	},
	module: {
		rules: [
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
					{
						loader: 'sass-loader',
						options: {
							sassOptions: {
								includePaths: [
									config.path.resolve(
										__dirname,
										'../src/assets/scss'
									),
									config.path.resolve(
										__dirname,
										'../src/assets'
									),
									config.path.resolve(
										__dirname,
										'../site/src/assets'
									)
								]
							},
							prependData: `
									@import "${config.path.resolve(
										__dirname,
										'../src/assets/scss/helpers/_functions.scss'
									)}";
									@import "${config.path.resolve(
										__dirname,
										'../src/assets/scss/helpers/_mixins.scss'
									)}";
									@import "${config.path.resolve(
										__dirname,
										'../src/assets/scss/helpers/_variables.scss'
									)}";
								`
						}
					}
				]
			},
			{
				test: /\.(otf|ttf|woff2?|eot)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							emitFile: true,
							name: 'fonts/[name].[ext]'
						}
					}
				]
			},
			{
				test: /\.(png|jpe?g|svg|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							emitFile: true,
							name: 'images/[name].[ext]'
						}
					}
				]
			}
		]
	},
	plugins: [
		new config.WebpackBar(barConfig),
		new MiniCssExtractPlugin({
			filename: '[name].css'
		}),
		new Exclude([/\.js(\.map)?$/])
	]
});
