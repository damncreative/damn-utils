'use strict';

let singleton = Symbol();

class Singleton {
    /**
     * @returns Singleton
     */
    static get instance() {
        if (!this[singleton]) {
            this[singleton] = new this();
        }
        return this[singleton];
    }

    static getInstance() {
        return this.instance;
    }
}

module.exports = Singleton;