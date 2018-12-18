/**
 * Dependencies
 */

const test = require('tape')
const match = require('..')

test('should not match URI with undefined object', assert => {
  assert.plan(1)
  assert.equal(match('https://hello.com?lorem=ipsum&foo=bob'), false)
})

test('should not match URI with null object', assert => {
  assert.plan(1)
  assert.equal(match('https://hello.com?lorem=ipsum&foo=bob', null), false)
})

test('should not match URI when type of params different than object', assert => {
  assert.plan(1)
  assert.equal(match('https://hello.com?lorem=ipsum&foo=bob', 'hello'), false)
})

test('should not match URI with empty object', assert => {
  assert.plan(1)
  assert.equal(match('https://hello.com?lorem=ipsum&foo=bob', {}), false)
})

test('should match URI when object contains at least one query parameter', assert => {
  assert.plan(1)
  assert.equal(match('https://hello.com?lorem=ipsum&foo=bob', {
    foo: 'bob'
  }), true)
})

test('should not match URI when given object key/values are not contained in the URI', assert => {
  assert.plan(2)
  assert.equal(match('https://hello.com?lorem=ipsum&foo=bob', {
    foo: 'bob',
    hello: 'world'
  }), false)
  assert.equal(match('https://hello.com?lorem=ipsum&foo=bob', {
    foo: 'beep',
    lorem: 'ipsum'
  }), false)
})
