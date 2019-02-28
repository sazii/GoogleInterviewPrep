function Stack(){
  this.top = -1;
  this.data = [];
}

Stack.prototype.push = function(data){
  this.data[++this.top] = data;
};

Stack.prototype.pop = function(){
  if (!this.size()) throw Error('Stack is Empty!');
  return this.data[this.top--];
};

Stack.prototype.size = function(){
  return this.top;
};

Stack.prototype.peek = function(){
  return this.data[this.top];
};

module.exports = Stack;
