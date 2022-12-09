import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneoffActivitiesComponent } from './oneoff-activities.component';

describe('OneoffActivitiesComponent', () => {
  let component: OneoffActivitiesComponent;
  let fixture: ComponentFixture<OneoffActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneoffActivitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneoffActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
