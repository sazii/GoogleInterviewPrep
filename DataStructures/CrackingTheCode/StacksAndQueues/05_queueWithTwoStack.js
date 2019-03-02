//implement queue by using two stack.
var Stack = require('./stack.js');

class MyQueue {
  constructor(){
    this.stackPush = new Stack();
    this.stackPop = new Stack();
  }
  push(data){
    this.stackPush.push(data);
  }

  pop(){
    if (!this.stackPop.isEmpty()) return this.stackPop.pop();
    while (!this.stackPush.isEmpty()){
      this.stackPop.push(this.stackPush.pop());
    }
    return this.stackPop.pop();
  }

  peek(){
    if (!this.stackPop.isEmpty()) return this.stackPop.peek();
    while (!this.stackPush.isEmpty()){
      this.stackPop.push(this.stackPush.pop());
    }
    return this.stackPush.peek();
  }

}

let que = new MyQueue();
que.push(1);
que.push(2);
que.push(3);
console.log(que.pop());
console.log(que.peek());
que.push(4);
que.push(5);
console.log(que.pop());
