import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Register } from 'src/app/core/models/register';
import { LenderService } from 'src/app/lender/services/lender.service';
import { UserService } from 'src/app/user/services/user.service';
import { ValidatorPasswordService } from 'src/app/core/services/validator-password.service';




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
    private lenderService: LenderService,
    private router: Router,
    private validatorPassword: ValidatorPasswordService
   
  ) { }



  async ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null,[Validators.required,Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/)]),
      repeatPassword: new FormControl(null,[Validators.required]),
      rol: new FormControl(null,[Validators.required])
    }, { validators: this.validatorPassword.passwordMatch('password', 'repeatPassword') }
)}

  async register(){
    const register = new Register(this.form.get('email')?.value,this.form.get('password')?.value, this.form.get('rol')?.value)
    this.registerService.register(register).subscribe(
      data => {
        if (register.rol === 'worker') {
          let lender = {email: register.email}
          this.lenderService.register(lender).subscribe()
        }
        else{
          this.router.navigateByUrl("iniciarSesion")
        }
      },
      err => {
        console.log(err)
        
      }
    )
    
  }

  Onchange(event:any){
    this.rol = event.target.value
    this.form.patchValue({rol:event.target.value})
  }

}
