import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationWorkAndUserComponent } from './information-work-and-user.component';

describe('InformationWorkAndUserComponent', () => {
  let component: InformationWorkAndUserComponent;
  let fixture: ComponentFixture<InformationWorkAndUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationWorkAndUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationWorkAndUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
