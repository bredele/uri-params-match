/**
 * Dependencies
 */

const url = require('url')
const querystring = require('querystring')

/**
 * Strictly match URI query parameters with given object.
 *
 * @param {String} uri
 * @param {Object} object
 * @return {Boolean} true if strictly match
 * @api public
 */

module.exports = (uri, object) => {
  let result = false
  if (object && typeof object === 'object') {
    const parser = url.parse(uri)
    result = contains(object, querystring.parse(parser.query))
  }
  return result
}

/**
 * Return true if second object contains all keys and values
 * from the first object.
 *
 * @param {Object} obj1
 * @param {Object} obj2
 * @return {Boolean}
 * @api private
 */

function contains (obj1, obj2) {
  const keys = Object.keys(obj1)
  let result = keys.length > 0
  let l = keys.length
  while (l--) {
    const key = keys[l]
    result = result && obj1[key] === obj2[key]
  }
  return result
}
