const express = require('express')
const app = express()
const routes = require('./routes.js')
const bodyParser = require('body-parser')
const path = require('path')


app.use(bodyParser.json())
app.use('/', routes)


app.set('view engine', 'pug')
app.set("views", path.join(__dirname, "views"));


app.listen(8080, ()=> {
	console.log('listening')
})