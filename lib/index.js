'use strict';

const path = require('path');
const glob = require('glob');
const _ = require('lodash');

const utils = global.utils = {};
utils.debug = require('./debug')('damn:utils');

const modules = glob.sync('*/', {
    cwd: __dirname,
    realpath: true
});

modules.forEach(m => {
    exports[path.basename(m)] = {};
    const files = glob.sync('*.js', {
        cwd: m,
        realpath: true
    });
    files.forEach( f => exports[path.basename(m)][_.camelCase(path.basename(f, '.js'))] = require(f));
});