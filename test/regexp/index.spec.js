'use strict';

describe('regexp:index', function () {
    it('should test value with regexp', function () {
        this.lib.regexp('1', /\d/).should.be.true();
        this.lib.regexp('a', /\d/).should.be.false();
    });
});