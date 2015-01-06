var unitor = require('./index')
  , unit = unitor(1, 'kg');

unit.convert('mg'); // Convert to milligrams
unit.convert('milligram'); // The exact same thing
console.log(unit.toString()); // Prints
