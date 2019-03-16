function BinarySearchTree(rootValue) {
  this.length = 1;
  this.value = rootValue;
}


BinarySearchTree.prototype.insert = function(data){

  // let curTree = this;
  // while (curTree) {
  //   if (curTree.value >= data) {
  //     if (curTree.left) {
  //       curTree = curTree.left;
  //       curTree.length++;
  //     } else {
  //       curTree.left = newTree;
  //       break;
  //     }
  //   } else if (curTree.right) {
  //     curTree = curTree.right;
  //     curTree.length++;
  //   }
  //   else {
  //     curTree.right = newTree;
  //     break;
  //   }
  // }
  // this.length++;

  //********recursive version*********
  this.length++;
  var direction = data < this.value ? 'left' : 'right';
  if (!this[direction]) this[direction] = new BinarySearchTree(data);
  else this[direction].insert(data);
};

BinarySearchTree.prototype.contains = function(data){
  //******************while version***********
  // let curTree = this;
  // while (curTree){
  //   if (curTree.value > data) curTree = curTree.left;
  //   else if (curTree.value < data) curTree = curTree.right;
  //   else return true;
  // }
  // return false;

  //************************ */
  //recursive version
  if (this.value === data) return true;
  var direction = this.value < data ? 'right' : 'left';
  if (!this[direction]) return false;
  else return this[direction].contains(data);

};

BinarySearchTree.prototype.depthFirstForEach = function(func, callType){
  if (callType === 'pre-order') func(this.value);
  if (this.left) this.left.depthFirstForEach(func, callType);
  if (callType === 'in-order' || !callType) func(this.value);
  if (this.right) this.right.depthFirstForEach(func, callType);
  if (callType === 'post-order') func(this.value);

};


// we should store whole nodes in a depth. for this we need FIFO. when we visit the root then we visit the children of the root then descendents. When we visit the children of left; we need to remember the right to get the children of the child. solution: when we visit a node add the children to the end of the queue.
/*   20
   15  25
 5   17  28
 queue: 20
      : 15 25 //20 visited
      : 25 5 17 // 15 visitied
      : 5 17 28  // 25 visited
      : 17 28 // 5 visited
      : 28 // 17 visited
      : //28 visited  */
BinarySearchTree.prototype.breadthFirstForEach = function(func){

  let queue = [this];
  while (queue.length){
    let curTree = queue.shift();
    func(curTree.value);
    if (curTree.left) queue.push(curTree.left);
    if (curTree.right) queue.push(curTree.right);
  }
};

BinarySearchTree.prototype.size = function(){
 return this.length;
};

module.exports = BinarySearchTree;
