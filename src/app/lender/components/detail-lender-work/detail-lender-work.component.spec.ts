import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailLenderWorkComponent } from './detail-lender-work.component';

describe('DetailLenderWorkComponent', () => {
  let component: DetailLenderWorkComponent;
  let fixture: ComponentFixture<DetailLenderWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailLenderWorkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailLenderWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
