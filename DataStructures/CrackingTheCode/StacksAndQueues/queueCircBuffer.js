function QueueCirc(size) {
  this.data = new Uint8Array(size || 0);
  this.front = 0;
  this.rear = 0;
}

QueueCirc.prototype.enqueue = function(data){
console.log(this.rear, this.front);
 //check the queue is full
 if ((this.rear === this.data.length   && this.front === 0) || this.rear === this.front - 1 ) {
   throw Error('Queue is full');
  } else if (data >= 0 && data < 256 ) {

      if (this.rear === this.data.length  && this.front !== 0 ) {
        this.rear = 0;
      this.data[this.rear] = data;
    } else if (this.rear !== this.data.length) {
       this.data[this.rear++] = data;
    }
  } else {
      throw Error('invalid data!');}
      console.log('enqueu', data, this.data);
};
QueueCirc.prototype.dequeue = function(){
  console.log('dequeue', this.data);
  console.log(this.rear, this.front);
  // check if the queue is Empty
  if (this.front === this.rear) throw Error('Queue is Empty!');
  let retValue = this.data[this.front];
  if (this.front === this.data.length - 1) this.front = 0;
  else this.front++;
  console.log('dequeue', this.data);
  return retValue;
};

