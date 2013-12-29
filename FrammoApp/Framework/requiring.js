function service(serviceName) {
	return mod('Services/' + serviceName);
}

function model(modelName) {
	return mod('Models/' + modelName);
}

function utility(utilityName) {
	return mod('Utilities/' + utilityName);
}

// Require a specific module - had to rename due to conflict with module object below
function mod(moduleName) {
	return require('../' + moduleName + '.js');
}

module.exports = {
	service : service,
	model : model,
	utility : utility,
	mod : mod
};