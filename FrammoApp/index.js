var fs = require('fs');
var express = require('express');
var http = require('http');

// Some Global Variables ****************************************
DOCUMENT_ROOT = __dirname;
CONFIG = JSON.parse(fs.readFileSync(DOCUMENT_ROOT + '/config.json'));

requireService = function requireService(serviceName) {
	return requireModule('Services/' + serviceName);
};

requireModel = function requireModel(modelName) {
	return requireModule('Models/' + modelName);
};

requireUtility = function requireUtility(utilityName) {
	return requireModule('Utilities/' + utilityName);
}

requireModule = function requireModule(moduleName) {
	return require(DOCUMENT_ROOT + '/' + moduleName + '.js');
}

var routeConfig = requireModule('AppStart/routeConfig');

// Initialise the server ****************************************
var serverConfig = CONFIG.server;
var server = express();
var httpServer = http.createServer(server);

// use routes and then look in public folder
server.use(server.router);
server.use(express.static(__dirname));

// Map our routes from config
routeConfig.initRoutes(server);

// Create a new database - shouldnt really do this each time the app is started
var db = requireUtility('connect');
db.connect(function(error) {
	if(!error) {
		console.log('Connected to Database');
	} else {
		console.log('Error connecting to database');
	}
});
// Get socket io to listen for events in this app
io = require('socket.io').listen(httpServer);

httpServer.listen(serverConfig.port);





