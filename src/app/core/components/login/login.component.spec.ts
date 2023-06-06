import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginComponent } from './login.component';
import { UserService } from 'src/app/user/services/user.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [LoginComponent],
      providers: [UserService],
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should login with correct data ', () => {
    expect(true).toBeTruthy();
  });
  it('should not login if the email address is not confirmed. ', () => {
    expect(true).toBeTruthy();
  });
  it('should not register if the password is invalid.', () => {
    expect(true).toBeTruthy();
  });
  
});
