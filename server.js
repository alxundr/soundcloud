var express = require('express'),
	port = 9000,
	app = express();

app.configure(function() {
    app.use(express.methodOverride());
    app.use(express.bodyParser());    
    app.use(app.router);
  	app.use(express.static(__dirname + '/'));
});

app.listen(port, function() {
	console.log("listening on port " + port);
});