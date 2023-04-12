const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {

  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!"); 

  const res = []
  let discard = false
  for (let i = 0; i < arr.length; i++) {
    switch(arr[i]) {
      case '--discard-next': 
      i++
      discard = true
      break;
      
      case '--discard-prev': 
      if (i > 0 && !discard) res.pop()
      discard = true
      break;

      case '--double-next': 
      if (i + 1  < arr.length && !discard) res.push(arr[i + 1])
      break;

      case '--double-prev': 
      if (i > 0 && !discard) res.push(arr[i - 1])
      break;
      
      default: 
      res.push(arr[i])
      discard = false
    }
  }

  return res
}
//console.log(transform([1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5]))

/*

  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!"); 

  const res = []
  for (let i = 0; i < arr.length; i++) {
    switch(arr[i]) {
      case '--discard-next': i++
      break;
      
      case '--discard-prev': res.pop()
      break;

      case '--double-next': 
      if (i + 1  < arr.length) res.push(i + 1)
      break;

      case '--double-prev': 
      if (i < 0) res.push(i - 1)
      break;
      
      default: 
      res.push(arr[i])
    }
  }

  return res

 */
module.exports = {
  transform
};
