var fs = require('fs');
var path = require('path');

function filterFilesByExt(dir, filterString, callback) {

	fs.readdir(dir, function(err, listOfFiles) {
		if (err) return callback(err);

		listOfFiles = listOfFiles.filter(function (file) {
			return path.extname(file) === "." + filterString;
		});

		callback(null, listOfFiles);
	});
}

module.exports = filterFilesByExt;
