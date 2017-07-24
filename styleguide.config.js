const loaders = require('loaders');

module.exports = {
	title: 'Annie\'s Component Lab',
	sections: [
		{
			name: '',
			content: './docs/Intro.md',
		},
		{
			name: 'Identity',
			components: './src/components/Identity/**/[A-Z]*.jsx',
		},
		{
			name: 'Elements',
			components: './src/components/Elements/**/[A-Z]*.jsx',
		}
	],
	webpackConfig: require('./config/webpack.config.dev.js'),
	showUsage: true,
}