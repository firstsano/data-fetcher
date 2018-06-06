/* eslint-env node */
'use strict';

module.exports = function(deployTarget) {
  let ENV = {
    build: {}
  };

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';

    ENV['simply-ssh'] = {
      connection: {
        host: process.env.SSH_HOST,
        port: process.env.SSH_PORT,
        username: process.env.SSH_USER,
        privateKey: process.env.SSH_KEY
      },
      dir: '/opt/www/spec',
      keep: 5
    };
  }

  return ENV;
};
