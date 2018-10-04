import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import {MatAutocompleteModule, MatFormFieldModule, MatGridListModule, MatMenuModule, MatToolbarModule} from '@angular/material';
import { FormControl, FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  template: '<div></div>'
})
class MockToolbarComponent {}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockToolbarComponent
      ],
      imports: [
        RouterTestingModule,
        MatGridListModule,
        MatToolbarModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        FormsModule,
        MatMenuModule
      ],
      providers: [

      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
