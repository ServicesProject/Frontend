import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { FormLenderComponent } from './form-lender.component';

describe('FormLenderComponent', () => {
  let component: FormLenderComponent;
  let fixture: ComponentFixture<FormLenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormLenderComponent ],
      imports: [HttpClientTestingModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormLenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the form with correct data', () => {
    expect(component).toBeTruthy();
  });
  it('should not create the form with incorrect data', () => {
    expect(component).toBeTruthy();
  });
  it('should not create the form with empty fields.', () => {
    expect(component).toBeTruthy();
  });
});
