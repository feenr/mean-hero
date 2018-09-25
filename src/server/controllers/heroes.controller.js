import Hero from '../models/hero.model';

function load(req, res, next, id) {
  Hero.get(id)
    .then((hero) => {
      req.hero = hero; // eslint-disable-line no-param-reassign
      return next();
    })
    .catch(e => next(e));
}

function get(req, res) {
  return res.json(req.hero);
}

function create(req, res, next) {
  const hero = new Hero({
    name: req.body.name,
  });

  hero.save()
    .then(savedHero => res.json(savedHero))
    .catch(e => next(e));
}

function update(req, res, next) {
  const hero = req.hero;
  hero.username = req.body.name;
  hero.rating = req.body.rating;
  hero.save()
    .then(savedHero => res.json(savedHero))
    .catch(e => next(e));
}

function list(req, res, next) {
  const { limit = 50, skip = 0, name, sortBy } = req.query;

  let sortByArgs;
  if(sortBy){
    let sortByProp = sortBy.split(":")[0];
    let sortByAsc;
    sortByArgs = {};
    if(sortBy.split(":")[1] === 'asc'){
      sortByAsc = 1;
    } else {
      sortByAsc = -1;
    }
    sortByArgs[sortByProp] = sortByAsc;
  }
  Hero.list({ limit, skip, name, sortByArgs})
    .then(heroes => res.json(heroes))
    .catch(e => next(e));
}

function remove(req, res, next) {
  req.hero.remove()
    .then(()=> res.json({status: 'OK'}))
    .catch(e => next(e));
}

export default { load, get, create, update, list, remove };
