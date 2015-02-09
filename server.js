var express = require('express'),
	port = 9003,
	app = express(),
	SC = require('node-soundcloud');

var soundcloud = {
	id: '6c6a48a95b3175e4270cfa0027d7d3ca',
	secret: '7d0396bdb0de05310f1882bbddfc96ab',
	uri: 'http://127.0.0.1:9003/'
};

var query;

var serialize = function(obj) {
  var str = [];
  for(var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
}

app.configure(function() {
    app.use(express.methodOverride());
    app.use(express.bodyParser());    
    app.use(app.router);
  	app.use(express.static(__dirname + '/'));
});

app.listen(port, function() {
	console.log("listening on port " + port);
});

app.get('/songs', function(req, res) {
	if (req.query.q !== undefined) {
		query = req.query.q;
	}
	var requestOptions = {
			q: query,		
			limit: req.query.limit,
			offset: req.query.start
		},
		path = '/tracks';

	path += '?' + serialize(requestOptions)

	SC.init(soundcloud);

	SC.get(path, function(err, tracks) {  
		if ( err ) {    
			throw err;  
		} else {    
			res.contentType('json');
			res.json({
				success: true,
				data: tracks,
				totalSongs : 100
			});
		}
	});
});

