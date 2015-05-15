var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var BeGlobal = require('node-beglobal');
var beglobal = new BeGlobal.BeglobalAPI({
  api_token: 'snoTTjI7Sj73jdfTiahHCw%3D%3D'
});
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/lingo');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);
app.get('/translate', indexController.translate);
app.get('/viewTranslate', indexController.viewTranslate);



var server = app.listen(3949, function() {
	console.log('Express server listening on port ' + server.address().port);
});
