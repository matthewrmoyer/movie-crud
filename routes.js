const express = require('express')
const router = express.Router()
const low = require('lowdb')
const fileAsync = require('lowdb/lib/storages/file-async')
const db = low('db/db.json', {
	storage: fileAsync
})

router.get('/', (req, res) => {
	res.send('asdfsaf')
})


module.exports = router;
