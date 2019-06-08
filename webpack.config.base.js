const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: [
		// keep this as array as we push more entry points in dev config
		'./src/index'
	],
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loaders: ['babel-loader']
			},
			{
				test: /\.scss$/,
				loaders: ['style', 'css', 'sass']
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx', '.css', '.scss']
	},
	output: {
		path: path.join(__dirname, 'dist')
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './src/index.html',
			filename: './index.html'
		})
	]
}
