const express = require('express')
const router = express.Router()
const low = require('lowdb')
const fileAsync = require('lowdb/lib/storages/file-async')
const db = low('db/db.json', {
	storage: fileAsync
})


router.use(express.static('public'))


router.get('/', (req, res) => {
  res.send('index')
})



router.get('/movies', (req, res) => {
	const movies = db.get('movies')
	res.send(movies)
})

router.get('/movies/:id', (req, res) => {
	const id = parseInt(req.params.id)
	const movie = db.get('movies').find({id: id})
	res.send(movie)
})

module.exports = router;
