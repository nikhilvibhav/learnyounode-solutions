var http = require('http')
var fs = require('fs')

var fileResponse = fs.createReadStream(process.argv[3])

var server = http.createServer(function (req, res) {
	res.writeHead(200, { 'content-type' : 'text/plain'})
	fileResponse.pipe(res)
})

server.listen(Number(process.argv[2]))