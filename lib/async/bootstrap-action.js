'use strict';

const _ = require('lodash');

module.exports = function(action, args) {
    const bootstrappedMethod = function(action, args) {
        return function(next) {
            action.call(null, args, next);
        }
    };

    return bootstrappedMethod(action, args);
};