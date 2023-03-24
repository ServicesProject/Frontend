import { TestBed } from '@angular/core/testing';

import { ValidatorPasswordService } from './validator-password.service';

describe('ValidatorPasswordService', () => {
  let service: ValidatorPasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidatorPasswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
