/**
 * Dependencies
 */

const url = require('url')
const querystring = require('querystring')

module.exports = (uri, object) => {
  let result = false
  if (object && typeof object === 'object') {
    const parser = url.parse(uri)
    result = contains(object, querystring.parse(parser.query))
  }
  return result
}


function contains (obj1, obj2) {
  const keys = Object.keys(obj1)
  let result = keys.length > 0
  let l = keys.length
  while (l--) {
    const key = keys[l]
    result = result && obj1[key] === obj2[key]
    // if (obj1[key] === obj2[key]) {
    //   result = true
    //   break
    // }
  }
  return result
}
