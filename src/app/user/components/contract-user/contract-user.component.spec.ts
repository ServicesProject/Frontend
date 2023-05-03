import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractUserComponent } from './contract-user.component';

describe('ContractUserComponent', () => {
  let component: ContractUserComponent;
  let fixture: ComponentFixture<ContractUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
