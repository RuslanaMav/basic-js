const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let option={
  repeatTimes: 1, 
  separator: '+', 
  addition: '+', 
  additionRepeatTimes: 1, 
  additionSeparator: '+'
}
  for (let key in options)
      option[key] = options[key]

str1 = (option.addition + option.additionSeparator).repeat(option.additionRepeatTimes).slice(0, -option.additionSeparator.length);

str2 = (str+ str1 + option.separator).repeat(option.repeatTimes).slice(0, -option.separator.length)

return str2;

}
module.exports = {
  repeater
};
