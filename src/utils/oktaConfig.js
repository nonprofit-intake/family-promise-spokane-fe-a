var path = require('path');
var dotEnvPath = path.resolve('./.env');
require('dotenv').config({ path: dotEnvPath });
const config = {
  issuer: process.env.REACT_APP_OKTA_ISSUER_URI,
  redirectUri: window.location.origin + '/implicit/callback',
  clientId: process.env.REACT_APP_CLIENT_ID,
  pkce: true,
  scopes: ['openid', 'email', 'profile'],
};

export { config };
