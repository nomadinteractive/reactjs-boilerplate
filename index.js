const express = require('express')
const path = require('path')
const config = require('./webpack.config.development')

const { PORT, NODE_ENV } = process.env

const app = express()
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'dist')))

// TODO: hot reload to be added
if (NODE_ENV === 'development') {
	const webpack = require('webpack')
	const compiler = webpack(config)

	app.use(require('webpack-dev-middleware')(compiler, {
		publicPath: config.output.publicPath,
		stats: {
			colors: true
		}
	}))

	app.use(require('webpack-hot-middleware')(compiler))
}

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.listen(PORT, () => console.log('App (in '
	+ (NODE_ENV === 'development' ? 'Development' : 'Production')
	+ ` mode) listening on port ${PORT}!`))
