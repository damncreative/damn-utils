'use strict';

const _ = require('lodash');

function customizer(objValue, srcValue) {
    return _.isUndefined(objValue) ? srcValue : objValue;
}

module.exports = _.partialRight(_.assignWith, customizer);