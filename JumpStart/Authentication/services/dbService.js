// Stores the database that the application will use

var database = null;

exports.setDb = function(db) {
	database = db;
}

exports.getDb = function() {
	return database;
}

