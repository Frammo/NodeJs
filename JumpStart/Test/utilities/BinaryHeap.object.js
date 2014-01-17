'use strict'

function BinaryHeap(orderFlag, scoring) {
	// Set the order flag - default to MIN
	this.orderFlag = BinaryHeap.MIN;
	if(orderFlag === BinaryHeap.MAX) {
		this.orderFlag = BinaryHeap.MAX;
	}
	this.scoring = scoring;
	this.array = [];
}

// Add value to the heap and re-order
BinaryHeap.prototype.push = function(content, callback) {
	// Add content to the end of the array checking which
	// order we want to use before adding
	if(this.orderFlag === BinaryHeap.MIN) {
		this.array.push(content);
	} else {
		this.array.push(-content);
	}

	// Bubble the content up to its correct position
	bubbleUp(this.array, this.length() - 1, this.scoring);
	// Completed
	callback(this.array);
}

// Get smallest item from heap and reorder heap
// so there are no gaps left
BinaryHeap.prototype.pop = function(callback) {
	// Get the smallest thing from the heap
	var content = this.array[0];
	// Take the last item in the array out
	var lastItem = this.array[this.length() - 1]
	// Delete the last item
	this.array.pop();
	// Put new value at front of array - if the array is empty don't do this
	// as we will just be re-adding the removed item
	if(this.length() > 0) {
		this.array[0] = lastItem;
	}
	// SinkDown to the right position
	sinkDown(this.array, 0, this.scoring);
	// Complete - return popped content
	// Reverse the sign of the content depening on the 
	// order we are using
	if(this.orderFlag === BinaryHeap.MAX) {
		content = -content;
	}
	callback(content, this.array);
}

// Get smallest item from heap but do not delete
BinaryHeap.prototype.peek = function() {
	return this.get(0);
}

BinaryHeap.prototype.length = function() {
	return this.array.length;
}

BinaryHeap.prototype.get = function(index) {
	if(this.orderFlag === BinaryHeap.MIN) {
		return this.array[index];
	} else {
		return -this.array[index];
	}
}

// Moves from branches to the root
function bubbleUp(array, index, scoring) {
	findParent(index, array, function(parentIndex) {
		if(parentIndex == null) {
			return;
		} else {
			var parent = array[parentIndex];
			var current = array[index];

			if(current >= parent) {
				return;
			} else {
				// The parent is greater than the child so swap them
				array[parentIndex] = current;
				array[index] = parent;
				// Recurse, this time with the new parent
				bubbleUp(array, parentIndex, scoring);
			}
		}
	});
}

// Move from root to the ends
function sinkDown(array, rootIndex, scoring) {
	findChildren(rootIndex, array, function(childI, childII) {
		var childFound = false;
		for(var i = 0; i < arguments.length && i >= 0; i++) {
			var childIndex = arguments[i];

			if(childIndex == null) {
				// Do nothing
			} else {
				var current = array[rootIndex];
				var child = array[childIndex];

				if(scoring(current) > scoring(child)) {
					// Parent is larger than the child
					// Swap them
					array[rootIndex] = child;
					array[childIndex] = current;
					// We have found a suitable child
					childFound = true;
					// We have already found a suitable child so forget about the other one
					if(childFound) i = -2;
					// Reevaluate the item added
					sinkDown(array, childIndex, scoring);
				} else {
					// Do nothing and try the next child
				}
			}
		}
	});
}

// Returns the child indexes of a parent, unless
// the child index doesn't exist in which case 
// null is returned
function findChildren(parentIndex, array, callback) {
	var childI = parentIndex * 2;
	var childII = parentIndex * 2 + 1;

	if(isOutOfBounds(array, childI)) childI = null;
	if(isOutOfBounds(array, childII)) childII = null;

	callback(childI, childII);
}

function findParent(childIndex, array, callback) {
	var parentIndex = Math.floor(childIndex / 2);
	if(isOutOfBounds(array, parentIndex)) {
		callback(null);
	}  else {
		callback(parentIndex);
	}
}

function isOutOfBounds(array, index) {
	return index >= array.length || index < 0;
}

function push(array, item, orderFlag) {
	if(orderFlag == BinaryHeap.MIN) {
		array.push(item);
	} else {
		array.push(-item);
	}
}

function push(array, item, orderFlag) {
	if(orderFlag == BinaryHeap.MAX) {
		array[array.length - 1] = -item;
	} else {
		array[array.length - 1] = item;
	}
}

function pop(array, orderFlag) {
	var item = array[0]
	if(orderFlag == BinaryHeap.MAX) {
		return -item;
	} else {
		return item;
	}	
}

// Make the object public
module.exports = BinaryHeap;

// Constant order flag values
BinaryHeap.MIN = 0;
BinaryHeap.MAX = 1;