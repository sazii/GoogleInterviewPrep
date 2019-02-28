// an image given as NxN matrix:each pixes is 4 bytes. Write a method that rotates image 90 degree clockwise
//top => right right => bottom bottom => left left => top
// nxn matrix should be considered as square within square. for example 4x4 matrix can be considered as square has side-length 2 within square side-length 4 or 6x6 matrix: 2 side-length square within 4 length wihin 6 length square.
// first rotate the outside square, then inner ones.


function rotateImage(img, length){

  for (let layer = 0; layer < length / 2; layer++) {
    for (let j = layer; j < length - 1 - layer; j++ ) {
      //left: column row decreases ac to j column increases ac to layer: img[length-1-j][layer]
      //bottom: row  decreases ac to layer, column decreases ac to j: img[length-1-layer][length-1-j]
      //right: row increases ac to j, column decreases ac to layer: img[j][length-1-layer]
      //top: row increases ac to layer, column icreases ac to j: img[layer][j]

      let saveTop = img[layer][j];
      //left => top
      img[layer][j] = img[length - 1 - j][layer];
      //bottom => left
      img[length - 1 - j][layer] = img[length - 1 - layer][length - 1 - j];
      //right => bottom
      img[length - 1 - layer][length - 1 - j] = img[j][length - 1 - layer];
      //top => right
      img[j][length - 1 - layer] = saveTop;
    }
  }
  return img;
}

let mt = [
  ['a', 'b', 'c'],
  ['e', 'f', 'g'],
  ['i', 'j', 'k'],
  ['m', 'n', 'o'],
];
console.log(rotateImage(mt, 4));
