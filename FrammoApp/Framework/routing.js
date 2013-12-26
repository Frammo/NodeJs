var fs = require('fs');

var routing = CONFIG.routing;

function routeRequest(controller, action, id, response) {
	var conModule = getController(controller);
	if(conModule) {
		conModule[action](response);
	} else {
		response.send('Page Not Found', 404);
	}
}

function redirectToAction(controller, action, response) {
	response.redirect('/' + controller + '/' + action);
}

function getController(controllerName) {
	var path = DOCUMENT_ROOT + '/Controllers/' + controllerName + '.js';
	if(fs.existsSync(path)) {
		return require(path);
	} else {
		console.log("404");
		return false;
	}
}

// Exports ******************************************************
module.exports = {
	routeRequest : routeRequest,
	redirectToAction : redirectToAction
};