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

  if (typeof str !== 'string') str = String(str)
  const separator = options?.separator || '+'
  const additionSeparator = options?.additionSeparator || '|'
  const repeatTimes = options?.repeatTimes || 1
  let add = ''
  if (options && options.hasOwnProperty('addition')) {
    const t = typeof options.addition === 'string' ? options.addition : String(options.addition);
    add = (t + additionSeparator).repeat(options?.additionRepeatTimes || 1).slice(0, -additionSeparator.length)
  }
  
  return res = (str + add + separator).repeat(repeatTimes).slice(0, -separator.length)
}

module.exports = {
  repeater
};
