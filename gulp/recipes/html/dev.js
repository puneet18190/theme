var gulp        = require('gulp');
var hb          = require('gulp-hb');
var frontMatter = require('gulp-front-matter');
var plumber     = require('gulp-plumber');

// config
var config     = require('../../config/html');

module.exports = function () {
  return gulp.src(config.paths.src)
    .pipe(plumber())
    .pipe(frontMatter())
    .pipe(hb(config.options.hb))
    .pipe(gulp.dest(config.paths.dest));
};
