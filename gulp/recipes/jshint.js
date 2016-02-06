var gulp         = require('gulp');
var jshint       = require('gulp-jshint');

// config
var config = require('../config/jshint');

module.exports = function () {
  return gulp.src(config.paths.js)
    .pipe(jshint(config.options))
    .pipe(jshint.reporter('default'))
};
