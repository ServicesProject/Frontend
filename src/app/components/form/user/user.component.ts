import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
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
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const user = new User(this.name, this.lastName, this.phone, this.description, this.gender)
    this.userService.save(user).subscribe(
      data => {
        console.log("funciona prros")
      },
      err => {
        console.log(" no funciona valimos verga")
        
      }
    )
  }
  



}

