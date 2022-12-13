import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login';

import { UserService } from 'src/app/services/user.service';
import jwt_decode from "jwt-decode";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: any
  password: any

  constructor(
    private loginService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login():void{
    const login = new Login(this.email, this.password)
    this.loginService.login(login.email, login.password).subscribe(
      data => {
        console.log(data);
        
        let decode: any = jwt_decode(data.token)
        decode = {...decode, token: data.token}
        localStorage.setItem("datas", JSON.stringify(decode));
        /*let info = JSON.parse(localStorage.getItem("datas")  || '{}');*/
        console.log(decode)
        if (decode.user.complete) {
          if(decode.user.rol == 'user')
          {
            
            this.router.navigateByUrl("inicio/usuario")
          }
          else
          {
            this.router.navigateByUrl("inicio/trabajador")
          }
        }
        else {
          if(decode.user.rol == 'user')
          {
            
            this.router.navigateByUrl("informacion/usuario")
          }
          else
          {
            this.router.navigateByUrl("informacion/trabajador")
          }
        }
      },
      err => {
        console.log(err)
        
      }
    )
  }


}
