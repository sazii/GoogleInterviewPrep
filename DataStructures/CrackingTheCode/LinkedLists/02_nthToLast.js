//find the nth to last element of a singly linked list
// create two pointers that points beginning of the node; p1 and p2
// increment p2 by n-1 positions so that distance btw p1 and p2 is n-1
// if p2 is null return value of p1. otherwise increment p1 and p2 until next of p2 is null.

function nthToLast(llist, n) {
  let p1 = llist.head;
  let p2 = llist.head;
  console.log(n);
  for (let i = 0; i < n - 1; i++) {
    p2 = p2.next;
  }
  if (!p2.next) return;
  while (p2.next){
    p1 = p1.next;
    p2 = p2.next;
  }


  return p1.data;
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
ll.addToHead(5);
ll.print();
 console.log(nthToLast(ll, 4));

