function LinkedList(){
  this.head = null;
  this.tail = null;
}

function Node(value, next, previous) {
  this.value = value;
  this.next = next || null;
  this.previous = previous || null;
}

LinkedList.prototype.addToTail = function(value) {
   let node = new Node(value, null, this.tail);
   if (this.tail) this.tail.next = node;
   this.tail = node;
   if (!this.head) this.head = node;
};

LinkedList.prototype.addToHead = function(value) {
  let node = new Node(value, this.head);
  if (this.head) this.head.previous = node;
  if (!this.tail) this.tail = node;
  this.head = node;
};

LinkedList.prototype.removeHead = function() {
  let head = this.head;
  if (this.head === this.tail)
     {
       this.head = null;
       this.tail = null;
    } else
    {
      this.head = this.head.next;
      this.head.previous = null;
    }
   if (head) return head.value;
   else return null;
};

LinkedList.prototype.removeTail = function() {
  let tail = this.tail;
  if (this.head === this.tail) {
    this.head = null;
    this.tail = null;
  } else {
    this.tail = this.tail.previous;
    this.tail.next = null;
  }
  if (tail) return tail.value;
  else return null;
};

function isFn (arg) {
  return typeof arg === 'function';
}

LinkedList.prototype.search = function(value) {
   let isEqual = isFn(value) ? value : function(curValue){
     return curValue === value;
    };
   let curNode = this.head;
   while (curNode) {
     if (isEqual(curNode.value)) return curNode.value;
     curNode = curNode.next;
   }
   return null;
};
