const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(type = true) {
    this.alp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.type = type;
  }

  encrypt(str, key) {
    if(!str || !key) throw new Error ('Incorrect arguments!');
    let s = '';
    let j = 0;
    key = ''.padStart(str.length, key);
    for (let i = 0; i < str.length; i++) {
      if (this.alp.indexOf(str[i].toUpperCase()) === -1) s += str[i];
      else {
        s += this.alp.at((this.alp.indexOf(str[i].toUpperCase()) + this.alp.indexOf(key[j].toUpperCase())) % 26);
        j++;
      }
    }
    return this.type ? s : s.split('').reverse().join('');
  }

  decrypt(str, key) {
    if(!str || !key) throw new Error ('Incorrect arguments!');
    let s = '';
    let j = 0;
    key = ''.padStart(str.length, key);
    for (let i = 0; i < str.length; i++) {
      if (this.alp.indexOf(str[i].toUpperCase()) === -1) {
        s += str[i];
        continue;
      }
      let str1 = this.alp.indexOf(str[i].toUpperCase()) - this.alp.indexOf(key[j].toUpperCase());
      if (str1 >= 0) s += this.alp.at(str1);
      else s += this.alp.at(str1 + 26);
      j++;
    }
    return this.type ? s : s.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
