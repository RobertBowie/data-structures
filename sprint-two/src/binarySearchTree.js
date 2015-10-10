var BinarySearchTree = function(value){
  var newTree = {};
  _.extend(newTree, binaryTreeMethods);
  newTree.value = value;
  newTree.left;
  newTree.right;
  return newTree;
};

var binaryTreeMethods = {};

binaryTreeMethods.insert = function(value, node){
  node = node || this;
  if (node.value < value) {
    if (node.right) {
      node.insert(value, node.right);
    } else {
      node.right = BinarySearchTree(value);
      return node.right;
    }
  }
  if (node.value > value) {
    if (node.left) {
      node.insert(value, node.left);
    } else {
      node.left = BinarySearchTree(value);
      return node.left;
    }
  }
};

binaryTreeMethods.contains = function(value, node){
  node = node || this;
  var result = false;

  if (node.value === value) {
    return true;
  } else {
    if (node.left) {
      result = result || node.contains(value, node.left);
    }
    if (node.right) {
      result = result || node.contains(value, node.right);
    }
  } 

  return result;
};

binaryTreeMethods.depthFirstLog = function(func, node){
  node = node || this;
  func(node.value);
  if (node.left) {
    node.depthFirstLog(func, node.left);
  }
  if (node.right) {
    node.depthFirstLog(func, node.right);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
