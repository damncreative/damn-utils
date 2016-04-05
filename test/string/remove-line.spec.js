'use strict';

describe('string:removeLine', function () {
    String.prototype.spaceToReturn = function () {
        return this.split(' ').join('\n');
    };

    const dummy = 'Hello World This is a test'.spaceToReturn();

    const tests = [
        {line: 0, expect: 'World This is a test'.spaceToReturn()},
        {line: 1, expect: 'Hello This is a test'.spaceToReturn()},
        {line: 2, expect: 'Hello World is a test'.spaceToReturn()},
        {line: 3, expect: 'Hello World This a test'.spaceToReturn()},
        {line: 4, expect: 'Hello World This is test'.spaceToReturn()},
        {line: 5, expect: 'Hello World This is a'.spaceToReturn()},
        {line: 6, expect: 'Hello World This is a test'.spaceToReturn()}
    ];
    tests.forEach(function (test) {
        it(`should remove line ${test.line+1} of possible 6 Lines`, function () {
            this.lib.string.removeLine(dummy, test.line).should.be.eql(test.expect);
        });
    });
});