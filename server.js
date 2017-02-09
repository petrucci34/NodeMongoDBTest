
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
app.set('view engine', 'ejs')

app.get('/', (request, response) => {
	database.collection('items').find().toArray((error, results) => {
		if (error) {
			consloe.log(error)
			return
		}

		response.render('index.ejs', {items: results.reverse()})
	})
})

app.post('/items', (request, response) => {
	database.collection('items').save(request.body, (error, result) => {
		if (error) {
			console.log(error)
			return 
		}

console.log(request.body)
		console.log('Item saved to database.')
		response.redirect('/')
	})
})
