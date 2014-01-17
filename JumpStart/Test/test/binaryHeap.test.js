var BinaryHeap = require('../utilities/BinaryHeap.object.js');
var assert = require('assert');

var heap = null; 

test('check array has initialised correctly and you can add a single item', function(done) {
	heap = new BinaryHeap(BinaryHeap.MIN, function(x) { return x });
	assert.notEqual(heap, null);
	heap.push(5, function() {
		assert.equal(heap.length(), 1);
		assert.equal(heap.peek(), 5);
		heap.push(7, function() {
			assert.equal(heap.length(), 2);
			assert.equal(heap.peek(), 5);
		})
	});	
	done();
});

test('test that bubble up works correctly', function(done) {
	heap.push(3, function(array) {
		assert.equal(array.length, 3);
		assert.equal(array[0], 3);
		assert.equal(array[1], 5);
		assert.equal(array[2], 7);

		heap.push(4, function(array) {
			assert.equal(array.length, 4);
			assert.equal(array[0], 3);
			assert.equal(array[1], 4);
			assert.equal(array[2], 7);
			assert.equal(array[3], 5);

			heap.push(1, function(array) {
				assert.equal(array.length, 5);
				assert.equal(array[0], 1);
				assert.equal(array[1], 3);
				assert.equal(array[2], 4);
				assert.equal(array[3], 5);
				assert.equal(array[4], 7);
			});	
		});
	});
	done();
});

test('test that sink down works correctly', function(done) {
	heap.pop(function(result, array) {
		assert.equal(array.length, 4);
		assert.equal(array[0], 3);
		assert.equal(array[1], 4);
		assert.equal(array[2], 7);
		assert.equal(array[3], 5);
		assert.equal(result, 1);

		heap.pop(function(result, array) {
			assert.equal(array.length, 3);
			assert.equal(array[0], 4);
			assert.equal(array[1], 5);
			assert.equal(array[2], 7);
			assert.equal(result, 3);

			heap.pop(function(result, array) {
				assert.equal(array.length, 2);
				assert.equal(array[0], 5);
				assert.equal(array[1], 7);
				assert.equal(result, 4);

				heap.pop(function(result, array) {
					assert.equal(array.length, 1);
					assert.equal(array[0], 7);
					assert.equal(result, 5);

					heap.pop(function(result, array) {
						assert.equal(array.length, 0);
						assert.equal(result, 7);
					});
				});
			});
		});
	});
	done();
});

test('check max first array has initialised correctly', function(done) {
	heap = new BinaryHeap(BinaryHeap.MAX, function(x) { return x });
	assert.notEqual(heap, null);
	heap.push(5, function() {
		assert.equal(heap.length(), 1);
		assert.equal(heap.peek(), 5);
		heap.push(7, function() {
			assert.equal(heap.length(), 2);
			assert.equal(heap.peek(), 7);
		})
	});	
	done();
});

test('test that bubble up works correctly for max first ordered heap', function(done) {
	heap.push(3, function(array) {
		assert.equal(array.length, 3);
		assert.equal(heap.get(0), 7);
		assert.equal(heap.get(1), 5);
		assert.equal(heap.get(2), 3);

		heap.push(4, function(array) {
			assert.equal(array.length, 4);
			assert.equal(heap.get(0), 7);
			assert.equal(heap.get(1), 5);
			assert.equal(heap.get(2), 3);
			assert.equal(heap.get(3), 4);

			heap.push(1, function(array) {
				assert.equal(array.length, 5);
				assert.equal(heap.get(0), 7);
				assert.equal(heap.get(1), 5);
				assert.equal(heap.get(2), 3);
				assert.equal(heap.get(3), 4);
				assert.equal(heap.get(4), 1);
			});	
		});
	});
	done();
});

test('test that sink down works correctly for max first array', function(done) {
	heap.pop(function(result, array) {
		assert.equal(array.length, 4);
		assert.equal(heap.get(0), 5);
		assert.equal(heap.get(1), 3);
		assert.equal(heap.get(2), 1);
		assert.equal(heap.get(3), 4);
		assert.equal(result, 7);

		heap.pop(function(result, array) {
	 		assert.equal(array.length, 3);
	 		assert.equal(heap.get(0), 4);
	 		assert.equal(heap.get(1), 3);
	 		assert.equal(heap.get(2), 1);
	 		assert.equal(result, 5);

			heap.pop(function(result, array) {
			 	assert.equal(array.length, 2);
			 	assert.equal(heap.get(0), 3);
			 	assert.equal(heap.get(1), 1);
			 	assert.equal(result, 4);

				heap.pop(function(result, array) {
			 		assert.equal(array.length, 1);
			 		assert.equal(heap.get(0), 1);
			 		assert.equal(result, 3);

				 	heap.pop(function(result, array) {
				 		assert.equal(array.length, 0);
						assert.equal(result, 1);
			 		});
			 	});
			 });
		 });
	});
	done();
});