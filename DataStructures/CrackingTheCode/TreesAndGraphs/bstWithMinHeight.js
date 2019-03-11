//given a sorted array with increasing order. unique integer elements; write an algorithm to create a bst with minimum height

// more balanced more short heigh; therefore the head sholud be the min value. then right and left of the trees are approximately equal.
const BinarySearchTree = require('./bst.js');

function bstWithMinHeight(arr){
   return bstWithMinHeight2(arr, 0, arr.length - 1);
}

function bstWithMinHeight2(arr, start, end){
  if (start > end) return null;
  let midInd = (start + end) / 2;
  midInd = midInd | 0;
  let rootValue = arr[midInd];
  let bst = new BinarySearchTree(rootValue);
  bst.left = bstWithMinHeight2(arr, start, midInd - 1);
  bst.right = bstWithMinHeight2(arr, midInd + 1, end);
  return bst;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(bstWithMinHeight(arr));
