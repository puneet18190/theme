var gulp        = require('gulp');
var plumber     = require('gulp-plumber');
var prettify    = require('gulp-prettify');

// config
var config     = require('../../config/html');


module.exports = function () {
  return gulp.src(config.paths.prettify)
    .pipe(plumber())
    .pipe(prettify(config.options.prettify))
    .pipe(gulp.dest(config.paths.dest));
};
