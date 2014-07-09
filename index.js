var path = require('path');
require('coffee-script/register');

exports = module.exports;
var ModuleUtil = require('./lib/ModuleUtil');
var utils = ModuleUtil.requireFolder(path.join(__dirname, './lib'));

for(util in utils) {
  exports[util] = utils[util];
}