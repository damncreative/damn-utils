'use strict';

describe('define:index', function () {
    it('should define a variable if not defined', function () {
        let object = null;
        object = this.lib.define(object, 1);
        object.should.be.eql(1);
    });

    it('should not define a variable if already defined', function () {
        let object = 2;
        object = this.lib.define(object, 1);
        object.should.be.eql(2);
    });

    it('should force define a variable also it is already defined', function () {
        let object = 2;
        object = this.lib.define(object, 1, true);
        object.should.be.eql(1);
    });
});