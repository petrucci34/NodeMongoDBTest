
const express = require('express')
const bodyParser = require('body-parser')
const mongoClient = require('mongodb').MongoClient
const app = express()
const listeningPort = 3000
var database

mongoClient.connect('mongodb://admin:admin-feb8-257@ds147599.mlab.com:47599/node-mongodb-test', (error, db) => {
	if (error) {
		console.log(error)
		return 
	}
	
	database = db

	app.listen(listeningPort, function() {
		console.log('listening on ' + listeningPort)
	})
})

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (request, response) => {
	response.sendFile(__dirname + '/index.html')
})

app.post('/items', (request, response) => {
	database.collection('items').save(request.body, (error, result) => {
		if (error) {
			console.log(error)
			return 
		}

		console.log('Item saved to database.')
		response.redirect('/')
	})
})
