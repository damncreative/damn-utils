'use strict';

const _ = require('lodash');

const expose = require('./expose');

module.exports = function(objects, format) {
    if (format == null) {
        format = '%s';
    }
    var results = [];

    _.forEach(objects, (object, key) => {
        if (_.isFunction(format)) {
            results.push(expose(object, format(key)));
        } else {
            results.push(expose(object, sprintf(format, key)));
        }
    });

    return results;
};