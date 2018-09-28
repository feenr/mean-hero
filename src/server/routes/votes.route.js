import express from 'express';
import votesCtrl from '../controllers/votes.controller';
import config from '../config/config';

import jwt from 'express-jwt';
import jwks from 'jwks-rsa';
import paramValidation from "../config/param-validation";
import validate from "express-validation";
const router = express.Router();

const authCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: config.auth.jwksUri
  }),
  audience: config.auth.audience,
  issuer: config.auth.issuer,
  algorithms: ['RS256']
});


router.route('/')
  /** POST /api/heroes - Create new hero */
  .post(validate(paramValidation.updateVote), votesCtrl.post);

export default router;
