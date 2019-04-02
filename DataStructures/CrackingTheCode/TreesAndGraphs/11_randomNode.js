//implement a binary tree class insert, find, delete, getRandomNode() => returns a random node. all nodes should be equally chosen.

function BinarySearchTree(val){
  this.rootValue = val;
  this.length = 1;
}

BinarySearchTree.prototype.insert = function(val){
  //console.log(val, this.length);
  this.length++;
  let direction = val <= this.rootValue ? 'left' : 'right';
  if (!this[direction]) this[direction] = new BinarySearchTree(val);
  else  this[direction].insert(val);
};

BinarySearchTree.prototype.search = function(val){
  if (this.rootValue === val) return true;
  let direction = val <= this.rootValue ? 'left' : 'right';
  if (!this[direction]) return false;
  else this[direction].search(val);
};

BinarySearchTree.prototype.delete = function(val){
  this.length--;
  if (this.rootValue === val) {
    //node has 2 children
    if (this.left && this.right) {
      let minValRightTree = findMinVal(this.right);
      this.rootValue = minValRightTree;
      this.right.delete(minValRightTree);
      return this;
      //node has 1 children
    } else if (this.left || this.right) {
      let direction = this.left ? 'left' : 'right';
      this.rootValue = this[direction].rootValue;
      this[direction].delete(this.rootValue);
      // has no children
    } else {
      this.rootValue = null;
    }
  }
  let direction = val <= this.rootValue ? 'left' : 'right';
  if (!this[direction]) return 'there is no such a value in tree';
  else this[direction].delete(val);
};

BinarySearchTree.prototype.size = function(){
  return this.length;
};

function findMinVal(node){
  while (node.left) {
    node = node.left;
  }
  return node.rootValue;
}

BinarySearchTree.prototype.getRandomNode = function(){
  let leftSize = !this.left ? 0 : this.left.size();
  let randIndex = Math.floor(Math.random() * this.size());
  if (randIndex < leftSize) this.left.getRandomNode();
  else if (randIndex === leftSize) return this;
  else this.right.getRandomNode();
};


let btree = new BinarySearchTree(3);
btree.insert(2);
btree.insert(5);
btree.insert(7);
btree.insert(3);
btree.delete(2);

console.log(btree);
