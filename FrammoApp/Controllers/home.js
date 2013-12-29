var render = REQUIRE.mod('Framework/viewRendering');

function index(response) {
	render.renderView('home', 'index', response);
}

module.exports = {
	index : index
};