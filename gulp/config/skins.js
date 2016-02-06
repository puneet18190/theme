// config
var config = require('../../config.json');
var styles = require('./styles');

styles.options.less.paths = [
  config.source.skins + '/less',
  config.source.less,
  config.bootstrap.less,
  config.bootstrap.mixins
];

module.exports = {
  paths: {
    src: [config.source.skins  + '/*.less'],
    dest: config.destination.skins,
    clean: config.destination.skins + '/**/*.css'
  },
  options: styles.options,
  banner: styles.banner
};
