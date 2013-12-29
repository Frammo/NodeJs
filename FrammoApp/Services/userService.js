var db = REQUIRE.utility('connect').getDb();

function getUser(id) {

}

function addUser(user, callback) {
	db.collection('user', function(error, collection) {
		if(!error) {
			collection.insert(user, function() {
				callback();
			});
		}
	});
}

function removeUser(id) {

}

function getAllUsers(callback) {
	db.collection('user', function(error, collection) {
		collection.find({}, function(error, cursor) {
			cursor.toArray(function(error, users) {
				callback(users);
			});
		})
	});
}

module.exports = {
	getUser : getUser,
	addUser : addUser,
	removeUser : removeUser,
	getAllUsers : getAllUsers
};