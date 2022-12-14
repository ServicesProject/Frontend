import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Register } from 'src/app/models/register';
import { UserService } from 'src/app/services/user.service';
import { ValidatorPasswordService } from 'src/app/services/validator-password.service';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email:any;
  password:any
  repeatPassword:any
  rol:any
  public form!: FormGroup
  
  constructor(
    private registerService: UserService,
    private router: Router,
    private validatorPassword: ValidatorPasswordService
   
  ) { }

  async ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null,[Validators.required]),
      password: new FormControl(null,[Validators.required]),
      repeatPassword: new FormControl(null,[Validators.required]),
      rol: new FormControl(null,[Validators.required])
    }, this.validatorPassword.passwordMatch("password","repeatPassword")
)}

  register():void{
    const register = new Register(this.form.get('email')?.value,this.form.get('password')?.value, this.form.get('rol')?.value)
    this.registerService.register(register).subscribe(
      data => {
          this.router.navigateByUrl("iniciarSesion")

      },
      err => {
        console.log(err)
        
      }
    )
  }

  Onchange(event:any){
    console.log(event.target.value)
    this.rol = event.target.value
    this.form.patchValue({rol:event.target.value})
  }

}
