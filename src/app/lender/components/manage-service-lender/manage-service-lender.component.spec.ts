import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageServiceLenderComponent } from './manage-service-lender.component';

describe('ManageServiceLenderComponent', () => {
  let component: ManageServiceLenderComponent;
  let fixture: ComponentFixture<ManageServiceLenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageServiceLenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageServiceLenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
