function Stack(){
  this.top = -1;
  this.data = [];
}

Stack.prototype.push = function(data){
  this.data[++this.top] = data;
};

Stack.prototype.pop = function(){
  if (this.size() === -1) throw Error('Stack is Empty!');
  return this.data[this.top--];
};

Stack.prototype.size = function(){
  return this.top;
};

Stack.prototype.peek = function(){
  if (this.isEmpty()) throw Error('Stack is Empty!');
  return this.data[this.top];
};

Stack.prototype.isEmpty = function(){
  return this.size() === -1;
};

module.exports = Stack;
