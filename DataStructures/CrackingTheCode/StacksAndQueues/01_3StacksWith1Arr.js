//implement three stacks by using a single array.
//Divide the array into 3 equal pices then create three pointers for trcking to each stack top.
// for stack 1 => 0 - n/3 stack 2 => n/3 -> 2n/3 ...

function ThreeStack(stackSize){
  this.stackSize = stackSize;
  this.data = new Array(stackSize * 3);
  this.tops = [0, 0, 0];
}

ThreeStack.prototype.push = function(stackNum, data){
  //find the trure index
  let index = stackNum * this.stackSize + this.tops[stackNum] + 1;
  data[index] = data;
  this.tops[stackNum]++;
};

ThreeStack.prototype.pop = function(stackNum){
  if (this.tops[stackNum] === 0) throw Error('The stack is empty');
  let index = stackNum * this.stackSize + this.tops[stackNum];
  this.tops[stackNum]--;
  let retVal = this.data[index];
  //sign deleted value;
  this.data[index] = 0;
  return retVal;
};

//just returns the top value
ThreeStack.prototype.peek = function(stackNum) {
  let topInd = stackNum * this.stackSize + this.tops[stackNum];
  return this.data[topInd];
};

ThreeStack.prototype.isEmpty = function(stackNum){
  return this.tops[stackNum] === 0;
};


//Approach 2: any stack can grow as long s there is any free space. We sequentially allocate space to the stacks. any new element keeps a pointer previous top element of the stack.
//we face a unused space. when we pop an element it is not end of the stack. to handle this we keep free spaces in a list; whenever add an element; dlete the space from free list and whenever delete an element; add the space to the free list.
//we have more flexibility in terms of variable space utilization but we need to increase the space complexity.

function ThreeStack2(stackSize){
  this.stackSize = stackSize;
  this.data = new Array(stackSize * 3);
  this.freeSpace = new Array(stackSize * 3);
  this.freeSpace.fill(true);
  this.tops = [0, 0, 0];
}

function StackNode(value, prev, stackNum){
  this.value = value;
  this.prev = prev || null;
  this.stackNum = stackNum;
}

ThreeStack2.prototype.push = function(data, stackNum){
  let index = this.tops[stackNum];
  let newNode = new StackNode(data, this.data[index]);
  let freeInd = this.freespace.indexOf(true);
  if (!freeInd) throw Error('Stacks are full');
  this.data[freeInd] = newNode;
  this.freeSpace[freeInd] = false;
  this.tops[stackNum] = freeInd;
};

ThreeStack2.prototype.pop = function(stackNum){
  let index = this.tops[stackNum];
  let retValue = this.data[index];
  this.freeSpace[index] = true;
  this.tops[stackNum] = this.data.indexOf(retValue.prev);
  return retValue.value;
};
