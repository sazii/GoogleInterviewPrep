//delete a given node ain the midd;e of a singly linked list.
// if the node is last node in the list the problrm can not be solved. you do not have the previous one. and your next one is null so you can not go to related memory and change!
function deleteNode(node) {
  if (node === null || node.next === null) return 'I could not delete :(';
  let next = node.next;
  node.data = next.data;
  node.next = next.next;
  return true;
}

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
    console.log('data:', curNode.data);
    curNode = curNode.next;
  }
}
let ll = new LinkedList();
ll.addToHead(3);
ll.addToHead(5);
ll.addToTail(1);
ll.addToTail(1);
ll.addToTail(3);
//ll.remove(5);

 deleteNode(ll.head);
 ll.print();
