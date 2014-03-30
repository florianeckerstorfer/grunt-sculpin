/*
* grunt-sculpin
* https://github.com/florianeckerstorfer/grunt-sculpin
*
* Copyright (c) 2014 Florian Eckerstorfer
* Licensed under the MIT license.
*/

'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js',
                '<%= nodeunit.tests %>',
            ],
            options: {
                jshintrc: '.jshintrc',
            },
        },

        // Before generating any new files, remove any previously-created files.
        clean: {
            tests: ['tmp'],
        },

        // Configuration to be run (and then tested).
        'sculpin-generate': {
            generate: {},
            generate_dev: { args: { env: 'dev' } },
            options: {
                bin: 'php test/fixtures/sculpin',
            }
        },
        'sculpin-watch': {
            watch: {},
            options: {
                bin: 'php test/fixtures/sculpin',
            }
        },
        'sculpin-serve': {
            serve: {},
            options: {
                bin: 'php test/fixtures/sculpin',
            }
        },

        // Unit tests.
        nodeunit: {
            tests: ['test/*_test.js'],
        },

        // Linting.
        jslint: { // configure the task
            tasks: {
                src: [
                    'tasks/*.js'
                ],
                exclude: [],
                directives: {
                    node: true
                },
                options: {
                    errorsOnly: true, // only display errors
                    failOnError: false, // defaults to true
                }
            }
        }

    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadNpmTasks('grunt-jslint');

    grunt.registerTask(
        'sculpin',
        [
            'sculpin-generate',
            'sculpin-watch',
            'sculpin-serve',
        ]
    );

    // Whenever the "test" task is run, first clean the "tmp" dir, then run this
    // plugin's task(s), then test the result.
    grunt.registerTask('test', ['clean', 'sculpin', 'nodeunit', 'jslint']);

    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint', 'test']);
};
