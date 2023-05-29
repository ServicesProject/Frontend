import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { InformationUserComponent } from '../components/information-user/information-user.component';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [InformationUserComponent],
      providers: [UserService , HttpClient],
    }).compileComponents();
    service = TestBed.inject(UserService);
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
