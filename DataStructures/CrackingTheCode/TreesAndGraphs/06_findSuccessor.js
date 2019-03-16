// in-order successor: next node in inorder traversal.
// we have 2 cases. If the node has right subtree; it is the leftmost node of the right subtree. It means that it is  min of the right subtree because it is a bst
//it it has not right subtree then it is the nearest ancestor for which the node would be in left subtree. (nearest unvisited ancestor).
// input: a tree, and a tree node.
// output: node.

function findMin(root){
  if (!root) return null;
  while (root.left){
    root = root.left;
  }
  return root;
}

function findSuccessor(root, node){
  if (node.right){
    return findMin(node.right);
  } else {
    // we try to reach the first left ancestor. therefore if we climb until to catch the first left ancestor; we are staying in right; it means we are not on left subtree. find the ancestor that has been unvisited.
    let ancestor = node.parent;
    let current = node;
    while (ancestor !== null  && current !== ancestor.left) {
      current = ancestor;
      ancestor = ancestor.parent;
    }
    return ancestor;
  }
}

