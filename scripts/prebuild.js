#!/usr/bin/env node
// Adopted from  https://github.com/k10der/sample-chat-client-angular/
const fs = require('fs');
const path = require('path');

const ejs = require('ejs');

const environmentFilesDirectory = path.join(__dirname, '../src/environments');
const targetEnvironmentTemplateFileName = 'environment.heroku.template.ts';
const targetEnvironmentFileName = 'environment.ts';

const defaultEnvValues = {
  HOST_NAME: 'http://localhost:4040',
  AUTH_CLIENT_ID : 'cJ8exYcsUTDWpSP3e3d54IVrrkEPpAWb',
  AUTH_DOMAIN : 'feenr.auth0.com',
  AUTH_AUDIENCE : 'http://localhost:3001',
  AUTH_ISSUER : 'https://feenr.auth0.com/',
  AUTH_JWKS_URI : 'https://feenr.auth0.com/.well-known/jwks.json'
};

// Load template file
const environmentTemplate = fs.readFileSync(
  path.join(environmentFilesDirectory, targetEnvironmentTemplateFileName),
  {encoding: 'utf-8'}
);

// Generate output data
const output = ejs.render(environmentTemplate, Object.assign({}, defaultEnvValues, process.env));
// Write environment file
fs.writeFileSync(path.join(environmentFilesDirectory, targetEnvironmentFileName), output);

process.exit(0);
