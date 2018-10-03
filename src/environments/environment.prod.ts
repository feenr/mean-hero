export const environment = {
  production: true,
  serviceUri: 'http://localhost:4040',
  hostName: 'http://localhost:4040',
  auth: {
    clientID: 'cJ8exYcsUTDWpSP3e3d54IVrrkEPpAWb',
    domain: 'feenr.auth0.com', // e.g., you.auth0.com
    audience: 'http://localhost:3001', // e.g., http://localhost:3001
    issuer: 'https://feenr.auth0.com/',
    redirect: 'http://localhost:4040/callback',
    scope: 'openid profile email',
    jwksUri: 'https://feenr.auth0.com/.well-known/jwks.json',
    algorithms: ['RS256']
  }
};
