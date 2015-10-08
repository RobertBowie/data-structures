var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var index = 0;

  // Implement the methods below
  someInstance.push = function(value){
    storage[index] = value;
    index += 1;
  };

  someInstance.pop = function(){
    var ret;

    if (index) {
      index -= 1;
      ret = storage[index];
      delete storage[index];
    }

    return ret;
  };

  someInstance.size = function(){
    return Object.keys(storage).length;
  };

  return someInstance;
};
