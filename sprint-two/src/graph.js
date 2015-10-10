

// ###Graph Solution

// Instantiate a new graph
var Graph = function(){
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
  this[node] = {
    edges: []
  }
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
  var result = false;
  // console.log(this);
  for (var key in this) {
    result = result || key === node;
  }

  return result;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
  if (this.contains(node)) { 
    delete this[node];
    return 0;
  }

  return -1;
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
  var fromNodeCheck = (this[fromNode] && this[fromNode].edges.indexOf(toNode) > -1);
  var toNodeCheck = (this[toNode] && this[toNode].edges.indexOf(fromNode) > -1);

  return fromNodeCheck && toNodeCheck;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
  if (this[fromNode]) {
    this[fromNode].edges.push(toNode);
  }
  if (this[toNode]) {
    this[toNode].edges.push(fromNode);
  }

  return 0;
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
  var fromNodeIndex;
  var toNodeIndex;
  var fromNodeEdges;
  var toNodeEdges;

  if (this[fromNode]) {
    fromNodeEdges = this[fromNode].edges;
    fromNodeIndex = fromNodeEdges.indexOf(toNode);
  }

  if (this[toNode]) {
    toNodeEdges = this[toNode].edges;
    toNodeIndex = toNodeEdges.indexOf(fromNode);
  }

  if (fromNodeIndex > -1) { 
    fromNodeEdges.splice(fromNodeIndex, 1);
  }  

  if (toNodeIndex > -1) { 
    toNodeEdges.splice(toNodeIndex, 1);
  }  
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
  for (var key in this) {
    if (this.hasOwnProperty(key)) {
      cb(key);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



