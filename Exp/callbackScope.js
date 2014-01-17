

var number = 10;
call();

function call() {
	var input = number;
	test(10, function(output) {
		console.log("Input: " + input);
		console.log("Output: " + output);
	});
}

function test(number, callback) {
	callback(number * 2);
}