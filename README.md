# uri-params-match

[![Build Status](https://travis-ci.org/bredele/uri-params-match.svg?branch=master)](https://travis-ci.org/bredele/uri-params-match)
 [![NPM](https://img.shields.io/npm/v/uri-params-match.svg)](https://www.npmjs.com/package/uri-params-match)
 [![Downloads](https://img.shields.io/npm/dm/uri-params-match.svg)](http://npm-stat.com/charts.html?package=uri-params-match)
 [![pledge](https://bredele.github.io/contributing-guide/community-pledge.svg)](https://github.com/bredele/contributing-guide/blob/master/guidelines.md)

Match URI query parameters with given object

## Usage

```js
const match = require('uri-params-match')


match('https://www.world.com?redirect_uri=https://hello.com', {
  redirect_uri: 'https://hello.com'
})
// => true

match('https://www.world.com?redirect_uri=https://hello.com', {
  redirect_uri: 'https://hello.com',
  foo: 'beep'
})
// => false

match('https://www.world.com?redirect_uri=https://hello.com&foo=beep', {
  redirect_uri: 'https://hello.com',
  foo: 'beep'
})
// => true
```


## Installation

```shell
npm install uri-params-match --save
```

[![NPM](https://nodei.co/npm/uri-params-match.png)](https://nodei.co/npm/uri-params-match/)


## Question

For questions and feedback please use our [twitter account](https://twitter.com/bredeleca). For support, bug reports and or feature requests please make sure to read our
<a href="https://github.com/bredele/contributing-guide/blob/master/guidelines.md" target="_blank">community guideline</a> and use the issue list of this repo and make sure it's not present yet in our reporting checklist.

## Contribution

uri-params-match is an open source project and would not exist without its community. If you want to participate please make sure to read our <a href="https://github.com/bredele/contributing-guide/blob/master/guidelines.md" target="_blank">guideline</a> before making a pull request. If you have any uri-params-match related project, component or other let everyone know in our wiki.

## License

The MIT License (MIT)

Copyright (c) 2016 Olivier Wietrich

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
