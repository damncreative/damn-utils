'use strict';

const Singleton = require('./singleton');

let singletonEnforcer = Symbol();

class SingletonEnforcer extends Singleton {
    /**
     * @param enforcer
     */
    constructor(enforcer) {
        if (enforcer !== singletonEnforcer) {
            throw "Cannot construct singleton"
        }
    }

    /**
     * @returns Singleton
     */
    static get instance() {
        if (!this[singleton]) {
            this[singleton] = new this(singletonEnforcer);
        }
        return this[singleton];
    }
}

module.exports = SingletonEnforcer;