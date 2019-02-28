var Stack = require('./stack.js') ;

//design a stack in addition to push and pop, has a func min returns the minimum element. push, pop, min should all operate in O1.

// store data as Node including min field. It stores always the minimum value. and check it in every push and every pop.

function StackNode(data){
  this.data = data;
  this.min = Number.MAX_VALUE;
}

function StackMin(){
  this.data = [];
  this.top = -1;
}

StackMin.prototype.push = function(data){
  let newNode = new StackNode(data);
  if (this.top !== -1) {
  let curTop = this.data[this.top];
  if (data < curTop.min) newNode.min = data;
  else newNode.min = curTop.min;
  } else newNode.min = data; // if the newNode is first element
  console.log(newNode);
  this.data[++this.top] = newNode;
};

StackMin.prototype.pop = function(){
  let retNode = this.data[this.top--];
  return retNode.value;
};

StackMin.prototype.min = function(){
  return this.data[this.top].min;
};

let stack = new StackMin();
stack.push(3);
stack.push(5);
stack.push(1);
stack.pop();
console.log(stack.min());

// a bit better than this using additional stack tracking the min value

 class StackMin2 extends Stack {
  constructor()
  {
   super();
   this.minStack = new Stack();
  }
  push(data){
    if (data < this.min()) this.minStack.push(data);
    super.push(data);
  }
  pop(){
    let data = super.pop();
    if (data === this.min()) this.minStack.pop();
    return data;
  }
  min(){
    console.log('peek', this.minStack, this.minStack.peek());
    if (this.minStack.size() === -1) return Number.MAX_VALUE;
    else return this.minStack.peek();
  }
}

let stackMin = new StackMin2();
stackMin.push(3);
stackMin.push(2);
stackMin.push(1);
console.log(stackMin);
console.log('min', stackMin.min());
