# unitor



[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]

## Installation

```sh
npm install unitor --save
```

## Usage

```js
var unitor = require('unitor');

var unit = unitor(1, 'kg');
unit.convert('mg'); // Convert to milligrams
unit.convert('milligram'); // The exact same thing
console.log(unit.toString()); // Prints "1000000 mg"
```

## Future improvements

    - More units conversions
    - More functionalities
    - Internationalization (with i18n)

If you have more ideas, please [email me](mailto:jb.louazel@gmail.com).

## Credits
[Jean-Baptiste Louazel](https://github.com/jlouazel/)

[npm-image]: https://img.shields.io/badge/unitor-v0.1.2-blue.svg
[npm-url]: https://npmjs.org/package/unitor

[travis-image]: https://secure.travis-ci.org/jlouazel/unitor.png
[travis-url]: http://travis-ci.org/jlouazel/unitor

[coveralls-image]: https://img.shields.io/coveralls/jlouazel/unitor.svg
[coveralls-url]: https://coveralls.io/r/jlouazel/unitor
