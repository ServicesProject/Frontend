import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniformActivitiesComponent } from './uniform-activities.component';

describe('UniformActivitiesComponent', () => {
  let component: UniformActivitiesComponent;
  let fixture: ComponentFixture<UniformActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniformActivitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniformActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
