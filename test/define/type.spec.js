'use strict';

const _ = require('lodash');
const types = require('../../lib/define/types');

describe('define:types', function () {
    _.forEach(types, (type, key) => {
        it(`define util should have property type ${key}`, function () {
            this.lib.define.types.should.have.property(key);
        });

        it(`should define variable with type ${key}`, function () {
            let variable = null;
            variable = this.lib.define(variable, type);
            variable.should.be.eql(type);
        });
    });
});