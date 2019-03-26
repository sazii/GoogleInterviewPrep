// t1 and t2 are very large binary trees. we know that t1 is bigger than t2. check that t2 is subtree of t1.

//isSubtree: bruteforce app: treverse the tree recursively if you met t2 return true.

// checkSubtree: comparing traversal of subtree and traversal of tree.

// for in-order: for bst with the same values we have the same orders (sorted) regardless of structure of tree. therefore inoreder traversal does not work; it is not indicative to check that a tree is  subtree of another.

// for preorder: t2.preOrderTraversal is substring of t1.preorder. structure matters here. except that the tree has duplicate values or null values. we should indicate null values in our traversal. then we can do it!

//brute force app: timr comp: O(n^2)
function findSubtree(node1, node2){
  if (node1 === null) return true; // every tree has null subtree
  return isSubtree(node1, node2);
}

function isSubtree(subtCand, root){
  // we cannot compare directly objects. because they have different memory addresses. primitive comparison always gives false.therefore we use json.stringfy
  //O(n)
  if (JSON.stringify(subtCand) === JSON.stringify(root)) return true;
  if (root === null) return false;
  return isSubtree(root.left) || isSubtree(root.right);
}

//more naive version of bruteForce. first we check the datas so if datas are not the same we do not call the tree comparison. we reduce the calls and when we are comparing the tree; we will go into detail; if we find any nonmatched detail; we end up the comparing function. in most cases it will be end up early.

//memory complexity: O(log(n) + log(m)) better!!
//time complexity: worst case O(nm); but actually if we have k times the root of subtree in tree; it is O(n + km) (k < 1) BETTER!!!

function isSubtree2(subTree, tree){
  if (subTree === null) return true;
  return checkSubtree2(subTree, tree);
}

function checkSubtree2(subTree, tree){
  if (tree === null) return false;
  else if (subTree.value === tree.value && isEqual(subTree, tree)) return true;
  //traverse the tree O(n)
  return checkSubtree2(subTree, tree.left) || checkSubtree2(subTree, tree.right);
}

//tree2(tree): n nodes tree1(subTree): m odes. n>m => O(m)
function isEqual(tree1, tree2){
  //we traverse the whole trees.
  if (tree1 === null && tree2 === null) return true;
  //they do not reach null at the same time. they have different levels on the same branch.
  else if (tree1 === null || tree2 === null) return false;
  else if (tree1.value !== tree2.value) return false;
  else return isEqual(tree1.left, tree2.left) || isEqual(tree1.right, tree2.right);
}

// second solution: subtCand : m nodes root: n nodes
// has O(n+m) time complexity also has O(n+m) space complexity.

function preOrderTraversal(root, str, count){
  if (count === root.size()) return str;
  if (root === null) str += ' ';
  else str += root.value;
  count++;
  preOrderTraversal(root.left, str, count);
  preOrderTraversal(root.right, str, count);
}

function checkSubtree(subtCand, root){
  let preOrdDesc = preOrderTraversal(subtCand);
  let preOrdAnc = preOrderTraversal(root);
  return preOrdAnc.indexOf(preOrdDesc) !== -1;
}
