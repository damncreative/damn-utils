'use strict';

const util = require('util');

describe('async:bootstrapAction', function () {
    it('should return a function', function () {
        const bootstrappedAction = this.lib.async.bootstrapAction(function(args, next) {}, {
            test: "test"
        });

        bootstrappedAction.should.be.a.Function();
    });
});
