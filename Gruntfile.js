module.exports = function(grunt) {

	grunt.initConfig({

		// Import package manifest
		pkg: grunt.file.readJSON("text-rotator.jquery.json"),

		// Banner definitions
		meta: {
			banner: "/*\n" +
				" *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n" +
				" *  <%= pkg.description %>\n" +
				" *  <%= pkg.homepage %>\n" +
				" *\n" +
				" *  Made by <%= pkg.author.name %>\n" +
				" *  Under <%= pkg.licenses[0].type %> License\n" +
				" */\n"
		},

		// Concat definitions
		// Don't think we're using this ^unr
		concat: {
			dist: {
				src: ["src/jquery.text-rotator.js"],
				dest: "dist/jquery.text-rotator.js"
			},
			options: {
				banner: "<%= meta.banner %>"
			}
		},

		// Lint definitions
		jshint: {
			files: ["src/jquery.text-rotator.js"],
			options: {
				jshintrc: ".jshintrc"
			}
		},

		// Minify definitions
		uglify: {
			options: {
				global_defs: {
					"DEBUG": false
				},
				dead_code: true
			},
			my_target: {
				src: ["dist/jquery.text-rotator.js"],
				dest: "dist/jquery.text-rotator.min.js"
			}
		},

		// CoffeeScript compilation
		coffee: {
			compile: {
				files: {
					"src/jquery.text-rotator.js": "src/jquery.text-rotator.coffee"
				}
			}
		}

	});

	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-coffee");

	grunt.registerTask("default", ["coffee", "jshint", "concat", "uglify"]);

};
