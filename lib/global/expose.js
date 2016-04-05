'use strict';

const _ = require('lodash');
const sprintf = require('sprintf-js').sprintf;

const debug = global.utils.debug.childLogger('global:expose');

module.exports = function(item, key, force) {
    if(force == null) {
        force = false;
    }

    if (global[key] && !force) {
        debug("Could not expose " + key + ". Key is already in use.");
        return false;
    }

    debug("Expose " + key);
    return global[key] = item;
};