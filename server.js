
const express = require('express');
const app = express();
const listeningPort = 3000

app.listen(listeningPort, function() {
	console.log('listening on ' + listeningPort)
})