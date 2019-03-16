//input: a binary tree
//output: an arr of linked lists that store nodes at the same depth. if you have d depth; you must have d liked lists
//approach: *find the depth; if you have n nodes; your depth is log2(n)
//*traverse the node with bfs; sign the nodes level when you get the left right.
// when you shift from the queue check the level and push the corresponding ll
var BinarySearchTree = require('./bst.js');
var LinkedList = require('./singlyLinkedList.js');

function createListOfDepth(rootNode){
  let resArr = [];
  let queue = [rootNode];
  let levels = {};
  levels[rootNode.value] = 0;
  while (queue.length > 0){
    console.log(levels);
    let node = queue.shift();
    let level = levels[node.value];
    if (!resArr[level]) resArr[level] = new LinkedList();
    resArr[level].addToTail(node.value);
    if (node.left) {
      queue.push(node.left);
      levels[node.left.value] = level + 1;
    }
    if (node.right) {
      queue.push(node.right);
      levels[node.right.value] = level + 1;
    }
  }
  return resArr;
}

let bst = new BinarySearchTree(12);
let arr = [0, 2, 4, 6, 3, 8, 9, 15, 21];
arr.forEach(el => {
  bst.insert(el);
});

console.log(bst);
console.log(createListOfDepth(bst));
