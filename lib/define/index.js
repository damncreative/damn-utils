'use strict';

const _ = require('lodash');

module.exports = function(object, type, force) {
    console.log(_.isUndefined(object) || _.isNull(object) || force);
    if(_.isUndefined(object) || _.isNull(object) || force) {
        object = type;
        return object;
    }

    return object;
};