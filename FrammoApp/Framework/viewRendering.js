var fs = require('fs');

function renderView(controllerName, actionName, response, variables) {
	var view = fs.readFileSync(DOCUMENT_ROOT + '/Views/' + controllerName + '/' + actionName + '.html');
	if(variables) {
		Object.keys(variables).forEach(function(key) {
			view = view.toString('utf-8').replace('{{' + key + '}}', variables[key]);
		});
	}
	
	response.setHeader("Content-Type", "text/html");
	response.send(view);
}

function renderHtml(html, response) {
	response.setHeader("Content-Type", "text/html");
	response.send(html);
}

module.exports = {
	renderView : renderView,
	renderHtml : renderHtml
};