// can use any of the configs found in `/test`
const config = require('./test/wdio.defaults').config;

exports.config = Object.assign(config, {

  capabilities: [
    { browserName: 'firefox', },
  ],

  services: [
    'static-server',
    'selenium-standalone',
  ],

});
