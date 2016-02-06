
// config
var config = require('../../config.json');
var styles = require('./styles');

module.exports =  {
  paths: {
    styles: {
      src: config.source.examples  + '/less/**/*.less',
      dest: config.destination.examples + '/css'
    },
    scripts: {
      src: config.source.examples  + '/js/**/*.js',
      dest: config.destination.examples + '/js'
    },
    clean: [config.destination.examples +'/css/', config.destination.examples +'/js/']
  },
  banner: styles.banner,
  options: styles.options
};
