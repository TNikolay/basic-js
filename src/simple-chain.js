const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  data : [],
  getLength() {
    return this.data.length
  },
  
  addLink(value) {
    this.data.push(value === null ? 'null' : value)
    return this
  },

  removeLink(position) {
     if (typeof position !== 'number' || position > this.data.length || position < 1) {
       this.data = []
       throw new Error('You can\'t remove incorrect link!');
     }
    this.data.splice(position - 1, 1)
    return this
  },

  reverseChain() {
    this.data.reverse();
    return this
  },

  finishChain() {
    const res = '( ' + this.data.join(' )~~( ') + ' )'
    this.data = []
    return res
  }
};

module.exports = {
  chainMaker
};
