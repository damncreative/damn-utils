var should = require('should');
var StringUtil = require('../index').StringUtil;
describe('StringUtil Test', function () {
  describe('str_pad test', function () {
    it('should pad these strings', function () {
      StringUtil.str_pad("1", 10, "0", StringUtil.STR_PAD_LEFT).should.exactly('0000000001');
      StringUtil.str_pad("5", 5, "A", StringUtil.STR_PAD_LEFT).should.exactly('AAAA5');
      StringUtil.str_pad("Hallo", 8, ".", StringUtil.STR_PAD_RIGHT).should.exactly('Hallo...');
    });

    it('should fail to pad these strings', function () {
      StringUtil.str_pad("111", 10, "0", StringUtil.STR_PAD_LEFT).should.not.equal('0000000001');
      StringUtil.str_pad("55", 5, "A", StringUtil.STR_PAD_LEFT).should.not.equal('AAAA5');
      StringUtil.str_pad("Hallo", 8, ",", StringUtil.STR_PAD_RIGHT).should.not.equal('Hallo...');
    });
  });
});