var http = require('http')
var express = require('express')
var main = require('./routes/api')
var index = require('./routes/index')

var app = express()
var port = process.env.PORT || 8080
app.set('port', port)

app.use('/', index)
app.use('/api', main)


var server = http.createServer(app)
server.listen(port)

console.log('listening on http://localhost:8080')