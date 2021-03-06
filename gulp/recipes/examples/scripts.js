var gulp       = require('gulp');
var plumber    = require('gulp-plumber');
var header     = require('gulp-header');
var uglify     = require('gulp-uglify');
var rename     = require("gulp-rename");
// var notify     = require('gulp-notify');

// utils
// var pumped     = require('../../utils/pumped');

// config
var config     = require('../../config/examples');

module.exports = function () {
  return gulp.src(config.paths.scripts.src)
    .pipe(plumber())
    .pipe(header(config.banner))
    .pipe(gulp.dest(config.paths.scripts.dest))

    .pipe(uglify())
    .pipe(header(config.banner))
    .pipe(rename({
      extname: '.min.js'
    }))
    .pipe(gulp.dest(config.paths.scripts.dest));

    // .pipe(notify({
    //   message: pumped('JS Generated & Minified!'),
    //   onLast: true
    // }));
};
