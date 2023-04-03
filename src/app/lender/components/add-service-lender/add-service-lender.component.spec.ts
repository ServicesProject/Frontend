import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServiceLenderComponent } from './add-service-lender.component';

describe('AddServiceLenderComponent', () => {
  let component: AddServiceLenderComponent;
  let fixture: ComponentFixture<AddServiceLenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddServiceLenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddServiceLenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
