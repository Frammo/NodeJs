// All user related services
var dbService = require('../services/dbService');

exports.addUser = function(user, callback) {
	var db = dbService.getDb();
	var addedUser = new db.models.User(user);
	db.hashPassword(addedUser.password, function(hash, salt) {
		addedUser.password = hash;
		addedUser.salt = salt;
	});

	addedUser.save(function(error, addedUser) {
		if(error) {
			callback(error, null);
		} else {
			callback(error, addedUser);
		}
	});
};

exports.getAllUsers = function(callback) {
	// Get the model to query it
	var db = dbService.getDb();
	var User = db.models.User;
	// Find everything in the users model
	User.find({}, function(error, results) {
		callback(error, results);
	});
};