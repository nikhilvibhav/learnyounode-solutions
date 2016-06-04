var fs = require('fs');
var file = process.argv[2];

fs.readFile(file, 'utf8', function doneReading(err, lines) {
	var numOfLines = lines.split('\n').length - 1;
	console.log(numOfLines);
});

