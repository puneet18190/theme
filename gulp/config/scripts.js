/**
 * Scripts
 * configuration
 * object
 *
 */
// config
var config = require('../../config.json');
var pkg = require('../../package.json');
var banner = '/*!\n' +
          ' * ' + pkg.name + ' v' + pkg.version + ' (' + pkg.homepage + ')\n' +
          ' * Copyright ' + new Date().getFullYear() + ' ' + pkg.author.name + '\n' +
          ' * Licensed under the ' + pkg.license + '\n' +
          ' */\n';

module.exports = {
	paths: {
    src: config.source.js,
    dest: config.destination.js,
    clean: config.destination.js,
	},
  banner: banner
};
