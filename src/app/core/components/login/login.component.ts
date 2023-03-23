import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  success = '';
  password: any
  public form!: FormGroup

  constructor(
    private loginService: UserService,
    private router: Router
  ) { }

  async ngOnInit(){
    this.form = new FormGroup({
      email:new FormControl(null,[Validators.required, , Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]),
      password:new FormControl(null,[Validators.required])
    })
    let token = await localStorage.getItem('token')
    if(token){
      this.router.navigateByUrl('/')
    }
  }

  login():void{
    if(!this.form.invalid){
      this.loginService.login(this.form.get('email')?.value,this.form.get('password')?.value).subscribe(
        data => {
          if(data != null){
            let decode: any = jwt_decode(data.token)
            decode = {...decode, token: data.token}
            localStorage.setItem("token", JSON.stringify(decode));
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
          }else{
            console.log('login or password is incorrect')
          }
        }
      )
    }
  }


}
