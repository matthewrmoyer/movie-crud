const express = require('express')
const app = express()
const routes = require('./routes.js')
const bodyParser = require('body-parser')


app.use(bodyParser.json())
app.use('/', routes)

app.listen(8080, ()=> {
	console.log('listening')
})