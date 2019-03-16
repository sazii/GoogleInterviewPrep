//bst rule: left <= root < right. whole left nodes should be smaller that the root; whole right nodes should be higher than the root. You must compare the whole left and whole right nodes to decide a tree is bfs. so time complexity at least O(N).
//input: binary tree
//output: true or false
//first approach: if you get the elemnnts by in-order traversel from a binary search tree to an array; the array should be sorted.because in-order traversal first you get the left leave, then root, then the right.

const BinarySearchTree = require('./bst.js');
let index = 0;
function copyBst(arr, root){
 if (root === null) return;
 if (root.left) copyBst(arr, root.left);
 arr[index] = root.value;
 index++;
 if (root.right) copyBst(arr, root.right);
}

function isBst(root){
 //copy to tree an array.
 let arr = new Array(root.size());
 copyBst(arr, root);
 for (let i = 0; i < arr.length - 2; i++){
   if (arr[i] > arr[i + 1]) return false;
 }
 return true;
}

// this approach does not handle the equality rule. it gives true for right = root; it must give false for this case. if you change the comparison in sorting part then it gives false for left = root. but it should give true.

/* second app:
  each node of left subtree should be less than the root and each node of right node should be higher then root.
  * track the whole tree that the nodes are in the true range.
  * in beginning:
  min inf <leftsubtree node value <= rootValue
  rootValue<right subtree node value< max inf
  * update the boundaries with the true values.
*/
function checkBoundaries(root, min, max){
  //console.log(root, min, max);
  if (!root) return true;
  if ((min !== null && root.value <= min) || (max !== null && max < root.value)) return false;
  if ((root.left && !checkBoundaries(root.left, min, root.value)) || (root.right && !checkBoundaries(root.right, root.value, max))) return false;
  return true;
}

function isBst2 (root){
  return checkBoundaries(root, null, null);
}

let bst = new BinarySearchTree(12);
let arr = [0, 2, 4, 6, 3, 8, 9, 15, 21];
arr.forEach(el => {
  bst.insert(el);
});
//console.log(bst);
console.log(isBst2(bst));

