'use strict';

const debug = require('debug');

module.exports = function(mainLoggerName) {
    var log = debug(mainLoggerName);
    log.childLogger = function(subLoggerName) {
        return module.exports(mainLoggerName+":"+subLoggerName);
    };
    return log;
};
