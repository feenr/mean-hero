import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarComponent } from './toolbar.component';
import {Component, NO_ERRORS_SCHEMA} from '@angular/core';
import {MatToolbarModule} from '@angular/material';
import {RouterTestingModule} from '@angular/router/testing';

@Component({
  selector: 'app-hero-search',
  template: '<div></div>'
})
class MockNavigationMenuComponent {}

@Component({
  selector: 'app-navigation-menu',
  template: '<div></div>'
})
class MockHeroSearchComponent {}

@Component({
  selector: 'app-profile-menu',
  template: '<div></div>'
})
class MockProfileMenuComponent {}

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;


  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [
        ToolbarComponent,
        MockNavigationMenuComponent,
        MockHeroSearchComponent,
        MockProfileMenuComponent
      ],
      imports: [
        MatToolbarModule,
        RouterTestingModule
      ],
      providers: [
      ],
      schemas: [
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
