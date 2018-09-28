import Hero from '../models/hero.model';
import Vote from '../models/vote.model';

function post(req, res, next) {
  const vote = new Vote({
    heroId: req.body.heroId,
    voterId: req.body.voterId,
    value: req.body.value
  });
  // res.json(JSON.stringify(vote));
  Hero.get(vote.heroId)
    .then(openedHero => {
      openedHero.rating += vote.value;
      openedHero.save()
        .then(savedHero => res.json(savedHero))
        .catch(e => next(e));
  });
}


export default { post };
