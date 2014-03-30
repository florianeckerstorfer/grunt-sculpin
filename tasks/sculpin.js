/*
 * grunt-sculpin
 * https://github.com/florianeckerstorfer/grunt-sculpin
 *
 * Copyright (c) 2014 Florian Eckerstorfer
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

    var exec = require('child_process').exec,
        execCmd = function (cmd, cb, execOpts) {
            grunt.verbose.writeln('Exec: ' + cmd);
            exec(cmd, execOpts, function (err, stdout, stderr) {
                grunt.verbose.writeln(stdout);
                if (stderr) {
                    grunt.fatal(stderr);
                }
                if (err && 127 === err.code) {
                    grunt.warn('Could not execute app/console.');
                }
                cb();
            });
        },
        prepareCmd = function (cmd, args, options, done) {
            var bin = options.bin || 'sculpin',
                execOpts = {},
                arg;

            if (options.cwd) {
                execOpts.cwd = options.cwd;
            }

            for (arg in args) {
                if (args.hasOwnProperty(arg)) {
                    cmd += ' --' + arg;
                    if (args[arg] && true !== args[arg]) {
                        cmd += '=' + args[arg];
                    }
                }
            }
            execCmd(bin + ' ' + cmd, done, execOpts);
        };

    grunt.registerMultiTask('sculpin-generate', 'Grunt task for generating a Sculpin site.', function () {
        var options = this.options(),
            args = this.data.args || {};

        prepareCmd('generate', args, options, this.async());
    });

    grunt.registerMultiTask(
        'sculpin-watch',
        'Grunt task for continuously generating a Sculpin site.',
        function () {
            var options = this.options(),
                args = this.data.args || {};

            prepareCmd('generate --watch', args, options, this.async());
        }
    );

    grunt.registerMultiTask(
        'sculpin-serve',
        'Grunt task for continuously generating and serving a Sculpin site.',
        function () {
            var options = this.options(),
                args = this.data.args || {};

            prepareCmd('server', args, options, this.async());
        }
    );
};
