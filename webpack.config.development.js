const webpack = require('webpack')
const baseConfig = require('./webpack.config.base')

const config = Object.assign(baseConfig)
const { PORT } = process.env

config.mode = 'development'

/*

From a legacy webpack dev config - To be cleaned up

config.devtool = 'cheap-module-eval-source-map'

config.entry = [
	`webpack-hot-middleware/client?path=http://localhost:${PORT}/__webpack_hmr`,
	'./src/app'
]

config.output.publicPath = `http://localhost:${PORT}/dist/`

config.plugins.push(
	// new webpack.HotModuleReplacementPlugin(),
	// new webpack.NoErrorsPlugin(),
	new webpack.DefinePlugin({
		__DEV__: true,
		'process.env': JSON.stringify('development')
	})
)

*/

module.exports = config
