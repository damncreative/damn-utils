'use strict';

const fs = require('fs');
const path = require('path');
const glob = require('glob');
const _ = require('lodash');

const debug = global.utils.debug.childLogger('file:find');

const object = require('./object');

const find = exports = module.exports = function(target, config, currentDepth) {

    console.log(target);
    const f = glob.sync('*/', {
        cwd: target,
        ignore: config.exclude,
        realpath: true
    });
    console.log(f);
    return;



    // setup default config
    const defaultConfig = {
        recursive: false,
        asArray: false,
        onFound: x => x,
        matcher: exports.Matcher.withoutDirectories,
        depth: -1,
        exclude: [
            '.*'
        ]
    };

    config = _.merge({}, defaultConfig, config);
    currentDepth = currentDepth || 0;

    var foundFiles = config.asArray ? [] : {};

    if(fs.existsSync(target) === false) {
        debug(`find failed. ${target} not exists`);
        return foundFiles;
    }

    const add = (object, result) => {
        if(result == null) {
            result = object;
        }

        if(config.asArray) {
            foundFiles.push(config.onFound(object));
        } else {
            foundFiles[object.path] = config.onFound(result);
        }
    };

    fs.readdirSync(target).forEach(file => {
        const fileObj = object(path.resolve(target, file));

        // if it is a directory and config recursive is true, make
        // deep search (but check currentDepth to config.depth)
        if (fileObj.stats.isDirectory() && config.recursive) {
            // if we would call this in same line with "isDirectory"
            // directories would also add to foundFiles
            if (config.depth === -1 || config.depth > currentDepth) {
                add(fileObj, find(fileObj.path, config, currentDepth + 1));
            }
        }
        else {
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
                console.log(f);
                debug("Found File: "+fileObj.path);
                add(fileObj);
            }
        }
    });
};

exports.Matcher = {
    onlyDirectories: function(fileObj) {
        return fileObj.stats.isDirectory();
    },
    withoutDirectories: function(fileObj) {
        return !fileObj.stats.isDirectory();
    }
};