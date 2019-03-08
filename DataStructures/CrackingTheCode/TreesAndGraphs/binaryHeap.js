function MinHeap(value){
  this.min = new Node(value);
  this.rightmost = this.min;
  this.length = 1;
}

function Node(value, parent, left, right){
  this.value = value;
  this.parent = parent || null;
  this.left = left || null;
  this.right = right || null;
}

function swap(node1, node2){
  let tmp = node1.value;
  node1.value = node2.value;
  node2.value = tmp;
}

function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}

//insert value into the rightmost of the last level
//swap with its parent until to maintain the minheap property
// to swap the maintain your tree should be birectional!
MinHeap.prototype.insert = function(value){
  //insert the rightMost
  let rightmost = this.rightmost;
  //if rigtmost is root; min node, first find of the rightMost
  if (rightmost === this.min) {
    this.rightmost = new Node(value, this.min);
    this.min.left = this.rightmost;
    this.firstleftOfLastLevel = this.min.left;
  }
  // current rightmost is left child
  else if (!rightmost.parent.right) {
    this.rightmost = new Node(value, rightmost.parent);
    rightmost.parent.right = this.rightmost;
  }
  // current rightmost is right child
  else {
    //when the tree is complete; go to the new level to add the element
    if (Number.isInteger(getBaseLog(2, this.length + 1)) ){
      this.rightmost = new Node(value, this.firstleftOfLastLevel);
      this.firstleftOfLastLevel.left = this.rightmost;
      this.firstleftOfLastLevel = this.firstleftOfLastLevel.left;

    } else {

    let depth = Math.floor(getBaseLog(2, (this.length + 1)));
    let goSharedAnces = depth - 2;
    //console.log('aaaaaaaa', value, goSharedAnces);
    let count = 0;
    if (this.length === Math.pow(2,depth) + Math.pow(2, (depth - 1)) - 1) goSharedAnces++;
    let parentRightMost = this.rightmost.parent;
    //console.log('aaaaaaaa', value, goSharedAnces, parentRightMost);
    while (count < goSharedAnces){
      //console.log('fhhhhhh');
      parentRightMost = parentRightMost.parent;
      count++;
    }
    //console.log(parentRightMost);
    parentRightMost = parentRightMost.right;
    //console.log(parentRightMost);
    let goLeft = goSharedAnces - 1;
    //console.log('goLeft', goLeft)
    while(goLeft > 0) {
      parentRightMost = parentRightMost.left;
      goLeft--;
    }

    this.rightmost = new Node(value, parentRightMost);
    parentRightMost.left = this.rightmost;
    }
  }

  //bubleup
  let child = this.rightmost;
  let curParent = this.rightmost.parent;
  //to keep the rightmost as true
  let tmpvalue = this.rightmost.value;
  if (child.value < curParent.value) tmpvalue = curParent.value;
  while (child && curParent && child.value < curParent.value ) {
    swap(child, curParent);
    child = curParent;
    curParent = curParent.parent;
  }
  this.rightmost.value = tmpvalue;
  this.length++;
}



let minHeap = new MinHeap(15);
minHeap.insert(10);
console.log(minHeap);
console.log('**************************************');
minHeap.insert(20);
console.log(minHeap);
console.log('**************************************');
minHeap.insert(3);
console.log(minHeap);
console.log('**************************************');
minHeap.insert(12);
console.log(minHeap);
console.log('**************************************');
minHeap.insert(5);
console.log(minHeap);
console.log('**************************************');
minHeap.insert(30);
console.log(minHeap);
console.log('**************************************');
minHeap.insert(50);
console.log(minHeap);
console.log('**************************************');
minHeap.insert(1);
console.log(minHeap);
console.log('**************************************');
minHeap.insert(11);
console.log(minHeap);
console.log('**************************************');
minHeap.insert(21);
console.log(minHeap);
console.log('**************************************');
minHeap.insert(4);
console.log(minHeap);
console.log('**************************************');
minHeap.insert(17);
console.log(minHeap);
console.log('**************************************');
minHeap.insert(6);
console.log(minHeap);
console.log('**************************************');
minHeap.insert(31);
console.log(minHeap);
console.log('**************************************');
minHeap.insert(51);
console.log(minHeap);
console.log('**************************************');
minHeap.insert(2);
console.log(minHeap);
console.log('**************************************');
minHeap.insert(9);
console.log(minHeap);
console.log('**************************************');
minHeap.insert(19);
console.log(minHeap);
console.log('**************************************');
minHeap.insert(2);
console.log(minHeap);
console.log('**************************************');
minHeap.insert(15);
console.log(minHeap);
console.log('**************************************');
minHeap.insert(4);
console.log(minHeap);
console.log('**************************************');
minHeap.insert(29);
console.log(minHeap);
console.log('**************************************');
minHeap.insert(41);
console.log(minHeap);
console.log('**************************************');
minHeap.insert(0);

console.log(minHeap);
