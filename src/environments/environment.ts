// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  serviceUri: 'http://localhost:4040',
  hostName: 'http://localhost:4200',
  auth: {
    clientID: 'cJ8exYcsUTDWpSP3e3d54IVrrkEPpAWb',
    domain: 'feenr.auth0.com', // e.g., you.auth0.com
    audience: 'http://localhost:3001', // e.g., http://localhost:3001
    issuer: 'https://feenr.auth0.com/',
    redirect: 'http://localhost:4200/callback',
    scope: 'openid profile email',
    jwksUri: 'https://feenr.auth0.com/.well-known/jwks.json',
    algorithms: ['RS256']
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
