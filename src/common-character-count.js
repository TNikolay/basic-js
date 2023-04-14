const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  
  if (!s1.length || !s2.length) return 0

  let res = 0, mp1 = new Array(26).fill(0), mp2 = new Array(26).fill(0)
  for (const v of s1) mp1[v.charCodeAt(0) - 97]++
  for (const v of s2) mp2[v.charCodeAt(0) - 97]++
  
  for (let i = 0; i < mp1.length; i++) res += Math.min(mp1[i], mp2[i])
  
  return res
}

module.exports = {
  getCommonCharacterCount
};
