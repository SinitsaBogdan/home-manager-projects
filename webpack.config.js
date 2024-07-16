const webpack = require('webpack');

const baseConfig = require('./src/webpack/base.config');
const pluginsConfig = require('./src/webpack/plugins.config');

const allConfig = {
	...baseConfig,
	...pluginsConfig,
};

module.exports = allConfig;
