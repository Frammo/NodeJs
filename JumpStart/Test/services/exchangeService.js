// Service calls for making trades
var $ = require('jquery');
var BinaryHeap = require('../utilities/BinaryHeap.object')

var BUYS = "buys";
var SELLS = "sells";

var exchange = createExchange({});

function createExchange(exchangeData) {
	// Do a deep copy merge of the exchange data passed in and an empty object
	var cloned = $.extend(true, {}, exchangeData);
	
	if(cloned.forSale == undefined) {
		cloned.trades = [];
		cloned.forSale = {
			volumes : {},
			prices : new BinaryHeap(BinaryHeap.MIN, function(x){ return x })
		};
		console.log("Sales exchange created");
	}

	if(cloned.buyOffers == undefined) {
		cloned.buyOffers = {
			volumes : {},
			prices : new BinaryHeap(BinaryHeap.MAX, function(x){ return x })
		};
		console.log("Buys exchange created");
	}

	return cloned;
}

exports.getBuyOffers = function(callback) {

}

exports.getSellOffers = function(callback) {

}

exports.sell = function(price, volume, callback) {

}

exports.buy = function(price, volume, callback) {
	var latestExchange = createExchange(exchange);
	callback();
}
