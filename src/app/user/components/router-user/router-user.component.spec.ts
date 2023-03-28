import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterUserComponent } from './router-user.component';

describe('RouterUserComponent', () => {
  let component: RouterUserComponent;
  let fixture: ComponentFixture<RouterUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouterUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
