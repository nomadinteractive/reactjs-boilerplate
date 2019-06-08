const webpack = require('webpack')
const baseConfig = require('./webpack.config.base')

const config = Object.assign(baseConfig)
const { PORT } = process.env

config.mode = 'development'

// config.devtool = 'cheap-module-eval-source-map'

config.entry.push(`webpack-hot-middleware/client?path=http://localhost:${PORT}/__webpack_hmr`)

config.output.publicPath = `http://localhost:${PORT}/`

config.plugins.push(
	new webpack.HotModuleReplacementPlugin(),
	// new webpack.NoErrorsPlugin(),
	// new webpack.DefinePlugin({
	// 	__DEV__: true,
	// 	'process.env': JSON.stringify('development')
	// })
)

module.exports = config
