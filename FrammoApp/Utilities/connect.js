// A namespace so we still have to access classes inside this
var mongo = require('mongodb');

var host = CONFIG.database.host;
var port = CONFIG.database.port === 'default' ? mongo.Connection.DEFAULT_PORT : CONFIG.database.port;

var db = null;

function connect(callback) {
	// Create a new database
	db = new mongo.Db('nodejs-intro', new mongo.Server(host, port, {}));
	db.open(function(error) {
		callback(error);
	});
}

function getDb() {
	return db;
}

module.exports = {
	connect : connect,
	getDb : getDb
};
