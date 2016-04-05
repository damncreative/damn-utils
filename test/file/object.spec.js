'use strict';

const path = require('path');

describe('file:object', function () {
    it('should return a file object for given file path', function () {
        const filePath = path.resolve(__dirname, 'fixtures', 'foobar.js');

        const fooBarJs = this.lib.file.object(filePath);
        fooBarJs.name.should.be.eql('foobar.js');
        fooBarJs.path.should.be.eql(filePath);
        fooBarJs.dirname.should.be.eql(path.dirname(filePath));
        fooBarJs.extname.should.be.eql('.js');
        fooBarJs.basename.should.be.eql('foobar');
        fooBarJs.should.have.property('stats');
    });

    it('should return null for not existing file for given file path', function () {
        (this.lib.file.object('/not/existing/file/at/path') === null).should.be.true();
    });
});