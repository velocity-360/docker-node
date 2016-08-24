var http = require('http')
var express = require('express')

var app = express()
var port = process.env.PORT || 8080
app.set('port', port)


app.get('/', function(req, res){
	res.json({
		confirmation:'success'
	})
})

var server = http.createServer(app)
server.listen(port)

console.log('listening on http://localhost:8080')