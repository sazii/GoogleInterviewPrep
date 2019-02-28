//set zero whole matrix column and row if the element is zero.
// if we traverse the matrix and catch the zero and then  we set 0 the column and row; then we need the set 0 whole matrix.
// therefore first we traverse the whole matrix and we sign the row and column. we need to a row array and a column array.

function setZero (matrix) {
  let rowArr = new Array(matrix.length);
  let colArr = new Array(matrix[0].length);

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === 0) {
        rowArr[row] = 1;
        colArr[col] = 1;
      }
    }
  }
  for ( let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (rowArr[row] === 1 || colArr[col] === 1) matrix[row][col] = 0;
    }
  }
  return matrix;
}

let matrix = [[1, 2, 3, 0],
              [0, 2, 4, 9],
              [1, 4, 8, 7]];
 console.log(setZero(matrix));
