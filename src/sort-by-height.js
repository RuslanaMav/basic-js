const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let arr2 = [];
  arr.filter(function (item, index) {
    if (item === -1)
      arr2.push(index)
  });
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr2.length; i++)
    arr.shift();
  for (let i = 0; i < arr2.length; i++)
    arr.splice(arr2[i], 0, -1)
  return arr;
}

module.exports = {
  sortByHeight
};
