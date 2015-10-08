var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(stackMethods);
  instance.index = 0;
  instance.storage = {};

  return instance;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.index] = value;
    this.index += 1;
    return 0;
  },

  pop: function() {
    var ret;

    if (Object.keys(this.storage).length) {
      this.index -= 1;
      ret = this.storage[this.index];
      delete this.storage[this.index];
    }

    return ret;
  },

  size: function() {
    return Object.keys(this.storage).length;
  }
};
