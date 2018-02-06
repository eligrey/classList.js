#!/usr/bin/env node

var port = Number(process.argv[2])

var fs = require('fs')
var http = require('http');
var url = require('url');

var routes = {
	'/classList.js': function(res, req) {
		var match = req.url.match(/classListProp=(\w+)/);
		var classListProp = match && match[1];

		fs.readFile(__dirname + '/../classList.js', {encoding: 'utf-8'}, function(err, data) {
			var script = classListProp ? data.replace(/\bclassList\b/g, classListProp) : data;
			res.writeHead(200, {'Content-Type': types.js});
			res.end(script);
		});
	}
};

var types = {
	js: 'application/javascript',
	css: 'text/css',
	html: 'text/html',
	txt: 'text/plain'
};

http.createServer(function(req, res) {
	var pathname = url.parse(req.url).pathname;
	var route = routes[pathname];
	if (route) {
		route(res, req);
	} else {
		fs.readFile(__dirname + '/..' + pathname, function(err, data) {
			if (err) {
				res.writeHead(404, {'Content-Type': types.txt});
				res.end('Not Found');
			} else {
				var ext = (pathname.match(/\.([^\/]+)$/) || [])[1]
				res.writeHead(200, {'Content-Type': types[ext] || types.txt});
				res.end(data);
			}
		});
	}
}).listen(port);
