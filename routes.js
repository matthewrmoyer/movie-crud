const express = require('express')
const router = express.Router()
const low = require('lowdb')
const fileAsync = require('lowdb/lib/storages/file-async')
const db = low('db/db.json', {
	storage: fileAsync
})
const path = require('path')



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
	const movieNamesStringified = JSON.stringify(movieNames)
	res.render('movies', 
		{
			title:"List Movies Crud", 
			message: 'loop over movies here', 
			movieList: movieNamesStringified
		})
})

router.get('/movies/:id', (req, res) => {
	const id = parseInt(req.params.id)
	const movie = db.get('movies').find({id: id})
	res.send(movie)
})

module.exports = router;
