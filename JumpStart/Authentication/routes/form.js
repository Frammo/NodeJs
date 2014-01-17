// Added to practise dealing with forms
// in express
var User = require('../models/User');
var userService = require('../services/userService');

exports.register = function(req, res) {
	/*
	// Node is very minimalist, so when rendering html
	// we actually have to manually read the contents and
	// return the response to the client
	fs.readFile('./form.html', function(error, content) {
		if(!error) {
			// Success - return the contents to the client
			res.writeHead(200, { 'Content-Type' : 'text/html' });
			// Return content and specify
			res.end(content, 'utf-8');
		} else {
			// There was an error - send error code
			res.writeHead(500);
			res.end();
		}
	});
	*/

	// The above way was the old way - we can get the framework
	// to do the work for us	
	res.render('form/register', { 'title' : 'Register' });
};

exports.users = function(req, res) {
	userService.getAllUsers(function(error, users) {
		if(!error) {
			var viewModel = {
				'title' : 'Users',
				'users' : users
			};
			res.render('form/users', viewModel);
		} else {
			// Throw error
		}
	});
};

exports.registerPost = function(req, res) {
	var forename = req.body.forename;
	var surname = req.body.surname;
	var username = req.body.username;
	var password = req.body.password;
	var confirmPassword = req.body.confirmPassword;

	var user = new User(forename, surname, username, password);
	userService.addUser(user, function(error, addedUser) {
		if(!error) {
			res.end(addedUser.username + ' was added.');
		} else {
			res.redirect('/form/register');
		}
	});
};