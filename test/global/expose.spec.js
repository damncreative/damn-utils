'use strict';

describe('global:expose', function () {
    it('should expose to global context', function() {
        var object = {
            info: "test"
        };

        this.lib.global.expose(object, "TestInfoObject");
        global.should.have.property("TestInfoObject");
        global.TestInfoObject.should.be.eql(object);
    });

    it('should not expose to global context if key already exists', function() {
        var object = {
            info: "test"
        };

        var anotherObject = {
            info: "test2"
        };

        this.lib.global.expose(object, "TestInfoObject");
        this.lib.global.expose(anotherObject, "TestInfoObject");

        global.TestInfoObject.should.not.be.eql(anotherObject);
    });

    it('should force expose object to gobal context', function() {
        var object = {
            info: "test"
        };

        var anotherObject = {
            info: "test2"
        };

        this.lib.global.expose(object, "TestInfoObject");
        this.lib.global.expose(anotherObject, "TestInfoObject", true);

        global.TestInfoObject.should.be.eql(anotherObject);
    });
});