'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.sculpin = {
    setUp: function (done) {
        // setup here if necessary
        done();
    },

    generate: function (test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/generate').trim();
        test.equal(actual, 'generate', 'should run generate command.');

        test.done();
    },
    generate_in_dev: function (test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/generate_env_dev').trim();
        test.equal(actual, 'generate --env=dev', 'should run generate command in dev.');

        test.done();
    },
    watch: function (test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/generate_watch').trim();
        test.equal(actual, 'generate --watch', 'should run generate command with --watch option.');

        test.done();
    },
    serve: function (test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/server').trim();
        test.equal(actual, 'server', 'should run serfver command.');

        test.done();
    },

};
