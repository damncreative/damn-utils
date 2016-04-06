'use strict';

const fs = require('fs');
const path = require('path');
const glob = require('glob');
const util = require('util');
const _ = require('lodash');

const debug = global.utils.debug.childLogger('file:find');

const object = require('./object');

const find = exports = module.exports = function (target, config) {
    // setup default config
    const defaultConfig = {
        patterns: ['*'],
        recursive: false,
        asArray: false,
        onFound: x => x,
        matcher: exports.Matcher.withoutDirectories,
        depth: -1,
        globConfig: {},
        ignore: [
            '.*'
        ]
    };

    config = _.merge({}, defaultConfig, config);

    var foundFiles = config.asArray ? [] : {};

    if (fs.existsSync(target) === false) {
        debug(`find failed. ${target} not exists`);
        return foundFiles;
    }

    const add = (object, result) => {
        if (result == null) {
            result = object;
        }

        debug('trigger onFound action for: %s', object.name);

        if (config.asArray) {
            foundFiles.push(config.onFound(object));
        } else {
            foundFiles[object.path] = config.onFound(result);
        }
    };

    if (config.recursive) {
        config.patterns.push('**');
    }

    let pattern = config.patterns && config.patterns.length < 1 ? '*' : config.patterns[0];
    if(config.patterns.length > 1) {
        pattern = util.format('{%s}', config.patterns.join(','));
    }
    const files = glob.sync(pattern, _.merge({
        cwd: target,
        dot: true,
        mark: true
    }, config.globConfig));

    files.forEach(file => {
        const fileObj = object(path.resolve(target, file));
        // Setup match results for matcher
        var matchResult = false;
        if (_.isFunction(config.matcher)) {
            matchResult = config.matcher(fileObj, config);
        }
        else {
            matchResult = config.matcher;
        }
        // if matchResult is true, save fileObj.path
        if (matchResult) {
            debug("Found File: " + fileObj.path);
            add(fileObj);
        }
    });

    return foundFiles;
};

exports.Matcher = {
    onlyDirectories: function (fileObj) {
        return fileObj.stats.isDirectory();
    },
    withoutDirectories: function (fileObj) {
        return !fileObj.stats.isDirectory();
    }
};