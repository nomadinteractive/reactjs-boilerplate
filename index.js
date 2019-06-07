const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 4600

const app = express()
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`))