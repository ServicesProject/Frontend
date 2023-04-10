import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatedEmailComponent } from './validated-email.component';

describe('ValidatedEmailComponent', () => {
  let component: ValidatedEmailComponent;
  let fixture: ComponentFixture<ValidatedEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidatedEmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidatedEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
