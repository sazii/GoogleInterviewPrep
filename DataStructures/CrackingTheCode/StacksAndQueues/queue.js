export default function Queue() {
 this.data = [];
 this.front = 0; // where we dequeue
 this.back = 0; // where we enqueue
}

Queue.prototype.enqueue = function(data) {
 this.data[this.back++] = data; // use variable then increments it by 1
};

Queue.prototype.dequeue = function() {
  if (!this.size()) return;
  return this.data[this.front++];
};

Queue.prototype.size = function() {
  return  this.back - this.front;
};
