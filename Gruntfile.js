'use strict';

module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		name: 'gesture',
		srcPath: 'src',
		assetsPath: 'assets',
		distPath: 'build',

		clean: ['<%= distPath%>/*'],

		copy: {
			main: {
				files: [{
					expand: true,
					cwd: './',
					src: ['package.json'],
					dest: '<%= distPath %>'
				}]
			}
		},

		depconcat: {
			options: {
				separator: '\n'
			},
		
			main: {
				src: ['<%= srcPath %>/<%= name %>.js'],
				dest: '<%= distPath %>/<%= name %>.debug.js'
			}
		},

		uglify: {
			main: {
				files: [{
					expand: true,
					cwd: '<%= distPath %>',
					src: ['*.debug.js'],
					dest: '<%= distPath %>',
					ext: '.js'
				}]
			}
		},

		watch: {
			js: {
				files: ['<%= srcPath %>/*.js', '<%= srcPath %>/**/*.js'],
				tasks: ['depconcat', 'uglify']
			}
		},

        cmdwrap: {
            js: {
                files: [{
                    expand: true,
                    cwd: '<%= distPath %>',
                    src: ['gesture.js'],
                    dest: '<%= distPath %>',
                    ext: '.cmd.js'
                }]
            }
        }
	});

	grunt.loadNpmTasks('grunt-depconcat');
	grunt.loadNpmTasks('grunt-cmdwrap');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	

	grunt.registerTask('dist', ['copy', 'depconcat', 'uglify', 'cmdwrap']);
	grunt.registerTask('dev', ['watch']);
	
	grunt.registerTask('default', ['dist']);
}