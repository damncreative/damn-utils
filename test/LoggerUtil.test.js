var should = require('should');
var LoggerUtil = require('../index').LoggerUtil;
describe('LoggerUtil Test', function () {
  var logger = new LoggerUtil('Logger');
  it('should not be enabled', function (done) {
    should.exist(logger);
    logger.main.enabled.should.be.false
    done();
  });
});