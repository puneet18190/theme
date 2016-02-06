var gulp        = require('gulp');
var htmllint    = require('gulp-html');

// config
var config     = require('../../config/html');

module.exports = function () {
  return gulp.src(config.paths.lint)
    .pipe(htmllint(config.options.htmllint))
};
