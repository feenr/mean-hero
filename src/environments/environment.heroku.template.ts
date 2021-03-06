// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  serviceUri: '<%= HOST_NAME %>',
  hostName: '<%= HOST_NAME %>',
  auth: {
    clientID: '<%= AUTH_CLIENT_ID %>',
    domain: '<%= AUTH_DOMAIN %>', // e.g., you.auth0.com
    audience: '<%= AUTH_AUDIENCE %>', // e.g., http://localhost:3001
    issuer: '<%= AUTH_ISSUER %>',
    redirect: '<%= HOST_NAME %>/callback',
    scope: 'openid profile email',
    jwksUri: '<%= AUTH_JWKS_URI %>',
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
