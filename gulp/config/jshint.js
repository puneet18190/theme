// config
var config = require('../../config.json');


module.exports = {
  paths: {
    js: [config.destination.js + '/**/*.js', '!' + config.destination.js + '/**/*.min.js'],
    examples: config.destination.examples + '/js/**/*.js'
  },
  options: {
    "asi"      : true,
    "browser"  : true,
    "eqeqeq"   : false,
    "eqnull"   : true,
    "es3"      : true,
    "expr"     : true,
    "jquery"   : true,
    "latedef"  : true,
    "laxbreak" : true,
    "nonbsp"   : true,
    "strict"   : true,
    "undef"    : true,
    "unused"   : true
  }
};
