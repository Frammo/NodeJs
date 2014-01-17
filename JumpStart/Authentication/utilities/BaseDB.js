var sha1 = require('sha1');

function BaseDB() {
	
};

BaseDB.prototype.hashPassword = function(password, callback) {
	var salt = this.generateSalt();
	var salted = salt + password;
	var hashedPass = sha1(salted);
	callback(hashedPass, salt);
};

BaseDB.prototype.generateSalt = function() {
	return "DEFAULT_SALT";
};

module.exports = BaseDB;