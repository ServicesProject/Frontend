import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapLenderComponent } from './map-lender.component';

describe('MapLenderComponent', () => {
  let component: MapLenderComponent;
  let fixture: ComponentFixture<MapLenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapLenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapLenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
