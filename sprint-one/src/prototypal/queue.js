var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);
  instance.storage = {};
  instance.index = 0;
  return instance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.index] = value;
    this.index += 1;
    return 0;
  },

  dequeue: function () {
    var ret;
    if (Object.keys(this.storage).length) {
      ret = this.storage[this.index - Object.keys(this.storage).length];
      delete this.storage[this.index - Object.keys(this.storage).length];
    }
    return ret;
  },

  size: function() {
    return Object.keys(this.storage).length;
  }
};


