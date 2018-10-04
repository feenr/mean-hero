import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroListComponent } from './hero-list.component';
import { MatDividerModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatListModule, MatToolbarModule} from '@angular/material';
import { AppRoutingModule } from '../app-routing.module';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { FormsModule } from '@angular/forms';
import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {Observable, of} from 'rxjs';
import {HeroService} from '../hero.service';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';

describe('HeroListComponent', () => {
  let component: HeroListComponent;
  let fixture: ComponentFixture<HeroListComponent>;


  beforeEach(async(() => {
    const getHeroes = jasmine.createSpy('getHeroes', () => of({}));
    const heroService = {getHeroes: getHeroes};

    TestBed.configureTestingModule({
      declarations: [
        HeroListComponent,
        HeroDetailComponent
      ],
      imports: [
        MatIconModule,
        MatFormFieldModule,
        MatDividerModule,
        RouterModule,
        MatToolbarModule,
        MatListModule,
        MatGridListModule,
        FormsModule,
        RouterTestingModule,
        HttpClientModule
      ],
      providers: [
        // {provide: HeroService, useValue: heroService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
