module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.initConfig({

        jshint: {
            all: ['Gruntfile.js', 'dist/**/*.js', 'test/**/*.js', 'src/**/*.js'],
            options: {
                esversion: 6,
                globals: {
                }
            }

        }
    });
};