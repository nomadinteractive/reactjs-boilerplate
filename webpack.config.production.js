const HtmlWebPackPlugin = require("html-webpack-plugin")
const baseConfig = require('./webpack.config.base')

const config = Object.assign(baseConfig)

config.mode = 'production'

config.plugins.push(
	new HtmlWebPackPlugin({
		template: './src/index.html',
		filename: './index.html'
	})
)

module.exports = config
