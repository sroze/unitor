# unitor



[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]

## Installation

```sh
npm install unitor --save
```

## Usage

```sh
var unitor = require('./index');

var unit = unitor(1, 'kg');
unit.convert('mg'); // Convert to milligrams
unit.convert('milligram'); // The exact same thing
console.log(unit.toString()); // Prints "1000000 mg"
```

## Credits
[Jean-Baptiste Louazel](https://github.com/jlouazel/)

[npm-image]: https://img.shields.io/badge/unitor-v0.1.0-blue.svg
[npm-url]: https://npmjs.org/package/unitor

[travis-image]: https://secure.travis-ci.org/jlouazel/unitor.png
[travis-url]: http://travis-ci.org/jlouazel/unitor

[coveralls-image]: https://img.shields.io/coveralls/jlouazel/unitor.svg
[coveralls-url]: https://coveralls.io/r/jlouazel/unitor
