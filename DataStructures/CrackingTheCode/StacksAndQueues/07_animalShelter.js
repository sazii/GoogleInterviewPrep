//animal shelter holds dogs and cats. FIFO.
//People must adopt the oldest animal.
//just they can select the type; animal or dog.
// create the DS to maintain this system and implement operations such as dequeueAny, dequeueDog, dequeueCat. you may use built in LL DS

/*
  we should create a mixed queue containing both cats and dogs for dequeueAny.
  Then we can use LL for storing both dogs and cats. each ll for aech type of animal.
*/
var Queue = require('./queue.js');
//var LinkedList = require('./singlyLinkedList');

function AnimalQueue(){
  this.dogs = new Queue();
  this.cats = new Queue();
}

AnimalQueue.prototype.enqueue = function(animal){
  let type = animal.type;
  if (type === 'dog') this.dogs.enqueue(animal);
  else this.cats.enqueue(animal);
  animal.insertTime = new Date();
};

AnimalQueue.prototype.dequeueDog = function(){
  return this.dogs.dequeue();
};

AnimalQueue.prototype.dequeueCat = function(){
  return this.cats.dequeue();
};

AnimalQueue.prototype.dequeueAny = function(){
  let oldestCat = this.cats.peek();
  let oldestDog = this.dogs.peek();
  if (oldestCat.insertTime <= oldestDog.insertTime) return this.cats.dequeue();
  else return this.dogs.dequeue();
};

let dog1 = {name: 'asi', type: 'dog' };
let dog2 = {name: 'ali', type: 'dog'};
let cat1 = {name: 'as', type: 'cat'};
let cat2 = {name: 'ar', type: 'cat'};

let animalQueue = new AnimalQueue();
animalQueue.enqueue(dog1);
animalQueue.enqueue(dog2);
animalQueue.enqueue(cat1);
animalQueue.enqueue(cat2);
//console.log(animalQueue.dogs.print());
//console.log(animalQueue.cats.print());
animalQueue.dequeueAny();
console.log(animalQueue.dogs);
console.log(animalQueue.cats);

