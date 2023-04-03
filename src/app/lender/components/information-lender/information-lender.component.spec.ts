import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationLenderComponent } from './information-lender.component';

describe('InformationLenderComponent', () => {
  let component: InformationLenderComponent;
  let fixture: ComponentFixture<InformationLenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationLenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationLenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
