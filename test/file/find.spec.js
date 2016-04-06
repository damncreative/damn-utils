'use strict';

const path = require('path');

describe('file:find', function() {
    const fixturesPath = path.resolve(__dirname, 'fixtures');

    const fixtureFiles = [
        path.resolve(fixturesPath, '.foo'),
        path.resolve(fixturesPath, '.bar'),
        path.resolve(fixturesPath, 'foobar.js'),
        path.resolve(fixturesPath, 'foobar.json'),

        path.resolve(fixturesPath, 'sub', '.foo'),
        path.resolve(fixturesPath, 'sub', '.foo'),

        path.resolve(fixturesPath, 'sub', 'sub', '.bar'),
        path.resolve(fixturesPath, 'sub', 'sub', '.bar')
    ];

    it('should return an object with files in fixtures folder', function () {
        const files = this.lib.file.find(fixturesPath, {
            recursive: true
        });

        fixtureFiles.forEach(file => {
           files.should.have.property(file);
        });
    });
});