import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LenderService } from './lender.service';

describe('LenderService', () => {
  let service: LenderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(LenderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
