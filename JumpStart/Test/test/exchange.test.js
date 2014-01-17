/*

test('buy should add a BUY nockmarket order', function(done) {
	// Submit order and get the exchange state
	exchangeData = exchange.buy(40, 100, exchangeData);
	// At a price of there should be 100 units available
	exchange.buys.volumes[40].should.eql(100);
	// Callback to mocha to say that we are done and to 
	// move onto the next test
	done();
});

test('sell should add a SELL nockmarket order', function(done) {
	// Submit a sell request to the exchange
	exchangeData = exchange.sell(50, 120, exchangeData);
	// At price 50 there should be 120 available
	exchangeData.sells.volumes[50].should.eql(120);
	// Callback to say that we are done
	done();
});

test('this sell should produce TRADES', function(done) {
	// Sell some shares at 30 - this should produce trades
	exchangeData = exchange.sell(30, 60, exchangeData);
	// The trade should take place
	exchangeData.trades[0].price.should.eql(30);
	exchangeData.trades[0].volume.should.eql(60);
	// Some shares have been bought - so a buy request will
	// will reduce in volume
	exchangeData.buys.volumes[40].should.eql(40);
	// This should not have changed
	exchangeData.sells.volumes[50].should.eql(120);
	done();
});

test('test', function(done) {
	var i = 0;
	i.should.eql(0);
	done();
});

*/