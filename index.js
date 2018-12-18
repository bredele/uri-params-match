/**
 * Dependencies
 */

const url = require('url')
const querystring = require('querystring')

module.exports = (uri, object) => {
  let result = false
  if (object && typeof object === 'object') {
    const parser = url.parse(uri)
    result = contains(querystring.parse(parser.query), object)
  }
  return result
}


function contains (obj1, obj2) {
  let result = false
  const keys = Object.keys(obj1)
  let l = keys.length
  while (l--) {
    const key = keys[l]
    if (obj1[key] === obj2[key]) {
      result = true
      break
    }
  }
  return result
}
