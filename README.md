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

## The "sculpin-generate" task

The `sculpin-generate` task executes Sculpin's `generate` command.

### Overview
In your project's Gruntfile, add a section named `sculpin-generate` to the data object passed into `grunt.initConfig()`.

```js
'sculpin-generate': {
    options: {
        // Task-specific options go here.
    },
    your_target: {
        args: {
            // Arguments
        }
    }
}
```

### Options

#### options.bin
Type: `String`
Default value: `sculpin`

Path to console application that you want to use.

### Usage Examples

#### Default Options
`grunt-sculpin` uses by default `sculpin` as binary to execute commands.

```js
'sculpin-generate': {
    options: {},
    build: {}
}
```

#### Custom Options
If you want to use a custom binary, you can change the `bin` option.

```js
'sculpin-generate': {
    options: {
        bin: 'php bin/sculpin'
    },
    build: {
        args: {
            env: 'prod'
        }
    }
}
```

## The "sculpin-watch" task

The `sculpin-watch` task executes Sculpin's `generate --watch` command.

### Overview
In your project's Gruntfile, add a section named `sculpin-watch` to the data object passed into `grunt.initConfig()`.

```js
'sculpin-watch': {
    options: {
        // Task-specific options go here.
    },
    your_target: {
        args: {
            // Arguments
        }
    }
}
```

### Options

Supports the same options as `sulpin-generate`

### Usage Examples

#### Default Options
`grunt-sculpin` uses by default `sculpin` as binary to execute commands.

```js
'sculpin-watch': {
    options: {},
    build: {}
}
```

## The "sculpin-serve" task

The `sculpin-serve` task executes Sculpin's `server` command.

### Overview
In your project's Gruntfile, add a section named `sculpin-serve` to the data object passed into `grunt.initConfig()`.

```js
'sculpin-serve': {
    options: {
        // Task-specific options go here.
    },
    your_target: {
        args: {
            // Arguments
        }
    }
}
```

### Options

Supports the same options as `sulpin-generate`

### Usage Examples

#### Default Options
`grunt-sculpin` uses by default `sculpin` as binary to execute commands.

```js
'sculpin-serve': {
    options: {},
    build: {}
}
```


## Author
- [Florian Eckerstorfer](http://florian.ec) ([Twitter](http://twitter.com/Florian_), [App.net](http://app.net/florian))

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

### Version 0.1 (24 March 2014)

- Initial release
