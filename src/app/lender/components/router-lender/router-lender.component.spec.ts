import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterLenderComponent } from './router-lender.component';

describe('RouterLenderComponent', () => {
  let component: RouterLenderComponent;
  let fixture: ComponentFixture<RouterLenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterLenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouterLenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
