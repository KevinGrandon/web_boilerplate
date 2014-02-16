module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {},
			build: {
				src: 'src/<%= pkg.name %>.js',
				dest: 'build/<%= pkg.name %>.min.js'
			}
		}
	});

    grunt.registerTask('bootstrap', 'updates bootstrap from node_modules', function() {
        var exec = require('child_process').exec;
        var cb = this.async();

        exec('rm -rf css/bootstrap && cp -R node_modules/bootstrap css/bootstrap', {cwd: './'}, function(err, stdout, stderr) {
            console.log(stdout);
            cb();
        });
    });


	grunt.registerTask('default', ['bootstrap']);
};
