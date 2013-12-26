var render = require(DOCUMENT_ROOT + "/Framework/viewRendering.js");

function index(response) {
	render.renderView('home', 'index', response);
}

module.exports = {
	index : index
};