import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login';

import { UserService } from 'src/app/services/user.service';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: any
  password: any

  constructor(
    private loginService: UserService
  ) { }

  ngOnInit(): void {
  }

  login():void{
    const login = new Login(this.email, this.password)
    this.loginService.login(login.email, login.password).subscribe(
      data => {
        let decode: any = jwt_decode(data.token)
        console.log(decode)
        /*if(this.rol == "user"){
          this.router.navigateByUrl("informacion/usuario")
        }
        else
        {
          this.router.navigateByUrl("informacion/trabajador")
        }*/
      },
      err => {
        console.log(err)
        
      }
    )
  }


}
