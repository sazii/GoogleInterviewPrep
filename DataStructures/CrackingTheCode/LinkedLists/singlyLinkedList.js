function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(data, next) {
  this.data = data;
  this.next = next || null;
}

LinkedList.prototype.addToHead = function(data) {
   let newNode = new Node(data, this.head);
   if (!this.head) this.tail = newNode;
   this.head = newNode;
};

LinkedList.prototype.addToTail = function(data) {
  let newNode = new Node(data);
  if (!this.head) this.head = newNode;
  else this.tail.next = newNode;
  this.tail = newNode;
};

LinkedList.prototype.remove = function(data) {
  if (!this.head) return;
  if (this.head.data === data) {
    this.head = this.head.next;
    return;
  }
  let curNode = this.head;
  while (curNode && curNode.next) {
    if (curNode.next.data === data) {
      curNode.next = curNode.next.next;
      if (curNode.next === null) this.tail = curNode.next;
    }
    curNode = curNode.next;
  }
};

LinkedList.prototype.removeFirst = function() {
  if (!this.head) return;
  if (this.head === this.tail) {
    this.head = null;
    this.tail = null;
  } else {this.head = this.head.next;}
};

LinkedList.prototype.find = function(data) {
  let curNode = this.head;
  while (curNode) {
    if (curNode.data === data) return curNode;
    curNode = curNode.next;
  }
  return 'there is no such a data';
};

LinkedList.prototype.print = function(){
  let curNode = this.head;
  while (curNode) {
    console.log('data:', curNode.data, 'next', curNode.next);
    curNode = curNode.next;
  }
};
LinkedList.prototype.getHead = function(){
  return this.head;
};

module.exports = LinkedList;

