// Collected from the array of data that we passed into this module
// The args passed start at 2
var name = process.argv[2]
var email = process.argv[3];

// Global variables for this thread
REQUIRE_PATH = process.argv[4];
REQUIRE = require(REQUIRE_PATH);

var userService = REQUIRE.service('userService');
var User = REQUIRE.model('Basic/User');

setInterval(function() {
	userService.addUser(new User(name, email), function() {
		console.log('User Added');
		io.sockets.emit('user-added', user);
	});
}, 5000);

module.exports = {
	//addUsers : addUsers
};