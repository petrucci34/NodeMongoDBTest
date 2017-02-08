
const express = require('express');
const app = express();
const listeningPort = 3000

console.log(__dirname)

app.listen(listeningPort, function() {
	console.log('listening on ' + listeningPort)
})

app.get('/', (request, response) => {
	response.send('Hello world!')
})