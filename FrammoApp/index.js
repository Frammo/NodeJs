var fs = require('fs');
var express = require('express');
var http = require('http');

// Some Global Variables ****************************************
DOCUMENT_ROOT = __dirname;
CONFIG = JSON.parse(fs.readFileSync(DOCUMENT_ROOT + '/config.json'));
REQUIRE_PATH = DOCUMENT_ROOT + '/Framework/requiring.js'
REQUIRE = require(REQUIRE_PATH);

// Initialise the server ****************************************
var serverConfig = CONFIG.server;
var server = express();
var httpServer = http.createServer(server);

// use routes and then look in public folder
server.use(server.router);
server.use(express.static(__dirname));

// Map our routes from config
var routeConfig = REQUIRE.mod('AppStart/routeConfig');
routeConfig.initRoutes(server);

// Create a new database / connect to existing database
var db = REQUIRE.utility('connect');
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





