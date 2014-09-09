'use strict';
module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-mocha');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    clean: {
      dev: {
        src: ['build/']
      }
    },

    copy: {
      dev: {
        expand: true,
        cwd: 'app/',
        src: ['*.html', '*.css', 'views/**/*.html'],
        dest: 'build/',
        filter: 'isFile'
      }
    },

    browserify: {
      dev: {
        options: {
          transform: ['debowerify', 'hbsify'],
          debug: true
        },
        src: ['app/js/**/*.js'],
        dest: 'build/bundle.js'
      },
      test: {
        options: {
          transform: ['hbsify', 'debowerify'],
          debug: true
        },
        src: ['test/mocha/backbone/**/*.js'],
        dest: 'test/testbundle.js'
      },
      angulartest: {
        options: {
          transform: ['debowerify'],
          debug: true
        },
        src: ['test/angular/**/*test.js'],
        dest: 'test/angular-testbundle.js'
      }
    },

    mocha: {
      backbonetest: {
        src: ['test/test.html'],
        options: {
          run: true
        }
      }
    },

    simplemocha: {
      all: {
        src: ['test/mocha/api/**/*.js']
      }
    },

    karma: {
      unit: {
        configFile: 'karma.conf.js'
      }
    },

    watch: {
      angulartest: {
        files: ['app/js/**/*.js', 'app/**/*.html'],
        tasks: ['browserify:angulartest', 'karma:unit'],
        options: {
          spawn: false
        }
      }
    }
  });
  grunt.registerTask('build:dev', ['clean:dev', 'browserify:dev', 'copy:dev']);
  grunt.registerTask('backbone:test', ['browserify:test', 'mocha:backbonetest']);
  grunt.registerTask('angulartest', ['browserify:angulartest', 'karma:unit', 'watch:angulartest']);
  grunt.registerTask('test', ['backbone:test', 'simplemocha']);
  grunt.registerTask('default', ['buildtest']);
  grunt.registerTask('buildtest', ['test', 'build:dev']);
};
