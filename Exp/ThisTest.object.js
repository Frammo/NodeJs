function ThisTest() {

}

ThisTest.prototype.test = function() {
	this.test2(function(number) {
		console.log(number);
		hello();
		this.test();
	});
}

ThisTest.prototype.test2 = function(callback) {
	callback.call(this, 3);
}

function hello() {
	console.log("hello");
}

module.exports = ThisTest;