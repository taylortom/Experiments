module.exports = function(grunt) {
    grunt.initConfig({
        jshint: {
          src:['src/core/js/**/*.js', 'src/core/js/*.js', 'src/spoor/*.js'],
          build:['build/core/js/*.js', 'build/spoor/*.js']
        },
        concat: {
          options: {
            separator: ''
          },
          views:{
            src: ['src/core/js/views/*.js'],
            dest: 'build/core/js/views.js'
          },
          models:{
            src: ['src/core/js/templates/templates.js','src/core/js/router.js','src/core/js/models.js','src/core/js/collections.js'],
            dest: 'build/core/js/adapt.js'
          },
          spoor:{
            src: ['src/spoor/SCORM_API_wrapper.js','src/spoor/spoor.js'],
            dest: 'build/spoor/spoor.js'  
          }
        },
        uglify: {
          views:{
            src: ['build/core/js/views.js'],
            dest: 'build/core/js/views.js'  
          },
          models:{
            src: ['build/core/js/adapt.js'],
            dest: 'build/core/js/adapt.js'  
          },
          spoor:{
            src:['build/spoor/spoor.js'],
            dest:'build/spoor/spoor.js'
          }
        },
        jsonlint: {
          course:{
            src: ['course/course.json'] 
          }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jsonlint');
//    grunt.registerTask('default', ['concat:views', 'concat:models', 'uglify:views', 'uglify:models']);
    grunt.registerTask('default', ['jsonlint:course']);
};
                
