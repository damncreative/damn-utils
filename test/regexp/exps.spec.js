'use strict';

const exps = require('../../lib/regexp/exps');

describe('regexp:exps', function () {

    const tests = [
        {
            name: "username",
            exp: exps.username,
            expectations:[
                {value: "username", expect: true},
                {value: "Username", expect: true},
                {value: "Us3rn4m3", expect: true},
                {value: "123Us3rn4me", expect: true},
                {value: "Us3rn4me123", expect: true},
                {value: "user-name", expect: true},
                {value: "user.name", expect: true},
                {value: "user_name", expect: true},
                {value: "_username", expect: false},
                {value: "username_", expect: false},
                {value: "-username", expect: false},
                {value: "username-", expect: false},
                {value: ".username", expect: false},
                {value: "username.", expect: false},
                {value: "u$ername", expect: false}
            ]
        },

        {
            name: "email",
            exp: exps.email,
            expectations:[
                {value: "asd@asd.de", expect: true},
                {value: "asd@asd.com", expect: true},
                {value: "asd@asd", expect: false},
                {value: "@asd.de", expect: false},
                {value: "a@a.de", expect: true},
                {value: "a@a.d", expect: false},
                {value: ".de", expect: false},
                {value: "a", expect: false},
                {value: "@a", expect: false},
                {value: "a@", expect: false},
                {value: "a@a,de", expect: false},
                {value: "a@.de", expect: false}
            ]
        },

        {
            name: "hex",
            exp: exps.hex,
            expectations:[
                {value: "#1", expect: false},
                {value: "#12", expect: false},
                {value: "#123", expect: true},
                {value: "#1234", expect: false},
                {value: "#12345", expect: false},
                {value: "#123456", expect: true},
                {value: "1", expect: false},
                {value: "12", expect: false},
                {value: "123", expect: true},
                {value: "1234", expect: false},
                {value: "12345", expect: false},
                {value: "123456", expect: true},
                {value: "#", expect: false}
            ]
        },

        {
            name: "ip",
            exp: exps.ip,
            expectations:[
                {value: "1", expect: false},
                {value: "12", expect: false},
                {value: "123", expect: false},
                {value: "123.1", expect: false},
                {value: "123.12", expect: false},
                {value: "123.123", expect: false},
                {value: "123.123.1", expect: false},
                {value: "123.123.12", expect: false},
                {value: "123.123.123", expect: false},
                {value: "123.123.123.1", expect: true},
                {value: "123.123.123.12", expect: true},
                {value: "123.123.123.123", expect: true},

                {value: "123.123.123.1", expect: true},
                {value: "123.123.1.123", expect: true},
                {value: "123.1.123.123", expect: true},
                {value: "1.123.123.123", expect: true},

                {value: "123.123.123.12", expect: true},
                {value: "123.123.12.123", expect: true},
                {value: "123.12.123.123", expect: true},
                {value: "12.123.123.123", expect: true},

                {value: "123,123.123.123", expect: false},
                {value: "123.123,123.123", expect: false},
                {value: "123.123.123,123", expect: false},

                {value: "256.123.123.123", expect: false},
                {value: "123.256.123.123", expect: false},
                {value: "123.123.256.123", expect: false},
                {value: "123.123.123.256", expect: false},

                {value: "a23.123.123.123", expect: false},
                {value: "123.a23.123.123", expect: false},
                {value: "123.123.a23.123", expect: false},
                {value: "123.123.123.a23", expect: false},

                {value: "1233.123.123.123", expect: false},
                {value: "123.1233.123.123", expect: false},
                {value: "123.123.1233.123", expect: false},
                {value: "123.123.123.1233", expect: false},

                {value: "-1.123.123.1233", expect: false},
                {value: "123.-1.123.1233", expect: false},
                {value: "123.123.-1.1233", expect: false},
                {value: "123.123.1233.-1", expect: false}
            ]
        }
    ];

    tests.forEach(function(test) {
        context(test.name, function() {
            test.expectations.forEach(function(expectation) {
                it("should test "+expectation.value+" and expect "+expectation.expect, function() {
                    test.exp.test(expectation.value).should.be.eql(expectation.expect);
                });
            });
        });
    });
});