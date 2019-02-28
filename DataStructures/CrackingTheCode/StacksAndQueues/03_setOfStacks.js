// create ds named SetOfStacks composed of several stacks; should create a new stack when the previous one exceeds capacity. SetOfStacks.push and SetOfStacks.pop just treat like a single stack's push and pop; Think whole stacks consist of a single stack.

//also implement  popAt(subStackNum) ehich performs a pop operation on a specific subStack.

function Node(data, above, below){
  this.data = data;
  this.above = above || null;
  this.below = below || null;
}

// stack nodes store above and below node info.similar to double linkedlist
class StackWithBottom {

    constructor(capacity){
      this.top = null;
      this.capacity = capacity;
      this.bottom = null;
      this.length = 0;
    }

    isAtCapacity() {
      return this.length === this.capacity;
    }
    size() {
      return this.length;
    }
    push(data){
      if (this.length >= this.capacity) return false;
      let newNode = new Node(data, null, this.top);
      if (this.top) this.top.above = newNode; // above of the current top
      this.top = newNode;
      if (this.length === 0) this.bottom = newNode;
      this.length++;
      return true;
    }

    pop(){
      if (this.length === 0) return false;
      let retValue = this.top;
      this.top = this.top.below;
      if (this.top) this.top.above = null;
      this.length--;
      return retValue.data;
    }

    isEmpty(){
      return this.length === 0;
    }

    removeBottom(){
      let curBottom = this.bottom;
      this.bottom = curBottom.above;
      if (this.bottom) this.bottom.below = null;
      this.length--;
      return curBottom.data;
    }


  }


class SetOfStacks{
  constructor(capacity){
    this.capacity = capacity;
    this.stackArr = [];
  }
  push(data){
    //get last stack
    let last = this.stackArr[this.stackArr.length - 1];
    //console.log(last);
    if (last && !last.isAtCapacity()) last.push(data);
    //console.log(last);
    else {
      let newStack = new StackWithBottom(this.capacity);
      newStack.push(data);
      this.stackArr.push(newStack);
    }
  }
  pop() {
    let last = this.stackArr[this.stackArr.length - 1];
    if (last.isEmpty()) return null;
    let retValue = last.pop();
    if (last.size() === 0) this.stackArr.pop();
    return retValue;
  }
  //you should keep the capacity of each stack full so if you remove from the stack 1 then you move the stack 2's bottom to stack 1 top.
  popAt(stackInd){
    let retVal = this.stackArr[stackInd].pop();
    while (stackInd + 1 <= this.stackArr.length - 1){
      let nextStackBottom = this.stackArr[stackInd + 1].removeBottom();
      this.stackArr[stackInd].push(nextStackBottom);
      stackInd++;
    }
    return retVal;
  }
}

let setStack = new SetOfStacks(3);
setStack.push(1);
setStack.push(2);
setStack.push(3);
setStack.push(4);
setStack.push(5);
setStack.push(6);
setStack.push(7);
setStack.push(8);
setStack.popAt(0);

console.log(setStack.popAt(0));
