import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ValidatorPasswordService } from './validator-password.service';

describe('ValidatorPasswordService', () => {
  let service: ValidatorPasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ValidatorPasswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
