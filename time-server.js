var net = require('net')
var strftime = require('strftime')

function now () {
	return strftime('%F %R', new Date())
}

var server = net.createServer(function (socket) {
	socket.write(now() + '\n')
	socket.end()
})

server.listen(Number(process.argv[2]))