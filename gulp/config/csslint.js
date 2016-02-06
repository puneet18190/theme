// config
var config = require('../../config.json');


module.exports = {
  paths: {
    csslintrc: config.source.less + '/.csslintrc',
    css: [config.destination.css + '/**/*.css', '!' + config.destination.css + '/**/*.min.css'],
    skins: [config.destination.skins + '/**/*.css', '!' + config.destination.skins + '/**/*.min.css'],
    examples: [config.destination.examples + '/css/**/*.css', '!' + config.destination.examples + '/css/**/*.min.css'],
    fonts: [config.destination.fonts + '/**/*.css', '!' + config.destination.fonts + '/**/*.min.css'],
    vendor: [config.destination.vendor + '/**/*.css', '!' + config.destination.vendor + '/**/*.min.css']
  }
};
