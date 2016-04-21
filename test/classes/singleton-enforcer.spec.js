'use strict';

describe.only('classes:singleton-enforcer', function () {
    let subClass = null;
    before(function() {
        subClass = class SubSingletonEnforcer extends this.lib.classes.SingletonEnforcer {
        };
    });

    it('should throw an error if try to get instance with new', function () {
        (() =>new subClass()).should.throw();
    });
});