var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = new Node(value);
    var tail = list.tail;

    if (tail) {
      tail.next = node;
    } else {
      list.head = node;
    }

    list.tail = node;

    return node;
  };

  list.removeHead = function(){
    var headToBeRemoved = list.head;
    list.head = list.head.next;
    headToBeRemoved.next = null;
    return headToBeRemoved.value;
  };

  list.contains = function(target, node){
    node = node || list.head;

    if (!node) { return false; }
    if (node.value === target) { return true; }
    if (node === list.tail) { return false; }

    return (list.contains(target, node.next));
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
