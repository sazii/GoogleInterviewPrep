// a bst was created by traversing through an array from left to righ and inserting each element.
// find the whole arrays that can be consisted of bst
// input: such a bst
// output: array of lls
// root should be first element of the array. All subtrees also bst. so we should call our function recursively.
/*
        50         arrset(50) = arrset(20) + arrset(60)
        /\
    20     60
    /\      \
  10   25     70
  /\           /\
 5  15       65  80
*/

const LinkedList = require('./doubleLinkedlist.js');

function findAllSequences(root){
  let allSeq = []; //arr of lls
  if (root === null) {
    allSeq.push(new LinkedList());
    return allSeq;
  }
  let prefix = new LinkedList();
  prefix.addToHead(root.value);

  let leftSeq = findAllSequences(root.left);
  let rightSeq = findAllSequences(root.right);

  leftSeq.forEach(seqLeft => {
    rightSeq.forEach(seqRight => {
      let merged = [];
      mergeSeq(seqLeft, seqRight, merged, prefix);
      allSeq.push(merged);
    });
  });
  return allSeq;
}

function mergeSeq(first, second, results, prefix){
 //base case: if one of the seq is empty; add remainder to a cloned prefix and  store result.
  if (first.length === 0 || second.length === 0){
    let result = [...prefix];
    result = result.concat(first, second);
    results.push(result);
    return;
  }
  // recurse with head of first added to the prefix. Removing the head will damage first for later recursions. so we need to add it to first again
  let headFirst = first.removeHead();
  prefix.addToTail(headFirst);
  mergeSeq(first, second, results, prefix);
  // revert the cahnges
  prefix.removeTail();
  first.addToHead(headFirst);
  //Do the same things with the second
  let headSecond = second.removeHead();
  prefix.addToTail(headSecond);
  mergeSeq(first, second, results, prefix);
  second.addToHead(headSecond);
  prefix.removeTail();

}
