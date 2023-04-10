import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/user/services/user.service';

@Component({
  selector: 'app-validated-email',
  templateUrl: './validated-email.component.html',
  styleUrls: ['./validated-email.component.css']
})
export class ValidatedEmailComponent implements OnInit {

  email: string

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  async ngOnInit() {
    this.email =  this.route.snapshot.queryParamMap.get('email');
    console.log(this.email);
    this.userService.validatedEmail(this.email).subscribe()
    
  }

  principalPage(email){
    
    
  }

  verifiedAccount(){
    this.router.navigateByUrl("iniciarSesion")
  }

  


}
