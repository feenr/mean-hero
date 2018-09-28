import express from 'express';
import heroesRoutes from './heroes.route';
import votesRoutes from './votes.route';

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>{
    //res.header();
    res.send('OK')
  }
);
router.use('/heroes', heroesRoutes);
router.use('/votes', votesRoutes);

export default router;
