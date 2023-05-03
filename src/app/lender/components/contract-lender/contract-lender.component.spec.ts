import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractLenderComponent } from './contract-lender.component';

describe('ContractLenderComponent', () => {
  let component: ContractLenderComponent;
  let fixture: ComponentFixture<ContractLenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractLenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractLenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
