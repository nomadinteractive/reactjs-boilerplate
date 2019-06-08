const path = require('path')
const webpack = require('webpack')
const webpackMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const app = require('./server.base')
const config = require('./webpack.config.development')

const { PORT } = process.env

const compiler = webpack(config)

app.use(webpackMiddleware(compiler, {
	publicPath: config.output.publicPath,
	stats: {
		colors: true
	}
}))

app.use(webpackHotMiddleware(compiler))

app.get('/', (req, res) => {
	// TODO: webpack to serve the index.html with the webpack url import
	console.log('index requested')
	res.sendFile(path.join(__dirname, 'src', 'index.html'))
})

app.listen(PORT, () => console.log(`App (dev) listening on port ${PORT}!`))
