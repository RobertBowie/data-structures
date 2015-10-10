var HashTable = function(){
  this._limit = 8;
  this._threshold = .75;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i) || [];

  if (bucket.length) {
    bucket.forEach(function(item) {
      if (item[0] === k) {
        item[1] = v;
      } else {
        bucket.push([k, v]);    
      }
    });
  } else {
    bucket.push([k, v]);
  }

  this._storage.set(i, bucket);
  return 0;
};

HashTable.prototype.retrieve = function(k){
  var result = null;
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.get(i).forEach (function(item){
    if (item[0] === k) {
      result = result || item[1];
    }
  });

  return result;
};

HashTable.prototype.remove = function(k){
  this.insert(k, null);  
};



/*
 * Complexity: What is the time complexity of the above functions?
 * insert: linear: O(n)
 * retrieve: linear
 * remove: linear
 */
