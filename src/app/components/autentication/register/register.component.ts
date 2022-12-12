import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from 'src/app/models/register';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email:any;
  password:any
  rol:any
  constructor(
    private registerService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }

  register():void{
    const register = new Register(this.email, this.password, this.rol)
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
  }

}
