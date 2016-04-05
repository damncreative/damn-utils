'use strict';

const path = require('path');
const fs = require('fs');

module.exports = function (filePath) {
    if(fs.existsSync(filePath) === false) {
        return null;
    }

    const file = path.basename(filePath);

    const fileObj = {};
    fileObj.name = file;
    fileObj.path = filePath;
    fileObj.dirname = path.dirname(filePath);
    fileObj.stats = fs.lstatSync(filePath);
    fileObj.extname = path.extname(file);
    fileObj.basename = path.basename(file, fileObj.extname);

    return fileObj;
};