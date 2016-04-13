'use strict';

const utils = global.damnUtils = {};
damnUtils.debug = require('./debug')('damn:damnUtils');

exports.async = {};
exports.async.bootstrapAction = require('./async/bootstrap-action');
exports.async.bootstrapCollectionAction = require('./async/bootstrap-collection-action');

exports.debug = require('./debug');

exports.define = require('./define');
exports.define.types = require('./define/types');

exports.file = {};
exports.file.find = require('./file/find');
exports.file.object = require('./file/object');

exports.global = {};
exports.global.expose = require('./global/expose');
exports.global.exposeMany = require('./global/expose-many');

exports.lodash = {};
exports.lodash.defaultAssign = require('./lodash/default-assign');

exports.module = {};
exports.module.scan = require('./module/scan');

exports.regexp = require('./regexp');
exports.regexp.exps = require('./regexp/exps');

exports.string = {};
exports.string.removeLine = require('./string/remove-line');
