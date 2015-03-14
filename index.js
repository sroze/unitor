'use strict';

var specifications = [ require('./specifications/volume.json')
  , require('./specifications/mass.json')
  , require('./specifications/energy.json') ]
  , specificationsHashMap = initSpecificationsHashMap();

function initSpecificationsHashMap() {
  var hashMap = {
    fromSymbol: {},
    fromName: {}
  };

  specifications.forEach(function (specification, specificationId) {
    specification.values.forEach(function (value, valueId) {
      hashMap.fromName[value.name] = hashMap.fromSymbol[value.symbol] = {
        specificationId: specificationId,
        valueId: valueId
      };
    });
  });

  return hashMap;
}


function Unitor(value, unit) {
  this.value = value;

  var unitIds = specificationsHashMap.fromSymbol[unit];

  if (!unit) {
    throw new Error('The unit ' + unit + ' does not exists.');
  }

  this.system = specifications[unitIds.specificationId]
  this.name = this.system.name;
  this.unit = this.system.values[unitIds.valueId];
}

Unitor.prototype.convert = function (symbol) {
  var coef = this.unit.coef,
      unit = specificationsHashMap.fromSymbol[symbol] || specificationsHashMap.fromName[symbol];

  if (!unit) {
    throw new Error('Cannot convert ' + this.name + ' units to ' + symbol + ' units.');
  }
  this.unit = this.system.values[unit.valueId];
  this.symbol = this.unit.symbol;
  this.value /= coef / this.unit.coef;
};

Unitor.prototype.toString = function () {
  return this.value + ' ' + this.unit.symbol;
};

var unitor = function (value, unit) {
  return new Unitor(value, unit);
};

module.exports = unitor;

