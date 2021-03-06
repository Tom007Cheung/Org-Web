const path = require('path');

module.exports = {
    entry: {
	app: './src/index.js',
	print: './src/print.js'
    },
    mode: 'production',
    output: {
	filename: '[name].bundle.js',
	path: path.resolve(__dirname, 'docs')
    },
};
