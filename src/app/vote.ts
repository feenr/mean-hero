export class Vote {

  heroId;
  voterId;
  value;

  constructor(heroId, voterId, value) {
    this.heroId = heroId;
    this.voterId = voterId;
    this.value = value;
  }
}
