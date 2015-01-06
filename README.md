# unitor



[![build status](https://secure.travis-ci.org/jlouazel/unitor.png)](http://travis-ci.org/jlouazel/unitor)

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
