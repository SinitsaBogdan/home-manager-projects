const path = require('path');

result = {};

result.entry = {
	home: { import: path.join(__dirname, '../../src/components/pages/home/Home.js'), filename: 'js/home.js' },
};

result.pages = [{ chunks: ['home'], page: 'pages/home.html', template: path.join(__dirname, '../../src/components/pages/home/Home.pug') }];

module.exports = result;
