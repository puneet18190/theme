var gulp        = require('gulp');
var bootlint    = require('gulp-bootlint');

// config
var config     = require('../../config/html');

module.exports = function () {
  return gulp.src(config.paths.lint)
    .pipe(bootlint(config.options.bootlint))
};
