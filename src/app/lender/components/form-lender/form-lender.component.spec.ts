import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLenderComponent } from './form-lender.component';

describe('FormLenderComponent', () => {
  let component: FormLenderComponent;
  let fixture: ComponentFixture<FormLenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormLenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormLenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
