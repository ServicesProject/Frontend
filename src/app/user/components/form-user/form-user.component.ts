import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/user/models/user';
import { TokenService } from 'src/app/core/services/token.service';
import { UserService } from 'src/app/user/services/user.service';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {

  name: any;
  lastName: any;
  phone: any;
  description: any;
  gender: any;
  ci: any;
  birthdate: Date
  public form!: FormGroup

  constructor(
    private userService: UserService,
    private router: Router,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null,[Validators.required]),
      lastName: new FormControl(null,[Validators.required]),
      description: new FormControl(null,[Validators.required]),
      gender: new FormControl(null,[Validators.required]),
      ci: new FormControl(null,[Validators.required]),
      phone: new FormControl(null,[Validators.required]),
      birthdate: new FormControl(null,[Validators.required]),
    })
  }

  onCompleteInformation(): void {
    let info = this.tokenService.currentUserValue
    // verificar que todos los datos esten completos con el formGroup antes de hacer esto :) te amo
    if(info?.user.id)
    {
      const user = new User(this.name, this.lastName, this.phone, this.description, this.gender, info.user.email, info.user.rol,this.ci, this.birthdate )
      user.complete =true
      this.userService.update(info.user.id,user).subscribe(
        data => {          
          this.router.navigateByUrl('usuario')
        },
        err => {
          console.log("Error")
        }
      )
    }
  }

}
