//sort a stack in ascending order. the smallest one is top.
// may use additional temprary stack
// may not copy the elements into any other data structure(such as an array). just you have push, pop, peek, isEmpty.

// bruteForce app: we have stack we can pop the number; then we store it to any other stack and we pop the second element from the original stack and we compare to other one ac to descending order we can store the temp stack. And then pop again from the first one; then compara again pop of other stack then also descending.
let Stack = require('./stack.js');

function sortStackAsc(stack){
  let temp = new Stack();
  while (!stack.isEmpty()) {
    let el = stack.pop();
    if (temp.isEmpty() || el < temp.peek()) temp.push(el);
    else {
      while (!temp.isEmpty() && el > temp.peek()){
        console.log('a', temp);
        stack.push(temp.pop());
        console.log(temp);
      }
      temp.push(el);
    }
  }
  return temp;
}

let stack = new Stack();
stack.push(1);
stack.push(7);
stack.push(3);
stack.push(9);
console.log(stack);
console.log(sortStackAsc(stack));
//console.log(stack);
