// 3 rods and N disks. beginning n disks are placed in ascending order from top to bottom in the first rod. move them from first one to last rod by obeying the following constraints.
// 1 - move one disk at one time.
// 2 - always place the disk onto  larger one.
// 3 - a disk can slid off from top to top of another rod. this rule makes sense using stack!!!
const Stack = require('./stack.js');

function Tower(towerNum){
  this.disks = new Stack();
  this.towerNum = towerNum;
}

Tower.prototype.add = function(disk){
  let disks = this.disks;
    if (disks.isEmpty()) disks.push(disk);
    else if (disks.peek() > disk) disks.push(disk);
    else throw Error('you can not place smaller one to larger');

};

Tower.prototype.moveTopTo = function(destination){
  let diskToMove = this.disks.pop();
  destination.add(diskToMove);
  console.log(diskToMove, ' is moved from ', this.towerNum, 'tower to', destination.towerNum, 'tower');
};

Tower.prototype.moveDisksFromTop = function(diskNum, using, destination) {
  if (diskNum > 0) {
    this.moveDisksFromTop(diskNum - 1, destination, using);
    this.moveTopTo(destination);
    using.moveDisksFromTop(diskNum - 1, this, destination);
  }
};

let towers = [];
for (let i = 0; i < 3; i++) towers[i] = new Tower(i);
for (let i = 5; i > 0; i--) towers[0].add(i);
console.log(towers[0]);
towers[0].moveDisksFromTop(5, towers[1], towers[2]);
console.log(towers[2]);

