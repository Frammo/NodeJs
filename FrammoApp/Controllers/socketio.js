var userService = requireService('userService');
var User = requireModel('Basic/User');
var routing = requireModule('Framework/routing')
var render = require('Framework/viewRendering');

function add(response) {
	render.renderView('socketio', 'add', response);
}

function add__post(response) {
	var user = new User('Tom', 'test@test.com');

	userService.addUser(user, function() {
		console.log('User added into database');
		// Emit the response to socketio telling them we added a user
		io.sockets.emit('user-added', user);
	});

	routing.redirectToAction('socketio', 'add', response);	
}

function test(response) {
	userService.getAllUsers(function(users) {
		var output = '';
		for(var i = 0; i < users.length; i++) {
			output += '<li>' + users[i].name + ' - ' + users[i].email + '</li>';
		}	
		var variables = { 'user-data' : output };
		render.renderView('socketio', 'test', response, variables);	
	});
}

module.exports = {
	add : add,
	add__post : add__post,
	test : test
}