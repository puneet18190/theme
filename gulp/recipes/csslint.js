var gulp         = require('gulp');
var csslint      = require('gulp-csslint');

// config
var config = require('../config/csslint');

module.exports = function () {
  return gulp.src(config.paths.css)
    .pipe(csslint(config.paths.csslintrc))
    .pipe(csslint.reporter());
};
