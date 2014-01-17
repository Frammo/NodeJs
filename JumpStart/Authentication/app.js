
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var form = require('./routes/form');
var http = require('http');
var path = require('path');
var MongooseDB = require('./utilities/MongooseDB');
var dbService = require('./services/dbService'); 

// Connect to the database
var db = new MongooseDB('frammo', 'password', '@ds061928.mongolab.com:61928/frammo-nodejs');
//var db = new MongooseDB('frammo','password', '@localhost:27017/nodejs');

db.connect(function(error) {
	if(!error) {
		console.log('Connected to database');
		db.initModels();
		dbService.setDb(db);
	} else {
		console.log('Connection to database failed: ' + error);
	}
});

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/user', user.index);

app.get('/form/register', form.register);
app.post('/form/register', form.registerPost);
app.get('/form/users', form.users);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
