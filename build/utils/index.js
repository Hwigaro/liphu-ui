const path = require('path');
const fs = require('fs');
const nodeExternals = require('webpack-node-externals');
const isProd = ['production', 'test'].indexOf(process.env.NODE_ENV) > -1;

exports.jsexclude = /node_modules|utils\/popper\.js|utils\/date.js/;
exports.path = path;
exports.WebpackBar = require('webpackbar');
exports.VueLoaderPlugin = require('vue-loader').VueLoaderPlugin;
exports.isProd = isProd;
exports.env = isProd ? 'production' : 'development';

exports.alias = {
	'liphu-ui': path.join(process.cwd(), 'src'),
	root: process.cwd(),
	assets: path.resolve(process.cwd(), 'src/assets'),
	styles: path.resolve(process.cwd(), 'src/assets/scss'),
	components: path.resolve(process.cwd(), 'src/components'),
	utils: path.resolve(process.cwd(), 'src/utils'),
	mixins: path.resolve(process.cwd(), 'src/mixins'),
	directives: path.resolve(process.cwd(), 'src/directives'),
	vue: isProd ? 'vue/dist/vue.min' : 'vue/dist/vue.esm.js'
};
const directories = [
	{
		name: 'components',
		src: '../src/components',
		dist: 'components',
		srcFormat: '.js',
		distFormat: '.js'
	},
	{
		name: 'utils',
		src: '../src/utils',
		dist: 'utils',
		srcFormat: '.js',
		distFormat: '.js'
	},
	{
		name: 'mixins',
		src: '../src/mixins',
		dist: 'mixins',
		srcFormat: '.js',
		distFormat: '.js'
	},
	{
		name: 'directives',
		src: '../src/directives',
		dist: 'directives',
		srcFormat: '.js',
		distFormat: '.js'
	},
	{
		name: 'components',
		src: '../src/assets/scss/components',
		dist: 'css',
		srcFormat: '.scss',
		distFormat: '.css'
	},
	{
		name: 'base',
		src: '../src/assets/scss/base',
		dist: 'css',
		srcFormat: '.scss',
		distFormat: '.css'
	},
	{
		name: 'utilities',
		src: '../src/assets/scss/helpers/utilities',
		dist: 'css/utilities',
		srcFormat: '.scss',
		distFormat: '.css'
	}
];

let entries = {};
let externals = {};
let cssExternals = {};

directories.forEach(el => {
	const dir = path.resolve(__dirname, '../' + el.src);
	const rootDist = el.dist.split('/')[0];
	const entry = (entries[rootDist] = entries[rootDist] || {});

	if (!fs.existsSync(dir)) return;

	fs.readdirSync(dir).forEach(file => {
		file = path.basename(file, el.srcFormat);

		if (
			['.scss', '.css'].indexOf(el.srcFormat) > -1 ||
			['.scss', '.css'].indexOf(el.distFormat) > -1
		)
			cssExternals[
				`${el.name}/${file.replace('_', '')}`
			] = `@liphu/liphu-ui/dist/${el.dist}/${file.replace('_', '')}`;
		else
			externals[
				`${el.name}/${file.replace('_', '')}`
			] = `@liphu/liphu-ui/dist/${el.dist}/${file.replace('_', '')}`;

		let filePath = `${el.src.substr(1)}/${file}${el.srcFormat}`;

		if (!fs.existsSync(filePath)) {
			filePath = `${el.src.substr(1)}/${file}/index${el.srcFormat}`;
		}

		entry[`${el.dist}/${file.replace('_', '')}`] = filePath;
	});
});

exports.vue = {
	root: 'Vue',
	commonjs: 'vue',
	commonjs2: 'vue',
	amd: 'vue'
};

exports.externals = [
	Object.assign(
		{
			vue: 'vue',
			'liphu-ui/package.json': '@liphu/liphu-ui/package.json'
		},
		externals
	),
	nodeExternals()
];

exports.entries = entries;
