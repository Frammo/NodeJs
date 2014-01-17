// The stock exchange actions
var exchangeService = require('../services/exchangeService');

exports.buy = function(req, res) {
	exchangeService.buy(0,0,function(){
		res.end();
	});
}

exports.buyPost = function(req, res) {

}

exports.sell = function(req, res) {

}

exports.sellPost = function(req, res) {

}