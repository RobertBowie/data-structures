var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  _.extend(newTree, treeMethods);
  newTree.children = [];

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  var newTree = Tree(value);
  this.children.push(newTree);
  return newTree;
};

treeMethods.contains = function(target, node){
  node = node || this;
  var result = false;

  if (node.value === target) { return true; }
  node.children.forEach(function(item){
    result = result || node.contains(target, item);
  });

  return result;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
