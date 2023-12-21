const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let n = matrix.length; 
  let m = matrix[0].length; 
  let matrix1 = matrix.map(item => item.slice());

  for (let a = 0; a < n; a++) {
    for (let b = 0; b < m; b++) {
      let count = 0;
      if (b !== 0 && matrix[a][b - 1]) count++;
      if (b !== (m - 1) && matrix[a][b + 1]) count++;
      if (b !== 0 && a !== (n - 1) && matrix[a + 1][b - 1]) count++;
      if (a !== (n - 1) && matrix[a + 1][b]) count++;
      if (a !== (n - 1) && b !== (m - 1) && matrix[a + 1][b + 1]) count++;
      if (b !== 0 && a !== 0 && matrix[a - 1][b - 1]) count++;
      if (a !== 0 && matrix[a - 1][b]) count++;
      if (a !== 0 && b !== (m - 1) && matrix[a - 1][b + 1]) count++;
      matrix1[a][b] = count;
    }
  }
  return matrix1;
}

module.exports = {
  minesweeper
};
