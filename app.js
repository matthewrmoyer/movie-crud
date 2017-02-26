const express = require('express')
const app = express()
const routes = require('./routes.js')
const bodyParser = require('body-parser')


app.use(bodyParser.json())
app.use('/', routes)
app.use(express.static('public'))


app.listen(8080, ()=> {
	console.log('listening')
})