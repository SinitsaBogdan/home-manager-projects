const path = require('path');
const constants = require('./constants');
const multipage = require('./multipage.config');

const buildType = process.env.BUILD_TYPE ? process.env.BUILD_TYPE : constants.modes.dev;

module.exports = {
	mode: constants.builds[buildType],
	entry: {
		...multipage.entry,
	},
	output: {
		path: path.join(__dirname, '../../build'),
		filename: 'js/[name].js',
		assetModuleFilename: 'assets/img/[name]-[hash][ext]',
	},
	devServer: {
		allowedHosts: 'all',
		compress: true,
		port: 8080,
		open: ['/pages/home.html'],
		static: path.join(__dirname, '../../build/pages/home.html'),
		hot: true,
		client: {
			logging: 'info',
		},
	},
};
