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
  constructor(direct = true){
    this.direct = direct
    this.al = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  
  encrypt(mes, key) {
    
    if(!mes || !key) throw new Error("Incorrect arguments!")
    
    mes = mes.toUpperCase()
    key = key.toUpperCase()
    let res = new Array(mes.length), k = 0;
   
    for (let i = 0; i < mes.length; i++) {
      const mi = this.al.indexOf(mes[i])
      if (mi == -1) res[i] = mes[i]
      else {
        if (k == key.length) k = 0
        const ki = this.al.indexOf(key[k++])
        res[i] = this.al[(mi + ki) % this.al.length]
      }
    }

    return this.direct ? res.join('') : res.reverse().join('')
  }
  
  decrypt(mes, key) {

    if(!mes || !key) throw new Error("Incorrect arguments!")
    
    key = key.toUpperCase()
    let res = new Array(mes.length), k = 0;
   
    for (let i = 0; i < mes.length; i++) {
      const mi = this.al.indexOf(mes[i])
      if (mi == -1) res[i] = mes[i]
      else {
        if (k == key.length) k = 0
        const ki = this.al.indexOf(key[k++])
        res[i] = this.al[(mi - ki + this.al.length) % this.al.length]
      }
    }

    return this.direct ? res.join('') : res.reverse().join('')
  }
}

module.exports = {
  VigenereCipheringMachine
};
