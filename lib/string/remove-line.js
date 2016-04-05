'use strict';

module.exports = function (text, line) {
    if(line == null) {
        line = 0;
    }
    const splitted = text.split('\n');
    splitted.splice(line, 1);
    return splitted.join('\n');
};