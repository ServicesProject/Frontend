import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { WorkService } from './work.service';

describe('WorkService', () => {
  let service: WorkService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(WorkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
