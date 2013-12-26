var routing = require(DOCUMENT_ROOT + '/Framework/routing.js');
var routingConfig = CONFIG.routing;

function initRoutes(server) {
	server.get("/", function(request, response) {
		var controller = routingConfig.defaultController;
		var action = routingConfig.defaultAction;
		routing.routeRequest(controller, action, 0, response);
	});

	server.get("/:controller", function(request, response) {
		var controller = request.params.controller;
		var action = routingConfig.defaultAction;
		routing.routeRequest(controller, action, 0, response);
	});

	server.get("/:controller/:action", function(request, response) {
		var controller = request.params.controller;
		var action = request.params.action;
		routing.routeRequest(controller, action, 0, response);
	});

	server.post("/", function(request, response) {
		var controller = routingConfig.defaultController;
		var action = routingConfig.defaultAction;
		routing.routeRequest(controller, action + '__post', 0, response);
	});

	server.post("/:controller", function(request, response) {
		var controller = request.params.controller;
		var action = routingConfig.defaultAction;
		routing.routeRequest(controller, action + '__post', 0, response);
	});

	server.post("/:controller/:action", function(request, response) {
		var controller = request.params.controller;
		var action = request.params.action;
		routing.routeRequest(controller, action + '__post', 0, response);
	});
}

module.exports = {
	initRoutes : initRoutes
};