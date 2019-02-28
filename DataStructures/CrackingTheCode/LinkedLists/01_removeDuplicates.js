//remove duplicates from unsorted linked list.
//wuth additional buffer: we can use hashmap to track the elements and remove the hash table.

function removeDuplicate(llist) {
  let map = new Map();
  let node = llist.head;
  let prev = new Node(null);
  while (node) {
    if (map.has(node.data)) {prev.next = node.next;}
    else {
      map.set(node.data, true);
      prev = node;
    }
    node = node.next;
  }
}


//withoutBufffer
//traverse whole list ac. for each element is there any duplicate
//keep one elemen constant: curNode
//keep a previous node from the traversing one for removing the element. because you eill point the prev.next to removing element.next
function removeDuplicate2(llist) {
  let curNode = llist.head;
  let prev = llist.head;
  while (curNode) {
    console.log(curNode.data);
    let runner = curNode.next;
    //console.log(runner.data, curNode.data);
    while (runner) {
      console.log(curNode.data, runner.data, prev);
      if (runner.data === curNode.data){
        prev.next = runner.next;
      } else prev = prev.next;
      //console.log('aa', curNode.data, runner.data);
      runner = runner.next;

    }
    llist.print();

    curNode = curNode.next;
    prev = curNode;
  }
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
// ll.print();
 removeDuplicate2(ll);
 console.log('after remove');
 ll.print();

// ll.print();

