var express = require('express'),
	port = 9003,
	app = express(),
	SC = require('node-soundcloud');

var soundcloud = {
	id: '6c6a48a95b3175e4270cfa0027d7d3ca',
	secret: '7d0396bdb0de05310f1882bbddfc96ab',
	uri: 'http://127.0.0.1:9003/#upload'
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
  	SC.init(soundcloud);
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

	path += '?' + serialize(requestOptions);	

	SC.get(path, function(err, tracks) {  

		if ( err ) {    
			throw err;  
		} else {
			var oldDescription;
			var oldDuration;
			for(var i = 0; i < tracks.length; i ++) {
				oldDescription = tracks[i].description;
				// tracks[i].description = serializeDescription(oldDescription);
				tracks[i].description = ''; 
				oldDuration = tracks[i].duration;
				tracks[i].duration = convertMS(oldDuration);
				delete tracks[i].id;
			}
			res.contentType('json');
			res.json({
				success: true,
				data: tracks,
				totalSongs : 100
			});
		}
	});
});

app.get('/genres', function(req, res) {
	if (req.query.q !== undefined) {
		query = req.query.q;
	}
	var requestOptions = {
			genres: query,		
			limit: req.query.limit,
			offset: req.query.start
		},
		path = '/tracks';

	path += '?' + serialize(requestOptions);	

	SC.get(path, function(err, tracks) {  

		if ( err ) {    
			throw err;  
		} else {
			var oldDescription;
			var oldDuration;
			for(var i = 0; i < tracks.length; i ++) {
				oldDescription = tracks[i].description;
				// tracks[i].description = serializeDescription(oldDescription);
				tracks[i].description = ''; 
				oldDuration = tracks[i].duration;
				tracks[i].duration = convertMS(oldDuration);
				delete tracks[i].id;
			}
			res.contentType('json');
			res.json({
				success: true,
				data: tracks,
				totalSongs : 1000
			});
		}
	});
});

var serializeDescription = function(description) {
	var split = description.split('\n');
	description = '';
	for(var i = 0; i < split.length; i++) {
		description += split[i];
	}
	return description;
};

var convertMS = function(ms) {
    var h, m, s;
    s = Math.floor(ms / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    var seconds = '' + s;
    if (s < 10) {
  		seconds = '0' + s;
    }
    h = Math.floor(m / 60);
    m = m % 60;
    h = h % 24;
    var minutes = '' + m;
    var hours = '' + h;
    var display;
    if (h === 0) {
  		display = minutes + ':' + seconds; 
    } else {
    	if (m < 10) {
    		minutes = '0' + m;
    	}
    	display = hours + ':' + minutes + ':' + seconds;
    }  
    return display;
};
