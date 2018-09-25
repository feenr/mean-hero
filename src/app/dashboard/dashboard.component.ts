import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  topHeroes: Hero[] = [];
  newHeroes: Hero[] = [];
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getTopHeroes();
    this.getNewHeroes();
  }

  getTopHeroes(): void {
    this.heroService.getHeroesRatingDesc()
      .subscribe(heroes => this.topHeroes = heroes.slice(0, 4));
  }
  getNewHeroes(): void {
    this.heroService.getHeroesCreateDateDesc()
      .subscribe(heroes => this.newHeroes = heroes.slice(0, 4));
  }
}
