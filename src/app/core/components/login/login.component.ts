import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { UserService } from 'src/app/user/services/user.service';
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
  public showError = false;
  public form!: FormGroup

  constructor(
    private loginService: UserService,
    private router: Router
  ) { }

  async ngOnInit(){
    this.form = new FormGroup({
      email:new FormControl(null,[Validators.required]),
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
            if (decode.user.complete) {
              if(decode.user.rol == 'user')
              {
                
                this.router.navigateByUrl("usuario")
              }
              else
              {
                this.router.navigateByUrl("trabajador")
              }
            }
            else {
              if(decode.user.rol == 'user')
              {
                
                this.router.navigateByUrl("usuario/completarDatos")
              }
              else
              {
                this.router.navigateByUrl("trabajador/completarDatos")
              }
            }
          }else{
            console.log('login or password is incorrect')
            this.showError = true;
          }
        }
      )
    }
  }


}
