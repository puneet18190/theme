var del = require('del');

// config
var config = require('../../config/scripts');


module.exports = function (done) {
  del(config.paths.clean, { force: true })
    .then(function () { done(); });
};
