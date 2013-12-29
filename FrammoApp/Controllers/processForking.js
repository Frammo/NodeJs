var childProcess = require('child_process');
var render = REQUIRE.mod('Framework/viewRendering');
var routing = REQUIRE.mod('Framework/routing')
var userService = REQUIRE.mod('Services/userService');

function add(response) {
	// the child processes
	var children = [];

	// The variables that will be passed into each child
	var users = [
		['qqq', 'qqq@qqq.com', REQUIRE_PATH],
		['ttt', 'ttt@ttt.com', REQUIRE_PATH]
	];

	// For each set of user variables create a process that uses them
	users.forEach(function(user) {
		// Create the process
		var child = childProcess.fork(DOCUMENT_ROOT + '/Utilities/ProcessForking/addUser.js', user);
		// Callback for when this process dies
		child.on('exit', function() {
			console.log(user[0] + ' : died');
		});
		// Callback for when this process sends back a custom message
		child.on('message', function(message) {
			console.log(user[0] + ' : ' + message);
		});
		// Add to the array of child processes
		children.push(child);
	});

	// listen for this processes exit event and kill the children
	process.on('exit', function() {
		// For each child thread
		children.forEach(function(child) {
			child.kill();
		});
	});

	test(response);
}

function test(response) {
	routing.redirectToAction('socketio', 'test', response);
}

module.exports = {
	add : add,
	test : test
};