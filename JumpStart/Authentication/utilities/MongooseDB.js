// This is the database object - it has all static members
var mongoose = require('mongoose');
var connection = mongoose.connection;
var Schema = mongoose.Schema;
var BaseDB = require('./BaseDB');

function MongooseDB(username, password, address) {
	this.username = username;
	this.password = password;
	this.address = address;
	this.url = 'mongodb://' + this.username + ':' + this.password + this.address;
};

MongooseDB.prototype = new BaseDB();

MongooseDB.prototype.connect = function(callback) {
	// Use mongoose to connect to the database
	mongoose.connect(this.url);
	// Called once the database has connected
	connection.once('open', function() {
		// Will need to pass in the error we get from connect
		// TODO
		callback(false);
	});

	connection.on('error', function(error) {
		callback(error);
	});
};

MongooseDB.prototype.disconnect = function(callback) {
	// Disconnect from the database
	mongoose.disconnect(function(error) {
		callback(error);
	});
};

MongooseDB.prototype.initModels = function() {
	// User ******************************************************
	// Create the user schema - this is the definition
	// of what names and types will be in the model
	var userSchema = Schema({
		forename : String,
		surname : String,
		username : String,
		password : String,
		salt : String
	});

	// Use the schema to create the model - model is the
	// equivalent of table from at SQL database
	this.models.User = mongoose.model('User', userSchema);
};

// A list of the models for this database
MongooseDB.prototype.models = {};

MongooseDB.prototype.getConnection = function() {
	return connection;
};

// Must export the database object for public use
module.exports = MongooseDB;

