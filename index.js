'use strict';

var _ = require('lodash');
var specifications = [require('./specifications/volume.json'), require('./specifications/mass.json'), require('./specifications/energy.json')];

function Unitor(value, unit) {
  this.value = value;
  if (typeof unit === 'object') {
    this.unit = unit;
  } else {
    for (var i = 0; i < specifications.length; i++) {
      var foundUnit = _.findKey(specifications[i].values, {'symbol': unit}) || _.findKey(specifications[i].values, {'name': unit});
      if (foundUnit) {
        this.system = specifications[i];
        this.name = this.system.name;
        this.unit = specifications[i].values[foundUnit];
        break;
      }
    }
  }
  if (!this.system) {
    throw new Error('The unit ' + unit + ' does not exists.');
  }
}

Unitor.prototype.convert = function (symbol) {
  var coef = this.unit.coef;
  for (var i = 0; i < specifications.length; i++) {
    var unit = _.findKey(specifications[i].values, {'symbol': symbol});
    if (unit) {
      if (specifications[i].name !== this.name) {
        throw new Error('Cannot convert ' + this.name + ' units in ' + specifications[i].name + ' units.');
      } else {
        this.unit = specifications[i].values[unit];
        this.symbol = unit.symbol;
        this.value /= coef / this.unit.coef;
      }
      break;
    }
  }
};

Unitor.prototype.toString = function () {
  return this.value + ' ' + this.unit.symbol;
};

var unitor = function (value, unit) {
  return new Unitor(value, unit);
};

module.exports = unitor;