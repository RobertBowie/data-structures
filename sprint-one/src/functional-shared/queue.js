var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance.storage = {};
  instance.index = 0;
  instance.next = 0;
  _.extend(instance, queueMethods);
  return instance;
};

var queueMethods = {
  enqueue: function(value){
    this.storage[this.index] = value;
    this.index += 1;
    return 0;
  },

  dequeue: function(){
    var ret;
    if (Object.keys(this.storage).length){
      ret = this.storage[this.next];
      delete this.storage[this.next];
      this.next += 1;
    }
    return ret;
  },

  size: function(){
    return Object.keys(this.storage).length;
  }
};


