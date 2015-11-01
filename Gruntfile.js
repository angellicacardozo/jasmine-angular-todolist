module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		copy: {
			main: {
				expand: true, // required when using cwd
				cwd: 'bower_components/', // where to look when coping
				src: ['**'], // what to copy
				dest: 'public/scripts/lib/' // new destination
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-copy');
};