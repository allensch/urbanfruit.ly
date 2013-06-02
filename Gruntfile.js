module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        coffee: {
            glob_to_multiple: {
                expand: true,
                cwd: 'coffee',
                src: ['*.coffee', '*/*.coffee'],
                dest: 'js/',
                ext: '.js'
            }
        },

        ember_handlebars: {
            compile: {
                options: {
                    namespace: "App.Templates",
                    processName: function(filePath) {
                        var pieces = filePath.split('/');
                        var filename = pieces[pieces.length - 1];
                        return filename.substr(0, filename.indexOf('.'));
                    }
                },
                files: {
                    "js/templates/build.js": "templates/*.hbs"
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-ember-handlebars');
    grunt.registerTask('default', ['ember_handlebars']);
};