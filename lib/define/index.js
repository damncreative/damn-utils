'use strict';

const _ = require('lodash');

module.exports = function(object, type, force) {
    if(_.isUndefined(object) || _.isNull(object) || force) {
        object = type;
        return object;
    }

    return object;
};