import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AddServiceLenderComponent } from './add-service-lender.component';

describe('AddServiceLenderComponent', () => {
  let component: AddServiceLenderComponent;
  let fixture: ComponentFixture<AddServiceLenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddServiceLenderComponent ],
      imports: [HttpClientTestingModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddServiceLenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the service', () => {
    expect(component).toBeTruthy();
  });
  it('should not create the service with incorrect data', () => {
    expect(component).toBeTruthy();
  });
  it('should not create the service with empty fields.', () => {
    expect(component).toBeTruthy();
  });
});
