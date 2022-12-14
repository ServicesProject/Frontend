import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { TokenService } from 'src/app/services/token.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  name: any;
  lastName: any;
  phone: any;
  description: any;
  gender: any;

  constructor(
    private userService: UserService,
    private router: Router,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
  }

  onCompleteInformation(): void {
    let info = this.tokenService.currentUserValue
    // verificar que todos los datos esten completos con el formGroup antes de hacer esto :) te amo
    if(info?.user.id)
    {
      const user = new User(this.name, this.lastName, this.phone, this.description, this.gender, info.user.email, info.user.rol )
      user.complete =true
      this.userService.update(info.user.id,user).subscribe(
        data => {          
          this.router.navigateByUrl('inicio/usuario')
        },
        err => {
          console.log(" no funciona")
          
        }
      )
    }
  }
  



}

