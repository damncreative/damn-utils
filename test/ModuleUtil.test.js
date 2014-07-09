var should = require('should');
var path = require('path');

describe('ModuleUtil Test', function () {
  it('should load all utils in lib folder', function (done) {
    var ModuleUtil = require('../lib/ModuleUtil');
    var utils = ModuleUtil.requireFolder(path.join(__dirname, '../lib'));
    
    should.exist(utils);
    should.exist(utils.ModuleUtil);
    should.exist(utils.ConsoleUtil);
    should.exist(utils.StringUtil);
    should.exist(utils.LoggerUtil);
    should.exist(utils.DateUtil);
    should.exist(utils.NumberUtil);
    done();
  });
});