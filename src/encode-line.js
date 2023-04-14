const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */


  function encodeLine(str) {
    let s1 = "";
    let count = 1;
    let char = ""
    for (let i = 1; i <= str.length; i++) {
      if (str[i - 1] === str[i]) {
        char = str[i];
        count++;
      }
      else {
        if (count===1) s1+=str[i - 1]
       else {  s1 += count + str[i - 1]; count=1;}
      
      }
    }
    return s1;
  
}

module.exports = {
  encodeLine
};
