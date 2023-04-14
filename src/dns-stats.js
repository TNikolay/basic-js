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
  const mp = {}
  for (const v of domains) {
    const domains = v.split('.')
    let d = ''
    for (let i = domains.length - 1; i >= 0; i--) {
      d += '.' + domains[i]
      mp[d] = (mp[d] || 0) + 1
    }
  }

  return mp
}

// console.log(getDNSStats(['code.yandex.ru', 'music.yandex.ru', 'yandex.ru']))


module.exports = {
  getDNSStats
};
