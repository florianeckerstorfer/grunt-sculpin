# grunt-sculpin

> Grunt plugin for running [Sculpin](https://sculpin.io).

[![Build Status](https://travis-ci.org/florianeckerstorfer/grunt-sculpin.svg?branch=master)](https://travis-ci.org/florianeckerstorfer/grunt-sculpin)

## Getting Started
This plugin requires Grunt `~0.4.4`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-sculpin --save-dev
```

Once you installed the plugin you can enable it inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-sculpin');
```

## The "sf2-console" task

The `sf2-console` task let's you execute arbitrary commands of your Symfony2 application.

### Overview
In your project's Gruntfile, add a section named `sf2-console` to the data object passed into `grunt.initConfig()`.

```js
'sf2-console': {
    options: {
        // Task-specific options go here.
    },
    your_target: {
        cmd: 'command:name',
        args: {
            // Arguments
        }
    }
}
```

### Options

#### options.bin
Type: `String`
Default value: `app/console`

Path to console application that you want to use.

### Usage Examples

#### Default Options
`grunt-symfony2` uses by default `app/console` as binary to execute commands.

```js
'sf2-console': {
    options: {},
    cache_clear_prod: {
        cmd: 'cache:clear',
        args: {
            env: 'prod'
        }
    }
}
```

#### Custom Options
If you want to use a custom binary, you can change the `bin` option.

```js
'sf2-console': {
    options: {
        bin: 'app/sf2console'
    },
    cache_clear_prod: {
        cmd: 'cache:clear',
        args: {
            env: 'prod'
        }
    }
}
```


## Author
- [Florian Eckerstorfer](http://florian.ec) ([Twitter](http://twitter.com/Florian_), [App.net](http://app.net/florian))

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

### Version 0.1 (24 March 2014)

- Initial release
