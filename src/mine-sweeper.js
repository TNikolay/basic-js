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
  const rows = matrix.length, cols = matrix[0].length
  let res = new Array(rows)
  for (let i = 0; i < rows; i++) res[i] = new Array(cols)

  const dir = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]]

  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      let count = 0;
      for (let i = 0; i < dir.length; i++) {
       const nr = r + dir[i][0], nc = c + dir[i][1]
       if (nc >= 0 && nc < cols && nr >= 0 && nr < rows && matrix[nr][nc]) count++
      }
      res[r][c] = count
  }}

  return res
}

module.exports = {
  minesweeper
};
