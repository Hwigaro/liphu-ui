require('./utils/console');
const merge = require('webpack-merge');
const config = require('./utils');
const base = require('./base.config')(config);
const lib = require('./lib.config')(config);
const components = require('./components.config')(config);
const utils = require('./utils.config')(config);
const theme = require('./theme.config')(config);
const dev = require('./dev.config')(config, theme);
const test = require('./test.config')(config, theme);

module.exports = env => {
	let modules = env.modules.split(',');
	let result = [];

	modules.forEach(mod => {
		switch (mod) {
			case 'dev':
				result.push(merge(base, dev));
				break;
			case 'lib':
				result.push(merge(base, lib));
				break;
			case 'components':
				result.push(merge(base, components));
				break;
			case 'utils':
				result.push(merge(base, utils));
				break;
			case 'theme':
				result.push(merge(base, theme));
				break;
			case 'test': {
				let config = merge(base, test);
				delete config.entry;
				result.push(config);
				break;
			}
		}
	});

	return result;
};
