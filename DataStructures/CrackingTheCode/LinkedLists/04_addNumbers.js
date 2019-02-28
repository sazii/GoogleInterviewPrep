//numbers are stored in reverse order in ll. for example 513 stored as 3-> 1-> 5
// you get the numbers as input and return the sum as linked list
// for exam inputs 2->1->4 and 3-> 1-> 5 you will add the 412 + 513 = 927 7-> 2 -> 9
// recursive approach: we will recursvely node by node; just as we would digit by digit
// 1- result.data =(n1.node + n2.node + carry) % 10;
// 2- node1+node2> 10 carry++;
// 3- add the tails of the two nodes, passing along the carry.

function addLists(node1, node2, carry) {
  if (node1 && node2) console.log(node1.data, node2.data, carry);
  if (node1 === null && node2 === null) return null;
  let result = new Node(carry);
  if (node1.data) result.data += node1.data;
  if (node2.data) result.data += node2.data;
  console.log(result);
  carry = (result.data / 10) | 0;
  result.data = result.data % 10;
  let more = addLists(node1.next, node2.next, carry);
  result.next = more;
  return result;
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

let node1 = new Node(3, new Node(1, new Node(5)));
let node2 = new Node(5, new Node(9, new Node(2)));
 console.log(addLists(node1, node2, 0));

