var mv = require('mv'),
	fs = require('fs'),
    path = require('path');

var target = path.resolve(__dirname + '../' + '../node_modules/youtube-dl/lib/youtube-dl.js');

fs.unlink(target, function (err) {
	'use strict';
  	if (err !== null) { return console.log(err.stack); }
	mv(path.resolve(__dirname + '../' + '../.temp/youtube-dl.js'), target, function error(err) {
	    if (err) { console.log(err); }
	});
});


