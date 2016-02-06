var del = require('del');

// config
var config = require('../../config/styles');

module.exports = function (done) {
  del(config.paths.clean, { force: true })
    .then(function () { done(); });
};
