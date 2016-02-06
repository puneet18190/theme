var gulp       = require('gulp');
var plumber    = require('gulp-plumber');
var header     = require('gulp-header');
var uglify     = require('gulp-uglify');
var rename     = require("gulp-rename");
var concat     = require('gulp-concat');

// config
var config     = require('../../config/scripts');

var components = require('../../../components.json');
var componentsSrc = [];

for(var component in components) {
  if(components[component]){
    componentsSrc.push(config.paths.src + '/components/' + component + '.js');
  }
}

module.exports = function () {
  return gulp.src(componentsSrc)
    .pipe(plumber())
    .pipe(concat('components.js'))
    .pipe(header(config.banner))
    .pipe(gulp.dest(config.paths.dest))

    .pipe(uglify())
    .pipe(header(config.banner))
    .pipe(rename({
      extname: '.min.js'
    }))
    .pipe(gulp.dest(config.paths.dest));

};
