'use strict';

const _ = require('lodash');
const async = require('async');

const bootstrapAction = require('./bootstrap-action');

module.exports = function (collection, args, actionKey) { // collection, action, args

    const bootstrappedActions = [];

    if(_.isArray(collection)) {
        collection.forEach(item => {
            if(_.isFunction(item)) {
                bootstrappedActions.push(bootstrapAction(item, args));
            } else {
                bootstrappedActions.push(bootstrapAction(item[actionKey], args));
            }
        });
    } else {
        _.forEach(collection, item => {
            bootstrappedActions.push(bootstrapAction(item[actionKey], args));
        });
    }

    return bootstrappedActions;
};