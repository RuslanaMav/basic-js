const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {

  let summ = 0;
  let s1 = 0;
  String(n).split("").forEach(item => summ += Number(item));
  s1 = summ;
  while (Math.floor(s1 / 10) !== 0) {
    s1 = 0;
    String(summ).split("").forEach(item => s1 += Number(item));
  }
  return s1;
}

module.exports = {
  getSumOfDigits
};
