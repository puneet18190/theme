var less         = require('gulp-less');
var gulp         = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var csscomb      = require('gulp-csscomb');
var minify       = require('gulp-minify-css');
var rename       = require("gulp-rename");
var plumber      = require('gulp-plumber');

// config
var config = require('../../config/fonts');

module.exports = function () {
  return gulp.src(config.paths.src)
    .pipe(plumber())
    .pipe(less(config.options.less))
    .pipe(autoprefixer(config.options.autoprefixer))
    .pipe(csscomb(config.options.csscomb))
    .pipe(gulp.dest(config.paths.dest))

    .pipe(minify(config.options.minify))
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(gulp.dest(config.paths.dest));
};
