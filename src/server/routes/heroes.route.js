import express from 'express';
import validate from 'express-validation';
import paramValidation from '../config/param-validation';
import heroesCtrl from '../controllers/heroes.controller';

const router = express.Router();

router.route('/')
  /** GET /api/hero-list - Get list of hero-list */
  .get(heroesCtrl.list)

  /** POST /api/hero-list - Create new hero */
  .post(validate(paramValidation.createHero), heroesCtrl.create);

router.route('/:heroId')
  /** GET /api/hero-list/:heroId - Get hero */
  .get(heroesCtrl.get)

  /** PUT /api/hero-list/:heroId - Update hero */
  .put(validate(paramValidation.updateHero), heroesCtrl.update)

  /** DELETE /api/hero-list/:heroId - Delete hero */
  .delete(heroesCtrl.remove);

/** Load hero when API with heroId route parameter is hit */
router.param('heroId', heroesCtrl.load);

export default router;
