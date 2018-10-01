import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import {AuthService} from '../auth/auth.service';
import {VotesService} from '../votes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService, protected authService: AuthService, private voteService: VotesService) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

  voteUp(hero: Hero): void {
    this.voteService.performVote(hero.id, this.authService.getProfile().given_name, 1);
    hero.rating++;
    this.sortHeroes();
  }

  voteDown(hero: Hero): void {
    this.voteService.performVote(hero.id, this.authService.getProfile().given_name, -1);
    hero.rating--;
    this.sortHeroes();
  }

  sortHeroes(): void {
    this.heroes.sort((hero1, hero2) => {
      if (hero1.rating > hero2.rating) {
        return 1;
      }
      if (hero1.rating < hero2.rating) {
        return -1;
      }
      return 0;
    });
  }
}
