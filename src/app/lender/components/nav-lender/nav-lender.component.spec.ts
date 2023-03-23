import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLenderComponent } from './nav-lender.component';

describe('NavLenderComponent', () => {
  let component: NavLenderComponent;
  let fixture: ComponentFixture<NavLenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavLenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavLenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
