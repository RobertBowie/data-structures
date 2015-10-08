var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.index = 0;
};


Queue.prototype.enqueue = function(value) {
  this.storage[this.index] = value;
  this.index += 1;
  return 0;
};

Queue.prototype.dequeue = function() {
  var ret;

if (Object.keys(this.storage).length) {
  ret = this.storage[this.index - Object.keys(this.storage).length];
  delete this.storage[this.index - Object.keys(this.storage).length];
}

  return ret;
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};