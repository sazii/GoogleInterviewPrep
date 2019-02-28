//Given a linked list including a loop. find the beginning node of the loop.
//input: A -> B -> C -> D -> E -> C [the same C as earlier]
/*A -> B -> C -> D -> E -> F
                |         |
                I <- H <- G

*/

/*
********** MORE ELEGANT ONE *******************
let we have 2 pointers; one have 1 speed the other one has 2 speed: They start from the head. We have a cycle so 2 pointers will meet in some point.
* At the same time; if one gets 1 m; the other one gets 2 m.
* if we say
- the road btw beginning of cycle and the head: X
- if they meet the Y nodes from the beginning of the cycle.
- if we accept the cycle length as N
- then pointer one gets: X + N - Y
- pointer two gets: X + 2N -Y
- so: 2(X + N - Y) = X + 2N -Y then X = Y. they will meet the same distance from the cycling point. The beginning of the cycle is the middle of meeting point and the head!
implement the approach:
1- Find the meeting point of two pointers that one of speed is higer than the other.
2- then move the one of the pointers to the head and the other one is stayed the meeting point. then start to move both pointers node by bode. Then the meeting point is the start node of the cycle.
* time space: O(n)
*/

function findCycleNode(llist) {

  var faster = llist.head;
  var slower = llist.head;
  // Find the meeting point
  while (faster.next !== null){
    faster = faster.next.next;
    slower = slower.next;
    if (faster === slower) break;
  }
  //check if there is not cycle
  if (faster.next === null) return 'there is no cycle';
  // move the slover to the head again
  slower = llist.head;
  // move both of them node by node
  while (faster !== slower){
    faster = faster.next;
    slower = slower.next;
  }
  //now both faster and slower points the beginning of the cycle. return one of them.
  return faster;
}
function LinkedList(size) {
  this.head = null;
  this.size = size;
}

function Node(data, next) {
  this.data = data;
  this.next = next || null;
}

LinkedList.prototype.buildCyclicList = function(linkedListLength, cycleLength) {
  if (cycleLength >= linkedListLength) {
      throw new Error('cycleLength must be smaller than linkedListLength');
  }
  this.size = linkedListLength;
  let curNode = new Node(randomNum());
  console.log('this.head', curNode)
  this.head = curNode;
  for (let i = 1; i <= linkedListLength - cycleLength; i++) {
    //console.log(randomNum());
    let newNode = new Node(randomNum());
    curNode.next = newNode;
    if (i === linkedListLength - cycleLength) var startingNode = curNode;
    curNode = curNode.next;
    console.log(curNode.data);
  }
  for (let i = 1; i < cycleLength - 1; i++) {
    curNode.next = new Node(randomNum());
    curNode = curNode.next;
    console.log(curNode.data);
  }
  curNode.next = startingNode;
};

function randomNum() {
  return Math.floor(Math.random() * 100) + 1;
}

LinkedList.prototype.print = function(){
  let curNode = this.head;
  let i = 0;
  while (i < this.size ) {
    console.log('data:', curNode.data);
    curNode = curNode.next;
    i++;
  }
}

let llist = new LinkedList();
llist.buildCyclicList(8, 5);
llist.print();
console.log(findCycleNode(llist));
