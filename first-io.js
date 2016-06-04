var fs = require('fs');
var file = process.argv[2];

var lines  = fs.readFileSync(file, 'utf8');
var numOfLines = lines.split('\n').length - 1;

console.log(numOfLines);