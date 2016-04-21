'use strict';

describe('classes:singleton', function () {
    let subClass = null;
    before(function() {
        subClass = class SubSingleton extends this.lib.classes.Singleton {
        };
    });

    it('should return an instance of a singleton class', function () {
        const sub1 = subClass.instance;
        const sub2 = subClass.instance;
        const sub3 = new subClass();

        sub1.should.be.equal(sub2);
        sub1.should.not.be.equal(sub3);
        sub2.should.not.be.equal(sub3);
    });
});