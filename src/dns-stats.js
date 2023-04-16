const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let obj = {}
  let arr = [];
  domains =  domains.map(item => "." + item)
  arr = arr.concat(domains)
  for (let i=0; i<domains.length; i++){
      let str = ""
      while (domains[i].lastIndexOf(".")!=-1){
      let s = domains[i].slice(domains[i].lastIndexOf("."));
       str += domains[i].slice(domains[i].lastIndexOf("."));
       domains [i] = domains[i].slice(0, domains[i].lastIndexOf("."));
      let count = 0;
      arr.forEach((item)=>{
          if (item.indexOf(s)!=-1) count++;});
      obj[str] = count;
      }
  }
return obj;
}

module.exports = {
  getDNSStats
};
