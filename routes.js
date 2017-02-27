const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const low = require('lowdb')
const fileAsync = require('lowdb/lib/storages/file-async')
const db = low('db/db.json', {
	storage: fileAsync
})
const path = require('path')



router.use(bodyParser.urlencoded({extended: true}))
router.use(express.static(__dirname + '/public'))


router.get('/', (req, res) => {
	res.send('index.html')
})

router.get('/new', (req, res) => {
	res.sendFile(__dirname + '/public/new.html')
})

// router.get('/movies', (req, res) => {
// 	const movies = db.get('movies')
// 	res.send(movies)
// })

router.get('/movies', (req, res) => {
	const movieData = db.get('movies')
	const movieDataStringified = JSON.stringify(movieData)

	const movieNames = db.get('movies').map('name')

	var movieNamesArray = []
	for (var i = 0; i < movieNames.size(); i++) {
		var movieName = movieNames['__wrapped__']['movies'][i]['name']
		console.log(movieName)
		movieNamesArray.push(movieName)
		console.log(movieNamesArray)

	}

	const movieNamesStringified = JSON.stringify(movieNames)
	res.render('movies', {
		title: "List Movies Crud",
		message: 'Movie Titles',
		movieNamesArray: movieNamesArray
	})
})


router.get('/movies/:title', (req, res) => {
	const title = req.params.title
	const movie = db.get('movies').find({
		name: title
	})
	res.send(movie)
})

router.get('/movies/:id/edit', (req, res) => {
	const id = parseInt(req.params.id)
	const movie = db.get('movies').find({
		id: id
	})
	res.send(movie)
})

router.get('/new', (req, res) =>{
	res.render('new')
})

router.post('/db', (req, res) => {
	console.log("posttttinnnnnngggg")
	console.log(req.body)
	db.get('movies')
		.push(req.body)
		.write()
		.then(newMovie => {
			res.status(201).send(newMovie)
		})
		.catch(err => {
			console.log(err)
		})
})


module.exports = router;