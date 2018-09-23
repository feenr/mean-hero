import express from 'express';
import validate from 'express-validation';
import paramValidation from '../config/param-validation';
import heroesCtrl from '../controllers/heroes.controller';

import jwt from 'express-jwt';
import jwks from 'jwks-rsa';
const router = express.Router();

const authCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://feenr.auth0.com/.well-known/jwks.json"
  }),
  // This is the identifier we set when we created the API
  audience: 'http://localhost:3001',
  issuer: "https://feenr.auth0.com/", // e.g., you.auth0.com
  algorithms: ['RS256']
});


router.route('/')
  /** GET /api/heroes - Get list of hero-list */
  .get(heroesCtrl.list)

  /** POST /api/heroes - Create new hero */
  .post(authCheck, validate(paramValidation.createHero), heroesCtrl.create);

router.route('/:heroId')
  /** GET /api/heroes/:heroId - Get hero */
  .get(heroesCtrl.get)

  /** PUT /api/heroes/:heroId - Update hero */
  .put(authCheck, validate(paramValidation.updateHero), heroesCtrl.update)

  /** DELETE /api/heroes/:heroId - Delete hero */
  .delete(authCheck, heroesCtrl.remove);

/** Load hero when API with heroId route parameter is hit */
router.param('heroId', heroesCtrl.load);

export default router;
