// config
var config = require('../../config.json');
var styles = require('./styles');

module.exports = {
  paths: {
    src: [config.source.vendor  + '/*/*.less', '!' + config.source.vendor  + '/*/settings.less'],
    dest: config.destination.vendor,
    clean: config.destination.vendor + '/*/*.css',
  },
  banner: styles.banner,
  options: styles.options
};

