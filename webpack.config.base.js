const path = require('path')

module.exports = {
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
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
	plugins: []
}
