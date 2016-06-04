var filterFunction = require('./modular-filter.js');
var dir = process.argv[2];
var filterStr = process.argv[3];

filterFunction(dir, filterStr, function (err, listOfFile) {
	if (err) return console.error('There was an error: ', err);

	listOfFile.forEach(function (file) {
		console.log(file);
	});
});
