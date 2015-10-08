var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(stackMethods);
  var index = 0;
  var storage = {};

  return instance;
};

var stackMethods = {
  push: function(value) {
    storage[index] = value;
    index += 1;
    return 0;
  },

  pop: function() {
    var ret;

    if (Object.keys(storage).length) {
      index -= 1;
      ret = storage[index];
      delete storage[index];
    }

    return ret;
  },

  size: function() {
    return Object.keys(storage).length;
  }

};

