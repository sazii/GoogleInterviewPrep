//find the first common ancestor of two nodes in an binary tree by avoiding additional nodes in a DS.
// this is not necessarily binary search tree.

//brute force approach; search with dfs the node if it contains go to left

const BinarySearchTree = require('./bst.js');

function commonAncestor(root, node1, node2){
  if (!isDescendent(root, node1) || !isDescendent(root, node2)) return 'one of the nodes are not in tree; there is no common ancesttor';
  return findCommonAncestor(root, node1, node2);
}

function findCommonAncestor(root, node1, node2){
  if (root === null || root === node1 || root === node2) return root;
    if (root.left) {
      let left1 = isDescendent(root.left, node1);
      let left2 = isDescendent(root.left, node2);
      if (left1 !== left2) return root;
      else if (left1) findCommonAncestor(root.left, node1, node2);
      else findCommonAncestor(root.right, node1, node2);
    }
}

function isDescendent(grand, candiDesc){
  if (grand === candiDesc) return true;
  if (grand === null) return false;
  return isDescendent(grand.left, candiDesc) || isDescendent(grand.right, candiDesc); //GZL !!!
}

let bst = new BinarySearchTree(12);
let arr = [0, 2, 4];
arr.forEach(el => {
  bst.insert(el);
});
console.log(bst);

//console.log(commonAncestor());
