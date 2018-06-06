const fs = require('fs');

function isDeployment() {
  return (process.argv[2] === 'deploy');
}

function deployEnvironment() {
  if (isDeployment() && process.argv[3] === 'production') {
    return 'production';
  }
}

function getEnvironment() {
  const env = process.env;
  return env.DEPLOY_TARGET || env.EMBER_ENV || deployEnvironment() || 'development';
}

function dotEnvPostfix() {
  if (!isDeployment()) {
    return "";
  }
  return `.deploy.${getEnvironment()}`;
}

const dotEnvFile= `./.env${dotEnvPostfix()}`;

if (fs.existsSync(dotEnvFile)) {
  console.info(`Using dotenv file: ${dotEnvFile}`);
} else  {
  console.warn(`dot-env file not found: ${dotEnvFile}, assuming env vars are passed manually`);
}

module.exports = function(env) {
  return {
    clientAllowedKeys : [
      'JURIDICALS_API',
      'AUTHORIZE_API',
      'PHYSICALS_API',
      'PHYSICALS_ADDITIONAL_API',
    ],
    path : dotEnvFile,
  }
};
