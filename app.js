require('dotenv').config()

const express = require('express')
const app = express()
const routes = require('./routes.js')
const bodyParser = require('body-parser')
const path = require('path')
var PORT = process.env.PORT || 8080

app.use(bodyParser.json())
app.use('/', routes)


app.set('view engine', 'pug')
app.set("views", path.join(__dirname, "views"));


app.listen(PORT, ()=> {
	console.log('listening')
})