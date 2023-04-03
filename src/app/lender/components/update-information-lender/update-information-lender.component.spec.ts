import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInformationLenderComponent } from './update-information-lender.component';

describe('UpdateInformationLenderComponent', () => {
  let component: UpdateInformationLenderComponent;
  let fixture: ComponentFixture<UpdateInformationLenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateInformationLenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateInformationLenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
