
// config
var config = require('../../config.json');
var styles = require('./styles');

module.exports = {
  paths: {
    src: [config.source.fonts  + '/*/*.less', '!' + config.source.fonts  + '/*/_*.less'],
    dest: config.destination.fonts,
    clean: config.destination.fonts + '/*/*.css'
  },
  banner: styles.banner,
  options: styles.options
};
