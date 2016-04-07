'use strict';

describe('async:bootstrapCollectionAction', function () {
    it('should return an Array of Functions', function () {
        const arrayOfActions = [];
        for(let i = 0; i < 10; i++) {
            arrayOfActions.push(function(args, next) {});
        }

        const bootstrappedActions = this.lib.async.bootstrapCollectionAction(arrayOfActions, {
            test: 'test'
        });

        bootstrappedActions.should.be.an.Array();
        bootstrappedActions.forEach( action => {
            action.should.be.an.Function();
        });
    });
});