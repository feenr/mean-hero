import Joi from 'joi';

// require and configure dotenv, will load vars in .env in PROCESS.ENV
require('dotenv').config();

const envVarsSchema = Joi.object({
  NODE_ENV: Joi.string()
    .allow(['development', 'production', 'test', 'provision'])
    .default('development'),
  SERVER_PORT: Joi.number()
    .default(4040),
  MONGOOSE_DEBUG: Joi.boolean()
    .when('NODE_ENV', {
      is: Joi.string().equal('development'),
      then: Joi.boolean().default(true),
      otherwise: Joi.boolean().default(false)
    }),
  JWT_SECRET: Joi.string()
    .description('JWT Secret required to sign')
    .default('0a6b944d-d2fb-46fc-a85e-0295c986cd9f'),
  MONGODB_URI: Joi.string()
    .description('Mongo DB host url')
    .default('mongodb://localhost:27017/mean'),
  AUTH_AUDIENCE: Joi.string()
    .default('http://localhost:3001'),
  AUTH_ISSUER: Joi.string()
    .default('https://feenr.auth0.com/'),
  AUTH_JWKS_URI: Joi.string()
    .default('https://feenr.auth0.com/.well-known/jwks.json'),
}).unknown()
  .required();


const { error, value: envVars } = Joi.validate(process.env, envVarsSchema);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  env: envVars.NODE_ENV,
  port: envVars.SERVER_PORT,
  mongooseDebug: envVars.MONGOOSE_DEBUG,
  jwtSecret: envVars.JWT_SECRET,
  auth : {
    issuer: envVars.AUTH_ISSUER,
    audience: envVars.AUTH_AUDIENCE,
    jwksUri: envVars.AUTH_JWKS_URI
  },
  mongo: {
    host: envVars.MONGODB_URI,
  }
};
export default config;
