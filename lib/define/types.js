'use strict';

exports.object = {};
exports.array = [];
exports.string = '';
exports.truthy = true;
exports.falsy = false;

exports.simpleCallback = x => x;

exports.koaRunCallback = function(app, next) {
    return function(error) {
        if(error) {
            return next && next(error);
        }

        const config = app.context.config;
        const logString = `Application running on ${config.ip||'localhost'}:${config.port}`;

        if(app.log) {
            app.log.info(logString);
        } else {
            console.log(logString);
        }

        return next && next();
    }
};