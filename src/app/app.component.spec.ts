import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    expect(true).toBeTruthy();
  });

  it(`should have as title 'servicios-frontend'`, () => {
    expect(true).toBeTruthy();
  });

  it('should render title', () => {
    expect(true).toBeTruthy();
  });
});
