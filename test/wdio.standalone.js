const path = require('path');

let defaults = require(path.join(__dirname, 'wdio.defaults'));

exports.config = Object.assign(defaults.config, {

  capabilities: [
    { browserName: 'firefox', },
  ],

  services: [
    'static-server',
    'selenium-standalone',
  ],

});
