const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const barConfig = {
	name: 'Examples',
	color: '#3748ac',
	fancy: true,
	profile: true
};

module.exports = (config, theme) => ({
	devtool: 'eval-source-map',
	entry: {
		main: ['./examples/main.js']
	},
	devServer: {
		//contentBase: path.join(__dirname, 'dist'),
		host: '0.0.0.0',
		compress: true,
		overlay: true,
		port: 3000,
		open: false,
		useLocalIp: true,
		historyApiFallback: true,
		stats: {
			assets: true,
			builtAt: false,
			cached: false,
			cachedAssets: false,
			children: true,
			chunks: false,
			chunkGroups: false,
			chunkModules: false,
			chunkOrigins: false,
			depth: false,
			entrypoints: false,
			env: false,
			hash: false,
			modules: false,
			moduleTrace: true,
			performance: false,
			providedExports: false,
			publicPath: false,
			reasons: false,
			source: true,
			timings: false,
			usedExports: false,
			version: false,
			warnings: true,
			outputPath: false,
			colors: {
				green: '\u001b[38;2;0;209;166m',
				yellow: '\u001b[38;2;255;209;85m',
				red: '\u001b[38;2;254;104;111m'
			}
		},
		watchOptions: {
			poll: true
		}
	},
	stats: 'none',
	optimization: {
		runtimeChunk: 'single'
	},
	output: {
		path: config.path.resolve(__dirname, '../examples/dist'),
		publicPath: '/',
		filename: '[name].[hash:7].js',
		chunkFilename: '[name].[hash:7].js'
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
		new HtmlWebpackPlugin({
			inject: true,
			production: true,
			template: './examples/index.html'
		}),
		new FriendlyErrorsPlugin()
	]
});
