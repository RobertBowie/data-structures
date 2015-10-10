var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  if (!this.contains(item)) {
    this._storage.push(item);
    return 0;
  }
  return -1;
};

setPrototype.contains = function(item){
  return this.find(item) > -1;
};

setPrototype.remove = function(item){
  var index = this.find(item);
  if (index > -1) {
    this._storage.splice(index, 1);
    return 0;
  }
  return -1;
};

setPrototype.find = function(item){
  return this._storage.indexOf(item);
}
/*
 * Complexity: What is the time complexity of the above functions?
 */
