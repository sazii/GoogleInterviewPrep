// input: tree
// output: true or false
// implement an algorithm that checks a binary tree is balanced or not
// balanced means a tree that  two subtrees of any node node differ more than one in heights.
// implement recursively to get the depth. for root depth = 0; going to each child depth increases 1. when you reach the leave (left, right: null) you find the depth.
// the depth of a tree max(left, right) + 1;
// while you are finding the depth,  you also looking for rigth or left child. you can also check them they are balanced or not. if you find an unbalanced subtree; return false. if you cannot any return true.

const balancedTree = require('./02_bstWithMinHeight');

//returns the height of the tree if the tree is balanced. if it is not balanced return an error code. in our case Integer.MIN_VALUE.
function checkHeight(root){
  // how determined our base case. our base case is traversing the whole tree. when we reach the null; we traversed the whole tree. height of a null tree is -1. because height of leaves is accepted as 0. null is its child. we are always finding increasing 1 of max heigth of child node.
  if (root === null) return -1; // our base case.

  let leftHeight = checkHeight(root.left);
  if (leftHeight === Number.MIN_VALUE) return Number.MIN_VALUE; // pass the error; tree is unbalanced

  let rightHeight = checkHeight(root.right);
  if (rightHeight === Number.MIN_VALUE) return Number.MIN_VALUE; // pass the error; tree is unbalanced

  let diff = Math.abs(leftHeight - rightHeight);
  if (diff > 1) return  Number.MIN_VALUE;//tree is unbalanced
  else return Math.max(leftHeight, rightHeight) + 1;//tree is balanced

}

function checkBalanced(rootNode) {
  return checkHeight(rootNode) !== Number.MIN_VALUE;
}

console.log(checkBalanced(balancedTree));
