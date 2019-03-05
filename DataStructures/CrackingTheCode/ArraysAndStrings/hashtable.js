

function HashTable(size) {
   this.data = new Array(size || 35);
   this.numBuckets = this.data.length;
}


HashTable.prototype.set = function(key, value) {
  if (typeof key !== 'string') throw new TypeError('Keys must be strings');
  var index = this.hash(key);
  //console.log(key, index, value);
  if (!this.data[index]) this.data[index] = new LinkedList();
  this.data[index].addToHead({key: key, value: value});
};

HashTable.prototype.get = function(key) {
  var index = this.hash(key);
  return this.data[index].search(function(node) {
    return key === node.key;
  }).value;
};

HashTable.prototype.hasKey = function(key) {
  var index = this.hash(key);
  if (this.data[index].search(function(node){ return node.key === key; })) return true;
  else return false;
};

HashTable.prototype.hash = function(key) {
  var sum = 0;
  for (var i = 0; i < key.length; i++) {
    sum += key.charCodeAt(i);
  }
  var index = sum % this.numBuckets;
  return index;
};
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

