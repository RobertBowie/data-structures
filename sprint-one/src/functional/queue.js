var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var index = 0;
  var next = 0;
  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[index] = value;
    index += 1;
    return 0;
  };

  someInstance.dequeue = function(){
    var ret;
    if (Object.keys(storage).length){
      ret = storage[next];
      delete storage[next];
      next += 1;
    }
    return ret;
  };

  someInstance.size = function(){
    return Object.keys(storage).length;
  };

  return someInstance;
};
