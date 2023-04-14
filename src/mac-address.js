const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
const str = "0123456789ABCDEF"

function isMAC48Address(n) {
  let count = 0;
  let arr = n.split("-");
  if (arr.length !== 6 || n.length !== 17) return false;
  else {
    arr.forEach(function (item) {
      for (let char of item)
        if (str.indexOf(char) !== -1) count++;
    });
  }
  if (count === 12) return true;
  else return false
}


module.exports = {
  isMAC48Address
};
